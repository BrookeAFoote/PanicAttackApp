(function(){
    var worryComponent = {
    templateUrl: "partials/worry.html",
    controller: function(){
        var vm = this;
        console.log("working")
    }//controller
    };//worrycomponent
    
    
    
    angular
        .module("relaxApp")
        .component("worryComponent", worryComponent)
    
    })();//end