angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  Links.getAll().then(function(links) {
    $scope.data.links = links;
  });

  $scope.filterFn = function(element) {
    return (element.title.match(new RegExp($scope.filter, 'gi')) &&
      element.url.match(new RegExp($scope.url, 'gi'))) ? true : false;
  };
});
