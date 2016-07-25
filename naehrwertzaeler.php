<!DOCTYPE html>
<html lang="de">
<head>
  <title>Metra</title>
  <?include 'includes/meta.php'; ?>
</head>
<body>
<div class="container" ng-app="">
	<?include 'includes/nav-bar.php'; ?>
	<h2>Nährwertzähler</h2>
	<p>Fang zu schreiben am ersten Feld an.</p>
	<div class="table-responsive">
		
	  	<table class="table table-hover">
	    	<thead>
	    	  <tr>
	    	    	<th class="col_1"><p>№ ▼</p></th>
	    	        <th class="col_2"><p>Lebensmittel<span class="resp_hid"> ▼</span></p></th>
	    	        <th class="col_3"><p><span class="resp_hid">Gewicht (Gramm)▼ </span><span class="resp_vis">Gewicht (g)</span></p></th>
	    	        <th class="col_4"><p>Eiweiße<span class="resp_hid"> (Gramm)▼ </span></p></th>
	    	        <th class="col_5"><p>Fette<span class="resp_hid"> (Gramm)▼ </span></p></th>
	    	        <th class="col_6"><p><span class="resp_hid">Kohlenhydrate (Gramm)▼ </span><span class="resp_vis">Kohlen-<br>hydraten</span></p></th>
	    	        <th class="col_7"><p><span class="resp_hid">Kilokalorien (</span>kcal<span class="resp_hid">)▼ </span></p></th>
	    	  </tr>
	    	</thead>
		<form method="post" name="prodForm" id="form">
	    	<tbody>
	    	  		<tr id="tCop">
	    	            <th class="col_1" id="number1">1.</th>
	    	            <th class="col_2"><input class="prodInp" type='text' id="product1"></th>
	    	            <th class="col_3"><input class="prodInp" type="number" id="weight1"/></th>
	    	            <th class="col_4" id="protein1"></th>
	    	            <th class="col_5" id="fat1"></th>
	    	            <th class="col_6" id="carbonates1"></th>
	    	            <th class="col_7" id="kcal1"></th>
	    	            <input type="hidden" id="hiddenP1">
	    	            <input type="hidden" id="hiddenF1">
	    	            <input type="hidden" id="hiddenC1">
	    	            <input type="hidden" id="hiddenK1">
	    	        </tr>
	    	</tbody>
	    	<tfoot>
	    	  
	    	    <tr>
	    	        <th class="col_1"></th>
	    	        <th class="col_2"></th>
	    	        <th class="col_3" id="weiGen"></th>
	    	        <th class="col_4" id="protGen"></th>
	    	        <th class="col_5" id="fatGen"></th>
	    	        <th class="col_6" id="carboGen"></th>
	    	        <th class="col_7" id="kcalGen"></th>
	    	    </tr>
	    	</tfoot>
	  	</table>
	</div>
		<button type="button" class="btn btn-primary" id="addColumn">Hinzufügen</button>
		<br>
		<p id="errorText" class="errorHid">*Fühllen Sie richtig die passende Felder aus.</p>
		</form>
  		<br/><br/>
  		<div class="hidden" id="sessionSuccess">
			<button class="btn btn-danger" id="saveRation">Der Ration ins Profil Speichern</button>
			<a style="margin-left:15px;" href="myrat.php">Mein Ration.</a>

			<br><br><br><br><br><br><br><br><br>
  		</div>
  		<div id="sessionError" class="hidden" >
  			<p class="errorVis">Loggen Sie sich ein, damit den Ration ins Profil speichern. <a href="signin.php">Einloggen.</a></p>
  		</div>
		<span><h4>Fehlt etwas?? Sie können neue Datei<a id="addNeu"> hinzufügen.</a></h4></span>
		<br><br><br><br><br><br><br><br><br><br>

  <div id="modal" class="modal fade" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Neue Datei<a id="modalAdd" data-dismiss="modal"> hinzufügen.</a></h4>
        </div>
        <div class="modal-body">
	        <tr>
		  		<th><input type="text" id="newProdName" placeholder="Name vom Lebensmittel"></th>
		  		<th><input type="number" id="newEiweis" placeholder="Eiweis pro 100 gr."></th>
		  		<th><input type="number" id="newFat" placeholder="Fette pro 100 gr."></th>
		  		<th><input type="number" id="newCarbo" placeholder="Kohlenhydraten pro 100 gr."></th>
		  		<th><input type="number" id="newKcal" placeholder="Kcal pro 100 gr."></th>
	  		</tr>
  			<button type="button" class="btn btn-link" id="newDateSave">Neues Lebensmittel hinzufügen</button>
  			<p id="errorModText" class="errorHid">*Fühllen Sie richtig die passende Felder aus.</p> 
  			<p id="errorCountText" class="errorHid">*Die Summe von die drei Felder muss nicht größer als 100g sein.</p>
  			<p id="errorModNum" class="errorHid">*Schreiben Sie bitte die Name ohne Ziffern.</p> 
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
      <?include 'includes/js.php' ?>
    <?include 'includes/footer.php'; ?>
</div>
</body>
</html>