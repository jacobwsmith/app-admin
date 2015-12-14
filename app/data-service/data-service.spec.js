describe("app", function() {
 
    beforeEach(module('app'));
    
    describe("checking DataService", function() {
 
        it("can get an instance of Data Service", inject(function(DataService) {
            expect(DataService).toBeDefined();
        }));
        
        it("does have data object", inject(function(DataService) {
            expect(DataService.data).toBeDefined();
        }));
        
        it("does have get method", inject(function(DataService) {
            expect(DataService.get).toBeDefined();
        }));
        
        it("does have set method", inject(function(DataService) {
            expect(DataService.set).toBeDefined();
        }));

    });
});