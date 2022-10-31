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

//Crear nodo de tipo Element campoNombre
var campoNombre= document.createElement("input");
//Crear nodo de tipo Text textoNombre
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
//Crear nodo de tipo Element campoApellidos
var campoApellidos= document.createElement("input");
//Crear nodo de tipo Text Apellidos
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
//Crear nodo de tipo Element campoEdad
var campoEdad= document.createElement("input");
//Crear nodo de tipo Texto textoEdad
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
//Crear nodo de tipo Element direccion
var direccion = document.createElement("input");
//Crear nodo de tipo Texto textoDireccion
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
//Crear nodo de tipo Element telefonos
var telefonos = document.createElement("input");
//Crear nodo de tipo Texto textoTelefono
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
//Crear nodo de tipo Element campoCiudades
var campoCiudades= document.createElement("select");
//Crear nodo de tipo Texto textoCiudades
var textoCiudades= document.createTextNode("Ciudades:");
//Crear nodo de tipo Element opcion
var opcion =document.createElement("option");
//Añadir el nodo Element opcion como hijo del nodo Element campoCiudades
campoCiudades.appendChild(opcion);
//Crear nodo de tipo Text contenido
var contenido=document.createTextNode("Escoja una ciudad");
opcion.setAttribute("selected","enable");
//Añadir el nodo texto contenido como hijo del nodo Element opcion
opcion.appendChild(contenido);

//Crear nodo de tipo Element opcion1
var opcion1 = document.createElement("option");
//campoCiudades.id = "ciudades"
campoCiudades.appendChild(opcion1);
//Crear nodo de tipo Text contenido1
var contenido1 = document.createTextNode("¡Paris!");
//Añadir el nodo Texto contenido1 como hijo del nodo Element opcion1
opcion1.appendChild(contenido1);
//Crear nodo de tipo Element opcion2
var opcion2 = document.createElement("option");
//Añadir el nodo Element opcion2 como hijo del nodo Element campoCiudades
campoCiudades.appendChild(opcion2);
//Crer nodo de tipo Text contenido2
var contenido2=document.createTextNode("¡Roma!");
//Añadir el nodo texto contenido2 como hijo del nodo Element opcion2
opcion2.appendChild(contenido2);
//Crear nodo de tipo Element opcion3
var opcion3 = document.createElement("option");
//Añadir el nodo Element opcion3 como hijo del nodo Element campoCiudades
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
//Crear nodo de tipo Element fieldset
var fieldset = document.createElement("fieldset");
//Añadir el nodo Element fieldset como hijo del nodo Element div8
div8.appendChild(fieldset);
//Crear nodo de tipo Element leyenda
var leyenda= document.createElement("legend");
//Añadir el nodo Element leyenda como hijo del nodo Element fieldset
fieldset.appendChild(leyenda);
//Crear nodo de tipo Text textoLeyenda
var textoLeyenda = document.createTextNode("Transporte: ")
//Añadir el nodo Texto textoLeyenda como hijo del nodo Element leyenda
leyenda.appendChild(textoLeyenda);

//Radio1
//Crear nodo de tipo Element labelRadio1
var labelRadio1 = document.createElement("label");
//Añadir el nodo Element labelRadio1 como hijo del nodo Element fieldset
fieldset.appendChild(labelRadio1);
//Crear nodo de tipo Element radio1
var radio1 = document.createElement("input");
radio1.type = "radio";   
radio1.name = "radioGrp";   
radio1.id = "rad1";   
radio1.value = "miradio1";   
radio1.defaultChecked = true;    
radio1.checked = true;
//Añadir el nodo Element radio1 como hijo del nodo Element labelRadio1
labelRadio1.appendChild(radio1);
//Crear nodo de tipo Text textoRadio1
var textoRadio1 = document.createTextNode("Avión");
//Añadir el nodo Texto textoRadio1 como hijo del nodo Element labelRadio1
labelRadio1.appendChild(textoRadio1);


//Radio2
//Crear nodo de tipo Element labelRadio2
var labelRadio2 = document.createElement("label");
 fieldset.appendChild(labelRadio2);
//Crear nodo de tipo Element radio2
var radio2 = document.createElement("input");   
radio2.type = "radio";   
radio2.name = "radioGrp";   
radio2.id = "rad2";   
radio2.value = "miradio2";
//Añadir el nodo Element radio2 como hijo del nodo Element labelRadio2
labelRadio2.appendChild(radio2);
//Crear nodo de tipo Text textoRadio2
var textoRadio2 = document.createTextNode("Barco");
//Añadir el nodo Texto textoRadio2 como hijo del nodo Element labelRadio2
labelRadio2.appendChild(textoRadio2);
   
