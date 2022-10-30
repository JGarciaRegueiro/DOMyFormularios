/*Página web completamente por JavaScript, modificando el árbol DOM.
solo tendrá un contenedor (DIV) y por medio de JavaScript se añadirán elementos La temática libre. No es necesario usar CSS. Se valorará usar funciones propias de modificación del DOM y no usar innerHTML.
*/

/* ACCESO AL NODO DOCUMENT MEDIANTE EL ID*/
var div = document.getElementById("divformu");
var formulario = document.createElement("form"); // Creamos elemento formulario
div.appendChild(formulario);

/*No hemos utilizado la función document.getElementsByTagName("p"), ya que en este caso sólo hay un contenedor de tipo div, en nuestro
nodo document, y no nos interesa que nos devuelva todas las etiquetas que sean p, porque no hay, sólo nos interesaría en caso de usar 
etiquetas y no es nuestro caso, tampoco utilizamos document.getElementsByName("parrafo1") ya que no hay varias etiquetas con el mismo
atributo, al igual que en el caso enterior sólo existe el contenedor div, por lo que no es necesario*/

//INPUT DNI
//Crer nodo de tipo Element div1
var div1 = document.createElement("div");

//Añadir el nodo Element como hijo de la pagina
formulario.appendChild(div1);

//Crer nodo de tipo Element
var campoDni= document.createElement("input");
//Crer nodo de tipo Text
var textoDni = document.createTextNode("DNI:");

/*
Añadimos atributo placeholder (marcador de posición)
Modificamos atributos: autofocus (poner el cursor de manera activa) y required (el campo es obligatorio)
*/
campoDni.id = "campo1" //<input id= "campoDni"></input>
campoDni.placeholder ="Ingrese su DNI";
campoDni.setAttribute("autofocus","true");
campoDni.setAttribute("required","true");

//Añadir el nodo Text textoDni como hijo del nodo Element div1
div1.appendChild(textoDni);
//Añadir el nodo Element campoDni como hijo del nodo Element div1
div1.appendChild(campoDni);


//INPUT NOMBRE
//Crear nodo de tipo Element div2
var div2 = document.createElement("div");

//Añadir el nodo Element como hijo de la pagina
formulario.appendChild(div2);

//Crear nodo de tipo Element
var campoNombre= document.createElement("input");
//Crear nodo de tipo Text
var textoNombre = document.createTextNode("Nombre:");

campoNombre.id = "campo2"//<input id= "campoNombre"></input>
campoNombre.placeholder="Ingrese su nombre";
campoNombre.setAttribute("required","true");
campoNombre.setAttribute('maxlength',15); //atributo maxLenght (longitud máxima de caracteres)

//Añadir el nodo Text textoNombre como hijo del nodo Element div2
div2.appendChild(textoNombre);
//Añadir el nodo Element campoNombre como hijo del nodo Element div2
div2.appendChild(campoNombre);

//INPUT APELLIDOS
//Crear nodo de tipo Element div3
var div3 = document.createElement("div");

//Añadir el nodo Element como hijo de la pagina
formulario.appendChild(div3);
var campoApellidos= document.createElement("input");
var textoApellidos= document.createTextNode("Apellidos:");
campoApellidos.id = "campo3"
campoApellidos.placeholder="Ingrese sus apellidos";
campoApellidos.setAttribute('maxlength',30);
//Añadir el nodo Text textoApellidos como hijo del nodo Element div3
div3.appendChild(textoApellidos);
//Añadir el nodo Element campoApellidos como hijo del nodo Element div3
div3.appendChild(campoApellidos);

//INPUT EDAD
/*
Crear nodo de tipo Element div.
nodo padre(formulario) le adjunto nodo elemento hijo (div4)
Creamos elemento input, creamos nodo texto y modificamos el atributo indicando que será de tipo número. 
Modificamos el atributo min y max indicando ya la edad minima y maxima que puede elegir
al nodo padre adjuntamos los elementos nodo hijo ("TextNode")y("Input") para que pueda visualizarse en el formulario
*/

//Crear nodo de tipo Element div4
var div4 = document.createElement("div");
//Añadir el nodo Element como hijo de la pagina
formulario.appendChild(div4);
var campoEdad= document.createElement("input");
var textoEdad= document.createTextNode("Edad:");
campoEdad.setAttribute("type", "number"); // Input de tipo número
campoEdad.id = "campo4"
campoEdad.setAttribute('min',18); // Atributo indica edad minima y maxima
campoEdad.setAttribute('max',90);
//Añadir el nodo Text textoEdad como hijo del nodo Element div4
div4.appendChild(textoEdad);
//Añadir el nodo Element campoEdad como hijo del nodo Element div4
div4.appendChild(campoEdad);

