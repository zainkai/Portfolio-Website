/**********************************************************
 * Author: Kevin Turkington
 * Date: 7/21/16
 * Description Portfolio website: contactme page script.
***********************************************************/
class emailController {
    constructor() {
        this.emailJSON = {
            email: null,
            phone: null,
            name: null,
            company: null,
            website: null,
            subject: null,
            message: null
        };
    }
    setModalText(label, bodytext) {
        var labelElement = $('#ModalLabel');
        var bodyElement = $('.modal-body > h3');
        labelElement.text(label);
        bodyElement.text(bodytext);
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
            this.emailJSON.subject = subjectVal;
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
    showModal() {
        $('#modal-container').modal('show');
    }
    validateForm() {
        var email = $('#email');
        var name = $('#name');
        var subject = $('#subject');
        var message = $('#message');
        var hasWarning = false;
        if (email.val().length > 0 && email.val().indexOf('@') > -1) {
            email.parent().removeClass('has-warning');
        }
        else {
            email.parent().addClass('has-warning');
            hasWarning = true;
        }
        if (name.val().length > 0) {
            name.parent().removeClass('has-warning');
        }
        else {
            name.parent().addClass('has-warning');
            hasWarning = true;
        }
        if (subject.val().length > 0) {
            subject.parent().removeClass('has-warning');
        }
        else {
            subject.parent().addClass('has-warning');
            hasWarning = true;
        }
        if (message.val().length > 0) {
            message.parent().removeClass('has-warning');
        }
        else {
            message.parent().addClass('has-warning');
            hasWarning = true;
        }
        return hasWarning;
    }
    sendEmail() {
        var classScope = this;
        this.resetJSON();
        this.setJSON();
        $('#submit').prop('disabled', true);
        $.ajax({
            method: "POST",
            data: this.emailJSON,
            success: function (data) {
                console.log((data.message));
                classScope.setModalText(data.header, data.message);
                classScope.showModal();
                $('#submit').prop('disabled', false);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                classScope.setModalText('Failure!', 'Your Email was not sent to the server! Please send your email manually to TurkingtonKevin@gmail.com');
                classScope.showModal();
                $('#submit').prop('disabled', false);
                //alert('Error:' + jqXHR + textStatus + errorThrown);
            }
        });
    }
}
$(document).ready(function () {
    var emailControl = new emailController;
    $('#submit').click(function () {
        $('#modal-container').modal('show');
        if (emailControl.validateForm()) {
            emailControl.setModalText('Invalid Inputs!', 'Please enter valid information for the red text fields.');
            emailControl.showModal();
        }
        else {
            emailControl.sendEmail();
        }
    });
});
