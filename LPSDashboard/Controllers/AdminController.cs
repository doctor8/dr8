using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.IO;
using System.Data;
using System.Data.SqlClient;
using LPSDashboard.Models;
using System.Web.Mvc;
using LPSDashboardDAL;
namespace LPSDashboard.Controllers
{
    public class AdminController : Controller
    {
        // GET: Admin
        DBHelper dao;
        #region Listdoctor(Rasika)
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Doctor()
        {
            string _regID = Convert.ToString(Session["regid"]);
            if (_regID == "" || _regID == null)
            {
                return RedirectToAction("Index", "Home");
            }
            return View();
        }
        public JsonResult GetAllDoctorforVerification()
        {
            dao = new DBHelper();
            DataTable dt = new DataTable();
            SqlCommand cmd = new SqlCommand("SpDoctor", dao.GetConnection());
            //con.Open();
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@iHandle", "GetAllDoctorforVerification");
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            dao = null;
            return Json(Newtonsoft.Json.JsonConvert.SerializeObject(dt), JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetAllRegistrationDetailsForSingleUser(string Username, string Password)
        {
            Session["regid"] = 1;
            return Json(Newtonsoft.Json.JsonConvert.SerializeObject(1), JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetDoctorByid(Int64 DocId)
        {
            dao = new DBHelper();
            DataTable dt = new DataTable();
            SqlCommand cmd = new SqlCommand("SpDoctor", dao.GetConnection());
            //con.Open();
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@iHandle", "getDoctorByDocid");
            cmd.Parameters.AddWithValue("@iDocId", DocId);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            dao = null;
            return Json(Newtonsoft.Json.JsonConvert.SerializeObject(dt), JsonRequestBehavior.AllowGet);
        }
        public ActionResult DoctorProfile(Int64? docid)
        {
            string _regID = Convert.ToString(Session["regid"]);
            if (_regID == "" || _regID == null)
            {
                return RedirectToAction("Index", "Home");
            }
            ViewData["docid"] = docid;
            return View();
        }
        
        public JsonResult UpdateDoctorForVerification(Int64 DocId)
        {
            dao = new DBHelper();
            SqlCommand cmd = new SqlCommand("SpDoctor", dao.GetConnection());
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@iHandle", "UpdateDoctorForVerification");
            cmd.Parameters.AddWithValue("@iDocId", DocId);
            var ret = cmd.ExecuteNonQuery();
            dao = null;
            if (ret > 0)
            {
                return Json(ret, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(ret, JsonRequestBehavior.AllowGet);

            }

        }
        public ActionResult logout()
        {
            Session["regid"] = null;
            Session.Abandon();
            return RedirectToAction("Index", "Home");
        }
        #endregion


        #region EditDoc(girish)

        public ActionResult VerifiedDoc()
        {
            string _regID = Convert.ToString(Session["regid"]);
            if (_regID == "" || _regID == null)
            {
                return RedirectToAction("Index", "Home");
            }
            return View();
        }

        public JsonResult GetAllVerifiedDoc()
        {
            dao = new DBHelper();
            DataTable dt = new DataTable();
            SqlCommand cmd = new SqlCommand("SpDoctor", dao.GetConnection());
            //con.Open();
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@iHandle", "GetAllDoctorVerified");
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            dao = null;
            return Json(Newtonsoft.Json.JsonConvert.SerializeObject(dt), JsonRequestBehavior.AllowGet);
        }
        public ActionResult EditDoc(Int64? docid)
        {
            string _regID = Convert.ToString(Session["regid"]);
            if (_regID == "" || _regID == null)
            {
                return RedirectToAction("Index", "Home");
            }
            ViewData["docid"] = docid;
            return View();
        }

        public JsonResult GetDocByid(Int64 DocId)
        {
            dao = new DBHelper();
            DataTable dt = new DataTable();
            SqlCommand cmd = new SqlCommand("SpDoctor", dao.GetConnection());
            //con.Open();
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@iHandle", "getDoctorByDocid");
            cmd.Parameters.AddWithValue("@iDocId", DocId);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            da.Fill(dt);
            dao = null;
            return Json(Newtonsoft.Json.JsonConvert.SerializeObject(dt), JsonRequestBehavior.AllowGet);
        }

        public JsonResult UpdateDoc(DocDetail ObjDoc)
        {
            dao = new DBHelper();
            SqlCommand cmd = new SqlCommand("SpDoctor", dao.GetConnection());
            //cmd.Connection = con;
            //con.Open();
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            if (ObjDoc.DocId != 0)
            {

                cmd.Parameters.AddWithValue("@iHandle", "UpdateDoc");
            }
            //else
            //{

            //    cmd.Parameters.AddWithValue("@iHandle", "insPatient");
            //}
            cmd.Parameters.AddWithValue("@iDocId", ObjDoc.DocId);
            cmd.Parameters.AddWithValue("@iFirstName", ObjDoc.FirstName);
            cmd.Parameters.AddWithValue("@iLastName", ObjDoc.LastName);
            cmd.Parameters.AddWithValue("@iPhone", ObjDoc.phone);
            cmd.Parameters.AddWithValue("@iEmailId", ObjDoc.Email);            
                       
            var ret = cmd.ExecuteNonQuery();
            dao = null;
            if (ret > 0)
            {
                return Json(ret, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(ret, JsonRequestBehavior.AllowGet);

            }

        }

        #endregion

    }
}