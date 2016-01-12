$(document).ready(function(){
   $('#submit').click(function(){
       console.log('submit clicked');
        $.ajax({
            url: "ajax.php",
            type: "POST",
            data: "action=sendEmail&name=" + $('#nameBox').val() + "&email=" + $('#emailBox').val() + "&message=" + $('#messageBox').val(),
            dataType: "json",
            success: function (response){
                if (response == "success"){
                    alert("Your message has been sent.");
                }
                else{
                    alert("We're sorry. Your message could not be delivered at this time. Please try again later.");
                }
            },
            error: function (){
                alert('error');
            }
        });
   });
   
});