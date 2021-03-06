<!DOCTYPE html>
<html>
   <head>
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
        <!-- Include all compiled plugins (below),
    or include individual files as needed -->
    	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">	

        <!-- jQuery library -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        
        <!--JQuery DataTables-->
        <link rel="stylesheet" href="//cdn.datatables.net/1.10.9/css/jquery.dataTables.min.css" type="text/css" />
        
        <script type="text/javascript" src="//cdn.datatables.net/1.10.9/js/jquery.dataTables.min.js"></script>
        
        <script type="text/javascript" src="home.js"></script>
        <link rel="stylesheet" href="home.css" type="text/css" />

   </head> 
   <body>
       <nav id="mainNav" class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand page-scroll" href="#page-top">Tutoring</a>
                </div>
                
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <!--<li>-->
                        <!--    <a class="page-scroll" href="appt.php">Schedule an Appointment</a>-->
                        <!--</li>-->
                        <li>
                            <a class="page-scroll" href="contact.php">Contact Becca</a>
                        </li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>
        
        <div id="tableDiv">
            <div id="headerDiv">
                <button id = "prevButton" class="btn btn-default"><</button> 
                <h2>  </h2> 
                <button id = "nextButton" class= "btn btn-default">></button>
            </div>
            <div class="table-responsive">
                <table id = "example" class="table table-bordered">
                        <thead>
                            <tr>
                                <th> Sunday </th>
                                <th> Monday </th>
                                <th> Tuesday </th>
                                <th> Wednesday </th>
                                <th> Thursday </th>
                                <th> Friday </th>
                                <th> Saturday </th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
   </body>
</html>
