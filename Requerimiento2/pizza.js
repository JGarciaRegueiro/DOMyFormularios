var nombre = document.getElementById("nombre");
var direccion = document.getElementById("direccion");
var telefono = document.getElementById("telefono");
var email = document.getElementById("email");

function calcularPrecio (){
    alert("El precio total del pedido es $precio")
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
}