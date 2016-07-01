/*need to add!!!! 
angular:
	disactive button
	red border with error text
	dinamic add value
jquery:
	json with valid fron db
	toFixed(2);
*/

var i=2;
var products = [
    {'label': 'hähnchen', 'protein': 0.207, 'fat': 0.085, 'carbo': 0.004, 'kcal':1.99},
    {'label': 'putenfleisch', 'protein': 0.213, 'fat': 0.121, 'carbo': 0.008, 'kcal':1.98},
    {'label': 'gänsefleisch', 'protein': 0.292, 'fat': 0.222, 'carbo': 0.00, 'kcal':3.19},
    
  ];
$(document).ready(function() {
		autoCom();
		prodCount();
	$('#button').click(function() {
		var cop = $('#tCop').clone();
		if ($('#tCop'+(i-1)).find('#product'+(i-1)).val()==""||$('#tCop').find('#product'+(i-1)).val()=="") {
			alert('error');
			return;
		}
		cop.attr('id', 'tCop'+i);
		cop.find('#number1').attr('id', 'number'+i).text(i+".");
		cop.find('#product1').attr('id', 'product'+i).val('');
		cop.find('#weight1').attr('ng-model', 'weight'+i).attr('id', 'weight'+i).val('');
		cop.find('#protein1').attr('id', 'protein'+i).empty();
		cop.find('#fat1').attr('id', 'fat' +i).empty();
		cop.find('#carbonates1').attr('id', 'carbonates'+i).empty();
		cop.find('#kcal1').attr('id', 'kcal'+i).empty();
		cop.find('#hiddenP1').attr('ng-model', 'protein'+i).attr('id', 'hiddenP'+i);
		cop.find('#hiddenF1').attr('ng-model', 'fat'+i).attr('id', 'hiddenF'+i);
		cop.find('#hiddenC1').attr('ng-model', 'carbo'+i).attr('id', 'hiddenC'+i);
		cop.find('#hiddenK1').attr('ng-model', 'kcal'+i).attr('id', 'hiddenK'+i);
		cop.append('<th><a></a></th>').find('a').attr('id', i).text('Löschen');
		cop.appendTo('tbody');
		i++;
		delEl();
		prodCount();
		modalAdd();
		autoCom();

	});
});
function delEl(){
	$('a').click(function() {
		var el_id = $(this).attr('id');
		$('#tCop'+el_id).remove();
		//alert('tCop'+el_id);
	});
}
function modalAdd(){
	$('#addNeu').click(function() {
		$('#modal').modal();
	        return false;
	});
}
function autoCom(){
	/*var data;
	$.ajax({
	url: 'content.php',
	type: 'POST',
	success: function(html){
	data = html;
	}
	});
					alert(data);
					
                    /*$("#product1").autocomplete({
                        source:'content.php',
                        minLength:1
                    });*/


            $( "#product"+(i-1) ).autocomplete({
               	source: products,
               	select: function(event, ui){
                	$('#hiddenP'+(i-1)).val(ui.item.protein);
                	$('#hiddenF'+(i-1)).val(ui.item.fat);
                	$('#hiddenC'+(i-1)).val(ui.item.carbo);
                	$('#hiddenK'+(i-1)).val(ui.item.kcal);
                 
               }
            });

}
function prodCount(){
	$('#weight'+(i-1)).change(function() {
			$('#protein'+(i-1)).text($(this).val()*$('#hiddenP'+(i-1)).val());
			$('#fat'+(i-1)).text($(this).val()*$('#hiddenF'+(i-1)).val());
			$('#carbonates'+(i-1)).text($(this).val()*$('#hiddenC'+(i-1)).val());
			$('#kcal'+(i-1)).text($(this).val()*$('#hiddenK'+(i-1)).val());
			if ($('#weiGen').text()!="" || $('#protGen').text()!="" || $('#fatGen').text()!=""|| $('#carboGen').text()!=""|| $('#kcalGen').text()!="") {
				$('#weiGen').text(parseInt($('#weiGen').text())+parseInt($(this).val()));
				$('#protGen').text(parseFloat($('#protein'+(i-1)).text())+parseFloat($('#protGen').text()));
				$('#fatGen').text(parseFloat($('#fat'+(i-1)).text())+parseFloat($('#fatGen').text()));
				$('#carboGen').text(parseFloat($('#carbonates'+(i-1)).text())+parseFloat($('#carboGen').text()));
				$('#kcalGen').text(parseFloat($('#kcal'+(i-1)).text())+parseFloat($('#kcalGen').text()));
				

			}
			else{
				$('#weiGen').text($('#weiGen').text()+parseInt($(this).val()));
				$('#protGen').text($('#protein'+(i-1)).text());
				$('#fatGen').text($('#fat'+(i-1)).text());
				$('#carboGen').text($('#carbonates'+(i-1)).text());
				$('#kcalGen').text($('#kcal'+(i-1)).text());
			}
		});
}