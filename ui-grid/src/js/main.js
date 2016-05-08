var app = angular.module('myApp', ['ui.grid']);
app.controller('MyCtrl', function($scope,$http) {
console.log('hj');
    $http.jsonp('http://localhost:8081?alt=json-in-script&callback=JSON_CALLBACK').
       success(function(json) {
             $scope.myData=json;
			 $scope.gridOptions = { data: 'myData' };
        });
   // $scope.myData = [{name: "Vaibhav", age: 50},
                    // {name: "Tiancum", age: 43},
                    // {name: "Jacob", age: 27},
                    // {name: "Nephi", age: 29},
                    // {name: "Enos", age: 34}];
    
});