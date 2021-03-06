/**
 * [Controlador para Vista Grupos]
 * @param  {[type]} $scope          [Variable $scope global angularjs]
 */
app.controller("GruposControlador",function($scope,$mdDialog){
  
  /*
    MODELOS INICIALES
   */
  // Calendario Dias
  $scope.Dias=[
    {
      dia:"Lunes"
    } ,
    {
      dia:"Martes"
    } ,
    {
      dia:"Miercoles"
    } ,
    {
      dia:"Jueves"
    } ,
    {
      dia:"Viernes"
    } ,
    {
      dia:"Sabado"
    } ,
  ];

  // Horas Calendario
  $scope.Horas=[
   {
    Hora:"7:00 a 8:00"
   },
   {
    Hora:"8:00 a 9:00"
   },
   {
    Hora:"9:00 a 10:00"
   },
   {
    Hora:"10:00 a 11:00"
   },
   {
    Hora:"11:00 a 12:00"
   },
   {
    Hora:"12:00 a 13:00"
   }, 
  ];
  
  // PLAN CARRERA
  $scope.PlanCarrera=[
    {
      id: "1"
      , Plan: "Plan 2005-2015"
    }
    , {
      id: "2"
      , Plan: "Plan 2006-2016"
    }
    , {
      id: "3"
      , Plan: "Plan 2007-2017"
    }
    , {
      id: "4"
      , Plan: "Plan 2008-2018"
    }
  ];
  $scope.PlanCarreraSeleccionado;

  // SEMESTRE
  $scope.Semestre=[
    1
    , 2
    , 3
    , 4
    , 5
    , 6
  ];
  $scope.SemestreSeleccionado;

  // GRUPO
  $scope.Grupo=[
    "A"
    , "B"
    , "C"
    , "D"
  ];
  $scope.GrupoSeleccionado;

  // DOCENTE
  $scope.Docente=[
    {
      ClaveDocente : "Doc12ASFDQE"
      , Nombre : "Juan"
    }
    , {
      ClaveDocente : "Doc34ASFDQE"
      , Nombre : "Martin"
    }
    , {
      ClaveDocente : "Doc56ASFDQE"
      , Nombre : "Oscar"
    }
    , {
      ClaveDocente : "Doc78ASFDQE"
      , Nombre : "Celia"
    }
  ];
  $scope.DocenteSeleccionado;

  // MATERIA
  $scope.Materia=[
    {
      ClaveMateria   : "MAT1"
      , ClaveOficial : "MAT1XZ"
      , Descripcion  : "Matematicas"
      , Horas        : 5
    }
    , {
      ClaveMateria   : "MAT2"
      , ClaveOficial : "MAT2XZ"
      , Descripcion  : "Español"
      , Horas        : 6
    }
    , {
      ClaveMateria   : "MAT3"
      , ClaveOficial : "MAT3XZ"
      , Descripcion  : "Probabilidad Estadistica"
      , Horas        : 7
    }
    , {
      ClaveMateria   : "MAT4"
      , ClaveOficial : "MAT4XZ"
      , Descripcion  : "Etica"
      , Horas        : 8
    }
  ];
  $scope.MateriaSeleccionado;

  // PERIODO
  $scope.Periodo=[
    {
      ClavePeriodo  : "PERXAS01"
      , Descripcion : "2015-2016"
    }
    , {
      ClavePeriodo  : "PERXAS02"
      , Descripcion : "2016-2017"
    }
    , {
      ClavePeriodo  : "PERXAS03"
      , Descripcion : "2017-2018"
    }
    , {
      ClavePeriodo  : "PERXAS04"
      , Descripcion : "2019-2020"
    }
  ];
  $scope.PeriodoSeleccionado;

  $scope.MateriaDocenteSeleccionada={};

  $scope.MateriaDocente=[];
  
  // FUNCIONES
  $scope.GuardarMateria=function(){
    //Convertir Json a Objecto
    $scope.MateriaDocenteSeleccionada.Materia=angular.fromJson($scope.MateriaSeleccionado);
    $scope.MateriaDocenteSeleccionada.Docente=angular.fromJson($scope.DocenteSeleccionado);
    //Agregar Objecto 
    //Falta Validar que no se repitan
    $scope.MateriaDocente.push(angular.fromJson($scope.MateriaDocenteSeleccionada));
    $scope.MateriaDocenteSeleccionada={};
    $scope.MateriaSeleccionado=null;
    $scope.DocenteSeleccionado=null;
    //console.log($scope.MateriaDocente);
    console.log($scope.MateriaDocente);
  };

  //
  $scope.MostrarInfo=function(data,datab){
    console.log(data);
    console.log(datab);

  };
  
  var prueba=[];
  $scope.Prueba=function(Dia,Hora){
    console.log("Dia");
    console.log(Dia);
    console.log("Hora");
    console.log(Hora);
  };



  ////
  $scope.showAdvanced = function() {
    console.log($scope.MateriaDocente.lenght);
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog1.tmpl.html',
      locals: {
        MateriaDocente: $scope.MateriaDocente
      },
      bindToController: true,
      parent: angular.element(document.body),
      targetEvent: $scope.$event,
      controllerAs: 'ctrl'
    })
    .then(
      function(answer) {
        console.log('You said the information was "' + answer + '".');
      }, function() {
        console.log('You cancelled the dialog.');
      }
    );
  };
  //controlador del dialogo
  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  };



  
  


});