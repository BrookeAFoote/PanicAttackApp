(function(){
    var mindWorkoutComponent = {
    templateUrl: "partials/mind-workout.html",
    controller: function(){
        var vm = this;
        console.log("working")
    }//controller
    };//mindworkoutcomponent
    
    
    
    angular
        .module("relaxApp")
        .component("mindWorkoutComponent", mindWorkoutComponent)
    
    })();//end