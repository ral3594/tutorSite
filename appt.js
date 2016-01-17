function loadStartTimes(){
    var date = ($('#dateDisplay').html());
    var parts = window.location.search.substr(1).split("&");
    var $_GET = {};
    for (var i = 0; i < parts.length; i++) {
        var temp = parts[i].split("=");
        $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
    }
    // console.log($_GET);
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
                    // console.log(response[index].startTime);
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
                var totalTime = response[length - 1].startTime - response[0].startTime + .5;
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
   
    // $('#startTime option[value="4"]').hide()   
    


    
    // if (length != 1 || length != 0){
    //     console.log("here");
    //     while (length != 0){
    //         if ($('startTime').val() == length){
    //             $('#duration option[value="'+length+'"]').hide();
    //         }
    //     }
    // }
    
    $('#startTime').on("change", function(){
        var length = $('#duration option').length;
        // length--;
        console.log(length);
        var val = $('#startTime').val();
        if (length != 1 || length != 0){
            console.log("val: " + val);
            if (val > 1){
                // console.log(length);
                var count = 0;
                var count2 = 0;
                var numEltsToShow = length - val;
                var numEltsToHide = (length - 1) - numEltsToShow;
                console.log("numtohide: " + numEltsToHide);
                while (count < numEltsToHide){
                    console.log("length: " + length);
                    console.log("count: " + count);
                    
                    var hide = length - count - 1;
                    console.log("hide: "+ hide);
                    $('#duration option[value="'+hide+'"]').hide();
                    count++;
                    
                }
                while (count2 < numEltsToShow){
                    var showVal = count2 + 1;
                    $('#duration option[value="'+showVal+'"]').show();
                    count2++;
                }
            }
            else{
                var c = 0;
                while (c < (length - 1)){
                    var show = c + 1;
                    $('#duration option[value="'+show+'"]').show();
                    c++;
                }
            }
        }
        
    });
    
    
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