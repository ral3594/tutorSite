function loadStartTimes(){
    var date = ($('#dateDisplay').html());
    var parts = window.location.search.substr(1).split("&");
    var $_GET = {};
    for (var i = 0; i < parts.length; i++) {
        var temp = parts[i].split("=");
        $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
    }
    console.log($_GET);
    $.ajax({
        url: "ajax.php",
        type: "POST",
        data: "action=getStartTimes&month=" + $_GET['month'] + "&year=" + $_GET['year'] + "&day=" + $_GET['day'],
        dataType: "json",
        success: function (response){
            var time = "";
            
            $.each(response,function(index){
                // console.log(response[index].startTime%1);
                if ((response[index].startTime)%1 != 0){
                    console.log(response[index].startTime);
                    var hour = response[index].startTime - .5;
                    time = hour + ":30 AM"; 
                } 
                else{
                    time = Math.ceil(response[index].startTime) + " AM";
                }
                $('#startTime').append($('<option>', { 
                    value: index + 1,
                    text : time
                }));
                
            });
            
            var length = response.length;
            if (length >= 0){
                var totalTime = response[length - 1].startTime - response[0].startTime;
                var tracker = 0;
                for (var i = .5; i <= totalTime; i = i + .5){
                    var textVal = "";
                    if (i <= 1){
                        textVal = i + " hour";
                    }
                    else{
                        textVal = i + " hours";
                    }
                   $('#duration').append($('<option>', {
                       value: tracker + 1,
                       text: textVal
                   }));
                   tracker++;
                }
            }
        },
        error: function(){
            alert('error');
        }
    })
    
}

$(document).ready(function(){
   loadStartTimes();
   
   $('#submit').click(function(e){
       e.preventDefault();
       var email = $('#email').val();
       if (email.indexOf('@') == -1 || email.indexOf('.com') == -1){
           alert('invalid email!');
       }
       else{
           alert('valid email');
       }
   })
});