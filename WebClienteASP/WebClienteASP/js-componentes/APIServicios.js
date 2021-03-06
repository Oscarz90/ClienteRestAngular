//Modulo Servicios
var servicios = angular.module("APIServicios", []);

//Modulo 
/*
    var stringify = function (obj) {
    var t = typeof (obj);                                             // Obtenemos el tipo[object, string, int, etc...]
    if (t != "object" || obj === null) {                              // Validación para cuando es un tipo de dato simple
      if (t == "string") 
        obj = '"' + obj + '"';                     // Si es String le pone comillas dobles
      return String(obj);                                           // Retorna el dato
    }// Fin de validacion para tipo de dato simple
    else {                                                            // Entra cuando el tipo de dato es object
      // recurse array or object
      var n, v, json = [], arr = (obj && obj.constructor == Array); // Declaración de variables
      for (n in obj) {                                              // Ciclo para recorrer las propiedades del objeto
        v = obj[n];                                               // Se almacen temporalmente la propiedad
        t = typeof (v);                                           // Obtenemos el tipo[object, string, int, etc...]
        if (t == "string") 
          v = '"' + v + '"';                     // Valida si es string y le pone comillas dobles
        else if (t == "object" && v !== null) 
          v = stringify(v);   // Si es object hace una llamada recursiva a "stringify"
     json.push((arr ? ""       : "'" + n + "'                                               : ") + String(v));              // Va agregando la propiedad o el dato a un arreglo
      }// Fin de ciclo para recorre las propiedades
     return (arr ? "["         : "{") + String(json) + (arr ? "]"                           : "}");  // Si es arreglo le pone [], si no le pone {}
    }// Fin para cuando es de tipo object
    };
*/
//Configuracion del Modulo
servicios.config(function ($httpProvider) {
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.post ["Content-Type"] = "application/json; charset=utf-8";
});

//Creacion de factoria
servicios.factory("APIServicios", function($http, $q)
{
  var FuncionRetrasada=$q.defer();
  var Datos=[];
  var LLamarServicio={};

  LLamarServicio.async=function(urlServicio,datosServicio){
    $http.post(urlServicio,datosServicio)
      .success(function(respuesta){
          Datos=angular.fromJson(respuesta.d);
          console.log(Datos);
          FuncionRetrasada.resolve();
      });

    return FuncionRetrasada.promise;
  }

  LLamarServicio.Datos=function(){return Datos;};

  return LLamarServicio;
});

/*servicios.run(
  console.log("Aqui corre")
);*/
  