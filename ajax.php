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
        // $year = date('Y');
        $year = $_POST['year'];

        //SQL Statement
        $sql = "SELECT y.startDate, m.numDays, m.id
                FROM 
                months m, years y 
                WHERE 
                y.monthId = m.id AND y.yr = " . $year . " AND m.fullName = '" . $_POST['month'] . "'";
        
        //Query DB
        $result = $db->query($sql);
        $row = $result-> fetch_assoc();
        $startDate = $row['startDate'];
        
        //Save data
        $numDays = $row['numDays'];
        $monthID = $row['id'];

        //Query to get availability
        $sql = "SELECT timeHours, dayNum FROM availability WHERE yr = " . $year . " AND monthNum = " . $monthID . " AND dayNum < " . $numDays;
        
        $result = $db->query($sql);
        if ($result->num_rows == 0){
            $objects[] = array(
                'message'=>$startDate,
                'numDays'=>$numDays
            );
        }
        while ($row = $result->fetch_assoc()){
            $objects[] = array(
                'message'=> $startDate,
                'numDays'=> $numDays,
                'day'=> $row['dayNum'],
                'hour'=> $row['timeHours']
            );
        }
        $response = json_encode($objects);
        echo $response;
    }
    
    if ($_POST['action']=='getStartTimes'){
        // echo json_encode($_POST['month'] . " " . $_POST['day'] . " " . $_POST['year']);
        
        $month = $_POST['month'];
        $day = $_POST['day'];
        $year = $_POST['year'];
        
        $servername = getenv('IP');
        $username = getenv('C9_USER');
        $password = "";
        $database = "Tutor";
        $dbport = 3306;

        // Create connection
        $db = new mysqli($servername, $username, $password, $database, $dbport);
        
        $sql = "SELECT id FROM months where fullName = '" . $month . "'";
        
        $result = $db->query($sql);
        $row = $result-> fetch_assoc();
        $monthNum = $row['id'];
        
        
        $sql = "SELECT timeHours FROM availability WHERE yr = " . $year . " AND monthNum = " . $monthNum . " AND dayNum = " . $day; 
        
        $result = $db->query($sql);
        
        while ($row = $result->fetch_assoc()){
            $objects[] = array(
                'startTime'=> $row['timeHours']
            );
        }
        
        echo json_encode($objects);
    }

?>





