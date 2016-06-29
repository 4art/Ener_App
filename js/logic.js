/*need to add!!!! 
angular:
	disactive button
	red border with error text
	dinamic add value
jquery:
	json with valid fron db
	ui to name with auto insert to hidden
*/


var i=2;
$(document).ready(function() {
	$('#button').click(function() {
		var cop = $('#tCop').clone();
		if ($('#tCop'+(i-1)).find('#product'+(i-1)).val()==""||$('#tCop').find('#product'+(i-1)).val()=="") {
			alert('error');
			return;
		}
		cop.attr('id', 'tCop'+i);
		cop.find('#number1').attr('id', 'number'+i).text(i+".");
		cop.find('#product1').attr('id', 'product'+i).val('');
		cop.find('#weight1').attr('id', 'weight'+i).val('');
		cop.find('#protein1').attr('id', 'protein'+i);
		cop.find('#fatt1').attr('id', 'fatt' +i);
		cop.find('#carbonates1').attr('id', 'carbonates'+i);
		cop.find('#kcal1').attr('id', 'kcal'+i);
		cop.find('#hiddenP1').attr('id', 'hiddenP'+i);
		cop.find('#hiddenF1').attr('id', 'hiddenF'+i);
		cop.find('#hiddenC1').attr('id', 'hiddenC'+i);
		cop.find('#hiddenK1').attr('id', 'hiddenK'+i);
		cop.append('<th><a></a></th>').find('a').attr('id', i).text('Löschen');
		cop.appendTo('tbody');
		i++;
		delEl();
		modalAdd();
		//autoCom();
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
/*function autoCom(){
	var data;
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
//}