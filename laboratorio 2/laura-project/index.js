const formulario = document.getElementById('formulario');
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const pàssword = document.getElementById('passwordConfirm');
const primerApellido = document.getElementById('primerApellido');
const segundoApellido = document.getElementById('segundoApellido');
const username = document.getElementById('username');

const iconoError = document.getElementsByClassName('icono-error');
const iconoSuccess = document.getElementsByClassName('icono-success');


window.onload = function() {
    for(i=0; i<iconoError.length; i++){
        iconoError[i].style.display = 'none';
        iconoSuccess[i].style.display = 'none';
    }
};

function validarFormulario() {
  //  if(validarDatos()){
   //     alert("El registro se ha realizado correctamente");
    //}
    if (validarDatos()) {
        // Crear una nueva instancia de XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // Preparar los datos del formulario para enviar
        var formData = new FormData(formulario);

        // Configurar la solicitud
        xhr.open("POST", formulario.action, true);

        // Configurar la función que se llamará cuando la solicitud se complete
        xhr.onload = function() {
            if (this.status == 200) {
                // Si la solicitud tuvo éxito, verifica la respuesta del servidor
                if (this.responseText == 'Nuevo registro creado con éxito') {
                    alert('El registro se ha realizado correctamente');
                    window.location.href = 'usuarios.php';
                } else if (this.responseText == 'Correo existente') {
                    alert('El correo electrónico ya está registrado');
                    location.reload(); // Refresca la página
                }
            } else {
                // Si algo salió mal, muestra un error
                alert('Error: ' + this.status);
            }
        }

        // Enviar la solicitud
        xhr.send(formData);
    }
}

function error(e, mensaje) {
    const controlEntrada = e.parentElement.parentElement;
    const mostrarError = controlEntrada.querySelector('.error');
    const iconoError = controlEntrada.querySelector('.icono-error');
    const iconoSuccess = controlEntrada.querySelector('.icono-success');
    mostrarError.innerText = mensaje;
    controlEntrada.classList.add('error');
    controlEntrada.classList.remove('success');
    iconoError.style.display = 'block';
    iconoSuccess.style.display = 'none';
}


function success(e){
    const controlEntrada = e.parentElement.parentElement;
    const mostrarError = controlEntrada.querySelector('.error');
    const iconoError = controlEntrada.querySelector('.icono-error');
    const iconoSuccess = controlEntrada.querySelector('.icono-success');

    mostrarError.innerText = '';
    controlEntrada.classList.add('success');
    controlEntrada.classList.remove('error');
    iconoError.style.display = 'none';
    iconoSuccess.style.display = 'block';
}

/**
 *  Funcion que recibe un emial y valida 
 *  si cumple la expresion regular
 * @param {*} email 
 * @returns si el email es valido
 */
function emailValido(email){
    const expresionRegularEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return expresionRegularEmail.test(String(email).toLowerCase());
}

/**
 * Funcion que recibe un nombre de usuario y valida si solo contiene letras
 * @param {*} username 
 * @returns si el nombre usuario es valido 
 */
function nameValido(nombre){
    const expresionRegularName = /^[a-zA-Z]+$/;
    return expresionRegularName.test(String(nombre).toLowerCase());
}

function validarDatos() {

    let checkName = false;
    let checkMail = false;
    let checkPassword = false;
    let checkPrimerApellido = false;
    let checkSegundoApellido = false;
    let checkUsername = false;
    const valor_name = nombre.value;
    const valor_email = email.value;
    const valor_password = password.value;
    const valor_username = username.value;
    const valor_primerApellido = primerApellido.value;
    const valor_segundoApellido = segundoApellido.value;

    if(valor_name === '') {
        error(nombre, 'Rellene este campo');
        checkName = false;
    }else if (!nameValido(valor_name)){  
        error(nombre, 'Nombre de usuario no puedo contener numeros');
        checkName = false;
    }else{
        success(nombre)
        checkName = true;
    }

    if(valor_username === '') {
        error(username, 'Rellene este campo');
        checkUsername = false;
    }else{
        success(username)
        checkUsername = true;
    }


    
    if(valor_primerApellido === '') {
        error(primerApellido, 'Rellene este campo');
        checkPrimerApellido = false;
    }else if (!nameValido(valor_primerApellido)){  // Asumiendo que el apellido sigue las mismas reglas que el nombre de usuario
        error(primerApellido, 'Apellido no puedo contener numeros');
        checkPrimerApellido = false;
    }else{
        success(primerApellido)
        checkPrimerApellido = true;
    }

    
    if(valor_segundoApellido === '') {
        error(segundoApellido, 'Rellene este campo');
        checkSegundoApellido = false;
    }else if (!nameValido(valor_segundoApellido)){  // Asumiendo que el apellido sigue las mismas reglas que el nombre de usuario
        error(segundoApellido, 'Apellido no puedo contener numeros');
        checkSegundoApellido = false;
    }else{
        success(segundoApellido)
        checkSegundoApellido = true;
    }

    if(valor_email === ''){
        error(email, 'Rellene este campo');
        checkMail = false;
    }else if (!emailValido(valor_email)){
        error(email, 'Email no valido');
        checkMail = false;
    }else{
        success(email)
        checkMail=true;
    }

    if(valor_password === ''){
        error(password, 'Rellene este campo');
        checkPassword = false;
    } else if (valor_password.length > 8){
        error(password, 'No debe tener mas de 8 caracteres');
        checkPassword = false;
    } else {
        success(password);
        checkPassword=true;
    }


    return checkUsername && checkName && checkMail && checkPassword  && checkPrimerApellido && checkSegundoApellido;

}