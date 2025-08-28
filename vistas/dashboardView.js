// vistas/dashboardView.js - VERSIÓN SIN DATOS DE PRUEBA

// Importar componentes desde las rutas correctas
import { header } from "../componentes/header/headerComponent.js";
import { footer } from "../componentes/footer/footerComponentes.js";
import { informacion } from "../componentes/informacion/informacionComponent.js";
import { tareas } from "../componentes/tareas/tareasComponent.js";

export async function dashboard() {
    let tareasLista = [];
    let errorCarga = false;
    
    try {
        // Intentar cargar datos del backend
        const resultado = await fetch("https://backend-todo-list-3.onrender.com/api/tareas");
        
        if (!resultado.ok) {
            throw new Error(`Error HTTP: ${resultado.status}`);
        }
        
        tareasLista = await resultado.json();
        console.log("Tareas cargadas desde el backend:", tareasLista);
        
        // Transformar los datos para que coincidan con lo que espera tu código
        tareasLista = tareasLista.map(tarea => ({
            // Mapear las columnas de la base de datos a las propiedades del frontend
            id: tarea.id,
            titulo: tarea.nombre || "Sin título",
            descripcion: tarea.descripcion || "Sin descripción",
            estado: tarea.estado_tarea || "pendiente",
            fechaAs: tarea.fecha_asignada || new Date().toISOString().split('T')[0],
            fechaEn: tarea.fecha_entrega || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            integrantes: ["👩🏻‍💻"], // Valor por defecto
            claseEstado: tarea.estado_activado || false,
            usuario_id: tarea.usuario_id
        }));
        
        console.log("Tareas transformadas:", tareasLista);
        
    } catch (error) {
        console.error("Error al cargar tareas:", error);
        errorCarga = true;
        
        // NO cargar datos de prueba - solo mostrar error
        const errorMsg = document.createElement('div');
        errorMsg.className = 'error-message';
        errorMsg.innerHTML = `
            <h3>Error de conexión</h3>
            <p>No se pudieron cargar las tareas desde el servidor.</p>
            <p>Verifica que el backend esté ejecutándose en:</p>
            <code>http://localhost:3000/api/tareas</code>
            <p>Error: ${error.message}</p>
        `;
        document.body.appendChild(errorMsg);
    }

    const contenedorDashboard = document.createElement("section");
    contenedorDashboard.className = "vista-dashboard";

    // Añadir header
    const headerElement = header();
    contenedorDashboard.appendChild(headerElement);

    const panelCentral = document.createElement("section");
    panelCentral.className = "panel-central";

    // Solo mostrar información si hay tareas y no hubo error
    if (!errorCarga && tareasLista.length > 0) {
        // Actualizar contador de tareas pendientes en el header
        const pendientes = tareasLista.filter(t => t.estado && t.estado.toLowerCase() === "pendiente").length;
        const taskCountElement = document.querySelector('.task-count');
        if (taskCountElement) {
            taskCountElement.textContent = pendientes;
        }

        // Crear panel de información con la primera tarea
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

        // Crear panel de tareas
        const panelTareas = document.createElement("section");
        panelTareas.className = "panel-tareas";
        
        // Añadir componente de tareas
        panelTareas.appendChild(tareas(tareasLista));
        panelCentral.appendChild(panelTareas);
        
    } else if (!errorCarga) {
        // Mensaje cuando no hay tareas (pero no hubo error)
        const noTasksMsg = document.createElement('div');
        noTasksMsg.className = 'no-tasks-message';
        noTasksMsg.innerHTML = `
            <h3>No hay tareas</h3>
            <p>No se encontraron tareas en la base de datos.</p>
            <p>¡Agrega una nueva tarea para comenzar!</p>
        `;
        panelCentral.appendChild(noTasksMsg);
    }
    
    contenedorDashboard.appendChild(panelCentral);
    
    // Añadir footer (siempre visible)
    contenedorDashboard.appendChild(footer());

    return contenedorDashboard;
}

// Detectar si estamos en el contexto del navegador
const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

// Solo ejecutar si estamos en el navegador
if (isBrowser) {
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