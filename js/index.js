// Escribe tu codigo JS acá
//Llamo el modal al DOM
const modal = document.querySelector('.modal')



const envioFormulario = () => {
    //Traigo al DOM los valores del input
    let name = document.querySelector('#floatingName').value
    let email = document.querySelector('#floatingInput').value
    let mensaje = document.querySelector('#floatingTextarea').value



    //Traigo al DOM los campos donde van a ir los valores ingresados del input
    let nombreModal = document.querySelector('#data-nombre')
    let emailModal = document.querySelector('#data-email')
    let mensajeModal = document.querySelector('#data-mensaje')




    //si mis inputs entran vacios me salta un alerta/mensaje
    if (!name || !email || !mensaje) {
        alert('no ha ingresado los datos pedidos')
    } else {
        //Le doy los valores ingresados de los inputs y los agrego a mi modal
        nombreModal.innerHTML = name
        emailModal.innerHTML = email
        mensajeModal.innerHTML = mensaje
        //Llamo a la funcion que me permitira abrir el modal
        abrirModal(modal)
    }



    //Llamo a la funcion de cerrar el modal y le envio como parametro modal    
    cerrarModal(modal)

}


//Creo 2 funciones aparte, una que abre el modal y otra que cierra el modal, luego estas funciones son llamadas en la funcion principal. 

//Creo una funcion que me permite abrir el modal
const abrirModal = (modal) => {
    modal.style.display = 'inline'
}

//Creo una funcion que me permite cerrar el modal
const cerrarModal = (modal) => {
    const cerrar = document.querySelector('#cerrar')
    cerrar.addEventListener('click', () => {
        modal.style.display = 'none'

    })
}



//Traigo el formulario al DOM y creo el evento enviar formulario
let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    //activo la recoleccion de datos + modal
    envioFormulario()
    //borro la informacion del formulario
    form.reset()




})