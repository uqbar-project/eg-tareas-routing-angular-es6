'use strict';

/* Controllers */
var tareasListApp = angular.module('tareasListApp', ['ui.router']);

AgregarTareaController.$inject = ['TareasService']
tareasListApp.controller('AgregarTareaController', AgregarTareaController)

EditarTareaController.$inject = ['$stateParams', '$state', 'TareasService']
tareasListApp.controller('EditarTareaController', EditarTareaController)
