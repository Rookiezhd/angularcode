//the main module
var myApp = angular.module("myApp", []);
//add a controller
myApp.controller("myCtrl",function($scope) {
	$scope.msg = "Sam is a handsome boy"
});

//add a filter
myApp.filter("myUpperFilter", function() {
	return function(input) {
		return input.toUpperCase();
	}
});

//add a directive
myApp.directive("myDctv", function(){
	return function(scope, element, attrs) {
		element.bind("mouseenter", function() {
			element.css("background", "yellow");
		});
		element.bind("mouseleave", function() {
			element.css("background", "#abcdef");
		});
	}
});