
var myApp = angular.module('angularModule', []);

var myController = function($scope){
    var emp = {
        firstname: 'David',
        lastname: 'Rose',
        gender: 'Male'
    };
    $scope.message = 'Hi';
    $scope.employee = emp;
}

//Register the controller with the module
myApp.controller('myController', myController);
