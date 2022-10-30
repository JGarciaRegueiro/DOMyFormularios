var nombre = document.getElementById("nombre");
var direccion = document.getElementById("direccion");
var telefono = document.getElementById("telefono");
var email = document.getElementById("email");
var tamaño = document.getElementsByName("tamaño");
var ingrediente = document.getElementsByName("ingrediente");
var checked = false;
var precio = 0;

function validar (){
    if (nombre.value.trim() == ''){
        alert("El nombre es obligatorio")
        return false;
    }

    if (direccion.value.trim() == ''){
        alert("La direccion es obligatoria")
        return false;
    }

    if (telefono.value.trim() == ''){
        alert("El teléfono es obligatorio")
        return false;
    }

    if (email.value.trim() == ''){
        alert("El email es obligatorio")
        return false;
    }

    for (i=0; i<tamaño.length;i++){
        if (tamaño[i].checked){
            checked = true;
            break;
        }
    }
    if (!checked){
        alert("El tamaño es obligatorio")
        return false;
    }

    checked = false;
    for (j=0; j<ingrediente.length;j++){
        if (ingrediente[j].checked){
            checked = true;
            break;
        }
    }
    if (!checked){
        alert("El ingrediente es obligatorio")
        return false;
    }

    else return true;

}

function calcularPrecio (){
    if (validar () == true){
        for (k=0; k<tamaño.length;k++){
            if (tamaño[k].checked){
                var precioPorTamaño = tamaño[k].value;
            }
        }
        if (precioPorTamaño == 'pequeña'){
            precio=precio+5;
        }
        if (precioPorTamaño == 'mediana'){
            precio=precio+10;
        }
        if (precioPorTamaño == 'grande'){
            precio=precio+15;
        }
        for (h=0; h<ingrediente.length;h++){
            if (ingrediente[h].checked){
                precio=precio+1;
            }
        }
        alert("El precio total del pedido es " + precio +"€") 
    }
    
}
