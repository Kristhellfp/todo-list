import { header } from "../componentes/header/headerComponent.js";


export function dashboard() {

 let seccion = document.createElement('seccion');
  
 //header
seccion.appendChild(header());


return seccion; 

}

document.body.appendChild(dashboard()); 


