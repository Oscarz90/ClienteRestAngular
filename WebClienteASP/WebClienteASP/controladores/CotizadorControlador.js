//Agrega el controlador a la variable app Global de la aplicacion
app.controller("CotizadorControlador",function($scope,$http,$q,$servicios){
  
  $scope.TiposVehiculos = new Object();

  $scope.ObtenerTipoVehiculo=function(){
  $scope.TiposVehiculos.postcallback;
  var ServicioTipoVehiculo = new $servicios.ServicioAPI('/Index.aspx/ObtenerTipoVehiculo'
    , {}
    , callbackTipoVehiculo
    ,function(){ $scope.TiposVehiculos.postcallback.resolve()}
    ,$scope.TiposVehiculos);

  ServicioTipoVehiculo.llamarServicio();
  };
  //* Callback para Tipo de Vehiculo *
  var callbackTipoVehiculo=function(contenedor){
    var retraso = $q.defer();
    r=angular.fromJson(contenedor.respuesta.d,true);
    console.log(r);
    retraso.resolve(contenedor);
    return retraso.promise;
  };

});