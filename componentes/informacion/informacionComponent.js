import { formularioComponent } from "../formulario/formularioComponent.js";

export function informacion(data) {
    let infoContainer = document.createElement('div');
    infoContainer.className = "info-container";

    let buttonContainer = document.createElement('div');
    buttonContainer.className = "button-container";

    let taskButton = document.createElement('button');
    taskButton.className = "task-button";
    taskButton.innerText = "+ Tarea";
    taskButton.id = "btnMostrarFormulario";

    let archivedButton = document.createElement('button');
    archivedButton.className = "archived-button";
    archivedButton.innerText = "Archivados";

    buttonContainer.appendChild(taskButton);
    buttonContainer.appendChild(archivedButton);
    infoContainer.appendChild(buttonContainer);

    let card = document.createElement('div');
    card.className = "task-card";

    let statusCircle = document.createElement('div');
    statusCircle.className = "status-circle";
    statusCircle.innerText = data.estado || "Estado";
    card.appendChild(statusCircle);

    let title = document.createElement('h3');
    title.className = "task-title";
    title.innerText = data.titulo || "Título no disponible";
    card.appendChild(title);

    let dateContainer = document.createElement('div');
    dateContainer.className = "date-container";

    let completedDate = document.createElement('span');
    completedDate.className = "completed-date";
    completedDate.innerText = `Completado: ${data.completado || "N/A"}`;

    let dueDate = document.createElement('span');
    dueDate.className = "due-date";
    dueDate.innerText = `Entrega: ${data.entrega || "N/A"}`;

    dateContainer.appendChild(completedDate);
    dateContainer.appendChild(dueDate);
    card.appendChild(dateContainer);

    let membersLabel = document.createElement('p');
    membersLabel.className = "members-label";
    membersLabel.innerText = "Integrantes";
    card.appendChild(membersLabel);

    let emojiContainer = document.createElement('div');
    emojiContainer.className = "emoji-container";

    (data.integrantes || []).forEach(e => {
        let emoji = document.createElement('span');
        emoji.className = "member-emoji";
        emoji.innerText = e;
        emojiContainer.appendChild(emoji);
    });

    card.appendChild(emojiContainer);

    let deleteIcon = document.createElement('span');
    deleteIcon.className = "delete-icon";
    deleteIcon.innerText = "🗑️";
    card.appendChild(deleteIcon);

    infoContainer.appendChild(card);

    const formulario = formularioComponent();
    infoContainer.appendChild(formulario);

    taskButton.addEventListener("click", () => {
        formulario.style.display = (formulario.style.display === "none") ? "block" : "none";
    });

    return infoContainer;
}
