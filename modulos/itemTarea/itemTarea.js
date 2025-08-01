export function tarea(indice, titulo, estado, fechaAs, fechaEn, listaIntegrantes, resaltar = false) {
    let div = document.createElement('div');
    div.className = "tarea-container";
    if (resaltar) div.classList.add("resaltado");

    let divNumero = document.createElement('div');
    divNumero.className = "div-numero";
    divNumero.textContent = indice;

    let h3Titulo = document.createElement('h3');
    h3Titulo.className = "titulo";
    h3Titulo.textContent = titulo;

    let divEstado = document.createElement('div');
    divEstado.className = estado === "completado" ? "estado completado" : "estado";
    divEstado.textContent = estado;

    let spanAsig = document.createElement('span');
    spanAsig.className = "fecha";
    spanAsig.textContent = fechaAs;

    let spanEnt = document.createElement('span');
    spanEnt.className = "fecha";
    spanEnt.textContent = fechaEn;

    let divIntegrantes = document.createElement('div');
    divIntegrantes.className = "integrantes";
    if (Array.isArray(listaIntegrantes)) {
        listaIntegrantes.forEach(icono => {
            let span = document.createElement('span');
            span.textContent = icono;
            divIntegrantes.appendChild(span);
        });
    }

    let eliminar = document.createElement('button');
    eliminar.className = "eliminar";
    eliminar.textContent = "🗑️";

    div.appendChild(divNumero);
    div.appendChild(h3Titulo);
    div.appendChild(divEstado);
    div.appendChild(spanAsig);
    div.appendChild(spanEnt);
    div.appendChild(divIntegrantes);
    div.appendChild(eliminar);

    return div;
}