//Radio3
//Crear nodo de tipo Element labelRadio3
var labelRadio3 = document.createElement("label");
//Añadir el nodo Element labelRadio3 como hijo del nodo Element fieldset
fieldset.appendChild(labelRadio3);
//Crear nodo de tipo Element radio3
var radio3 = document.createElement("input");   
radio3.type = "radio";   
radio3.name = "radioGrp";   
radio3.id = "rad3";   
radio3.value = "miradio3";
//Añadir el nodo Element radio3 como hijo del nodo Element labelRadio3
labelRadio3.appendChild(radio3);
//Crear nodo de tipo Text textoRadio3
var textoRadio3 = document.createTextNode("Coche");
//Añadir el nodo Texto textoRadio3 como hijo del nodo Element labelRadio3
labelRadio3.appendChild(textoRadio3);


//Radio4
//Crear nodo de tipo Element labelRadio4
var labelRadio4= document.createElement("label");
//Añadir el nodo Element labelRadio4 como hijo del nodo Element fieldset
fieldset.appendChild(labelRadio4);
//Crear nodo de tipo Element radio4
var radio4 = document.createElement("input");   
radio4.type = "radio";   
radio4.name = "radioGrp";   
radio4.id = "rad4";   
radio4.value = "miradio4";
//Añadir el nodo Element radio4 como hijo del nodo Element labelRadio4
labelRadio4.appendChild(radio4);
//Crear nodo de tipo Text textoRadio4
var textoRadio4 = document.createTextNode("Autobús");
//Añadir el nodo Texto textoRadio4 como hijo del nodo Element labelRadio4
labelRadio4.appendChild(textoRadio4);


//bottom radio
//Crear nodo de tipo Element div8
var div11 = document.createElement("div");
//Añadir el nodo Element como hijo de la pagina
formulario.appendChild(div11);
//Crear nodo de tipo Element fieldset2
var fieldset2 = document.createElement("fieldset");
//Añadir el nodo Element fieldset2 como hijo del nodo Element div11
div11.appendChild(fieldset2);
//Crear nodo de tipo Text leyenda2
var leyenda2= document.createElement("legend");
//Añadir el nodo Element leyenda2 como hijo del nodo Element fieldset2
fieldset2.appendChild(leyenda2);
//Crear nodo de tipo Text textoLeyenda2
var textoLeyenda2 = document.createTextNode("Personas: ")
//Añadir el nodo Texto textoLeyenda2 como hijo del nodo Element leyenda2
leyenda2.appendChild(textoLeyenda2);


//Radio5
//Crear nodo de tipo Element labelRadio5
var labelRadio5 = document.createElement("label");
fieldset2.appendChild(labelRadio5);
//Crear nodo de tipo Element radio5
var radio5 = document.createElement("input");
radio5.type = "radio";   
radio5.name = "radioGrp2";   
radio5.id = "rad5";   
radio5.value = "miradio5";   
radio5.defaultChecked = true;    
radio5.checked = true; 
//Añadir el nodo Element radio5 como hijo del nodo Element labelRadio5
labelRadio5.appendChild(radio5);
//Crear nodo de tipo Text textoRadio5
var textoRadio5 = document.createTextNode("Solo");
//Añadir el nodo Texto textoRadio5 como hijo del nodo Element labelRadio5
labelRadio5.appendChild(textoRadio5);


//Radio6
//Crear nodo de tipo Element labelRadio6
var labelRadio6 = document.createElement("label");
//Añadir el nodo Element labelRadio6 como hijo del nodo Element fieldset2
fieldset2.appendChild(labelRadio6);
//Crear nodo de tipo Element radio6
var radio6 = document.createElement("input");   
radio6.type = "radio";   
radio6.name = "radioGrp2";   
radio6.id = "rad6";   
radio6.value = "miradio6";
//Añadir el nodo Element 6 como hijo del nodo Element labelRadio6
labelRadio6.appendChild(radio6);
//Crear nodo de tipo Text textoRadio6
var textoRadio6 = document.createTextNode("Pareja");
//Añadir el nodo Texto textoRadio6 como hijo del nodo Element labelRadio6
labelRadio6.appendChild(textoRadio6);
   
