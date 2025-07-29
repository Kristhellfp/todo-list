import { header } from "../componentes/header/headerComponent.js";
import { footer } from "../componentes/footer/footerComponentes.js";

export function dashboard() {

 let seccion = document.createElement('seccion');
  
 //header
seccion.appendChild(header());
seccion.appendChild(footer());



return seccion; 

}

document.body.appendChild(dashboard()); 


