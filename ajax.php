<?php
    if ($_POST['action']=='getInfoFromDB'){
                
        $servername = getenv('IP');
        $username = getenv('C9_USER');
        $password = "";
        $database = "Tutor";
        $dbport = 3306;

        // Create connection
        $db = new mysqli($servername, $username, $password, $database, $dbport);
        
        // $db = new mysqli("localhost", "root", "", "Tutor");
        $monthRaw = date('F');
        $month = strtoupper($monthRaw);
        
        //SQL Statement
        $sql = "SELECT y.startDate
                FROM 
                months m, years y 
                WHERE 
                y.monthId = m.id AND m.fullName = '" . $month . "'";
        
        //Query DB
        $result = $db->query($sql);
        while ($row = $result->fetch_assoc()){
            $objects[] = array(
                'message'=> $row["startDate"]
            );
        }
        $response = json_encode($objects);
        echo $response;
    }

?>