//Radio7
//Crear nodo de tipo Element labelRadio7
var labelRadio7 = document.createElement("label");
//Añadir el nodo Element labelRadio7 como hijo del nodo Element fieldset2
fieldset2.appendChild(labelRadio7);
//Crear nodo de tipo Element radio7
var radio7 = document.createElement("input");   
radio7.type = "radio";   
radio7.name = "radioGrp2";   
radio7.id = "rad7";   
radio7.value = "miradio7";
//Añadir el nodo Element radio7 como hijo del nodo Element labelRadio7
labelRadio7.appendChild(radio7);
//Crear nodo de tipo Text textoRadio7
var textoRadio7 = document.createTextNode("Grupo de amigos");
//Añadir el nodo Texto textoRadio7 como hijo del nodo Element labelRadio7
labelRadio7.appendChild(textoRadio7);


//Radio8
//Crear nodo de tipo Element labelRadio8
var labelRadio8= document.createElement("label");
//Añadir el nodo Element labelRadio8 como hijo del nodo Element fieldset2
fieldset2.appendChild(labelRadio8);
//Crear nodo de tipo Element radio8
var radio8 = document.createElement("input");   
radio8.type = "radio";   
radio8.name = "radioGrp2";   
radio8.id = "rad8";   
radio8.value = "miradio8";
//Añadir el nodo Element radio8 como hijo del nodo Element labelRadio8
labelRadio8.appendChild(radio8);
//Crear nodo de tipo Text textoRadio8
var textoRadio8 = document.createTextNode("Familia");
//Añadir el nodo Texto textoRadio8 como hijo del nodo Element labelRadio8
labelRadio8.appendChild(textoRadio8);


//CHECKBOX
//Crear nodo de tipo Element div9
var div9 = document.createElement("div");
//Añadir el nodo Element como hijo de la pagina
formulario.appendChild(div9);
//Crear nodo de tipo Element fieldset3
var fieldset3 = document.createElement("fieldset");
//Añadir el nodo Element fieldset3 como hijo del nodo Element div9
div9.appendChild(fieldset3);
//Crear nodo de tipo Element leyenda3
var leyenda3= document.createElement("legend");
//Añadir el nodo Element leyenda3 como hijo del nodo Element fieldset3
fieldset3.appendChild(leyenda3);
//Crear nodo de tipo Texto textoLeyenda3
var textoLeyenda3 = document.createTextNode("¿A dónde quieres viajar?:")
//Añadir el nodo Texto textoLeyenda3 como hijo del nodo Element fieldset3
leyenda3.appendChild(textoLeyenda3);

//1º CHECKBOX
//Crear nodo de tipo Element labelCheckbox1
var labelCheckbox1 = document.createElement("label");
//Añadir el nodo Element labelCheckbox1 como hijo del nodo Element fieldset3
fieldset3.appendChild(labelCheckbox1);
//Crear nodo de tipo Element checkbox1
var checkbox1 = document.createElement("input");   
checkbox1.type = "checkbox";   
checkbox1.name = "checkGrp";   
checkbox1.id = "check1";   
checkbox1.value = "micheck1";
//Añadir el nodo Element checkbox1 como hijo del nodo Element labelCheckBox1
labelCheckbox1.appendChild(checkbox1);
//Crear nodo de tipo Texto textoCheckbox1
var textoCheckbox1 = document.createTextNode("Playa");
//Añadir el nodo Texto textoCheckbox1 como hijo del nodo Element labelCheckBox1
labelCheckbox1.appendChild(textoCheckbox1);

//2º 
//Crear nodo de tipo Element lableCheckbox2
var labelCheckbox2 = document.createElement("label");
//Añadir el nodo Element labelCheckbox2 como hijo del nodo Element fieldset3
fieldset3.appendChild(labelCheckbox2);
//Crear nodo de tipo Element checkbox2
var checkbox2 = document.createElement("input");   
checkbox2.type = "checkbox";   
checkbox2.name = "checkGrp";   
checkbox2.id = "check2";   
checkbox2.value = "micheck2";
//Añadir el nodo Element checkbox2 como hijo del nodo Element labelCheckBox2
labelCheckbox2.appendChild(checkbox2);
//Crear nodo de tipo Texto textoCheckbox2
var textoCheckbox2 = document.createTextNode("Montaña");
//Añadir el nodo Texto textoCheckbox2 como hijo del nodo Element labelCheckBox2
labelCheckbox2.appendChild(textoCheckbox2);

