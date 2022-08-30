const texto = document.querySelector(".mensaje");
const lectura = document.querySelector(".lectura")

//Vectores usados para encriptar/desencriptar
let letras = ["e","i","a","o","u"];
let letrasEncriptadas = ["enter","imes","ai","ober","ufat"];


function EncriptarMensaje(){ 

        txtEncriptado = texto.value;
        txtEncriptado = txtEncriptado.toLowerCase();

        for(let i=0; i<letras.length; i++){
                if(txtEncriptado.includes(letras[i])){
                        txtEncriptado = txtEncriptado.replaceAll(letras[i],letrasEncriptadas[i])
                }
        }

        lectura.value = txtEncriptado;
        lectura.style.backgroundImage = "none";
        texto.value = "";

}

function DesencriptarMensaje(){ 
        txtEncriptado = texto.value;
        txtEncriptado = txtEncriptado.toLowerCase();

        for(let i=0; i<letras.length; i++){
                if(txtEncriptado.includes(letrasEncriptadas[i])){
                        txtEncriptado = txtEncriptado.replaceAll(letrasEncriptadas[i],letras[i])
                }
        }

        lectura.value = txtEncriptado;
        lectura.style.backgroundImage = "none";
        texto.value = "";

}

function Copiar(){
        lectura.select();
        navigator.clipboard.writeText(lectura.value);
        lectura.value="";        
}
