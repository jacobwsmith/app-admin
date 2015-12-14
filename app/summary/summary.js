angular.module('app').controller('SummaryCtrl', function($scope, DataService) {
	
	var summaryVm = this;
	summaryVm.data = DataService.data;
	
	//////
	
});