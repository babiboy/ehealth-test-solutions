/**
 * Created by Chima on 8/12/2015.
 */
angular.module("app", ['pouchdb'])
    .factory("pouchDBWrapper", ["pouchDB", function(pouchDB){
        console.log(pouchDB.put)
        return pouchDB;
    }])
.controller("AppCtrl", ['$scope', 'pouchDBWrapper', function($scope, pouchDBWrapper){

        $scope.docs = [];
        $scope.text ="";
        var db  = pouchDBWrapper("testData");
        $scope.add = function() {
            if(!$scope.text)
            return;
          db.put({
                text: $scope.text,
                _id : new Date().toISOString()
            }).then(function(result){
              $scope.text ="";
          })
        };

        function onChange(change) {
            $scope.docs.push(change);
        }

        var options = {
            include_docs: true,
            live: true
        };

        db.changes(options).$promise
            .then(null, null, onChange);

    }])