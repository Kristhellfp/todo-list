import { tarea } from "../../modulos/itemTarea/itemTarea.js";

let tareasDb = [
    { titulo: "Asignación", integrantes: ["🧑🏻‍🎓", "👨🏻‍🎓"] },
    { titulo: "Asignación", integrantes: ["🧑🏻‍🎓", "👨🏻‍🎓"] },
    { titulo: "Asignación", integrantes: ["🧑🏻‍🎓", "👨🏻‍🎓"] },
    { titulo: "Asignación", integrantes: ["🧑🏻‍🎓", "👨🏻‍🎓"]},
    { titulo: "Asignación", integrantes: ["🧑🏻‍🎓", "👨🏻‍🎓"] },
    { titulo: "Asignación", integrantes: ["🧑🏻‍🎓", "👨🏻‍🎓"] },
    { titulo: "Asignación", integrantes: ["🧑🏻‍🎓", "🧑🏻‍🎓"] },
    { titulo: "Asignación", integrantes: ["🧑🏻‍🎓", "v"] },
    { titulo: "Asignación", integrantes: ["🧑🏻‍🎓", "🧑🏻‍🎓"] }
];

export function tareas() {
    let div = document.createElement('div');
    div.className = "div-tareas";

    tareasDb.forEach((e, i) => {
        div.appendChild(
            tarea(
                i + 1,
                e.titulo,
                "completado",
                "17/05/2025",
                "30/07/2025",
                e.integrantes,
                e.resaltar || false
            )
        );
    });

    return div;
}
