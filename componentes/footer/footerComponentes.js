export function footer() {
    let footer = document.createElement('footer');
    const link = document.createElement('a');
    link.href = 'https://github.com/Kristhellfp/todo-list';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = '@Kristhellfp'; 

    link.className = 'footer-link';
    footer.appendChild(link);

    return footer;
}