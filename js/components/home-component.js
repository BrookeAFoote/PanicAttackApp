(function(){
var homeComponent = {
templateUrl: "partials/home.html",
controller: function(relaxService, $location){
    var vm = this;
    vm.seePanic = function(){
        $location.path("/panicAttack");
        
    }
    vm.seeSleep = function(){
        $location.path("/insomnia")
    }
    vm.seeWorry = function(){
        $location.path("/worry")
    }
    vm.seeSelf = function(){
        $location.path("/selfEsteem")
    }
    vm.seeWork = function(){
        $location.path("/mindWorkout")
    }
}//controller
};//homecomponent



angular
    .module("relaxApp")
    .component("homeComponent", homeComponent)

})();//end