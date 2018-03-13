(function(){
    var selfEsteemComponent = {
    templateUrl: "partials/self-esteem.html",
    controller: function(relaxService){
        var vm = this;
        relaxService.getQuote()
        .then(function(data){
            vm.data = data;
        })
    }//controller
    };//selfesteemcomponent
    
    
    
    angular
        .module("relaxApp")
        .component("selfEsteemComponent", selfEsteemComponent)
    
    })();//end