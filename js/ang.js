var app=/**
* app Module
*
* Description
*/
angular.module('app', []);

app.controller('mainCtrl', function($scope){
	$scope.products = [
    {'name': 'hähnchen', 'protein': 0.207, 'fat': 0.085, 'carbo': 0.004, 'kcal':1.99},
    {'name': 'putenfleisch', 'protein': 0.213, 'fat': 0.121, 'carbo': 0.008, 'kcal':1.98},
    {'name': 'gänsefleisch', 'protein': 0.292, 'fat': 0.222, 'carbo': 0.00, 'kcal':3.19},
    
  ];
});
app.directive('autoComplete', function($timeout) {
    return function(scope, iElement, iAttrs) {
            iElement.autocomplete({
                source: scope[iAttrs.uiItems],
                select: function() {
                    $timeout(function() {
                      iElement.trigger('input');
                    }, 0);
                }
            });
    };
});
