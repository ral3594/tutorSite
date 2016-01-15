function getInfoFromDBLoad(d, monthNames){
    console.log(monthNames[d.getMonth()]);
    $.ajax({
        url: "ajax.php",
        type: "POST",
        data: "action=getInfoFromDB&month=" + monthNames[d.getMonth()] + "&year=" + d.getFullYear(),
        dataType: "json",
        success: function (response){
            //HANDLE IF NOTHING IS IN RESPONSE
            if (!response){
                console.log('empty');
            }
            var table = $('#example').DataTable();
            var day = "";
            var totDays = "";
            var numDaysMonth = response[0].numDays;
            $('h2').html(monthNames[d.getMonth()]);
            
            $.each(response, function(index){
                day = response[index].message;
                // console.log(day);
                totDays = response[index].numDays;
                // console.log(totDays);
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
            // console.log("date " + date);
            // console.log(i2);
            data+="</tr>";
            // console.log(data);
            table.row.add($(data)).draw(false);
            console.log(date);
            var daysRemaining = 7-date;
            // console.log(daysRemaining);
            
            //Handles starting on a Sunday
            if (day == 7){
                daysRemaining = 0;
            }
            // date = date - 1;
            while (date <= totDays){
                var newRow = "<tr>"
                if (date + 7 <= totDays){
                    
                    var count = 0;
                
                    while (count < 7){
                        var total = date + count;
                        // console.log(total);
                        var col = "<td id = '" + total + "'>" + total + "</td>";
                        newRow+=col;
                        count++;
                    }
                    newRow+="</tr>";

                    table.row.add($(newRow)).draw(false);
                    
                    
                    if (date === totDays){
                        console.log("hit here");
                        var row = "<tr>";
                        var tempCol = "<td> id = '" + date + "'>" + date + "</td>";
                        row += tempCol;
                        var i = 0;
                        while (i < 6){
                            row += "<td class='empty'></td>";
                        }
                        row += "</tr>"
                        table.row.add($(row)).draw(false);
                    }
                }
                else{
                    console.log(date);
                    var dLeft = totDays - date;
                    console.log(dLeft);
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
                date = date + 7;

            }
            
            $.each(response, function(index) {
                var id = response[index].day;
                $('#'+id).addClass('success');
                $('#' + id).html('<button class = "dateLinks" id = "b' + id + '">' + id + '</button>');
            })
            
            for (var i = 1; i <= numDaysMonth; i++){
                // console.log($('#'+i).html());
                if (!($('#'+i).hasClass('success'))){
                    $('#'+i).addClass('danger');
                }
            }
                    
            $('.empty').css('background-color', '#EAEAEA');
            
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
    
    
    $('#example').on('click', '.dateLinks', function(event){
        
        
        var date = this.id;
        date = date.slice(1);

        
        // var parameter = decodeURIComponent( $.param( dateObject ));
        // a[one]=1&a[two]=2&a[three]=3&b[]=1&b[]=2&b[]=3
        window.location = "https://tutorsite-ral3594.c9.io/appt.php?day=" + date + "&month="+ monthNames[d.getMonth()] + "&year=" + d.getFullYear(); ;
        
    });
    
    
    $('#nextButton').click(function(){
        
        var index = 0;
        var currMonth = $('h2').html();
        if (monthNames.indexOf(currMonth) != -1){
            index = monthNames.indexOf(currMonth);
            index++;
            if (index > 12){
                index = 0;
            }
            $('h2').html(monthNames[index]);
        }
        var newdate = new Date(d.getFullYear(), index, d.getDate());
        
        console.log(newdate);
        var table = $('#example').DataTable();
        getInfoFromDBLoad(newdate, monthNames);
        table.clear().draw();

        
    });

    
    $('#prevButton').click(function(){
        
        var index = 0;
        var currMonth = $('h2').html();
        if (monthNames.indexOf(currMonth) != -1){
            index = monthNames.indexOf(currMonth);
            index--;
            if (index < 0){
                index = 11;
            }
            $('h2').html(monthNames[index]);
        }

        var newdate = new Date(d.getFullYear(), index, d.getDate());
        
        console.log(newdate);
        var table = $('#example').DataTable();
        getInfoFromDBLoad(newdate, monthNames);
        table.clear().draw();


    });
    
        
    
    
} );

