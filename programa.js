function mostrarFuncion(params) {
    console.log("aloóóó" + new Date())
    
}

mostrarFuncion()

//Agregar un eventListener a otroBoton

let Boton= document.getElementById("otroBoton")
Boton.addEventListener("click", ()=>{console.log("hicieron click encima")})