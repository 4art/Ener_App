/*need to add!!!! 
	username and button 'Abmelden' need make resposive for mobile devices
*/

var i=2;
var ses;
$(document).ready(function() {
		sessionCheck();
		autoCom();
		prodCount();
		prodAdd();
		modalAdd();
		addNew();
		sigIn();
		regist();
	$('#addColumn').click(function() {
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
               	source: 'Ajax.php?action=getProd',
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
	//valid
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
					url: 'Ajax.php?action=setProd',
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
function sigIn(){
	//onchange valid
	 var email=$('#inputEmail_Log').val();
	 var pass=$('#inputPassword_Log').val();
	 email=$.trim(email);
	 pass=$.trim(pass);
	$('#inputEmail_Log').change(function() {
		email = $(this).val();
		email = $.trim(email);
		$(this).css('property', 'value');
		if (email=='' || email.length<2) {
			$(this).parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
			$(this).css('background-color', '#ffe6e6');
			$('#error_log').removeClass('errorHid').addClass('errorVis');
			disabledButton($('#login_but'));
		}
		else{
			$(this).parent().removeClass('has-error has-feedback').addClass('has-success has-feedback');
			$(this).css('background-color', 'white');
			$('#error_log').removeClass('errorVis').addClass('errorHid');
			activeButton($('#login_but'));
		}

	});
	$('#inputPassword_Log').change(function() {
		pass = $(this).val();
		pass = $.trim(pass);
		$(this).css('property', 'value');
		if (pass=='' || pass.length<6) {
			$(this).parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
			$(this).css('background-color', '#ffe6e6');
			$('#error_log').removeClass('errorHid').addClass('errorVis');
			disabledButton($('#login_but'));
		}
		else if(!isValidEmailAddress($('#inputEmail_Log').val())){
			$('#inputEmail_Log').parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
			$('#inputEmail_Log').css('background-color', '#ffe6e6');
			$('#error_log').removeClass('errorHid').addClass('errorVis');
			$('#errorEmail_Log').removeClass('errorHid').addClass('errorVis');
			disabledButton($('#login_but'));
			return;	
		}
		else{
			$(this).parent().removeClass('has-error has-feedback').addClass('has-success has-feedback');
			$(this).css('background-color', 'white');
			$('#error_log').removeClass('errorVis').addClass('errorHid');
			$('#errorEmail_Log').removeClass('errorVis').addClass('errorHid');
			activeButton($('#login_but'));
		}

	});
	$('#login_but').click(function() {
		if (email=='' || email.length<2) {
			$('#inputEmail_Log').parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
			$('#inputEmail_Log').css('background-color', '#ffe6e6');
			$('#error_log').removeClass('errorHid').addClass('errorVis');
			return;
		}
		else if(!isValidEmailAddress($('#inputEmail_Log').val())){
			$('#inputEmail_Log').parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
			$('#inputEmail_Log').css('background-color', '#ffe6e6');
			$('#error_log').removeClass('errorHid').addClass('errorVis');
			$('#errorEmail_Log').removeClass('errorHid').addClass('errorVis');
			return;	
		}
		else{
			$('#inputEmail_Log').parent().removeClass('has-error has-feedback').addClass('has-success has-feedback');
			$('#inputEmail_Log').css('background-color', 'white');
			$('#error_log').removeClass('errorVis').addClass('errorHid');
			$('#errorEmail_Log').removeClass('errorVis').addClass('errorHid');
		}
		if (pass=='' || pass.length<2) {
			$('#inputPassword_Log').parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
			$('#inputPassword_Log').css('background-color', '#ffe6e6');
			$('#error_log').removeClass('errorHid').addClass('errorVis');
			return;
		}
		else{
			$('#inputPassword_Log').parent().removeClass('has-error has-feedback').addClass('has-success has-feedback');
			$('#inputPassword_Log').css('background-color', 'white');
			$('#error_log').removeClass('errorVis').addClass('errorHid');
		}
		$.ajax({
			url: 'Ajax.php?action=checkUser',
			type: 'POST',
			dataType: 'html',
			data: {email: $('#inputEmail_Log').val(), password:$('#inputPassword_Log').val()},
			success:function(argument) {
				// check user name and password. 0=false, 1=true
				var result=jQuery.parseJSON(argument);
				//alert(result[0]);
				$('#inputPassword_Log').val('');
				$('#inputEmail_Log').val('');
				if(result[0]==1){
					$('#userName').removeClass('resp_vis').css('color', 'green').html(firstToUpperCase(result[1]));
					$('#info').css('color', 'green').html(firstToUpperCase(result[1]+', Sie haben sich erfolgreich eingelogt! ')+'<br><br><a href="naehrwertzaeler.php">Zum Nährwertzähler.</a>');
					$('#loginExit').parent().removeClass('hidden');
					$('#loginExit').click(function(event) {
					/* close session onclick */
					location.reload();
					sessionClose();
				});
					//setTimeout(function(){ location.reload(); }, 1000);

				}
				else{
					$('#info').css('color', '#ff8080').html('Login oder Kennwort ist falsch.');
					$('#inputPassword_Log').parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
					$('#inputEmail_Log').parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
					sessionClose();
				}
				/*if (argument==0) {

					alert('fehler');
				}
				else{
					
				}*/
			}
		});
	});

}
function regist() {
	// body...
	var name;
	var email;
	var password;
	var rePassword;
	$('#inputName_Reg').change(function() {
			/* valid onChange */
		var Value=$(this).val();
		Value=$.trim(Value);
		name=Value;
		checkNameReg(name);
		if(Value.length<2 || Value==''){
			$(this).parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
			$(this).css('background-color', '#ffe6e6');
			$('#error_regist').removeClass('errorHid').addClass('errorVis');
			disabledButton($('#reg_but'));
			return;
		}
		else if (status==1) {
			$(this).parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
			$(this).css('background-color', '#ffe6e6');
			$('#logUniqError').removeClass('errorHid').addClass('errorVis');
			disabledButton($('#reg_but'));
			return;
		}
		else{
			$(this).parent().removeClass('has-error has-feedback').addClass('has-success has-feedback');
			$(this).css('background-color', 'white');
			$('#error_regist').removeClass('errorVis').addClass('errorHid');
			$('#logUniqError').removeClass('errorVis').addClass('errorHid');
			activeButton($('#reg_but'));
		}
	});		
	$('#inputEmail_Reg').change(function() {
			/* valid onChange */
		var Value=$(this).val();
		Value=$.trim(Value);
		email=Value;
		checkEmailReg(email);
		if(Value.length<2 || Value==''){
			$(this).parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
			$(this).css('background-color', '#ffe6e6');
			$('#error_regist').removeClass('errorHid').addClass('errorVis');
			disabledButton($('#reg_but'));
			return;
		}
		else if(!isValidEmailAddress(Value)){
			$(this).parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
			$(this).css('background-color', '#ffe6e6');
			$('#emailError').removeClass('errorHid').addClass('errorVis');
			disabledButton($('#reg_but'));
			return;
		}
		else{
			$(this).parent().removeClass('has-error has-feedback').addClass('has-success has-feedback');
			$(this).css('background-color', 'white');
			$('#error_regist').removeClass('errorVis').addClass('errorHid');
			$('#emailError').removeClass('errorVis').addClass('errorHid');
			activeButton($('#reg_but'));
		}
	});		
	$('#inputPassword_Reg').change(function() {
			/* valid onChange */
		var Value=$(this).val();
		Value=$.trim(Value);
		password=Value;
		if(Value.length<6 || Value==''){
			$(this).parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
			$(this).css('background-color', '#ffe6e6');
			$('#inputPassword_Reg_re').parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
			$('#inputPassword_Reg_re').css('background-color', '#ffe6e6');
			$('#error_regist').removeClass('errorHid').addClass('errorVis');
			$('#password_error_reg').removeClass('errorHid').addClass('errorVis');
			disabledButton($('#reg_but'));
			return;
		}
		else{
			$(this).parent().removeClass('has-error has-feedback').addClass('has-success has-feedback');
			$(this).css('background-color', 'white');
			$('#error_regist').removeClass('errorVis').addClass('errorHid');
			$('#password_error_reg').removeClass('errorVis').addClass('errorHid');
			activeButton($('#reg_but'));
		}

	});		
	$('#inputPassword_Reg_re').change(function() {
			/* valid onChange */
		var Value=$(this).val();
		Value=$.trim(Value);
		rePassword=Value;
		if(Value.length<6 || Value=='' || Value!=password){
			$(this).parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
			$(this).css('background-color', '#ffe6e6');
			$('#inputPassword_Reg').parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
			$('#inputPassword_Reg').css('background-color', '#ffe6e6');
			$('#error_regist').removeClass('errorHid').addClass('errorVis');
			disabledButton($('#reg_but'));
			return;
		}
		else{
			$(this).parent().removeClass('has-error has-feedback').addClass('has-success has-feedback');
			$(this).css('background-color', 'white');
			$('#error_regist').removeClass('errorVis').addClass('errorHid');
			activeButton($('#reg_but'));
		}
	});	
	$('#reg_but').click(function() {
		/* valid onClick */
		checkNameReg($('#inputName_Reg').val());
		if ($('#inputName_Reg').val().length<2 || $('#inputName_Reg').val()=='') {
			$('#inputName_Reg').parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
			$('#inputName_Reg').css('background-color', '#ffe6e6');
			$('#error_regist').removeClass('errorHid').addClass('errorVis');
			return;
		}
		else{
			$('#inputName_Reg').parent().removeClass('has-error has-feedback').addClass('has-success has-feedback');
			$('#inputName_Reg').css('background-color', 'white');
			$('#error_regist').removeClass('errorVis').addClass('errorHid');
		}
		checkEmailReg($('#inputEmail_Reg').val());
		if($('#inputEmail_Reg').val().length<5 || $('#inputEmail_Reg').val()==''){
			$('#inputEmail_Reg').parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
			$('#inputEmail_Reg').css('background-color', '#ffe6e6');
			$('#error_regist').removeClass('errorHid').addClass('errorVis');
		}
		else if(!isValidEmailAddress($('#inputEmail_Reg').val())){
			$('#inputEmail_Reg').parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
			$('#inputEmail_Reg').css('background-color', '#ffe6e6');
			$('#emailError').removeClass('errorHid').addClass('errorVis');
		}
		else{
			$('#inputEmail_Reg').parent().removeClass('has-error has-feedback').addClass('has-success has-feedback');
			$('#inputEmail_Reg').css('background-color', 'white');
			$('#error_regist').removeClass('errorVis').addClass('errorHid');
			$('#emailError').removeClass('errorVis').addClass('errorHid');
		}
		if($('#inputPassword_Reg').val().length<6 || $('#inputPassword_Reg').val()==''){
			$('#inputPassword_Reg').parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
			$('#inputPassword_Reg').css('background-color', '#ffe6e6');
			$('#inputPassword_Reg_re').parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
			$('#inputPassword_Reg_re').css('background-color', '#ffe6e6');
			$('#error_regist').removeClass('errorVis').addClass('errorHid');
			$('#error_regist').removeClass('errorVis').addClass('errorHid');
			return;
		}
		else{
			$('#inputPassword_Reg').parent().removeClass('has-error has-feedback').addClass('has-success has-feedback');
			$('#inputPassword_Reg').css('background-color', 'white');
			$('#error_regist').removeClass('errorVis').addClass('errorHid');
			$('#error_regist').removeClass('errorVis').addClass('errorHid');
		}
		if($('#inputPassword_Reg_re').val().length<6 ||
		 $('#inputPassword_Reg_re').val()=='' ||
		  $('#inputPassword_Reg_re').val()!=$('#inputPassword_Reg').val()){
			$('#inputPassword_Reg_re').parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
			$('#inputPassword_Reg_re').css('background-color', '#ffe6e6');
			$('#inputPassword_Reg').parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
			$('#inputPassword_Reg').css('background-color', '#ffe6e6');
			$('#error_regist').removeClass('errorHid').addClass('errorVis');
			return;
		}
		else{
			$('#inputPassword_Reg_re').parent().removeClass('has-error has-feedback').addClass('has-success has-feedback');
			$('#inputPassword_Reg_re').css('background-color', 'white');
			$('#inputPassword_Reg').parent().removeClass('has-error has-feedback').addClass('has-success has-feedback');
			$('#inputPassword_Reg').css('background-color', 'white');
			$('#error_regist').removeClass('errorVis').addClass('errorHid');
		}
		//send data to DB
		nameUser=$('#inputName_Reg').val();
		emailUser=$('#inputEmail_Reg').val();
		passwordUser=$('#inputPassword_Reg').val();
		var dataUser={name:nameUser, email:emailUser, password:passwordUser};
		$.ajax({
			url: 'Ajax.php?action=saveUser',
			type: 'POST',
			dataType: 'html',
			data: dataUser,
			success:function(argument) {
				// result
				//alert(argument);
				$('#inputName_Reg').val('');
				$('#inputEmail_Reg').val('');
				$('#inputPassword_Reg').val('');
				$('#inputPassword_Reg_re').val('');
				location.reload();

			}
		});
	});
}
function checkNameReg(Value) {
	// check uniq for login 
	var data={name:Value};
	var status;
	$.ajax({
		url: 'Ajax.php?action=checkNameReg',
		type: 'POST',
		dataType: 'html',
		data: data,
		success:function(argument) {
			// 0=uniq, 1=login is not uniq
			//alert(argument);
			if (argument==1) {
				$('#inputName_Reg').parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
				$('#inputName_Reg').css('background-color', '#ffe6e6');
				$('#logUniqError').removeClass('errorHid').addClass('errorVis');
				$('#logUniqSuccess').removeClass('successVis').addClass('successHid');
				disabledButton($('#reg_but'));
				return;
			}
			else{
				$('#logUniqError').removeClass('errorVis').addClass('errorHid');
				$('#logUniqSuccess').removeClass('successHid').addClass('successVis');
				activeButton($('#reg_but'));
			}
		}

	});
}
function checkEmailReg(Value) {
	// check uniq for email
	$.ajax({
		url: 'Ajax.php?action=checkEmailReg',
		type: 'POST',
		dataType: 'html',
		data: {email: Value},
		success:function(argument) {
			if (argument==1) {
				$('#inputEmail_Reg').parent().removeClass('has-success has-feedback').addClass('has-error has-feedback');
				$('#inputEmail_Reg').css('background-color', '#ffe6e6');
				$('#emailUniqError').removeClass('errorHid').addClass('errorVis');
				disabledButton($('#reg_but'));
				return;
			}
			else{
				$('#emailUniqError').removeClass('errorVis').addClass('errorHid');
				activeButton($('#reg_but'));
			}
		}
	});
	
}
function disabledButton(Value) {
	// body...
	Value.attr('disabled', true);
	Value.removeClass(' btn-primary').addClass(' btn-default');
}
function activeButton(Value) {
	// body...
	Value.attr('disabled', false);
	Value.removeClass(' btn-default').addClass(' btn-primary');
}
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
}
function firstToUpperCase( str ) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
}
function sessionClose() {
	$.ajax({
		url: 'Ajax.php?action=sessionClose',
		type: 'POST',
		dataType: 'html',
		success:function(argument) {
			// body...

		}
	});
	
}
function sessionCheck(argument) {
	// session check
	$.ajax({
		url: 'Ajax.php?action=sessionCheck',
		type: 'POST',
		dataType: 'html',
		success:function(argument) {
			// body...
			//alert(argument);
			var result=jQuery.parseJSON(argument);
			if (result[0]==1) {
				//nav-bar set name
				$('#userName').removeClass('resp_vis').css('color', 'green').html(firstToUpperCase(result[1]));
				$('#loginExit').parent().removeClass('hidden');
				$('#loginExit').click(function(event) {
					/* close session onclick */
					location.reload();
					sessionClose();
				});
				//naehrwertzaeler.php profile info
				$('#sessionSuccess').removeClass('hidden');
				addRation();
			}
			else{
				//nav-bar set name
				$('#userName').removeClass('resp_vis').css('color', '#ff8080').html('Gast');
				//naehrwertzaeler.php profile info
				$('#sessionError').removeClass('hidden');

			}

		}
	});
	
}
function addRation() {
	// body...
	$('#saveRation').click(function() {
		/* save ration onClick fron table */
		var count = i;
		//alert(count);
		for (var j = 1; j < count; j++) {
			if (parseInt($('#protein'+j).text())!=0 || $('#protein'+j).text()!="") {
				if ($('#product'+j).val()!='' || $('#weight'+j).val()!='') {
					alert($('#product'+j).val()+' '+$('#weight'+j).val());

					
				}
			}	
		}


	});
}