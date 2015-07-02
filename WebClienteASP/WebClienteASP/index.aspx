<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="WebClienteASP.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" ng-app="WebClientASP">
<head runat="server">

  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
  <link rel="stylesheet" href="/node_modules/angular-material/angular-material.css">
  <link rel="stylesheet" href="/css-componentes/App.css"/>

  <!--<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>-->
  <title></title>
</head>
<body layout="row">
  <!--Barra Navegacion Lateral-->
    <md-sidenav class="md-sidenav-left md-whiteframe-z5" md-component-id="left" md-is-locked-open="$mdMedia('gt-md')">
      <md-toolbar>
        <div class="md-toolbar-tools">
          <span>GKN Tickets</span>
          <!-- fill up the space between left and right area -->
          <span flex></span>
        </div>
      </md-toolbar>
      <md-content>
        <md-list>
          <md-list-item ng-click="1">
            <p><a ng-href="#/vistas/cotizador" style="text-decoration: none;">Cotizador</a></p>
          </md-list-item>
          <md-list-item ng-click="1">
            <p><a ng-href="#/vistas/Usuarios" style="text-decoration: none;">Usuarios</a></p>
          </md-list-item>
        </md-list>
      </md-content>
      </md-list>
    </md-sidenav>
  <!--Barra Navegacion Lateral-->


  <!-- Contenido -->
    <div class="column" flex>
      <md-toolbar class="md-whiteframe-z3 md-primary">
        <div class="md-toolbar-tools">
          <md-button class="md-icon-button" aria-label="Settings" hide-gt-md>
            <md-icon md-svg-icon="iconos/menu.svg"></md-icon>
          </md-button>
          <p style="padding: 0px 0px 0px 10px;">Inicio > Ubicacion</p>
          <span flex></span>
          <md-button class="md-icon-button" aria-label="More">
          <md-icon md-svg-icon="/iconos/config.svg"></md-icon>
        </md-button>
        </div>
      </md-toolbar>
      <!--<md-content> Delegar a cada vista-->
      <div ng-view>

      </div>
      <!--<md-content> Delegar a cada vista-->
    </div>
  <!-- Contenido -->
  

  <!-- Angular Material -->
  <script src="/node_modules/angular/angular.js"></script>
  <script src="/node_modules/angular-route/angular-route.js"></script>
  <script src="/node_modules/angular-aria/angular-aria.js"></script>
  <script src="/node_modules/angular-animate/angular-animate.js"></script>
  <script src="/node_modules/angular-material/angular-material.js"></script>
  <!-- App Angularjs -->
  <script src="/js-componentes/App.js"></script>
  <script src="/js-componentes/APIServicios.js"></script>
  <!-- Controladores -->
  <script src="/controladores/CotizadorControlador.js"></script>
  <script src="/controladores/UsuariosControlador.js"></script>


</body>
</html>