//3º CHECKBOX
//Crear nodo de tipo Element labelCheckbox3
var labelCheckbox3 = document.createElement("label");
//Añadir el nodo Element labelCheckbox3 como hijo del nodo Element fieldset3
fieldset3.appendChild(labelCheckbox3);
//Crear nodo de tipo Element checkbox3
var checkbox3 = document.createElement("input");   
checkbox3.type = "checkbox";   
checkbox3.name = "checkGrp";   
checkbox3.id = "check3";   
checkbox3.value = "micheck3";
//Añadir el nodo Element checkbox3 como hijo del nodo Element labelCheckBox3
labelCheckbox3.appendChild(checkbox3);
//Crear nodo de tipo Texto textoCheckbox3
var textoCheckbox3 = document.createTextNode("Crucero");
//Añadir el nodo Texto textoCheckbox3 como hijo del nodo Element labelCheckBox3
labelCheckbox3.appendChild(textoCheckbox3);

//4º CHECKBOX
//Crear nodo de tipo Element labelCheckbox4
var labelCheckbox4 = document.createElement("label");
//Añadir el nodo Element labelCheckbox4 como hijo del nodo Element fieldset3
fieldset3.appendChild(labelCheckbox4);
//Crear nodo de tipo Element checkbox4
var checkbox4 = document.createElement("input");   
checkbox4.type = "checkbox";   
checkbox4.name = "checkGrp";   
checkbox4.id = "check4";   
checkbox4.value = "micheck4";
//Añadir el nodo Element checkbox4 como hijo del nodo Element labelCheckBox4
labelCheckbox4.appendChild(checkbox4);
//Crear nodo de tipo Texto textoCheckbox4
var textoCheckbox4 = document.createTextNode("Rural");
//Añadir el nodo Texto textoCheckbox4 como hijo del nodo Element 4
labelCheckbox4.appendChild(textoCheckbox4);

//5º CHECKBOX
//Crear nodo de tipo Element labelCheckbox5
var labelCheckbox5 = document.createElement("label");
//Añadir el nodo Element labelCheckbox5 como hijo del nodo Element fieldset3
fieldset3.appendChild(labelCheckbox5);
//Crear nodo de tipo Element checkbox5
var checkbox5 = document.createElement("input");   
checkbox5.type = "checkbox";   
checkbox5.name = "checkGrp";   
checkbox5.id = "check5";   
checkbox5.value = "micheck5";
//Añadir el nodo Element checkbox5 como hijo del nodo Element labelCheckBox5
labelCheckbox5.appendChild(checkbox5);
//Crear nodo de tipo Texto textoCheckbox5
var textoCheckbox5 = document.createTextNode("Safari");
//Añadir el nodo Texto textoCheckbox5 como hijo del nodo Element labelCheckBox5
labelCheckbox5.appendChild(textoCheckbox5);


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
 //Crear nodo de tipo Element dvi12
  var div12 = document.createElement("div");
  //Añadir el nodo Element como hijo de la pagina
  formulario.appendChild(div12);
  //Crear nodo de tipo Element input
  var input = document.createElement('TEXTAREA');
  input.placeholder="Introduzca su comentario aqui:";
  input.setAttribute('name', 'post');
  input.setAttribute('maxlength', 5000);
  input.setAttribute('cols', 75);
  input.setAttribute('rows', 10);
  //Añadir el nodo Element input como hijo del nodo Element div10
  div12.appendChild(input)

//BOTÓN ENTREGAR:
/*Crear nodo de tipo Element input
El atributo será type y su valor será submit, es decir,representa un botón que, cuando es presionado, envía el formulario (form) al que pertenece.
*/
//Crear nodo de tipo Element campoEntregar
var campoEntregar= document.createElement("input");
campoEntregar.setAttribute("type", "submit");
campoEntregar.setAttribute("value", "Entregar");
//Añadir el nodo Element como hijo de la pagina
formulario.appendChild(campoEntregar); 

//BOTON LIMPIAR FORMULARIO:
/*Crear nodo de tipo Element input
El atributo será type y su valor será reset, restaura los elementos de un formulario a sus valores por defecto.
*/
//Crear nodo de tipo Element campoBorrar
var campoBorrar= document.createElement("input");
campoBorrar.setAttribute("type", "reset");
campoBorrar.setAttribute("value", "Limpiar");
//Añadir el nodo Element como hijo de la pagina
formulario.appendChild(campoBorrar);