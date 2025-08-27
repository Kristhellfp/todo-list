// modulos/itemTarea/itemTarea.js
export function crearTarea(indice, titulo, estado, fechaAs, fechaEn, listaIntegrantes, resaltar = false) {
    let div = document.createElement('div');
    div.className = "tarea";
    if (resaltar) div.classList.add("resaltado");

    let divNumero = document.createElement('div');
    divNumero.className = "tarea-numero";
    divNumero.textContent = indice;

    let h3Titulo = document.createElement('h3');
    h3Titulo.className = "tarea-titulo";
    h3Titulo.textContent = titulo || "Sin título";

    let divEstado = document.createElement('div');
    divEstado.className = "tarea-estado";
    
    // VALIDACIÓN PARA ESTADO UNDEFINED O NULL
    const estadoValido = estado ? estado.toString().toLowerCase() : "desconocido";
    
    if (estadoValido === "completado") {
        divEstado.classList.add("estado-verde");
    } else if (estadoValido === "pendiente") {
        divEstado.classList.add("estado-gris");
    } else {
        divEstado.classList.add("estado-borde");
    }
    divEstado.textContent = estado || "Desconocido";

    let fechaAsignacion = document.createElement('div');
    fechaAsignacion.className = "tarea-fecha";
    fechaAsignacion.textContent = fechaAs || "No asignada";

    let fechaEntrega = document.createElement('div');
    fechaEntrega.className = "tarea-fecha";
    fechaEntrega.textContent = fechaEn || "No asignada";

    let divIntegrantes = document.createElement('div');
    divIntegrantes.className = "tarea-integrantes";
    if (Array.isArray(listaIntegrantes)) {
        listaIntegrantes.forEach(icono => {
            let span = document.createElement('span');
            span.className = "integrante";
            span.textContent = icono;
            divIntegrantes.appendChild(span);
        });
    }

    let eliminar = document.createElement('div');
    eliminar.className = "tarea-eliminar";
    eliminar.textContent = "🗑️";

    div.appendChild(divNumero);
    div.appendChild(h3Titulo);
    div.appendChild(divEstado);
    div.appendChild(fechaAsignacion);
    div.appendChild(fechaEntrega);
    div.appendChild(divIntegrantes);
    div.appendChild(eliminar);

    return div;
}