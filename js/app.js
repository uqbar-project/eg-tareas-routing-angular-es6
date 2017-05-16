'use strict';

/* Controllers */
var tareasListApp = angular.module('tareasListApp', ['ui.router']);

class AgregarTareaController {

  constructor(TareasService) {
    this.tareasService = TareasService;
    this.descripcionTarea = '';
    this.tareas = TareasService.tareas;
  }
  
  agregarTarea() {
    var tarea = this.tareasService.crearTarea(this.descripcionTarea);
    this.tareasService.agregarTarea(tarea);
    this.descripcionTarea = '';
  }

}

class EditarTareaController {

  constructor($stateParams, $state, TareasService) {
    this.tarea = TareasService.getTareaById($stateParams.id)
    this.state = $state

    if (!this.tarea) {
      $state.go("agregarTarea");
      return;
    } 

    this.descripcionTarea = this.tarea.descripcion;   
  }

  aceptar() {
    this.tarea.descripcion = this.descripcionTarea;
    this.state.go("agregarTarea");
  }

}

AgregarTareaController.$inject = ['TareasService']
tareasListApp.controller('AgregarTareaController', AgregarTareaController)

EditarTareaController.$inject = ['$stateParams', '$state', 'TareasService']
tareasListApp.controller('EditarTareaController', EditarTareaController)
