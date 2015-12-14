angular.module('app', ['nlModal'])

	.controller('AppCtrl', function($scope, DataService) {
	
		var appVm = this;
		appVm.title = 'Template';
		appVm.data = DataService.data;
		appVm.loaded = false;
		
		//////
		
		DataService.get();
		
		$scope.$watch('appVm.data', function(){
			if($.isEmptyObject(appVm.data) === false){
				appVm.loaded = true;
			}
		}, true);
	
	});