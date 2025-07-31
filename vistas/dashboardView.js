import { header } from "../componentes/header/headerComponent.js";
import { footer } from "../componentes/footer/footerComponentes.js";
import { tareas } from "../componentes/tareas/tareasComponent.js";
import { informacion } from "../componentes/informacion/informacionComponent.js";

export function dashboard() {

 let dashboard = document.createElement('section');
 dashboard.className = "dashboard";
 
  
 //header
dashboard.appendChild(header());



let secccion1 = document.createElement('section');
secccion1.className ="seccion-1"
secccion1.appendChild(tareas());
secccion1.appendChild(informacion());
dashboard.appendChild(secccion1);


//footer
dashboard.appendChild(footer());



return dashboard; 

}

document.body.appendChild(dashboard()); 


