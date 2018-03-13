(function(){
        angular
            .module("relaxApp")
            .config(function($routeProvider){
                $routeProvider
                    .when("/home", {
                        template: "<home-component></home-component>",
                        controller: function($rootScope) {
                            $rootScope.pageClass = "home";
                        }
                    }).when("/insomnia", {
                        template: "<insomnia-component></insomnia-component>",
                        controller: function($rootScope) {
                            $rootScope.pageClass = "insomnia";
                        }
                    }).when("/mindWorkout",{
                        template: "<mind-workout-component></mind-workout-component>",
                        controller: function($rootScope) {
                            $rootScope.pageClass = "mindworkout";
                        }
                    }).when("/panicAttack",{
                        template: "<panic-attack-component></panic-attack-component>",
                        controller: function($rootScope) {
                            $rootScope.pageClass = "panicattack";
                        }
                    }).when("/selfEsteem",{
                        template: "<self-esteem-component></self-esteem-component>",
                        controller: function($rootScope) {
                            $rootScope.pageClass = "selfesteem";
                        }
                    }).when("/worry",{
                        template: "<worry-component></worry-component>",
                        controller: function($rootScope) {
                            $rootScope.pageClass = "worry";
                        }
                    }).otherwise({
                        redirectTo: "/home"
                    });
                   
            })//config
        })();//end