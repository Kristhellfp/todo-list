export function formularioComponent() {
    const form = document.createElement('form');
    form.className = "formulario";
    form.id = "formularioTarea"; 
    form.style.display = "none"; 

    function crearCampo(labelText, inputElemento) {
        const contenedor = document.createElement('div');
        contenedor.className = "campo-formulario";

        const label = document.createElement('label');
        label.innerText = labelText;

        contenedor.appendChild(label);
        contenedor.appendChild(inputElemento);

        return contenedor;
    }

    const tituloInput = document.createElement('input');
    tituloInput.placeholder = "Nombre de la tarea";
    tituloInput.className = "form-input";
    tituloInput.required = true;

    const estadoSelect = document.createElement('select');
    estadoSelect.className = "form-select";
    ["Entregado", "Perdido", "Pendiente"].forEach(estado => {
        const option = document.createElement('option');
        option.value = estado.toLowerCase();
        option.innerText = estado;
        estadoSelect.appendChild(option);
    });

    const fechaAsignacion = document.createElement('input');
    fechaAsignacion.type = "date";
    fechaAsignacion.className = "form-date";
    fechaAsignacion.required = true;

    const fechaEntrega = document.createElement('input');
    fechaEntrega.type = "date";
    fechaEntrega.className = "form-date";
    fechaEntrega.required = true;

    const descripcionInput = document.createElement('textarea');
    descripcionInput.placeholder = "Descripción de la tarea";
    descripcionInput.className = "form-textarea";
    descripcionInput.rows = 4;

    const enviarBtn = document.createElement('button');
    enviarBtn.type = "submit";
    enviarBtn.className = "form-button";
    enviarBtn.innerText = "Guardar";

    const hoy = new Date().toISOString().split('T')[0];
    fechaAsignacion.value = hoy;
    fechaEntrega.value = hoy;

    form.appendChild(crearCampo("Título", tituloInput));
    form.appendChild(crearCampo("Estado", estadoSelect));
    form.appendChild(crearCampo("Fecha Asignación", fechaAsignacion));
    form.appendChild(crearCampo("Fecha Entrega", fechaEntrega));
    form.appendChild(crearCampo("Descripción", descripcionInput));

    const btnContenedor = document.createElement('div');
    btnContenedor.className = "boton-contenedor";
    btnContenedor.appendChild(enviarBtn);

    form.appendChild(btnContenedor);

    return form;
}
