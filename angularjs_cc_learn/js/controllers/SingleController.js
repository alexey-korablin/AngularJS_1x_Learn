app.controller('SingleController', ['$scope', 'forecast', function($scope, forecast) {
    forecast.success(function (data) {
        $scope.fiveDay = data;
    });
}]);
