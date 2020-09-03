$(function () {


    jQuery.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[\w]([a-z\s])+$/i.test(value);
    });
    jQuery.validator.addMethod("whitespace", function (value, element) {
        return this.optional(element) || /^\S+$/i.test(value);
    });

    jQuery.validator.addMethod("DigitOnly", function (value, element) {
        return this.optional(element) || /^[0-9]\d*$/.test(value);
    });

    jQuery.validator.addMethod("zipcode", function (value, element) {
        return this.optional(element) || /^\d{6}$/.test(value);
    });

    jQuery.validator.addMethod("pannum", function (value, element) {
        return this.optional(element) || /^([A-Z]{5})(\d{4})([A-Z]{1})$/.test(value);
    });

    jQuery.validator.addMethod("IFSC", function (value, element) {
        return this.optional(element) || /^[A-Za-z]{4}[a-zA-Z0-9]{7}$/.test(value);
    });

    // Allow characters and digits only
    jQuery.validator.addMethod("charDigit", function (value, element) {
        return this.optional(element) || /^[\w.][a-zA-Z0-9]{1,3}$/.test(value);
    });
    jQuery.validator.addMethod("unLimitedCharDigitNoWhiteSpaceBefore", function (value, element) {
        return this.optional(element) || /^[\w.][a-zA-Z0-9\s]*$/.test(value);
    });
    jQuery.validator.addMethod("OnlyLetterwithSpace", function (value, element) {
        return this.optional(element) || /^[a-zA-Z ]+$/.test(value);
    });
    // Do not allow only Digits--Supriya
    jQuery.validator.addMethod("noDigits", function (value, element) {
        return this.optional(element) || /^\d*[a-zA-Z]{1,}\d*/i.test(value);
    });
    jQuery.validator.addMethod("LetterAndDigit", function (value, element) {
        return this.optional(element) || /^(0|[1-9]\d*)(\.\d+)?$/.test(value);
    });
    jQuery.validator.addMethod("DigitAndLetterOnly", function (value, element) {
        return this.optional(element) || /^(?!^\d+$)^\w.+$/.test(value);
    });

    jQuery.validator.addMethod("AtleastoneChar", function (value, element) {
        return this.optional(element) || /\w*[a-zA-Z-._{}]\w*/.test(value);
    });
    jQuery.validator.addMethod("specialChars", function (value, element) {
        return this.optional(element) || /^(?!\d+$)(?:[a-zA-Z0-9][a-zA-Z0-9- &{}<>_.,!$/]*)?$/.test(value);
    });
    jQuery.validator.addMethod("specialCharsBankName", function (value, element) {
        return this.optional(element) || /^[ A-Za-z0-9_@().#,!&+-]*$/.test(value);
    });
    jQuery.validator.addMethod("driving", function (value, element) {
        return this.optional(element) || /^[A-Z]{2}\d{2}\d{4}\d{7}$/.test(value);
    });
    jQuery.validator.addMethod("email", function (value, element) {
        return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
    });
    jQuery.validator.addMethod("ApparentDensity", function (value, element) {
        return this.optional(element) || /^[0-9]*\.?[0-9]+[-+]?[0-9]*\.?[0-9]+$/.test(value);
    });

    jQuery.validator.addMethod("BagSize", function (value, element) {
        return this.optional(element) || /^[0-9]+\.?[0-9 ]{0,2}\s[X|x][0-9 ]+\.?[0-9 ]{0,2}\s[a-zA-Z]{1,6}$/.test(value);
    });

    jQuery.validator.addMethod("BoxSize", function (value, element) {
        return this.optional(element) || /^[0-9]+\.?[0-9 ]{0,2}\s[X|x][0-9 ]+\.?[0-9 ]{0,2}\s[X|x][0-9 ]+\.?[0-9 ]{0,2}\s[a-zA-Z]{1,6}$/.test(value);
    });

    jQuery.validator.addMethod("percentage", function (value, element) {
        return this.optional(element) || /(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/i.test(value);
    });

    jQuery.validator.addMethod("CountryCode", function (value, element) {
        return this.optional(element) || /^(\+?\d[0-9]{1,3}|\d[0-9]{1,3}|([^-][0-9]{0,2}\-[0-9]{0,4})|^(?:[1-9]|0[1-9]|10))$/i.test(value);
    });

    jQuery.validator.addMethod("FailuresCode", function (value, element) {
        return this.optional(element) || /^[\w.][a-zA-Z- .]+$/.test(value);
    });

    jQuery.validator.addMethod("DigitOnly", function (value, element) {
        return this.optional(element) || /^[0-9]+\.?[0-9]*$/.test(value);
    });
    jQuery.validator.addMethod("GstNo", function (value, element) {
        return this.optional(element) || /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[A-Z]{1}[A-Z\d]{1}$/.test(value);
    });
    jQuery.validator.addMethod("AadharNo", function (value, element) {
        return this.optional(element) || /^(\d{12}|\d{16})$/.test(value);
    });
    jQuery.validator.addMethod("NoBlankSpace", function (value, element) {
        return this.optional(element) || /^\S/.test(value);
    });
    jQuery.validator.addMethod("MailId", function (value, element) {
        return this.optional(element) || /(\w(=?@)\w+\.{1}[a-zA-Z]{2})/.test(value);
    });
    jQuery.validator.addMethod(
        "multiemails",
        function (value, element) {
            if (this.optional(element)) // return true on optional element
                return true;
            var emails = value.split(/[,]+/); // split element by ,
            valid = true;
            for (var i in emails) {
                value = emails[i];
                valid = valid &&
                    jQuery.validator.methods.email.call(this, $.trim(value), element);
            }
            return valid;
        },
        jQuery.validator.messages.multiemails
    );
    jQuery.validator.addMethod("PositiveNeagtiveDigits", function (value, element) {
        return this.optional(element) || /^-?\d*\.?\d+$/.test(value);
    });

    jQuery.validator.addMethod("AllowSlashWithNumber", function (value, element) {
        return this.optional(element) || /^[0-9]+\/?[0-9]*$/.test(value);
    });
    jQuery.validator.addMethod("NoSpaceInBetween", function (value, element) {
        return this.optional(element) || /^\S*$/.test(value);
    });

    //  -------- Doctor (Rasika) -----------
    $("#form_EditDoc").validate({
        rules: {
            fname: {
                required: true,
                lettersonly: true
            },
            //lname: {
            //    required: true,
            //    lettersonly: true
            //},
            //mobile: {
            //    required: true,
            //},
            //email: {
            //    required: true,
            //    MailId: true
            //},
            ////txtPassword: {
            ////    required: true,
            ////},
            //txtConfPassword: {
            //    required: true,
            //},
            //gender: {
            //    required: true,
            //},
            //validationCustom03: {
            //    required: true,
            //},
            //mobile: {
            //    required: true,
            //    minlength: 10,
            //    maxlength: 10,
            //    DigitOnly: true
            //},
            //AdhaarCardNo: {
            //    required: true,
            //    AadharNo: true
            //},
            //PanCardNo: {
            //    required: true,
            //    pannum: true
            //},

            //txtDesignation: {
            //    required: true,
            //},
            //ddlDepartment: {
            //    required: true,
            //},
            //txtVisitingCharges: {
            //    required: true,
            //    DigitOnly: true
            //},
            //txtBirthdate: {
            //    required: true,
            //},
            //txtExperiance: {
            //    required: true,
            //},
            //FileUploadPanCard: {
            //    required: true,
            //},
            //FileUploadAdharCard: {
            //    required: true,
            //},
            //FileUploadAdharCard: {
            //    required: true,
            //},
            //FileUploadLicen: {
            //    required: true,
            //},
            //FileUploadCertificate: {
            //    required: true,
            //},
        },
        messages: {
            fname: {
                required: "Please Enter First Name",
                lettersonly: "Please Enter Valid Last Name",
            },
            //lname: {
            //    required: "Please Enter Last Name",
            //    lettersonly: "Please Enter Valid Last Name",
            //},
            //mobile: {
            //    required: "Please Enter User Name",
            //},
            //email: {
            //    required: "Please Enter Email",
            //    MailId: "Please Enter Valid Email",
            //},
            ////txtPassword: {
            ////    required: "Please Enter Password",
            ////},
            //txtConfPassword: {
            //    required: "Please Enter Confirm Password",
            //},
            //gender: {
            //    required: "Please Select Gender",
            //},
            //txtAddress: {
            //    required: "Please Enter Address",
            //},
            //mobile: {
            //    required: "Please Enter Mobile No.",
            //    minlength: "Please Enter Proper Mobile No.",
            //    maxlength: "Please Enter Proper Mobile No.",
            //    DigitOnly: "Please Enter Valid Mobile No."
            //},
            //AdhaarCardNo: {
            //    required: "Please Enter Adhar Card No.",
            //    AadharNo: "Please Enter Valid Adhar Card No.",
            //},
            //txtPanCardNo: {
            //    required: "Please Enter Pan Card No.",
            //    pannum: "Please Enter Valid Pan Card No."
            //},

            //txtDesignation: {
            //    required: "Please Select Specialist",
            //},
            //ddlDepartment: {
            //    required: "Please Select Department",
            //},
            //txtVisitingCharges: {
            //    required: "Please Enter Visiting Charges",
            //    DigitOnly: "Please Enter Valid Visiting Charges",
            //},
            //txtBirthdate: {
            //    required: "Please Select Birth Date",
            //},
            //txtExperiance: {
            //    required: "Please Select Experiance",
            //},
            //FileUploadPanCard: {
            //    required: "Please Upload Pan card",
            //},
            //FileUploadAdharCard: {
            //    required: "Please Upload Adhar card",
            //},
            //FileUploadLicen: {
            //    required: "Please Upload Licen",
            //},
            //FileUploadCertificate: {
            //    required: "Please Upload Certificate",
            //},
        },
        submitHandler: function (form) {
            form.submit();
        }

    })


})



