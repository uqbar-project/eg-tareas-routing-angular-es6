class TareasService {

  constructor() {
    this.tareasIds = 0;
    this.tareas = [];  
  }
  
  crearTarea(description) {
    var tarea = new Tarea(description);
    tarea.id = this.tareasIds++;
    return tarea;
  }

  agregarTarea(tarea) {
    this.tareas.push(tarea);
  }

  getTareaById(id) {
    return this.tareas.find((tarea) => {
      return tarea.id == id;
    })
  }

}

tareasListApp.service("TareasService", TareasService); 