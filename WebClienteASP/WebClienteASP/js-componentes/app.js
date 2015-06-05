//Declaracion de aplicacion de Angular.
var app = angular.module("WebClientASP",['ngRoute','ngMaterial','APIServicios']);

app.config(function($mdThemingProvider){
  $mdThemingProvider.theme('default')
  .primaryPalette('blue',{
    'default':'600',
    'hue-1':'400',
    'hue-2':'500',
    'hue-3':'700'
    
  })
  .accentPalette('yellow')
  .warnPalette('orange')
  .backgroundPalette('grey');
});
//Configuracion de la aplicacion.
//$routeProvider  para el manejo de vistas.
app.config(function($routeProvider){
    
    $routeProvider.when("/", {
        templateUrl : "/vistas/cotizador.html",
        controller : "CotizadorControlador"
    })
    //En caso de no coincidir nos redijira a la principal
    .otherwise({ reditrectTo : "/" });
});