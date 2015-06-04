<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="WebClienteASP.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" ng-app="WebClientASP">
<head runat="server">

  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
  <link rel="stylesheet" href="/node_modules/angular-material/angular-material.css">

  <!--<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>-->
  <title></title>
</head>
<body layout="row">
  <!--Barra Navegacion Lateral-->
  <md-sidenav md-component-id="left" class="md-sidenav-left md-whiteframe-z3" md-is-locked-open="$mdMedia('gt-md')" flex>
    <md-toolbar class="md-toolbar-tools" >
      <span>AngularApp</span>
      <span flex></span>
    </md-toolbar>
    <md-content flex class="md-default-theme">
      <md-list>
        <md-list-item ng-click="navigateTo('data usage', $event)">
          <a ng-href="#/Cotizador"><md-button>Cotizador</md-button></a>
          <md-icon md-svg-icon="/iconos/toggle.svg"></md-icon>
        </md-list-item>
        <md-list-item ng-click="navigateTo('data usage', $event)">
          <p>SubMenu2</p>
        </md-list-item>
        <md-list-item ng-click="navigateTo('data usage', $event)">
          <p>SubMenu3</p>
        </md-list-item>
        <md-list-item ng-click="navigateTo('data usage', $event)">
          <p>SubMenu4</p>
        </md-list-item>
        <md-list-item ng-click="navigateTo('data usage', $event)">
          <p>SubMenu5</p>
        </md-list-item>
        <md-list-item ng-click="navigateTo('data usage', $event)">
          <p>SubMenu6</p>
        </md-list-item>
      </md-list>
    </md-content>
  </md-sidenav>
  <!-- Contenido Principal -->
  <div layout="column" flex>
    <md-toolbar>
      <div class="md-toolbar-tools md-whiteframe-z3">
        <md-button class="md-icon-button" aria-label="Settings"  hide-gt-md="" ng-click="toggleLeftNav()">
          <md-icon md-svg-icon="/iconos/menu.svg"></md-icon>
        </md-button>
        <span>Home>UbicacionX</span>
        <span flex></span>
        <md-button>
          Other Button
        </md-button>
        <md-button class="md-icon-button" aria-label="Settings">
          <md-icon md-svg-icon="/iconos/subMenu.svg"></md-icon>
        </md-button>
      </div>
    </md-toolbar>
    <!-- Contenido Pagina -->
    <md-content layout-padding>
      <!-- Cargado de Vistas Aqui -->
      <div ng-view>

      </div>
      <!-- Cargado de Vistas Aqui -->
    </md-content>
  </div>

<!-- Librerias Necesarias -->
<script src="/node_modules/angular/angular.js"></script>
<script src="/node_modules/angular-route/angular-route.js"></script>
<script src="/node_modules/angular-aria/angular-aria.js"></script>
<script src="/node_modules/angular-animate/angular-animate.js"></script>
<script src="/node_modules/angular-material/angular-material.js"></script>
<script src="/js-componentes/App.js"></script>
<script src="/js-componentes/APIServicios.js"></script>
<script src="/controladores/CotizadorControlador.js"></script>


</body>
</html>
