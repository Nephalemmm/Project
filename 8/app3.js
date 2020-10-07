var app = angular.module("app", []);

app.controller('emp', function($scope){
    $scope.msg = "First message"
});

app.directive("myInfoMsg", function(){
    return {
        templateUrl: "my-info-msg.html"
    }
})