import { crearTarea } from "../../modulos/itemTarea/itemTarea.js";

export function tareas(tareasDb) {
    let panelListado = document.createElement('div');
    panelListado.className = "panel-listado-tareas";

    tareasDb.forEach((e, i) => {
        panelListado.appendChild(
            crearTarea(
                i,
                e.titulo,
                e.estado,
                e.fechaAs,
                e.fechaEn,
                e.integrantes,
                e.claseEstado
            )
        );
    });

    return panelListado;
}