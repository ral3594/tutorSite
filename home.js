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
                totDays = response[index].numDays;
            })

            var data = "<tr>";

            var date = 1;
            if (day != 7){
                var i = 0;
                while (i < day){
                    data += "<td class='empty'></td>";
                    i++;
                }
            
                var i2 = day;

                
                while (i2 < 7){
                    var td = "<td id = '" + date + "'>" + date + "</td>";
                    data+=td;
                    date++;
                    i2++;
                }
                
                data+="</tr>";

                table.row.add($(data)).draw(false);
            }
            // var daysRemaining = 7-date;
            
            // //Handles starting on a Sunday
            // if (day == 7){
            //     daysRemaining = 0;
            // }
            
            while (date <= totDays){
                var newRow = "<tr>"
                if (date + 7 <= totDays){
                    
                    var count = 0;
                
                    while (count < 7){
                        var total = date + count;
                        var col = "<td id = '" + total + "'>" + total + "</td>";
                        newRow+=col;
                        count++;
                    }
                    newRow+="</tr>";

                    table.row.add($(newRow)).draw(false);
                    
                }
                else{
                    // console.log(date);
                    var dLeft = totDays - date;
                    var i = 0;
                    var row = "<tr>";
                    while (i <= dLeft){
                        var cd = i + date;
                        var tempCol = "<td id='" + cd + "'>" + cd + "</td>";
                        row += tempCol;
                        i++;
                    }
                    var rem = 7 - dLeft;
                    rem--;
                    while (rem > 0){
                        row += "<td class='empty'></td>";
                        rem--;
                    }
                    row += "</tr>";
                    table.row.add($(row)).draw(false);
                    
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
    var year = d.getFullYear();
    
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
            if (index >= 12){
                index = 0;
            }
            $('h2').html(monthNames[index]);
        }

        if (index == 0){
            year++;
        }
        
        var newdate = new Date(year, index, d.getDate());
        
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
        
        if (index == 11){
            year--;
        }

        var newdate = new Date(year, index, d.getDate());
        
        console.log(newdate);
        var table = $('#example').DataTable();
        getInfoFromDBLoad(newdate, monthNames);
        table.clear().draw();


    });
    
        
    
    
} );

