$(function() {
	var products = [
    {'label': 'hähnchen', 'protein': 0.207, 'fat': 0.085, 'carbo': 0.004, 'kcal':1.99},
    {'label': 'putenfleisch', 'protein': 0.213, 'fat': 0.121, 'carbo': 0.008, 'kcal':1.98},
    {'label': 'gänsefleisch', 'protein': 0.292, 'fat': 0.222, 'carbo': 0.00, 'kcal':3.19},
    
  ];
$("#product1").autocomplete({
	minLength: 0,
	sourse: products,
	focus: function( event, ui ) {
		$( "#product1" ).val(ui.item.label);
		return false;
	},
	select: function( event, ui ){
		$( "#product1" ).val(ui.item.label);
		$('#hiddenP1').val(ui.item.protein);
		$('#hiddenF1').val(ui.item.fat);
		$('#hiddenC1').val(ui.item.carbo);
		$('#hiddenK1').val(ui.item.kcal);
	}

});

});