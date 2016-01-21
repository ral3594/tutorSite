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
                    var aorp = 0;
                    var hour = response[index].startTime - .5;
                    if (hour > 12){
                        hour = hour - 12;
                        aorp = 1;
                    }
                    if (aorp == 0){
                        time = hour + ":30 AM"; 
                    }
                    else{
                        time = hour + ":30 PM";
                    }
                } 
                else{
                    var ap = 0;
                    var hr = Math.ceil(response[index].startTime);
                    if (hr > 12){
                        hr = hr - 12;
                        ap = 1;
                    }
                    if (ap === 0){
                        time = hr + " AM";
                    }
                    else{
                        time = hr + " PM";
                    }
                    
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
       
        //Start Time    
       var start = $('#startTime option:selected').text();
       if (start.indexOf('PM') > 0 ){
            start = start.replace("PM", "");
            start = start.trim();
            if (start.indexOf(':') > 0){
                start = parseInt(start);
                start += 12.5;
            }
            else{
                start = parseInt(start);
                start += 12;
            }
       }
       else{
          start = start.trim();
          if (start.indexOf(':') > 0){
              start = parseInt(start);
              start+=.5;
          }
          else{
              start = parseInt(start);
          }
       }
       start = start.toString();
       
       //Date
       var date = $('#dateDisplay').text();
       date = date.trim();
       date = new Date(date);
       var month = date.getMonth() + 1;
       month = month.toString();
       var day = date.getDate();
       day = day.toString();
       var year = date.getFullYear();
       year = year.toString();
       
       //Duration
       var lot = $('#duration option:selected').text();
       if (lot.indexOf("hour") > 0){
           lot = lot.replace("hour", "");
           lot = lot.trim();
       }
       else if (lot.indexOf("hours") > 0){
           lot = lot.replace("hours", "");
           lot = lot.trim();
       }
       
        $.ajax({
            url: "ajax.php",
            type: "POST",
            data: "action=putInAppt&startTime=" + start + "&month=" + month + "&day=" + day +"&year="+year+"&duration="+lot,
            dataType: "json",
            success: function (response){
                // alert("Thank you! Your appointment has been scheduled.");
                alert(response);
            },
            error: function(){
                alert("Sorry, your request could not be processed at this time. Please try again later.");
            }
        });
   })
   
   
});