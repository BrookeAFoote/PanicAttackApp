(function(){
    function relaxService($http){
        return{
            getQuote: getQuote
        };//return
        function getQuote(){
            return $http({
                method: "GET",
                url: "https://quotes.p.mashape.com/?category=inspirational",
                params: {
                    key: "value"
                },
                headers: {
                "X-Mashape-Key": "VSbOH6DUmQmshdrVPOIFqatuDHMTp1uElRHjsnXjDMnDo0VhD4",
                "Accept": "application/json"
                }
            }).then(function(response){
                return response.data
            })

            
        }//getquote


    }//relaxservice






angular
    .module("relaxApp")
    .factory("relaxService", relaxService)


})();//end