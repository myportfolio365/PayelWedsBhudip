function postToGoogle() {
    var field1 = $("#nameField").val();
    var field2 = $("#emailField").val();
    
     
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
    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSfp3acE0Y4dW3SMEaGndAvTpHdSqq8Pn4aQPvG0A_T7YKW3mQ/formResponse",
        data: {"entry.1403359363": field1, "entry.1913948657": field2,},
        type: "POST",
        dataType: "xml",
        success: function(d)
        {
        },
        error: function(x, y, z)
            { 
                alert('Sucessfully submitted Response'); 
            }
    });
    return false;
}