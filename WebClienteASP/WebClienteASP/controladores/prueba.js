/**
 * @copyright (c) HDI 2015 México 
 * http://www.hdi.com.mx
 */
(function(angular){
  'use strict';

  var factoria;
  /**
   * @ngdoc       module
   * @name        hdiClasesGlobalesFactoria
   * @autor       Serrano García Juan Manuel [KSP]
   * @description 
   * 
   * #microSitio
   * El módulo 'hdiUtileriasServicios'
   *  - Proporciona:
   *    clases de uso genérico
   *
   * @example 
      angular.module('modulo', ['hdiClasesGlobalesFactoria']) // Injección
      .controller('controlador' function(nombreFactoria){     // Referencia
      var prueba = new nombreFactoria();                      // Instancia
      prueba.invocaMetodo();                                  //
      });  
   */
  factoria = angular.module('hdiClasesGlobalesFactoria',[]);

  factoria.config(['$httpProvider',function ($httpProvider) {
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
  }]);

  /**
   * @ngdoc    factory
   * @name     hdiClasesGlobalesFactoria.Peticion
   * @autor    Serrano García Juan Manuel [KSP]
   * @requires [$http, $q]
   * @description 
   * 
   * #Peticion
   *   Clase para realizar una petición a un webmethod
   *
   * @example
      var a = new Peticion('url.com/webmethod',{dato1: "a", dato2: 1});
      Peticion.realizarPeticion();
   */
  factoria.factory('Peticion', ['$http', '$q', function ($http, $q) {
    
    function Peticion(url, datos){
      /////////////////
      // PROPIEDADES //
      /////////////////
      this.datos  = datos;
      this.url    = url;
    }

    /**
     * Invoca realizarPeticion y establece una espera hasta que se retorna el resultado
     * @return {$q.promise} Promesa de resolver la petición
     */
    Peticion.prototype.obtenerDatos = function(){
      var retraso = $q.defer();
      realizarPeticion(this.url, this.datos, retraso);
      return retraso.promise;
    };

    /**
     * Realiza la petición web
     * @param  {string}  url     Direccion de la petición
     * @param  {object}  datos   Objeto json para los datos necesarios
     * @param  {promise} retraso Funcion en espera de ser resuelta
     */
    function realizarPeticion(url, datos, retraso){
      $http.post(url, datos).
        success(function(respuesta){
          manejarRespuesta(respuesta, retraso);
        }).
        error(function(data, status){
          var error;
          switch(status){
            case 500:
              error = 'Ha ocurrido un error en el lado del servidor: ' + status;
            break;
            case 404:
              error = 'No se ha podido establecer una comunicación con el servidor: ' + status;
            break;
          }
          manejarError(error);
        });
    }

    /**
     * Manejador para cuando ocurre un error en la petición
     * @param  {string} error Cadena a ser impresa
     */
    function manejarError(error){
      console.log(error);
    }

    /**
     * Maneja la respuesta cuando es correcta
     * @param  {json}    respuesta Objeto Json de la respuesta
     * @param  {promise} retraso   Funcion en espera de ser resuelta
     * @return {json}              Objeto Json de la respuesta
     */
    function manejarRespuesta(respuesta, retraso){
      var objeto;
      objeto = angular.fromJson(respuesta.d, true);
      if(!angular.isUndefined(objeto.error)){
        manejarError(objeto.error);
      } else {
        retraso.resolve(objeto);
      }
      return objeto;
    }
    return Peticion;
  }]);
  
  /**
   * @ngdoc    factory
   * @name     hdiClasesGlobalesFactoria.Combo
   * @autor    Serrano García Juan Manuel [KSP]
   * @requires [hdiClasesGlobalesFactoria.Peticion]
   * @description 
   * 
   * #Peticion
   *   Clase para realizar crear un manejador de datos de un combo
   *
   * @example
      // Llena la lista automáticamente llamando al webmethod internamente
      var a = new Combo('nombreCombo');
      Combo.obtenerLista({dato1: "a", dato2: 1}); 

      // Llena la lista manualmente
      var a = new Combo('nombreCombo');
      Combo.asignarLista([{pro1: "a", prop:"b"},{pro1: "c", prop:"d"}]); 
   */
  factoria.factory('Combo', ['Peticion', '$q', function (Peticion, $q) {
    
    /**
     * Constructor para la clase Combo
     * @param {string} nombre nombre del combo
     */
    function Combo(nombre){
      /////////////////
      // PROPIEDADES //
      /////////////////
      this.nombre               = nombre;
      this.lista                = [];
      this.retraso              = {};
      //this.elementoSeleccionado = null;
      //this.valorDefecto = null;
    }

    /**
     * Crea una conexión hacia el servidor para obtener la lista que se asignará al como
     * @param  {json} datos Objeto json con los datos que serán enviados
     */
    Combo.prototype.obtenerLista = function(datos){
      this.retraso = $q.defer();
      this.cargado = false;

      var peticion, url, self = this;
      url = 'index.aspx/Obtener' + this.nombre;

      if(angular.isUndefined(datos)){
        datos = {};
      }

      peticion = new Peticion(url, datos);
      peticion.obtenerDatos().then(function(respuesta){
        self.asignarLista(respuesta[self.nombre]);
      });

      return this.retraso.promise;
    };

    /**
     * Se asigna un a lista a la propiedad lista del Combo
     * @param  {array} lista Lista para ser asignada
     */
    Combo.prototype.asignarLista = function(lista){
      
      lista.push({});
      if(lista.length > 1){
        this.cargado  = true;
        this.lista = lista;
      }
      this.retraso.resolve();
      
      //this.elementoSeleccionado = this.lista[this.lista.length - 1];
      
      /*$timeout(function(){
        aplicaChosen();
      },250);*/
    };
  
    return Combo;
  }]);

}(window.angular));