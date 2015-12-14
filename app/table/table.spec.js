describe("app", function() {
 
    // Load the templates which is the templateUrls
    // that is defined in the karma.conf.js
    beforeEach(module('templates'));
 
    // Create/Mocks the DataService
    beforeEach(module('app', function($provide){
        $provide.factory('DataService', function(){ 
            return {
                data: {},
                get: function(){},
                set: function(){}
            };
        });
    }));
 
    describe("checking TableCtrl", function() {
 
        var $scope, appTemplate, $compile;
        
        // The injector unwraps the underscores (_) from around the parameter names when matching
        beforeEach(angular.mock.inject(function(_$rootScope_, _$controller_, _$templateCache_, _$compile_) {
            $scope = _$rootScope_.$new();
            $compile = _$compile_;
            appTemplate = _$templateCache_.get('app/table/table.htm');
            _$controller_("TableCtrl as tableVm", {
                $scope: $scope
            });
        }));
        
        // START TESTS ====
        
         it('h3 should be', function(){
            var element = $compile('<div>' + appTemplate + '</div>')($scope);
            $scope.$digest();
            expect(element.find('h3').text()).toBe('Table');
        });
        
        it('p should be', function(){
            $scope.tableVm.data.table = 'Test Data';
            var element = $compile('<div>' + appTemplate + '</div>')($scope);
            $scope.$digest();
            expect(element.find('p').text()).toBe('Test Data');
        });
        
        // END TESTS ===

    });
});