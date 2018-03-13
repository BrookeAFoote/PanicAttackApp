(function(){
    var selfEsteemComponent = {
    templateUrl: "partials/self-esteem.html",
    controller: function(){
        var vm = this;
        console.log("working")
    }//controller
    };//selfesteemcomponent
    
    
    
    angular
        .module("relaxApp")
        .component("selfEsteemComponent", selfEsteemComponent)
    
    })();//end