//INPUT DIRECCION
//Crear nodo de tipo Element div5
var div5 = document.createElement("div");
//Añadir el nodo Element como hijo de la pagina
formulario.appendChild(div5);
var direccion = document.createElement("input");
var textoDireccion= document.createTextNode("Dirección:");
direccion.id ="campo5";
direccion.placeholder="Ingrese su dirección";
direccion.setAttribute('maxlength',45);
//Añadir el nodo Text textoDireccion como hijo del nodo Element div5
div5.appendChild(textoDireccion);
//Añadir el nodo Element direccion como hijo del nodo Element div5
div5.appendChild(direccion);

//INPUT TELEFONOS
//Crear nodo de tipo Element div6
var div6 = document.createElement("div");
//Añadir el nodo Element como hijo de la pagina
formulario.appendChild(div6);
var telefonos = document.createElement("input");
var textoTelefono= document.createTextNode("Telefono:");
telefonos.placeholder="Formato: 123-456-7890";
telefonos.setAttribute("type","tel"); //Input de tipo tel(efono)
telefonos.setAttribute("required","true"); //Campo obligatorio
telefonos.setAttribute("pattern","[0-9]{3}-[0-9]{3})-[0-9]{3}"); //Patron aseguir 
telefonos.id="campo5"
//Añadir el nodo Text textoTelefono como hijo del nodo Element div6
div6.appendChild(textoTelefono);
//Añadir el nodo Element telefonos como hijo del nodo Element div6
div6.appendChild(telefonos);

//select
//Crear nodo de tipo Element div7
var div7 = document.createElement("div");
//Añadir el nodo Element como hijo de la pagina
formulario.appendChild(div7);
var campoCiudades= document.createElement("select");
var textoCiudades= document.createTextNode("Ciudades:");
var opcion =document.createElement("option");
campoCiudades.appendChild(opcion);
var contenido=document.createTextNode("Escoja una ciudad");
opcion.setAttribute("selected","enable");
opcion.appendChild(contenido);

//Crear nodo de tipo Element opcion1
var opcion1 = document.createElement("option");
//campoCiudades.id = "ciudades"
campoCiudades.appendChild(opcion1);
//Crear nodo de tipo Text contenido1
var contenido1 = document.createTextNode("¡Paris!");
opcion1.appendChild(contenido1);
//Crear nodo de tipo Element opcion2
var opcion2 = document.createElement("option");
campoCiudades.appendChild(opcion2);
//Crer nodo de tipo Text contenido2
var contenido2=document.createTextNode("¡Roma!");
opcion2.appendChild(contenido2);
//Crear nodo de tipo Element opcion3
var opcion3 = document.createElement("option");
campoCiudades.appendChild(opcion3);
//Crear nodo de tipo Text contenido3
var contenido3 = document.createTextNode("¡Berlin!");
opcion3.appendChild(contenido3);
//Añadir el nodo Text textoCiudades como hijo del nodo Element div7
div7.appendChild(textoCiudades);
//Añadir el nodo Elemet campoCiudades como hijo del nodo Element div7
div7.appendChild(campoCiudades);

//bottom radio
//Crear nodo de tipo Element div8
var div8 = document.createElement("div");
//Añadir el nodo Element como hijo de la pagina
formulario.appendChild(div8);
//Crear nodo de tipo Text textoRadio
var textoRadio= document.createTextNode("Transporte:");
//Añadir el nodo Text textoRadio como hijo del nodo Element div8
div8.appendChild(textoRadio);

//Radio1
//Crear nodo de tipo Element radio1
var radio1 = document.createElement("input");  
radio1.type = "radio";   
radio1.name = "radioGrp";   
radio1.id = "rad1";   
radio1.value = "miradio1";   
radio1.defaultChecked = true;    
radio1.checked = true; 

//Radio2
//Crear nodo de tipo Element radio2
var radio2 = document.createElement("input");   
radio2.type = "radio";   
radio2.name = "radioGrp";   
radio2.id = "rad2";   
radio2.value = "miradio2"; 
   
