/**********************************************************
 * Author: Kevin Turkington
 * Date: 7/21/16
 * Description Portfolio website: contactme page script.
***********************************************************/





function setContacts(obj){
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

    if(requiredIsFilled){
        obj.email = emailVal;
        obj.name = nameVal;
        obj.subject = subjectVal
        obj.message = messageVal;

        if(phoneVal != ""){
            obj.phone = phoneVal;
        }
        if(companyVal != ""){
            obj.company = companyVal;
        }
        if(websiteVal != ""){
            obj.website = websiteVal;
        }
        $('#submit').prop('disabled',true);
        //add modal popup clarifying that button was pressed
    }
    
}
function resetContacts(obj){
    obj.email = null;
    obj.phone = null;
    obj.name = null;
    obj.company = null;
    obj.website = null;
    obj.subject = null;
    obj.message = null;
}

$(document).ready(function () {
    var contactObj = {
        email:null,
        phone:null,
        name:null,
        company:null,
        website:null,
        subject:null,
        message:null
    }
    //var contactdata = new dataObj();
    $('#submit').click(function(){
        setContacts(contactObj);
        console.log(contactObj);

    });

});