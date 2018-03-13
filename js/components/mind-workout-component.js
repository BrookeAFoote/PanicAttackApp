(function(){
    var mindWorkoutComponent = {
    templateUrl: "partials/mind-workout.html",
    controller: function(relaxService){
        var vm = this;
        relaxService.getQuote()
        .then(function(data){
            vm.data = data;
        })
    }//controller
    };//mindworkoutcomponent
    
    
    
    angular
        .module("relaxApp")
        .component("mindWorkoutComponent", mindWorkoutComponent)
    
    })();//end