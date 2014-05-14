app.controller('MainController', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data.json').success(function(data) {
      $scope.plant = data;
    });

    $scope.orderProp = 'id';
  }]);