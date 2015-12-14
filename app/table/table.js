angular.module('app').controller('TableCtrl', function($scope, DataService) {
	
	var tableVm = this;
	tableVm.data = DataService.data;
	
	//////
	
});