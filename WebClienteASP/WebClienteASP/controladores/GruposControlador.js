/**
 * [Controlador para Vista Grupos]
 * @param  {[type]} $scope          [Variable $scope global angularjs]
 */
app.controller("GruposControlador",function($scope){
  
  /*
    MODELOS INICIALES
   */
  
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

  $scope.MateriasOfertadas=[];

  $scope.MateriaDocenteSeleccionada={};

  $scope.MateriaDocente=[];
  // METODOS
  $scope.GuardarMateria=function(datos){
    console.log(datos);
    $scope.MateriaDocente.push(datos);
  };
  
  // METODOS


});