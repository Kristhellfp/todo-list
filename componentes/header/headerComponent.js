export function header() {
let header = document.createElement('header')

let h1 =  document.createElement('h1');
h1.innerText = "Todo-List";
header.appendChild(h1);

let divTareas = document.createElement('div');
divTareas.className = "div-tareas";
header.appendChild(divTareas);

let divLogoUsuario = document.createElement('div');
divLogoUsuario.className = "div-logo-usuario";
header.appendChild(divLogoUsuario);

return header
}