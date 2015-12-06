var app = angular.module('myPosts',  []);

app.controller('MainCtrl', [
	'$scope',
	function($scope){
		//posts object
		$scope.posts = [
		  {title: 'post 1', upvotes: 5},
		  {title: 'post 2', upvotes: 2},
		  {title: 'post 3', upvotes: 7},
		  {title: 'post 4', upvotes: 15},
		  {title: 'post 5', upvotes: 4}
		]
}]);