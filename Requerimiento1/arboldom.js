/* Página web completamente por JavaScript, modificando el árbol DOM. Solo tendrá un contenedor (DIV) y sobre dicho contenedor y por medio de JavaScript se añadirán elementos a dicho contenedor. La temática libre. No necesario CSS. Se valora usar funciones de modificación del árbol DOM y no usar innerHTML.
Al menos los siguientes elementos HTML a un formulario:
-Campos de texto donde poner el DNI, el nombre y los apellidos, la dirección y el teléfono.
-Dos radio button, con 4 opciones a elegir
-Cinco checkbox diferentes
-2 imágenes
-Un campo select
-Un text area*/


//INPUT DNI
document.write("DNI: ");
var campoDni= document.createElement("input");
campoDni.placeholder ="Ingrese su DNI";
divformu.appendChild(campoDni)
document.body.appendChild(divformu);

//campoDni.id = "campo1"
//document.body.appendChild(campoDni);
document.write("<br\>");

//INPUT NOMBRE
document.write("Nombre: ");
var campoNombre= document.createElement("input");
campoNombre.id = "campo2"
campoNombre.placeholder="Ingrese su nombre";
document.body.appendChild(campoNombre);
document.write("<br\>");

//INPUT APELLIDOS
document.write("Apellidos: ");
var campoApellidos= document.createElement("input");
campoApellidos.id = "campo3"
campoApellidos.placeholder="Ingrese sus apellidos";
document.body.appendChild(campoApellidos);
document.write("<br\>");

//INPUT DIRECCION
document.write("Direccion: ");
var direccion = document.createElement("input");
direccion.id ="campo4";
direccion.placeholder="Ingrese su dirección";
document.body.appendChild(direccion);
document.write("<br\>");

//INPUT TELEFONOS
document.write("Teléfono: ")
var telefonos = document.createElement("input");
telefonos.placeholder="Ingrese su teléfono";
telefonos.id="campo5"
document.body.appendChild(telefonos);
document.write("<br\>");

//select
document.write("Ciudades: ");
var campoCiudades= document.createElement("select");
var opcion1 = document.createElement("option");
//campoCiudades.id = "ciudades"
campoCiudades.appendChild(opcion1);
var contenido1 = document.createTextNode("Paris!");
opcion1.appendChild(contenido1);
document.body.appendChild(campoCiudades);
var opcion2 = document.createElement("option");
campoCiudades.appendChild(opcion2);
var contenido2=
document.createTextNode("Roma!");
opcion2.appendChild(contenido2);
var opcion3 = document.createElement("option");
campoCiudades.appendChild(opcion3);
var contenido3 = document.createTextNode("Madrid!");
opcion3.appendChild(contenido3);
document.body.appendChild(campoCiudades);

//bottom radio
document.write("<br\>");
document.write("Radio:");
document.write("<br\>");

//Radio1
var radio1 = document.createElement("input");   
radio1.type = "radio";   
radio1.name = "radioGrp";   
radio1.id = "rad1";   
radio1.value = "miradio1";   
radio1.defaultChecked = true;    
radio1.checked = true; 



//Radio2
var radio2 = document.createElement("input");   
radio2.type = "radio";   
radio2.name = "radioGrp";   
radio2.id = "rad2";   
radio2.value = "miradio2"; 
   

//Radio3
var radio3 = document.createElement("input");   
radio3.type = "radio";   
radio3.name = "radioGrp";   
radio3.id = "rad3";   
radio3.value = "miradio3"; 
//Radio4
var radio4 = document.createElement("input");   
radio4.type = "radio";   
radio4.name = "radioGrp";   
radio4.id = "rad4";   
radio4.value = "miradio4"; 

var objTextNode1 = document.createTextNode("Avión");   
var objLabel1 = document.createElement("label");   
objLabel1.htmlFor = radio1.id;   
objLabel1.appendChild(radio1);   
objLabel1.appendChild(objTextNode1)
document.body.appendChild(objLabel1)
document.body.appendChild(radio1)

document.write("<br\>");
var objTextNode2 = document.createTextNode("Barco");   
var objLabel2 = document.createElement("label");   
objLabel2.htmlFor = radio2.id;   
objLabel2.appendChild(radio2);   
objLabel2.appendChild(objTextNode2)
document.body.appendChild(objLabel2)
document.body.appendChild(radio2)

document.write("<br\>");
var objTextNode3 = document.createTextNode("Coche");   
var objLabel3 = document.createElement("label");   
objLabel3.htmlFor = radio3.id;   
objLabel3.appendChild(radio3);   
objLabel3.appendChild(objTextNode3)
document.body.appendChild(objLabel3)
document.body.appendChild(radio3)

document.write("<br\>");
var objTextNode4 = document.createTextNode("Autobus");   
var objLabel4 = document.createElement("label");   
objLabel4.htmlFor = radio4.id;   
objLabel4.appendChild(radio4);   
objLabel4.appendChild(objTextNode4)
document.body.appendChild(objLabel4)
document.body.appendChild(radio4)

//CHECKBOX
document.write("<br\>");

var check_value = new Array( )
check_value[0] = "I work at home"
check_value[1] = "Train/Subway"
check_value[2] = "Walk"
check_value[3] = "Bicycle"

for(var count in check_value)
    {
    var ptworkinfo=document.createElement("input");   
    ptworkinfo.value=(check_value[count] + '</br>');
    ptworkinfo.type="checkbox";
    ptworkinfo.id="ptworkinfo" + count;
    document.body.appendChild(ptworkinfo);
    }

//IMAGENES 1ª FORMA
document.write("<br\>");
var img = new Image(150, 200);
img.src = "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80";

img.style.border = "2px solid black";
img.style.borderRadius = "2px";
img.alt="Paris";
document.body.appendChild(img);

var img = new Image(200, 200);
img.src = "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=796&q=80";

img.style.border = "2px solid black";
img.style.borderRadius = "2px";
img.alt="Roma";
document.body.appendChild(img);

var img = new Image(200, 200);
img.src = "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

img.style.border = "2px solid black";
img.style.borderRadius = "2px";
img.alt="Belin";
document.body.appendChild(img);

//IMAGENES 2ª FORMA
for(let i = 0; i < 3; i++) {
    const img =new Image(200, 200);;
    img.src = "https://picsum.photos/250/350?id=" + i;
    if(i === 5) {
      img.style.borderRadius = "50%";
    }
    img.classList.add("img-margin");
    document.body.appendChild(img);
  }