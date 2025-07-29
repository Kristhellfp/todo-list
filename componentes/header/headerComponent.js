export function header() {

    let header = document.createElement('header');
    
    let h1 = document.createElement('h1');
    h1.textContent = "Todo-List";
    header.appendChild(h1);

    let statusBox = document.createElement('div');
    statusBox.className = "status-box";
    header.appendChild(statusBox);

    let userEmoji = document.createElement('span');
    userEmoji.className = "user-emoji";
    userEmoji.textContent = "👩🏻‍🎓";
    statusBox.appendChild(userEmoji);

    let taskText = document.createElement('span');
    taskText.className = "task-text";
    taskText.textContent = "Pendientes:";
    statusBox.appendChild(taskText);

    let taskCount = document.createElement('span');
    taskCount.className = "task-count";
    taskCount.textContent = "0";
    statusBox.appendChild(taskCount);

    return header;
}
