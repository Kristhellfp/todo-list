import { header } from "../componentes/header/headerComponent.js";
import { footer } from "../componentes/footer/footerComponentes.js";
import { informacion } from "../componentes/informacion/informacionComponent.js";
import { formularioComponent } from "../componentes/formulario/formularioComponent.js";

export function dashboard() {
    const tareasLista = [
        {
            titulo: "Asignación",
            estado: "Pendiente",
            descripcion: "Ensayo",
            fechaAs: "2025-08-04",
            fechaEn: "2025-08-15",
            integrantes: ["🧑🏻‍🎓", "👨🏻‍🎓"],
            claseEstado: "estado-pendiente"
        },
        {
            titulo: "Asignación I",
            estado: "En progreso",
            descripcion: "Maqueta",
            fechaAs: "2025-07-02",
            fechaEn: "2025-07-15",
            integrantes: ["🧑🏻‍🎓", "👨🏻‍🎓"],
            claseEstado: "estado-progreso"
        },
        {
            titulo: "Asignación II",
            estado: "Completado",
            descripcion: "Planificaciones",
            fechaAs: "2025-06-01",
            fechaEn: "2025-06-31",
            integrantes: ["🧑🏻‍🎓", "👨🏻‍🎓"],
            claseEstado: "estado-finalizado"
        }
    ];

    const contenedorDashboard = document.createElement("section");
    contenedorDashboard.className = "vista-dashboard";

    contenedorDashboard.appendChild(header());

    const panelCentral = document.createElement("section");
    panelCentral.className = "panel-central";

    const panelTareas = document.createElement("section");
    panelTareas.className = "panel-tareas";

    const tabla = document.createElement("table");
    tabla.className = "tabla-asignaciones";

    const encabezado = document.createElement("thead");
    encabezado.innerHTML = `
        <tr>
            <th>Número</th>
            <th>Título</th>
            <th>Estado</th>
            <th>Inicio</th>
            <th>Entrega</th>
            <th>Integrantes</th>
            <th>Eliminar</th>
        </tr>
    `;
    tabla.appendChild(encabezado);

    const cuerpo = document.createElement("tbody");

    tareasLista.forEach((tarea, idx) => {
        const fila = document.createElement("tr");
        fila.className = "fila-tarea";

        const emojis = tarea.integrantes.map(e => `<span class="icono-equipo">${e}</span>`).join("");

        fila.innerHTML = `
            <td>${idx + 1}</td>
            <td>${tarea.titulo}</td>
            <td><span class="estado-label ${tarea.claseEstado}">${tarea.estado}</span></td>
            <td>${tarea.fechaAs}</td>
            <td>${tarea.fechaEn}</td>
            <td class="grupo-emojis">${emojis}</td>
            <td><span class="boton-eliminar">🗑️</span></td>
        `;

        cuerpo.appendChild(fila);
    });

    tabla.appendChild(cuerpo);
    panelTareas.appendChild(tabla);

    const panelInfo = informacion({
        titulo: tareasLista[0].titulo,
        estado: tareasLista[0].estado,
        completado: tareasLista[0].fechaAs,
        entrega: tareasLista[0].fechaEn,
        integrantes: tareasLista[0].integrantes,
        descripcion: tareasLista[0].descripcion
    });


    panelCentral.appendChild(panelTareas);
    panelCentral.appendChild(panelInfo);

    contenedorDashboard.appendChild(panelCentral);
    contenedorDashboard.appendChild(footer());

    return contenedorDashboard;
}

document.body.appendChild(dashboard());
