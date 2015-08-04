var movieModule = angular.module('movieModule', []);


movieModule.controller('MovieListCtrl', function ($scope,$http) {
  $http.get('data/movie.json').success(function(data) {
    $scope.movieList = data;
  });
});
