var nombre = document.getElementById("nombre");
var direccion = document.getElementById("direccion");
var telefono = document.getElementById("telefono");
var email = document.getElementById("email");
var tamaño = document.getElementsByName("tamaño");
    var ingrediente = document.getElementsByName("ingrediente");
var checked = false;
var precio = 0;

function calcularPrecio (){
    for (k=0; k<tamaño.length;k++){
        if (tamaño[k].checked){
            var precioPorTamaño = tamaño[k].value;
        }
    }
    if (precioPorTamaño.toString() == 'pequeña'){
        precio=precio+5;
    }
    if (precioPorTamaño.toString() == 'mediana'){
        precio=precio+10;
    }
    if (precioPorTamaño.toString() == 'grande'){
        precio=precio+15;
    }
    for (h=0; h<ingrediente.length;h++){
        if (ingrediente[h].checked){
            precio=precio+1;
        }
    }
    alert("El precio total del pedido es " + precio)
}

function validar (){
    if (nombre.value.trim() == ''){
        alert("El nombre es obligatorio")
    }

    if (direccion.value.trim() == ''){
        alert("La direccion es obligatoria")
    }

    if (telefono.value.trim() == ''){
        alert("El teléfono es obligatorio")
    }

    if (email.value.trim() == ''){
        alert("El email es obligatorio")
    }

    for (i=0; i<tamaño.length;i++){
        if (tamaño[i].checked){
            checked = true;
            break;
        }
    }
    if (!checked){
        alert("El tamaño es obligatorio")
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
    }
}