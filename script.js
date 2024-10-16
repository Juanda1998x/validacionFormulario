const submitFunction = (event) => {
    
    if(!validarFormulario()){
        event.preventDefault();
    }else{
        alert(
            'Los datos enviados fueron: \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n'+
            'Apellido: ' + document.getElementById('apellido').value + '\n'+
            'Documento: ' + document.getElementById('documento').value + '\n'+
            'Email: ' + document.getElementById('email').value + '\n'+
            'Edad: ' + document.getElementById('edad').value + '\n'+
            'Actividad: ' + document.getElementById('actividad').value + '\n'+
            'Nivel de Estudio: ' + document.getElementById('nivelEstudio').value + '\n'
        )

        event.preventDefault();
    }
}
document.getElementById('formulario').addEventListener('submit', submitFunction) // escucha el envío del formulario

function validarFormulario() {

    // Esto valida los campos de texto
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {

        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)) // error + id con la primera en mayúscula 
        let nombre = campo.id;
        if (campo.value.length == '') {
            mostrarError(errorCampo, `¡campo ${nombre} es requerido!`);
            validacionCorrecta = false
        } else if (campo.value.length > 0 && campo.value.length < 3) {
            mostrarError(errorCampo, `Campo ${nombre} debe tener al menos 3 caracteres!`);
            validacionCorrecta = false
        } else {
            ocultarError(errorCampo)
        }
    });

    const campoEmail = document.getElementById('email');
    let campoErrorEmail = document.getElementById('errorEmail');
    let validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validarEmail.test(campoEmail.value)) {

        ocultarError(campoErrorEmail);
    }else{
        mostrarError(campoErrorEmail,'email no valido');
        validacionCorrecta = false;
    }

    const campoEdad = document.getElementById('edad');
    const errorEdad = document.getElementById('errorEdad');
    if (campoEdad.value<18) {

        mostrarError(errorEdad, 'tienes que ser mayor para registrarte')
        validacionCorrecta=false;
    }else{
        ocultarError(errorEdad);

    }


    const campoActividad = document.getElementById('actividad');
    const errorActividad = document.getElementById('errorActividad');
    if (campoActividad.value == '') {

        mostrarError(errorActividad, 'actividad no puede estar vacia');
        validacionCorrecta=false;
    }else{
        ocultarError(errorActividad);

    }

    const campoNivelEstudio= document.getElementById('nivelEstudio');
    const errorNivel = document.getElementById('errorNivelEstudio');
    if (campoNivelEstudio.value == '') {

        mostrarError(errorNivel, 'nivel de estudio no puede estar vaci' );
        validacionCorrecta=false;
    }else{
        ocultarError(errorNivel);

    }

    const aceptoTerminos = document.getElementById('aceptoTerminos');
    const erroraceptoTerminos = document.getElementById('errorAceptoTerminos');

    if (!aceptoTerminos.checked) {
        mostrarError(erroraceptoTerminos,'tienes que aceptar terminos')
        
    }else{
        ocultarError(erroraceptoTerminos);
    }

    return validacionCorrecta;

}



const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}
