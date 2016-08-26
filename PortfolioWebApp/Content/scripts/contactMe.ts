/**********************************************************
 * Author: Kevin Turkington
 * Date: 7/21/16
 * Description Portfolio website: contactme page script.
***********************************************************/ 

class emailController {
    emailJSON: any;
    constructor() {
        this.emailJSON = {
            email: null,
            phone: null,
            name: null,
            company: null,
            website: null,
            subject: null,
            message: null
        }
    }
    resetJSON() {
        this.emailJSON.email = null;
        this.emailJSON.phone = null;
        this.emailJSON.name = null;
        this.emailJSON.company = null;
        this.emailJSON.website = null;
        this.emailJSON.subject = null;
        this.emailJSON.message = null;
    }
    setJSON() {
        var emailVal = $('#email').val();
        var nameVal = $('#name').val();
        var subjectVal = $('#subject').val();
        var phoneVal = $('#phone').val();
        var messageVal = $('#message').val();
        var companyVal = $('#company').val();
        var websiteVal = $('#website').val();

        var requiredIsFilled = (emailVal != "") &&
            (nameVal != "") &&
            (subjectVal != "") &&
            (messageVal != "");

        if (requiredIsFilled) {
            this.emailJSON.email = emailVal;
            this.emailJSON.name = nameVal;
            this.emailJSON.subject = subjectVal
            this.emailJSON.message = messageVal;

            if (phoneVal != "") {
                this.emailJSON.phone = phoneVal;
            }
            if (companyVal != "") {
                this.emailJSON.company = companyVal;
            }
            if (websiteVal != "") {
                this.emailJSON.website = websiteVal;
            }
        }
        return this.emailJSON;
    }
    sendEmail() {
        this.resetJSON();
        this.setJSON();
        $('#submit').prop('disabled', true);
        $.ajax({
            method: "POST",
            data: this.emailJSON,
            success: function (data) {
                $('#submit').prop('disabled', false);
                
            },
            error: function (jqXHR, textStatus, errorThrown) {
                
            }
        });
    }

}

$(document).ready(function () {
    var emailControl = new emailController;

    $('#submit').click(function () {
        emailControl.sendEmail();
    });

});