angular.module('app').factory('DataService', function($rootScope, nlLoad) {
	
	return{
		data: {},
		get: get,
		set: set
	};
	
	//////
	
	function get(){
		// Faking the dwr call
		var self = this;
		nlLoad.add({id: 'DataService'});
		setTimeout(function(){
			$rootScope.$apply(function(){
				var tempObj = {
					summary: 'Summary is here',
					table: 'Table is here'
				};
				self.set(tempObj);
			});
		}, 1000);
		
	}
	function set(obj){
		// Looping through to keep the bindings
		for(var key in obj){
			this.data[key] = obj[key];
		}
		nlLoad.complete({id: 'DataService'});
	}
});