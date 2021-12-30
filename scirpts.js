$("#submit-form").validate({
    Name:{
        required:true
    },
    Email:{
        required:true,
        email:true
    },
    Number:{
        required:true,
        number:true,
        minlength:10,
        maxlength:10
    },
    Subject:{
        required:true
    },
    Message:{
        required:true,
        minlength:10,
        maxlength:500
    }
    
})
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}