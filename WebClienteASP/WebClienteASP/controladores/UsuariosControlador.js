/**
 * [Controlador para Vista Usuarios]
 * @param  {[type]} $scope          [Variable $scope global angularjs]
 */
app.controller("UsuariosControlador",function($scope){
  /**
   * [usuarios Usuarios Iniciales]
   * @type {Array}
   */
  $scope.usuarios = [
    { 
      nombre      : "Israel Parra"
      , web       : "http://uno-de-piera.com"
      , edad      : "32 años"
      , profesion : "programador web"
    }, 
    {
      nombre      : "Pepito"
      , web       : "http://pepito.com"
      , edad      : "? años"
      , profesion : "vender palotes!"
    }
  ];


});