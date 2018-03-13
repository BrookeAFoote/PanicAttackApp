(function(){
    var panicAttackComponent = {
    templateUrl: "partials/panic-attack.html",
    controller: function(relaxService){
        var vm = this;
        relaxService.getQuote()
        .then(function(data){
            vm.data = data;
        })
    }//controller
    };//panicattackcomponent
    
    
    
    angular
        .module("relaxApp")
        .component("panicAttackComponent", panicAttackComponent)
    
    })();//end