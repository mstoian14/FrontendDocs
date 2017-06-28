/**
 * Created by Mihaela.Stoian on 6/28/2017.
 */
hrApp.controller('DemoMathController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $scope.resultOp = 0;
    // $scope.numberA = 0;
    // $scope.numberB = 0;
    console.log($scope.resultOp);
    $scope.addNumbers = function() {
        $scope.resultOp = $scope.numberA + $scope.numberB;
    };
    $scope.divNumbers = function() {
        $scope.resultOp = $scope.numberA / $scope.numberB;
    };
    $scope.diffNumbers = function() {
        $scope.resultOp = $scope.numberA - $scope.numberB;
    };
    $scope.prodNumbers = function() {
        $scope.resultOp = $scope.numberA * $scope.numberB;
    }
}]);