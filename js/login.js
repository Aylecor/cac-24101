document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Para prevenir la recarga de la pagina.
    });
    

    const mail = document.getElementById("mail");
    const pass = document.getElementById("password");
    const form = document.getElementById("form");
    const parrafo = document.getElementById("aviso");
    const parrafo2 = document.getElementById("aviso2");
    
    form.addEventListener("submit", e=>{

        let aviso = "";
        parrafo.innerHTML = ""; //Para borrar el texto de aviso cuando el usuario haya completado bien el form.
        let errorUsuario = false;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        console.log(regexEmail.test(mail.value)) //Prueba si el Mail tipeado es TRUE o FALSE
        if(!regexEmail.test(mail.value)){ //Si el mail no tiene el @, ni el ".com":
            errorUsuario = true;
            aviso += `El email no es valido. Debe tener @ y debe ser ".com" <br>`;
        }

        if(pass.value.length <6){ //Si la contraseña no es mayor de 6 digitos:
            errorUsuario = true;
            aviso += `La password es corta. Debe tener al menos 6 digitos. <br>`;
        }
            
        if(errorUsuario){
            parrafo.innerHTML = aviso; 
        }

        if (pass.value.length >=6 && regexEmail.test(mail.value)){
            parrafo2.innerHTML = "¡El formulario se ha enviado correctamente!"
            console.log("El mail del usuario es: "+ mail.value+ " y su contraseña es: "+ pass.value+ " y el Formulario se envío correctamente.")
        }else {parrafo2.innerHTML = ""}

        

        
    })