angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.shortlies = [];

  $scope.addLink = function() {
    var linkObject = {
      url: $scope.url,
    };

    Links.addOne(linkObject).then(function(link) {
      console.log(link.data);
      $scope.shortlies.push(link.data);
    });
  };
});
