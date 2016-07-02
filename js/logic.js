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
		prodAdd();
		modalAdd();
	$('#button').click(function() {
		var cop = $('#tCop').clone();
		if ($('#tCop'+(i-1)).find('#product'+(i-1)).val()==""||$('#tCop').find('#product'+(i-1)).val()=="") {
			$('#product'+(i-1)).addClass('error');
			$('#weight'+(i-1)).addClass('error');
			$('#errorText').removeClass('errorHid').addClass('errorVis');//error on
			return;
		}
		else if ($('#tCop'+(i-1)).find('#weight'+(i-1)).val()==""||$('#tCop').find('#weight'+(i-1)).val()=="") {
			$('#weight'+(i-1)).addClass('error');
			$('#errorText').removeClass('errorHid').addClass('errorVis');//error on
			return;
		}
		cop.attr('id', 'tCop'+i);
		cop.find('#number1').attr('id', 'number'+i).text(i+".");
		cop.find('#product1').attr('id', 'product'+i).removeAttr('readonly').removeClass('success').val('');
		cop.find('#weight1').attr('ng-model', 'weight'+i).removeAttr('readonly').removeClass('success').attr('id', 'weight'+i).val('');
		cop.find('#protein1').attr('id', 'protein'+i).empty();
		cop.find('#fat1').attr('id', 'fat' +i).empty();
		cop.find('#carbonates1').attr('id', 'carbonates'+i).empty();
		cop.find('#kcal1').attr('id', 'kcal'+i).empty();
		cop.find('#hiddenP1').attr('ng-model', 'protein'+i).attr('id', 'hiddenP'+i);
		cop.find('#hiddenF1').attr('ng-model', 'fat'+i).attr('id', 'hiddenF'+i);
		cop.find('#hiddenC1').attr('ng-model', 'carbo'+i).attr('id', 'hiddenC'+i);
		cop.find('#hiddenK1').attr('ng-model', 'kcal'+i).attr('id', 'hiddenK'+i);
		//cop.append('<th><a></a></th>').find('a').attr('id', i).text('Löschen');
		cop.appendTo('tbody');
		/*$('#errorText').removeClass('errorHid').addClass('errorVis');
		$('#product'+i).addClass('error');
		$('#weight'+i).addClass('error');*/
		i++;
		//delEl();
		prodCount();
		prodAdd();
		autoCom();

	});
});
/*function delEl(){
	$('a').click(function() {
		var el_id = $(this).attr('id');
		if ($(this).parent().parent().find('#protein'+el_id).text()!="" && $(this).parent().parent().find('#fat'+el_id).text()!="" && $(this).parent().parent().find('#carbonates'+el_id).text()!="" && $(this).parent().parent().find('#kcal'+el_id).text()!="") {
			$('#protGen').text(parseFloat($('#protGen').text())-parseFloat($(this).parent().parent().find('#protein'+el_id).text()));
			$('#fatGen').text(parseFloat($('#fatGen').text())-parseFloat($(this).parent().parent().find('#fat'+el_id).text()));
			$('#carboGen').text(parseFloat($('#carboGen').text())-parseFloat($(this).parent().parent().find('#carbonates'+el_id).text()));
			$('#kcalGen').text(parseFloat($('#kcalGen').text())-parseFloat($(this).parent().parent().find('#kcal'+el_id).text()));
			$('#weiGen').text(parseFloat($('#weiGen').text())-parseFloat($(this).parent().parent().find('weight'+el_id).val()))
			$('#tCop'+el_id).remove();
		}
		else{
			$('#tCop'+el_id).remove();
		}
		//alert('tCop'+el_id);
	});
}*/
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
			if ($('#product'+(i-1)).val()!="") {
				$(this).removeClass('error');
				$('#product'+(i-1)).removeClass('error');	
				$('#protein'+(i-1)).text(($(this).val()*$('#hiddenP'+(i-1)).val()).toFixed(2));
				$('#fat'+(i-1)).text(($(this).val()*$('#hiddenF'+(i-1)).val()).toFixed(2));
				$('#carbonates'+(i-1)).text(($(this).val()*$('#hiddenC'+(i-1)).val()).toFixed(2));
				$('#kcal'+(i-1)).text(($(this).val()*$('#hiddenK'+(i-1)).val()).toFixed(2));
				if ($('#weiGen').text()!="" || $('#protGen').text()!="" || $('#fatGen').text()!=""|| $('#carboGen').text()!=""|| $('#kcalGen').text()!="") {
					$('#weiGen').text((parseInt($('#weiGen').text())+parseInt($(this).val())).toFixed(2));
					$('#protGen').text((parseFloat($('#protein'+(i-1)).text())+parseFloat($('#protGen').text())).toFixed(2));
					$('#fatGen').text((parseFloat($('#fat'+(i-1)).text())+parseFloat($('#fatGen').text())).toFixed(2));
					$('#carboGen').text((parseFloat($('#carbonates'+(i-1)).text())+parseFloat($('#carboGen').text())).toFixed(2));
					$('#kcalGen').text((parseFloat($('#kcal'+(i-1)).text())+parseFloat($('#kcalGen').text())).toFixed(2));
					if ($('#product'+(i-1)).val()!="") {	
						$(this).attr('readonly', '').addClass('success');
						$('#product'+(i-1)).attr('readonly', '').addClass('success');
						$('#errorText').removeClass('errorVis').addClass('errorHid');//valid off
					}
				}
				else{
					$('#weiGen').text($('#weiGen').text()+parseInt($(this).val()));
					$('#protGen').text($('#protein'+(i-1)).text());
					$('#fatGen').text($('#fat'+(i-1)).text());
					$('#carboGen').text($('#carbonates'+(i-1)).text());
					$('#kcalGen').text($('#kcal'+(i-1)).text());
					$(this).attr('readonly', '').addClass('success');
						if ($('#product1'+(i-1)).val()!="") {	
						$(this).attr('readonly', '').addClass('success');
						$('#product'+(i-1)).attr('readonly', '').addClass('success');
						$('#errorText').removeClass('errorVis').addClass('errorHid');//valid off
					}
				}
			}
			else{
				$('#product'+(i-1)).addClass('error');
				$('#errorText').removeClass('errorHid').addClass('errorVis');//error on

			}
		});
}
function prodAdd(){
	$('#product'+(i-1)).blur(function() {
		$(this).removeClass('error');
		$('#weight'+(i-1)).addClass('error').val('');
		$('#errorText').removeClass('errorHid').addClass('errorVis');//error on
	});
}