function postToGoogle() {
    var field1 = $("#nameField").val();
    var field2 = $("#emailField").val();
    var field3 = $('input[name=WeddStatus]:checked').val();
    
     
    if(field1 == ""){
        alert('Please Fill Your Name');
        document.getElementById("nameField").focus();
        return false;
    }
    if(field2 == ""){
        alert('Please Fill Your Email');
        document.getElementById("emailField").focus();
        return false;
    }
    if(field3 == null){
        alert('Please choose one option');
        document.getElementById("atttending-yes").focus();
        document.getElementById("atttending-no").focus();
        return false;
    }
    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSd1P6wQQp_8CQcDTJhMeCdDO369-fqHShsUjawaLfhLmI4aEQ/formResponse",
        data: {"entry.10585789": field1, "entry.236451525": field2,"entry.1704008836": field3},
        type: "POST",
        dataType: "xml",
        success: function(d)
        {
        },
        error: function(x, y, z)
            { 
                alert("Response is successfully submitted");
            }
    });
    return false;
}