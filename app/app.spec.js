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
 
    describe("checking AppCtrl", function() {
 
        var $scope, appTemplate, $compile;
        
        // The injector unwraps the underscores (_) from around the parameter names when matching
        beforeEach(angular.mock.inject(function(_$rootScope_, _$controller_, _$templateCache_, _$compile_) {
            $scope = _$rootScope_.$new();
            $compile = _$compile_;
            appTemplate = _$templateCache_.get('app/app.htm');
            _$controller_("AppCtrl as appVm", {
                $scope: $scope
            });
        }));
        
        // Mock/Overides the get of the children controller and/or the directive templates 
        // More info: http://willemmulder.net/post/63827986070/unit-testing-angular-modules-and-directives-with
        beforeEach(angular.mock.inject(function($httpBackend) {
            $httpBackend.
                whenGET('app/summary/summary.htm').
                respond("FAKE HTML");
            $httpBackend.
                whenGET('app/table/table.htm').
                respond("FAKE HTML");
        }));
        
        // START THE TESTS ===
        
        it("title object should be", function() {
            expect($scope.appVm.title).toEqual('Template');
        });
        
        it('should have a updatable title in the template', function(){
            var element = $compile('<div>' + appTemplate + '</div>')($scope);
            $scope.$digest();
            expect(element.find('h1').text()).toBe('Template');
        });
        
        // END THE TESTS ===

    });
});