//Radio3
//Crear nodo de tipo Element radio3
var radio3 = document.createElement("input");   
radio3.type = "radio";   
radio3.name = "radioGrp";   
radio3.id = "rad3";   
radio3.value = "miradio3"; 
//Radio4
//Crear nodo de tipo Element radio4
var radio4 = document.createElement("input");   
radio4.type = "radio";   
radio4.name = "radioGrp";   
radio4.id = "rad4";   
radio4.value = "miradio4"; 

//Crear nodo de tipo Text objTextNode1
var objTextNode1 = document.createTextNode("Avión"); 
//Crear nodo de tipo Element objLabel1
var objLabel1 = document.createElement("label");   
objLabel1.htmlFor = radio1.id;   
objLabel1.appendChild(radio1);   
objLabel1.appendChild(objTextNode1)
//Añadir el nodo Element objLabel1 omo hijo del nodo Element div8
div8.appendChild(objLabel1)
//Añadir el nodo Element radio1 omo hijo del nodo Element div8
div8.appendChild(radio1)

//Crear nodo de tipo Text objTextNode2
var objTextNode2 = document.createTextNode("Barco");  
//Crear nodo de tipo Element objLabel2
var objLabel2 = document.createElement("label");   
objLabel2.htmlFor = radio2.id;   
objLabel2.appendChild(radio2);   
objLabel2.appendChild(objTextNode2)
//Añadir el nodo Element objLabel2 omo hijo del nodo Element div8
div8.appendChild(objLabel2)
//Añadir el nodo Element radio2 omo hijo del nodo Element div8
div8.appendChild(radio2)

//Crear nodo de tipo Text objTextNode3
var objTextNode3 = document.createTextNode("Coche");   
//Crear nodo de tipo Element objLabel3
var objLabel3 = document.createElement("label");   
objLabel3.htmlFor = radio3.id;   
objLabel3.appendChild(radio3);   
objLabel3.appendChild(objTextNode3)
//Añadir el nodo Element objLabel3 omo hijo del nodo Element div8
div8.appendChild(objLabel3)
//Añadir el nodo Element radio3 omo hijo del nodo Element div8
div8.appendChild(radio3)

//Crear nodo de tipo Text objTextNode4
var objTextNode4 = document.createTextNode("Autobus"); 
//Crear nodo de tipo Element objLabel4
var objLabel4 = document.createElement("label");   
objLabel4.htmlFor = radio4.id;   
objLabel4.appendChild(radio4);   
objLabel4.appendChild(objTextNode4)
//Añadir el nodo Element objLabel4 omo hijo del nodo Element div8
div8.appendChild(objLabel4)
//Añadir el nodo Element radio4 como hijo del nodo Element div8
div8.appendChild(radio4)

//CHECKBOX
//Crear nodo de tipo Element div9
var div9 = document.createElement("div");
//Añadir el nodo Element como hijo de la pagina
formulario.appendChild(div9);
var textoCheck= document.createTextNode("¿Que tipo de viaje prefieres?:");
//Añadir el nodo Text textoRadio como hijo del nodo Element div8
div9.appendChild(textoCheck);

//1º CHECKBOX
var checkbox1 = document.createElement("input");   
checkbox1.type = "checkbox";   
checkbox1.name = "checkGrp";   
checkbox1.id = "check1";   
checkbox1.value = "micheck1"; 

var textNode1 = document.createTextNode("Playa"); 
var label1 = document.createElement("label");   
label1.htmlFor = checkbox1.id;   
label1.appendChild(checkbox1);   
label1.appendChild(textNode1)
div9.appendChild(label1)
div9.appendChild(checkbox1)

//2º CHECKBOX
var checkbox2 = document.createElement("input");   
checkbox2.type = "checkbox";   
checkbox2.name = "checkGrp";   
checkbox2.id = "check2";   
checkbox2.value = "micheck2"; 

var textNode2 = document.createTextNode("Montaña"); 
var label2= document.createElement("label");   
label2.htmlFor = checkbox2.id;   
label2.appendChild(checkbox2);   
label2.appendChild(textNode2)
div9.appendChild(label2)
div9.appendChild(checkbox2)

//3º CHECKBOX
var checkbox3 = document.createElement("input");   
checkbox3.type = "checkbox";   
checkbox3.name = "checkGrp";   
checkbox3.id = "check3";   
checkbox3.value = "micheck3"; 

var textNode3 = document.createTextNode("Crucero"); 
var label3 = document.createElement("label");   
label3.htmlFor = checkbox3.id;   
label3.appendChild(checkbox3);   
label3.appendChild(textNode3)
div9.appendChild(label3)
div9.appendChild(checkbox3)

