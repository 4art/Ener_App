/*need to add!!!! 

	jquery and php:
		valid for limit to add identical product
		valid onchange
		float for weiget
*/

var i=2;
$(document).ready(function() {
		autoCom();
		prodCount();
		prodAdd();
		modalAdd();
		addNew();
	$('#button').click(function() {
		var cop = $('#tCop').clone();
		if ($('#tCop'+(i-1)).find('#product'+(i-1)).val()=="" || 
			$('#tCop').find('#product'+(i-1)).val()=="") {
			$('#product'+(i-1)).addClass('error');
			$('#weight'+(i-1)).addClass('error');
			$('#errorText').removeClass('errorHid').addClass('errorVis');//error on
			return;
		}
		else if ($('#tCop'+(i-1)).find('#weight'+(i-1)).val()=="" || 
			$('#tCop').find('#weight'+(i-1)).val()=="") {
			$('#weight'+(i-1)).addClass('error');
			$('#errorText').removeClass('errorHid').addClass('errorVis');//error on
			return;
		}
		cop.attr('id', 'tCop'+i);
		cop.find('#number1').attr('id', 'number'+i).text(i+".");
		cop.find('#product1').attr('id', 'product'+i).removeAttr('readonly').removeClass('success').val('');
		cop.find('#weight1')./*attr('ng-model', 'weight'+i).*/removeAttr('readonly').removeClass('success').attr('id', 'weight'+i).val('');
		cop.find('#protein1').attr('id', 'protein'+i).empty();
		cop.find('#fat1').attr('id', 'fat' +i).empty();
		cop.find('#carbonates1').attr('id', 'carbonates'+i).empty();
		cop.find('#kcal1').attr('id', 'kcal'+i).empty();
		cop.find('#hiddenP1')./*attr('ng-model', 'protein'+i).*/attr('id', 'hiddenP'+i);
		cop.find('#hiddenF1')./*attr('ng-model', 'fat'+i).*/attr('id', 'hiddenF'+i);
		cop.find('#hiddenC1')./*attr('ng-model', 'carbo'+i).*/attr('id', 'hiddenC'+i);
		cop.find('#hiddenK1')./*attr('ng-model', 'kcal'+i).*/attr('id', 'hiddenK'+i);
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
               	source: 'Ajax.php?action=get',
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
			if ($(this).val()<0) {
				$(this).addClass('error');
				$('#errorText').removeClass('errorHid').addClass('errorVis');
				return;
			}
			if ($('#product'+(i-1)).val()!="") {
				$(this).removeClass('error');
				$('#product'+(i-1)).removeClass('error');	
				$('#protein'+(i-1)).text(($(this).val()*$('#hiddenP'+(i-1)).val()).toFixed(2));
				$('#fat'+(i-1)).text(($(this).val()*$('#hiddenF'+(i-1)).val()).toFixed(2));
				$('#carbonates'+(i-1)).text(($(this).val()*$('#hiddenC'+(i-1)).val()).toFixed(2));
				$('#kcal'+(i-1)).text(($(this).val()*$('#hiddenK'+(i-1)).val()).toFixed(2));
				if ($('#weiGen').text()!="" || 
					$('#protGen').text()!="" || 
					$('#fatGen').text()!=""|| 
					$('#carboGen').text()!=""|| 
					$('#kcalGen').text()!="") {
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
function addNew() {//validation
	
	$('#newDateSave').click(function() {
		var prodNameNew = $('#newProdName');
		var protNew = $('#newEiweis');
		var fatNew = $('#newFat');
		var carboNew = $('#newCarbo');
		var kcalNew = $('#newKcal');
		//valid
		if ($.trim(prodNameNew.val())=="" || $.trim(prodNameNew.val()).length<2) {
			addErr(prodNameNew);

		}
		else if ($.trim(prodNameNew.val()).search(/\d/) != -1 ) {
			addErr(prodNameNew);
			$('#errorModNum').removeClass('errorHid').addClass('errorVis');
		}
		else{
			delErr(prodNameNew);
			$('#errorModNum').removeClass('errorVis').addClass('errorHid');
		}
		if (protNew.val()=="" || parseFloat(protNew.val())<0 || parseFloat(protNew.val())>100) {
			addErr(protNew);

		}
		else{
			delErr(protNew);
		}
		if (fatNew.val()=="" || parseFloat(fatNew.val())<0 || parseFloat(fatNew.val())>100) {
			addErr(fatNew);

		}
		else{
			delErr(fatNew);
		}
		if (carboNew.val()=="" || parseFloat(carboNew.val())<0 || parseFloat(carboNew.val())>100) {
			addErr(carboNew);

		}
		else{
			delErr(carboNew);
		}
		if (kcalNew.val()=="" || parseFloat(kcalNew.val())<0 || parseFloat(kcalNew.val())>910) {
			addErr(kcalNew);

		}
		else{
			delErr(kcalNew);
		}
		if (parseFloat(protNew.val())+parseFloat(fatNew.val())+parseFloat(carboNew.val())>100) {
			$('#errorCountText').removeClass('errorHid').addClass('errorVis');
		}
		else{
			$('#errorCountText').removeClass('errorVis').addClass('errorHid');
			//send data to server
				var dataArr = {
					"items":[
								{"label":$('#newProdName').val(), 
								"protein":parseFloat($('#newEiweis').val()),
								"fat":parseFloat($('#newFat').val()),
								"carbonates":parseFloat($('#newCarbo').val()),
								"kcal":parseFloat($('#newKcal').val())
							}
				
								]};
				$.ajax({
					url: 'Ajax.php?action=set',
					type: 'POST',
					data: JSON.stringify(dataArr),
					//contentType: 'application/json; charset=utf-8',
					//dataType: 'json',
					//async: false,
					success: function(msg) {
				        //alert(msg);
				        prodNameNew.val('');
				        protNew.val('');
				        fatNew.val('');
				        carboNew.val('');
				        kcalNew.val('');
				    }
				});
		}
		

			function addErr(value){ //add Error
				value.addClass('error');
				$('#errorModText').removeClass('errorHid').addClass('errorVis');
			}
			function delErr(value){//delete Error
				value.removeClass('error');
				$('#errorModText').removeClass('errorVis').addClass('errorHid');
			}
	});
}