(function(){
    var worryComponent = {
    templateUrl: "partials/worry.html",
    controller: function(relaxService){
        var vm = this;
        relaxService.getQuote()
        .then(function(data){
            vm.data = data;
        })
        
    }//controller
    };//worrycomponent
    
    
    
    angular
        .module("relaxApp")
        .component("worryComponent", worryComponent)
    
    })();//end