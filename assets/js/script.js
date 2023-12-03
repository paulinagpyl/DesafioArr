import propVenta from './data/propiedades_venta.js'
import propArriendo from './data/propiedades_arriendo.js'

console.log("hola")
const mostrarPropiedades = (prop, containerId) => {
    const container= document.getElementById(containerId);

    const propFiltrados= prop.slice(0,3)

    propFiltrados.forEach((prop)=>{
        const card =document.createElement("div")
        card.className="col-md-4 mb-4";

        const cardContent=         
       `<div class="col-md-4 mb-4">
        <div class="card">
        <img src="${prop.src}" class="card-img-top"alt="Imagen de propiedad"/>
        <div class="card-body">
            <h5 class="card-title">${prop.nombre}</h5>
            <p class="card-text"> ${prop.descripcion}</p>
            <p> <i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
            <p> <i class="fas fa-bed"></i> ${prop.habitaciones} </p>
            <p><i class="fas fa-dollar-sign"></i> ${prop.costo}</p>
            <p class="text-danger"> <i class="fas fa-smoking-ban"></i> ${prop.smoke}</p>
            <p class="text-danger"> <i class="fa-solid fa-ban"></i> ${prop.pets} </p>
        </div>
        </div>
        `;
        card.innerHTML= cardContent;
        container.appendChild(card);
    });
};

mostrarPropiedades(propArriendo,'propArrContenedor')
mostrarPropiedades(propVenta,'propVtaContenedor')