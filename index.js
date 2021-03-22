const botonDesplegable = document.getElementById("burguer")
const barraNavegacion = document.getElementById("principal-navbar")
const menuDesplegable = document.getElementById("items-navbar")

const secciones = document.getElementsByClassName("item")

console.log(botonDesplegable)

botonDesplegable.onclick = () => {

    menuDesplegable.classList.toggle(`show`)
    barraNavegacion.classList.toggle(`cambio-desplegable`)

    if (menuDesplegable.classList.contains(`show`)) {
        botonDesplegable.setAttribute(`class`, `fa fa-times`)
    }
    else {
        botonDesplegable.setAttribute(`class`, `fas fa-bars`)
    }

    for (let seccion of secciones) {

        seccion.onclick = ()=> {
            menuDesplegable.classList.remove(`show`)
            barraNavegacion.classList.remove(`cambio-desplegable`)
            botonDesplegable.setAttribute(`class`, `fas fa-bars`)
        } 
        
    }
    
}