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

        <link rel="stylesheet" href="contact.css" type="text/css" />
         <script type="text/javascript" src="contact.js"></script> 


        <!-- LOCAL TESTING -->
        <!--<script src="bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>-->
        <!--<script src="bootstrap-3.3.5-dist/js/bootstrap.js"></script>-->
        
        <!-- Bootstrap Core CSS -->
        <!--<link href="bootstrap-3.3.5-dist/css/bootstrap.min.css" rel="stylesheet">-->
        <!--<link href="bootstrap-3.3.5-dist/css/bootstrap.css" rel="stylesheet">-->
       <!-- /////////////////////////////////////////// -->
        <title> Contact Becca </title>
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
        <h1> Contact Becca </h1>
        <div id="formDiv">
            <form name="sentMessage" id="contactForm" >

                <div class="control-group form-group">
                    <div class="controls" id= "name">
                        <label>Full Name:</label>
                        <input name = "name" type="text" class="form-control" id="nameBox" required data-validation-required-message="Please enter your name.">
                        <p class="help-block"></p>
                    </div>
                </div>

                <div class="control-group form-group">
                    <div class="controls" id="email">
                        <label>Email Address:</label>
                        <input type="email" name ="email" class="form-control" id="emailBox" required data-validation-required-message="Please enter your email address.">
                    </div>
                </div>

                <div class="control-group form-group">
                    <div class="controls" id="message">
                        <label>Message:</label>
                        <textarea rows="10" cols="100" class="form-control" id="messageBox" name = "message" required data-validation-required-message="Please enter your message" maxlength="999" style="resize:none"></textarea>
                    </div>
                </div>

                <div id="success"></div>
                <!-- For success/fail messages -->

                <div class="buttongroup" id="submitButtonDiv">
                     <button id = "submit" type="submit" class="btn btn-primary">Send Message</button>
                 </div>
            </form>
            </form>
        </div>
    </body>
</html>