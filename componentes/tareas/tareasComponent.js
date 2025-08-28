import { crearTarea } from "../../modulos/itemTarea/itemTarea.js";

export function tareas(tareasDb) {
    let panelListado = document.createElement('div');
    panelListado.className = "panel-listado-tareas";

    console.log("Datos recibidos en tareasComponent:", tareasDb); // ← AÑADE ESTO PARA DEBUG

    tareasDb.forEach((e, i) => {
        panelListado.appendChild(
            crearTarea(
                i + 1,
                e.titulo,          // Asegúrate de que usa 'titulo' no 'nombre'
                e.estado,          // Asegúrate de que existe
                e.fechaAs,         // Asegúrate de que existe  
                e.fechaEn,         // Asegúrate de que existe
                e.integrantes,     // Asegúrate de que existe
                e.claseEstado      // Asegúrate de que existe
            )
        );
    });

    return panelListado;
}