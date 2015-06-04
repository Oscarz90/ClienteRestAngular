//Agrega el controlador a la variable app Global de la aplicacion
/*app.controller("CotizadorControlador",function($scope,$http,$q,APIServicios){
  $scope.TipoVehiculos;
  $scope.ObtenerTipoVehiculo=function(){
    //Crear Nueva Llamada Servicio
    
    APIServicios.async('/index.aspx/ObtenerTipoVehiculo',{}).then(
      function(){
        $scope.TipoVehiculos=APIServicios.Datos()
      }
      
    );

  };
  //* Callback para Tipo de Vehiculo *
  

});*/

app.controller("CotizadorControlador",['$scope','$http','$q','APIServicios',function($scope,$http,$q,APIServicios){
  $scope.TipoVehiculos;
  $scope.ObtenerTipoVehiculo=function(){
    //Crear Nueva Llamada Servicio
    
    APIServicios.async('/index.aspx/ObtenerTipoVehiculo',{}).then(
      function(){
        $scope.TipoVehiculos=APIServicios.Datos()
      }
      
    );

  };
}]);