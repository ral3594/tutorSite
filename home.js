function getInfoFromDBLoad(d, monthNames){
    $.ajax({
        url: "ajax.php",
        type: "POST",
        data: "action=getInfoFromDB&month=" + monthNames[d.getMonth()],
        dataType: "json",
        success: function (response){

            var table = $('#example').DataTable();
            var day = "";
            var numDaysMonth = response[0].numDays;
            $('h2').html(monthNames[d.getMonth()]);
            $.each(response, function(index){
                day = response[index].message;
            })

            var data = "<tr>";
            var i = 0;
            
            while (i < day){
                data += "<td class='empty'></td>";
                i++;
            }
            
            var i2 = day;
            var date = 1;
            while (i2 < 7){
                var td = "<td id = '" + date + "'>" + date + "</td>";
                data+=td;
                date++;
                i2++;
            }
            data+="</tr>";
            
            table.row.add($(data)).draw(false);
            
            var daysRemaining = 7-date;
            console.log(daysRemaining);
            while (daysRemaining <= 31){
                var newRow = "<tr>"
                if (daysRemaining + 7 <= 31){
                    console.log("less than 31");
                    var count = 1;
                    console.log("count is : " + count);
                    while (count <= 7){
                        var total = daysRemaining + count;
                        var col = "<td id = '" + total + "'>" + total + "</td>";
                        newRow+=col;
                        count++;
                    }
                    newRow+="</tr>";
                    table.row.add($(newRow)).draw(false);
                    console.log(daysRemaining);
                    
                }
                else{
                    // var newMonth = 1;
                    // if (daysRemaining + 1 > 31){
                    //     table.row.add([
                    //         newMonth,
                    //         newMonth + 1,
                    //         newMonth + 2,
                    //         newMonth + 3,
                    //         newMonth + 4,
                    //         newMonth + 5,
                    //         newMonth + 6
                    //     ]).draw(false);
                    // }
                    // else if (daysRemaining + 2 > 31){
                    //     table.row.add([
                    //         daysRemaining + 1,
                    //         newMonth,
                    //         newMonth + 1,
                    //         newMonth + 2,
                    //         newMonth + 3,
                    //         newMonth + 4,
                    //         newMonth + 5
                    //     ]).draw(false);
                    // }
                }
                daysRemaining = daysRemaining + 7;

            }
            
            $.each(response, function(index) {
                var id = response[index].day;
                $('#'+id).addClass('success');
            })
            
            for (var i = 1; i <= numDaysMonth; i++){
                if (!($('#'+i).hasClass('success'))){
                    $('#'+i).addClass('danger');
                }
            }
                    
            $('.empty').css('background-color', '#EAEAEA');
            // var i = 0;
            // var stringArr = [];
            // while (i < day){
            //     stringArr.push(" ");
            //     i++;
            // }
            // var i2 = day;
            // var date = 1;
            // while(i2 < 7){
            //     stringArr.push(date);
            //     date++;
            //     i2++;
            // }
            
            // table.row.add( [
            //     stringArr[0],
            //     stringArr[1],
            //     stringArr[2],
            //     stringArr[3],
            //     stringArr[4],
            //     stringArr[5],
            //     stringArr[6]
            // ] ).draw( false );
            
            
            // var daysRemaining = 7-date;
            // while (daysRemaining <= 31){
            //     if (daysRemaining + 7 <= 31){
            //         table.row.add([
            //             daysRemaining + 1,
            //             daysRemaining + 2,
            //             daysRemaining + 3,
            //             daysRemaining + 4,
            //             daysRemaining + 5,
            //             daysRemaining + 6,
            //             daysRemaining + 7
            //         ]).draw(false);
            //     }
                
            //     else{
            //         var newMonth = 1;
            //         if (daysRemaining + 1 > 31){
            //             table.row.add([
            //                 newMonth,
            //                 newMonth + 1,
            //                 newMonth + 2,
            //                 newMonth + 3,
            //                 newMonth + 4,
            //                 newMonth + 5,
            //                 newMonth + 6
            //             ]).draw(false);
            //         }
            //         else if (daysRemaining + 2 > 31){
            //             table.row.add([
            //                 daysRemaining + 1,
            //                 newMonth,
            //                 newMonth + 1,
            //                 newMonth + 2,
            //                 newMonth + 3,
            //                 newMonth + 4,
            //                 newMonth + 5
            //             ]).draw(false);
            //         }
            //     }
            //     daysRemaining = daysRemaining + 7;
            // }
        },
        error: function(){
            alert('error');
        }
    })
    
}

$(document).ready(function() {
    $('#example').DataTable({
        "ordering" : false,
        "paging" : false
    });
    
    var monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    var d = new Date();
    
    getInfoFromDBLoad(d, monthNames);
    
    
    
    var counter = 1;
    $('#nextButton').click(function(){
        $('h2').html(monthNames[(d.getMonth() + counter)%12]);
        var newdate = new Date(d.getFullYear(), d.getMonth() + (counter%12), d.getDate());
        console.log(newdate);
        // getInfoFromDBLoad(newdate, monthNames);
        counter++;
        
        
    });
    
    $('#prevButton').click(function(){
        
        
    })
} );