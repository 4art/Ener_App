<!DOCTYPE html>
<html lang="de">
<head>
  <title>Metra</title>
  <?include 'includes/meta.php'; ?>
</head>
<body>
<div class="container" ng-app="">
	<?include 'includes/nav-bar.php'; ?>
	<h2>Mein Ration</h2>
	<div class="table-responsive">
		<div class="hidden" id="sessionSuccess">
			
			
		  	<table class="table table-hover">
		    	<thead>
		    	  <tr>
		    	    	<!--<th class="col_1"><p>№ ▼</p></th>-->
		    	        <th class="col_2"><p>Lebensmittel<span class="resp_hid"> ▼</span></p></th>
		    	        <th class="col_3"><p><span class="resp_hid">Gewicht (Gramm)▼ </span><span class="resp_vis">Gewicht (g)</span></p></th>
		    	        <th class="col_4"><p>Eiweiße<span class="resp_hid"> (Gramm)▼ </span></p></th>
		    	        <th class="col_5"><p>Fette<span class="resp_hid"> (Gramm)▼ </span></p></th>
		    	        <th class="col_6"><p><span class="resp_hid">Kohlenhydrate (Gramm)▼ </span><span class="resp_vis">Kohlen-<br>hydraten</span></p></th>
		    	        <th class="col_7"><p><span class="resp_hid">Kilokalorien (</span>kcal<span class="resp_hid">)▼ </span></p></th>
		    	  </tr>
		    	</thead>
			<form method="post" name="prodForm" id="form">
		    	<tbody id="rationTable">
		    	  		
		    	<tfoot>
		    	  
		    	    <tr>
		    	        <th ></th>
		    	        <th id="weiGenRation"></th>
		    	        <th id="protGenRation"></th>
		    	        <th id="fatGenRation"></th>
		    	        <th id="carboGenRation"></th>
		    	        <th id="kcalGenRation"></th>
		    	    </tr>
		    	</tfoot>
		  	</table>
		</div>
		<div id="sessionError" class="hidden">
			<h3>Loggen Sie sich ein um Ihren Ration zu sehen. <a href="signin.php">Einloggen.</a></h3>
		</div>
	</div>
		<a href="naehrwertzaeler.php"><h4>Neue Dateien hinzufügen</h3></a>
		<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		
      <?include 'includes/js.php' ?>
    <?include 'includes/footer.php'; ?>
</div>
</body>
</html>