//4º CHECKBOX
var checkbox4 = document.createElement("input");   
checkbox4.type = "checkbox";   
checkbox4.name = "checkGrp";   
checkbox4.id = "check4";   
checkbox4.value = "micheck4"; 

var textNode4 = document.createTextNode("Rural"); 
var label4 = document.createElement("label");   
label4.htmlFor = checkbox4.id;   
label4.appendChild(checkbox4);   
label4.appendChild(textNode4)
div9.appendChild(label4)
div9.appendChild(checkbox4)

//5º CHECKBOX
var checkbox5 = document.createElement("input");   
checkbox5.type = "checkbox";   
checkbox5.name = "checkGrp";   
checkbox5.id = "check5";   
checkbox5.value = "micheck5"; 

var textNode5 = document.createTextNode("Safari"); 
var label5 = document.createElement("label");   
label5.htmlFor = checkbox5.id;   
label5.appendChild(checkbox5);   
label5.appendChild(textNode5)
div9.appendChild(label5)
div9.appendChild(checkbox5)

/*Lista
var parrafo = document.createElement("p");
parrafo.createTextNode("Cuando vayas a viajar no olvides...:");
var cosas = ["Documento de identidad","Billete","Maleta de mano", "Ser puntual"]
var fragment = document.createDocumentFragment();
for ( var cosa of cosas){
 const itemli = document.createElement("li");
 itemli.textContent=cosas;
 fragment.appendChild(itemli)
}
console.log(fragment);*/

//AÑADIR IMAGENES 1ªforma
//Crer nodo de tipo Element div10
var div10 = document.createElement("div");
//Añadir el nodo Element como hijo de la pagina
formulario.appendChild(div10);
//1ªIMG
var img = new Image(150, 200);
img.src = "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80";

img.style.border = "2px solid black";
img.style.borderRadius = "2px";
img.alt="Paris"
//Añadir el nodo Element img como hijo del nodo Element div10
div10.appendChild(img);
//2ªIMG
var img = new Image(200, 200);
img.src = "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=796&q=80";

img.style.border = "2px solid black";
img.style.borderRadius = "2px";
img.alt="Roma"
//Añadir el nodo Element img como hijo del nodo Element div10
div10.appendChild(img);
//3ªIMG
var img = new Image(200, 200);
img.src = "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

img.style.border = "2px solid black";
img.style.borderRadius = "2px";
img.alt="Berlin"
//Añadir el nodo Element img como hijo del nodo Element div10
div10.appendChild(img);

//2º FORMA AÑADIR IMAGENES
for(let i = 0; i < 3; i++) {
    const img =new Image(190, 190);;
    img.src = "https://picsum.photos/250/350?id=" + i;
    if(i === 5) {
      img.style.borderRadius = "50%";

    }
    img.classList.add("img-margin");
    //Añadir el nodo Element img como hijo del nodo Element div10
    div10.appendChild(img);

  }
  //TEXTAREA
  /*Crear nodo de tipo Element textarea
  Añadimos atributo placeholder y modificamos atributos (name y post para recoger en el formulario el valor), (maxlenght 5000 máximo numero de caracteres permitidos) y (cols y row para el numero de columnas y filas de nuestro área de texto).
  */
  var input = document.createElement('TEXTAREA');
  input.placeholder="Introduzca su comentario aqui:";
  input.setAttribute('name', 'post');
  input.setAttribute('maxlength', 5000);
  input.setAttribute('cols', 75);
  input.setAttribute('rows', 10);
  //Añadir el nodo Element input como hijo del nodo Element div10
  div10.appendChild(input)

//BOTÓN ENTREGAR:
/*Crear nodo de tipo Element input
El atributo será type y su valor será submit, es decir,representa un botón que, cuando es presionado, envía el formulario (form) al que pertenece.
*/
var campoEntregar= document.createElement("input");
campoEntregar.setAttribute("type", "submit");
campoEntregar.setAttribute("value", "Entregar");
//Añadir el nodo Element como hijo de la pagina
formulario.appendChild(campoEntregar); 

//BOTON LIMPIAR FORMULARIO:
/*Crear nodo de tipo Element input
El atributo será type y su valor será reset, restaura los elementos de un formulario a sus valores por defecto.
*/
var campoBorrar= document.createElement("input");
campoBorrar.setAttribute("type", "reset");
campoBorrar.setAttribute("value", "Limpiar");
//Añadir el nodo Element como hijo de la pagina
formulario.appendChild(campoBorrar);