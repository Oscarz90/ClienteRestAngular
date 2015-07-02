/**
 * [Controlador para Vista Usuarios]
 * @param  {[type]} $scope          [Variable $scope global angularjs]
 */
app.controller("UsuariosControlador",function($scope){
  
  /**
   * [usuario Usuario para captura de formulario]
   * @type {Object}
   */
  $scope.usuario={};

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
      , edad      : "89 años"
      , profesion : "vender palotes!"
    }
  ];

  
  
  /**
   * [GuardarUsuario description]
   */
  $scope.GuardarUsuario=function(){
    $scope.usuarios.push($scope.usuario);
    $scope.usuario={};
  };

  /**
   * [Actualizar description]
   */
  $scope.ActualizarUsuario=function(){

  };

  /**
   * [Borrar description]
   */
  $scope.BorrarUsuario=function(){

  };

});