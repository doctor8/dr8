using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Data;
using System.Reflection;
using System.Collections;
using System.ComponentModel;
using System.Data.SqlClient;

namespace LPSDashboardDAL
{
    public class DBHelper
    {
       

        /// <summary>
        /// Get Connection from web.config file & used for connection to command in BLL
        /// </summary>
        SqlConnection con, conuser;
        public SqlConnection GetConnection()
        {
            try
            {
                if (con == null || con.State.ToString() == "Closed")
                {
                    con = new SqlConnection(ConfigurationManager.ConnectionStrings["DbConnectionString"].ConnectionString);
                   
                    con.Open();
                }
                return con;
            }
            catch (Exception) { return null; }
        }
    }
}
