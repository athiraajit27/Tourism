var app=angular.module('myApp',['ngRoute']);//dependancy module

app.config(function($routeProvider){                //like scope, default

    $routeProvider

    .when('/',{

        template:'.'
    })

    .when('/abc',{

        templateUrl:'ad.html' 
    })



    .when('/signup',{templateUrl:"Signup.html"})

    .otherwise({

        redirectTo:'/index.html'
    })

})
