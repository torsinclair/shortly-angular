angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.shortlies = [];
  $scope.errMsg = 'URL required';
  $scope.enSpinner = false;

  $scope.addLink = function() {
    var linkObject = {
      url: $scope.url,
    };
    $scope.enSpinner = true;
    Links.addOne(linkObject).then(function(link) {
      $scope.shortlies.push(link.data);
      $scope.url = '';
      $scope.enSpinner = false;
    });
  };

  $scope.urlChange = function() {
    var url = $scope.url;
    var re = /^http:\/\/([^_\W]+.)?[^_\W]+(.[^_\W]{2,3})+\/?/;
    if (url === '') {
      $scope.errMsg = 'URL required';
    } else if (!url.match(re)) {
      $scope.errMsg = 'Not a valid URL';
    } else {
      $scope.errMsg = '';
    }
  };
});
