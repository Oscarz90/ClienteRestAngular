//Agrega el controlador a la variable app Global de la aplicacion
app.controller("CotizadorControlador",function($scope,$http,$q,$servicios){
  
  $scope.TiposVehiculos = new Object();

  var callbackTipoVehiculo=function(contenedor,respuesta){
    var retraso = $q.defer();
    contenedor=angular.fromJson(respuesta.d,true);
    console.log(contenedor);
    retraso.resolve(contenedor);
    return retraso.promise;
  };

  var aux=$q.defer;

  $scope.ObtenerTipoVehiculo=function(){
  $scope.TiposVehiculos.postcallback;
  var ServicioTipoVehiculo = new $servicios.ServicioAPI(
    '/Index.aspx/ObtenerTipoVehiculo'
    , {}
    , callbackTipoVehiculo
    ,function(){ aux.resolve;}
    ,$scope.TiposVehiculos);

  ServicioTipoVehiculo.llamarServicio();
  };
  //* Callback para Tipo de Vehiculo *
  

});