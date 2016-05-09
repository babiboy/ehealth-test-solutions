/**
 * Created by Chima on 8/12/2015.
 */

describe('pouchdb put test', function() {
    var db;
    beforeEach(function () {
        var $injector = angular.injector(['ng', 'pouchdb', 'myapp']);
        var pouchDB = $injector.get('pouchDB');
        db = pouchDB('items');
    });
    it('should add to db using put method and also verify using get method', function(done) {
        var doc = {_id : "1", text : "text data"}
        db.put(doc).then(function(result){
            db.get(doc._id).then(function(d){
                expect(d.text).toBe("text data"); 
            })
        })
            .catch(function(err){
                console.log('err',err);
            })
            .finally(function(){
                db.destroy();
                done();

            });
    });
})