//Declaracion de aplicacion de Angular.
var app = angular.module("WebClientASP",['ngRoute','ngMaterial','Servicios']).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('blue')
  .accentPalette('orange');
});

//Configuracion de la aplicacion.
//$routeProvider  para el manejo de vistas.
app.config(function($routeProvider){
    
    $routeProvider.when("/Cotizador", {
        templateUrl : "/vistas/cotizador.html",
        controller : "CotizadorControlador"
    })
    //En caso de no coincidir nos redijira a la principal
    .otherwise({ reditrectTo : "/" });
});