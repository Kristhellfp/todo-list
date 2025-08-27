// vistas/dashboardView.js - ARCHIVO CORREGIDO

// Importar componentes desde las rutas correctas
import { header } from "../componentes/header/headerComponent.js";
import { footer } from "../componentes/footer/footerComponentes.js";
import { informacion } from "../componentes/informacion/informacionComponent.js";
import { tareas } from "../componentes/tareas/tareasComponent.js";

export async function dashboard() {
    let tareasLista = [];
    try {
        const resultado = await fetch("https://backend-todo-list-1-76oa.onrender.com/tareas");
        tareasLista = await resultado.json();
        console.log("Tareas cargadas desde BD:", tareasLista);
        
        // TRANSFORMAR LOS DATOS para que coincidan con lo que espera tu código
        tareasLista = tareasLista.map(tarea => ({
            // Mapear 'nombre' a 'titulo'
            titulo: tarea.nombre || "Sin título",
            // Mantener 'descripcion' 
            descripcion: tarea.descripcion || "Sin descripción",
            // Si hay otras propiedades que necesitas, ajústalas aquí
            estado: tarea.estado || "Pendiente",
            fechaAs: tarea.fechaAsignacion || tarea.fechaAs || "No asignada",
            fechaEn: tarea.fechaEntrega || tarea.fechaEn || "No asignada",
            integrantes: Array.isArray(tarea.integrantes) ? tarea.integrantes : [],
            // Si necesitas el id u otras propiedades de la BD
            id: tarea.id,
            // Añade cualquier otra propiedad que necesites
            claseEstado: tarea.claseEstado || false
        }));
        
        console.log("Tareas transformadas:", tareasLista);
        
        // Actualizar contador de tareas pendientes en el header
        const pendientes = tareasLista.filter(t => t.estado && t.estado.toLowerCase() === "pendiente").length;
        const taskCountElement = document.querySelector('.task-count');
        if (taskCountElement) {
            taskCountElement.textContent = pendientes;
        }
    } catch (error) {
        console.error("Error al cargar tareas:", error);
        // Mostrar mensaje de error en la interfaz
        const errorMsg = document.createElement('div');
        errorMsg.className = 'error-message';
        errorMsg.textContent = 'Error al cargar las tareas. Verifica que el servidor esté ejecutándose.';
        document.body.appendChild(errorMsg);
        
        // Cargar datos de ejemplo si hay error
        tareasLista = [
            {
                titulo: "Proyecto Final JavaScript",
                estado: "Pendiente",
                fechaAs: "2023-11-10",
                fechaEn: "2023-11-20",
                integrantes: ["👩🏻‍💻", "👨🏽‍💻"],
                descripcion: "Implementar el proyecto final del curso",
                claseEstado: true
            },
            {
                titulo: "Diseño de Interfaz",
                estado: "Completado",
                fechaAs: "2023-11-05",
                fechaEn: "2023-11-15",
                integrantes: ["👩🏼‍💻"],
                descripcion: "Diseñar la interfaz de usuario",
                claseEstado: false
            }
        ];
    }

    const contenedorDashboard = document.createElement("section");
    contenedorDashboard.className = "vista-dashboard";

    // Añadir header
    const headerElement = header();
    contenedorDashboard.appendChild(headerElement);

    const panelCentral = document.createElement("section");
    panelCentral.className = "panel-central";

    // Crear panel de información con la primera tarea
    if (tareasLista.length > 0) {
        const primeraTarea = tareasLista[0];
        const panelInfo = informacion({
            titulo: primeraTarea.titulo,
            estado: primeraTarea.estado,
            completado: primeraTarea.fechaAs,
            entrega: primeraTarea.fechaEn,
            integrantes: primeraTarea.integrantes,
            descripcion: primeraTarea.descripcion
        });
        panelCentral.appendChild(panelInfo);
    } else {
        // Mensaje cuando no hay tareas
        const noTasksMsg = document.createElement('div');
        noTasksMsg.className = 'no-tasks-message';
        noTasksMsg.textContent = 'No hay tareas disponibles. ¡Agrega una nueva tarea!';
        panelCentral.appendChild(noTasksMsg);
    }

    // Crear panel de tareas
    const panelTareas = document.createElement("section");
    panelTareas.className = "panel-tareas";
    
    // Añadir componente de tareas
    if (tareasLista.length > 0) {
        panelTareas.appendChild(tareas(tareasLista));
    }
    
    panelCentral.appendChild(panelTareas);
    contenedorDashboard.appendChild(panelCentral);
    
    // Añadir footer
    contenedorDashboard.appendChild(footer());

    return contenedorDashboard;
}

// Detectar si estamos en el contexto del navegador
const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

// Solo ejecutar si estamos en el navegador y es el script principal
if (isBrowser) {
    // Verificar si este script fue cargado como módulo principal
    const scripts = document.getElementsByTagName('script');
    let isMainModule = false;
    
    for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src && scripts[i].src.includes('dashboardView.js')) {
            isMainModule = true;
            break;
        }
    }
    
    if (isMainModule) {
        dashboard().then(elemento => {
            // Limpiar el body antes de añadir el dashboard
            document.body.innerHTML = '';
            document.body.appendChild(elemento);
        }).catch(error => {
            console.error('Error al cargar el dashboard:', error);
            document.body.innerHTML = `
                <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
                    <h2>Error al cargar la aplicación</h2>
                    <p>${error.message}</p>
                    <p>Verifica que todos los archivos estén correctamente importados.</p>
                </div>
            `;
        });
    }
}