var app = angular.module('flapperNews', []);

app.controller('MainCtrl', ['$scope',
	function($scope){
		$scope.test = "Hellow World";

		$scope.posts = [
  			{title: 'post 1', link: 'link 1', upvotes: 51},
  			{title: 'post 2', link: 'link 2', upvotes: 2},
  			{title: 'post 3', link: 'link 3', upvotes: 15},
  			{title: 'post 4', link: 'link 4', upvotes: 9},
  			{title: 'post 5', link: 'link 5', upvotes: 4}
		];

		$scope.addPost = function(){
			if(!$scope.title || $scope.title === ''){
				return;
			}

			if(!$scope.link || $scope.link === ''){
				return;
			}

  			$scope.posts.push({
  				title: $scope.title,
  			 	link: $scope.link, 
  				upvotes: 0
  			});
		};

		$scope.incrementUpvotes = function(post) {
  			post.upvotes += 1;
		};

	}]);