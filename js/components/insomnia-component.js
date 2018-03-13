(function(){
    var insomniaComponent = {
    templateUrl: "partials/insomnia.html",
    controller: function(relaxService){
        var vm = this;
        relaxService.getQuote()
        .then(function(data){
            vm.data = data;
        })

    }//controller
    };//insomniacomponent
    
    
    
    angular
        .module("relaxApp")
        .component("insomniaComponent", insomniaComponent)
    
    })();//end