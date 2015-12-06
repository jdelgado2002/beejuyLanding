$("#registerButton").click(function(){
    $.post("https://sheetsu.com/apis/fe9970fa",
    {
        name: $("input#registerName").val(),
        email:$("input#registerEmail").val(),
        phone: $("input#registerPhone").val()
    },
    function(data, status){
         // Success message
                    $('#registerSuccess').html("<div class='alert alert-success'>");
                    $('#registerSuccess > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#registerSuccess > .alert-success')
                        .append("<strong>Thanks for your interest, we will contact you soon</strong>");
                    $('#registerSuccess > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#registerForm').trigger("reset");
        //alert("Data: " + data + "\nStatus: " + status);
    });
});