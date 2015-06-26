/**
 * [Inicializacion de Aplicacion Angular]
 * @type {[type]}
 */
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


/**
 * [Configuracion del manejo de Vistas]
 * @param  {[Object]} $routeProvider                   
 */
app.config(function($routeProvider){
    
    $routeProvider
    .when("/vistas/cotizador", {
        templateUrl : "/vistas/cotizador.html",
        controller  : "CotizadorControlador"
    })
    .when("/vistas/Usuarios", {
        templateUrl : "/vistas/Usuarios.html",
        controller  : "UsuariosControlador"
    })

    //En caso de no coincidir nos redijira a la principal
    .otherwise({ reditrectTo : "/" });
});