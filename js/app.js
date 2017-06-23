angular.module('tareasListApp', ['ui.router'])
    .service("TareasService", TareasService)
    .controller('AgregarTareaController', AgregarTareaController)
    .controller('EditarTareaController', EditarTareaController)
    .config(routes)
    