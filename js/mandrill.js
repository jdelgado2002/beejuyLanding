jQuery(function($)  
{
    $("#contact_form").submit(function()
    {
        var email = $("#e-mail").val(); // get email field value
        var name = $("#name").val(); // get name field value
        var msg = $("#message").val(); // get message field value
        $.ajax(
        {
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': '30UIQAseBBoZt_QAGJuwPA',
                'message': {
                    'from_email': email,
                    'from_name': name,
                    'headers': {
                        'Reply-To': email
                    },
                    'subject': ('Beejuy Contact Form from ' + name),
                    'text': msg,
                    'to': [
                    {
                        'email': 'info@greetail.co',
                        'name': 'beejuy sales',
                        'type': 'to'
                    }]
                }
            }
        })
        .done(function(response) {
            $("#success-email").modal();
            //alert('Your message has been sent. Thank you!'); // show success message
            $("#name").val(''); // reset field after successful submission
            $("#e-mail").val(''); // reset field after successful submission
            $("#message").val(''); // reset field after successful submission        
        })
        .fail(function(response) {
            $("#failure-email").modal();
        });
        return false; // prevent page refresh
    });
});