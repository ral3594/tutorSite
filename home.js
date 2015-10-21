$(document).ready(function() {
    $('#example').DataTable({
        "ordering" : false,
        "paging" : false
    });
    
    $.ajax({
        url: "ajax.php",
        type: "POST",
        data: "action=getInfoFromDB",
        dataType: "json",
        success: function (response){
            var table = $('#example').DataTable();
            var day = "";
            $.each(response, function(index){
                day = response[index].message;
            })

            var i = 0;
            var stringArr = [];
            while (i < day){
                stringArr.push(" ");
                i++;
            }
            var i2 = day;
            var date = 1;
            while(i2 < 7){
                stringArr.push(date);
                date++;
                i2++;
            }
            
            table.row.add( [
                stringArr[0],
                stringArr[1],
                stringArr[2],
                stringArr[3],
                stringArr[4],
                stringArr[5],
                stringArr[6]
            ] ).draw( false );
            
            
            var daysRemaining = 7-date;
            while (daysRemaining <= 31){
                if (daysRemaining + 7 <= 31){
                    table.row.add([
                        daysRemaining + 1,
                        daysRemaining + 2,
                        daysRemaining + 3,
                        daysRemaining + 4,
                        daysRemaining + 5,
                        daysRemaining + 6,
                        daysRemaining + 7
                    ]).draw(false);
                }
                
                else{
                    var newMonth = 1;
                    if (daysRemaining + 1 > 31){
                        table.row.add([
                            newMonth,
                            newMonth + 1,
                            newMonth + 2,
                            newMonth + 3,
                            newMonth + 4,
                            newMonth + 5,
                            newMonth + 6
                        ]).draw(false);
                    }
                    else if (daysRemaining + 2 > 31){
                        table.row.add([
                            daysRemaining + 1,
                            newMonth,
                            newMonth + 1,
                            newMonth + 2,
                            newMonth + 3,
                            newMonth + 4,
                            newMonth + 5
                        ]).draw(false);
                    }
                }
                daysRemaining = daysRemaining + 7;
            }
        },
        error: function(){
            alert('error');
        }
    })
} );