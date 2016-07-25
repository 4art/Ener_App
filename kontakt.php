<!DOCTYPE html>
<html lang="de">
<head>
  <title>Metra</title>
  <style type="text/css">
  	/*#border{
  		border:1px double black;
  	}*/
  	#myPhoto{
  		margin-left:-15px;
  	}

  </style>
  <?include 'includes/meta.php'; ?>
</head>
<body>
<div class="container" ng-app="">
	<?include 'includes/nav-bar.php'; ?>
	<div id="border" class="col-md-6">
		<h2>Kontakt</h2>
		<h3>Artem Firsov</h3>
		<img id="myPhoto" src="images/Artem_Firsov.jpg" class="col-md-6 col-xs-12">
		<br><br>
		<h4>Herbartstrasse 9</h4>
		<h4>60316 Frankfurt am Main</h4>
		<h4>Email: firsov.tyoma@gmail.com</h4>
		<h4><a href="https://www.linkedin.com/in/artem-firsov-a6a915a3"><img src="images/LIn.png" height="20px"> LinkedIn</a></h4>
		<h4><a href="https://www.xing.com/profile/Artem_Firsov"><img src="images/xing.png" height="20px;"> Xing</a></h4>
		<h4>Tel: +49 (0) 179-8538-579</h4>
		<br>
	</div>
	<div id="border" class="col-md-6">
		<div class="col-md-6">
			<div  id="sessionError" class="hidden">
				<div class="form-group">
					<br><br><br>	
					<span>Name:</span>
					<br>
					<input type="text" class="form-control" id="kontName">
				</div>
				<div class="form-group">
					<span> Email:</span>
					<input type="name" class="form-control" id="kontEmail">
				</div>
			</div>
		</div>
			<div class="form-group">
				<div class="col-md-12">
					<span>Nachricht:</span>
					<textarea  class="form-control" id="kontMessage" style="height:300px;">
						
					</textarea>
					<br>
					<p id="kontError" class="errorHid">* Füllen Sie richtig Felder aus.</p>
					<input type="button" id="kontactSend" class="btn btn-primary" value="Senden">
				</div>		
			</div>
	</div>

      <?include 'includes/js.php' ?>
	<?include 'includes/footer.php'; ?>
</div>
</body>
</html>