<!DOCTYPE html>
<html>
   <head>
         <!--Latest compiled and minified CSS -->
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css"> 
        
        
    	 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">	 

         <!--jQuery library -->
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script> 
        
        <!--JQuery DataTables-->
         <link rel="stylesheet" href="//cdn.datatables.net/1.10.9/css/jquery.dataTables.min.css" type="text/css" /> 
        
         <script type="text/javascript" src="//cdn.datatables.net/1.10.9/js/jquery.dataTables.min.js"></script> 


         <script type="text/javascript" src="appt.js"></script> 

        <link rel="stylesheet" href="appt.css" type="text/css" />


        <!-- LOCAL TESTING -->
        <!--<script src="bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>-->
        <!--<script src="bootstrap-3.3.5-dist/js/bootstrap.js"></script>-->
        
        <!-- Bootstrap Core CSS -->
        <!--<link href="bootstrap-3.3.5-dist/css/bootstrap.min.css" rel="stylesheet">-->
        <!--<link href="bootstrap-3.3.5-dist/css/bootstrap.css" rel="stylesheet">-->
       <!-- /////////////////////////////////////////// -->
       <title> Schedule an Appointment </title>

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
                    <a class="navbar-brand page-scroll" href="index.php">Tutoring</a>
                </div>
                
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a class="page-scroll" href="contact.php">Contact Becca</a>
                        </li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>
        <h1> Schedule An Appointment </h1>
        <div id="formDiv">
            <form name="sentMessage" id="contactForm" >

            <div class="control-group form-group">
                <div class="controls">
                    <label>Full Name:</label>
                    <input type="text" class="form-control" id="name" required data-validation-required-message="Please enter your name.">
                    <p class="help-block"></p>
                </div>
            </div>

            <div class="control-group form-group">
                <div class="controls" id="date">
                    <label>Date: 
                    </label>
                    <p id= "dateDisplay">
                    <?php 
                            echo ucwords(strtolower($_GET['month'])) . " " . $_GET['day'] . ", " . $_GET['year']; 
                        ?>
                    </p>
                </div>
            </div>

            <div class="control-group form-group">
                <div class="controls">
                    <label>What class do you need help with? </label>
                    <select class="form-control" id="classOption" required data-validation-required-message="Please enter your phone number.">
                        <option selected value = "0"> Choose A Class </option>
                        <option value = "250"> STATS 250 </option>
                        <option value = "183"> EECS 183 </option>
                        <option value = "280"> EECS 280 </option>
                        <option value = "101"> ENGR 101 </option>
                        <option value = "106"> SI 106 </option>
                        <option value = "206"> SI 206 </option>
                    </select>
                </div>
            </div>

            <div class="control-group form-group">
                <div class="controls">
                    <label>Please Choose a Start Time: </label>
                    <select class="form-control" id="startTime" required data-validation-required-message="Please enter your phone number.">
                        <option id="default" value = "0" selected> Choose A Start Time </option>
                    </select>
                </div>
            </div>

            <div class="control-group form-group">
                <div class="controls">
                    <label> How long would you like to meet? </label>
                    <select class="form-control" id="duration" required data-validation-required-message="Please enter your phone number.">
                        <option selected> Choose A Duration </option>
                    </select>
                </div>
            </div>

            <div class="control-group form-group">
                <div class="controls">
                    <label>Email Address:</label>
                    <input type="email" class="form-control" id="email" required data-validation-required-message="Please enter your email address.">
                </div>
            </div>
            
            <div class="control-group form-group">
                <div class="controls">
                    <label>Phone Number:</label>
                    <input type="phone" class="form-control" id="phone" required data-validation-required-message="Please enter your phone number.">
                </div>
            </div>


            <div class="control-group form-group">
                <div class="controls">
                    <label>Any Additional Notes:</label>
                    <textarea rows="10" cols="100" class="form-control" id="message" required data-validation-required-message="Please enter your message" maxlength="999" style="resize:none"></textarea>
                </div>
            </div>

            <div id="success"></div>
            <!-- For success/fail messages -->

            <div id = "submitButtonDiv" class="buttongroup">
                 <button id = "submit" type="submit" class="btn btn-primary">Schedule Appointment</button>
             </div>
            </form>
        </div>
    </body>
</html>