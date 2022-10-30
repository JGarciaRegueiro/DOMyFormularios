//CREAR ELEMENTO FORMULARIO

/* ACCESO AL NODO DOCUMENT MEDIANTE EL ID*/
var div = document.getElementById("divformu");
var formulario = document.createElement("form");
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

campoDni.id = "campo1" //<input id= "campoDni"></input>
campoDni.placeholder ="Ingrese su DNI";
campoDni.setAttribute("autofocus","true");
campoDni.setAttribute("required","true");

//Añadir el nodo Text textoDni como hijo del nodo Element div1
div1.appendChild(textoDni);
//Añadir el nodo Element campoDni como hijo del nodo Element div1
div1.appendChild(campoDni);


//INPUT NOMBRE
//Crer nodo de tipo Element div2
var div2 = document.createElement("div");

//Añadir el nodo Element como hijo de la pagina
formulario.appendChild(div2);

//Crer nodo de tipo Element
var campoNombre= document.createElement("input");
//Crer nodo de tipo Text
var textoNombre = document.createTextNode("Nombre:");

campoNombre.id = "campo2"//<input id= "campoNombre"></input>
campoNombre.placeholder="Ingrese su nombre";
campoNombre.setAttribute("required","true");
campoNombre.setAttribute('maxlength',15);

//Añadir el nodo Text textoNombre como hijo del nodo Element div2
div2.appendChild(textoNombre);
//Añadir el nodo Element campoNombre como hijo del nodo Element div2
div2.appendChild(campoNombre);

//INPUT APELLIDOS
//Crer nodo de tipo Element div3
var div3 = document.createElement("div");

//Añadir el nodo Element como hijo de la pagina
formulario.appendChild(div3);
var campoApellidos= document.createElement("input");
var textoApellidos= document.createTextNode("Apellidos:");
campoApellidos.id = "campo3"
campoApellidos.placeholder="Ingrese sus apellidos";
campoApellidos.setAttribute('maxlength',30);
div3.appendChild(textoApellidos);
div3.appendChild(campoApellidos);

//INPUT EDAD
//Crer nodo de tipo Element div4
var div4 = document.createElement("div");
formulario.appendChild(div4);
var campoEdad= document.createElement("input");
var textoEdad= document.createTextNode("Edad:");
campoEdad.setAttribute("type", "number");
campoEdad.id = "campo4"
campoEdad.setAttribute('min',18);
campoEdad.setAttribute('max',90);
div4.appendChild(textoEdad);
div4.appendChild(campoEdad);

//INPUT DIRECCION
//Crer nodo de tipo Element div5
var div5 = document.createElement("div");
formulario.appendChild(div5);
var direccion = document.createElement("input");
var textoDireccion= document.createTextNode("Dirección:");
direccion.id ="campo5";
direccion.placeholder="Ingrese su dirección";
direccion.setAttribute('maxlength',45);
div5.appendChild(textoDireccion);
div5.appendChild(direccion);

//INPUT TELEFONOS
//Crer nodo de tipo Element div6
var div6 = document.createElement("div");
formulario.appendChild(div6);
var telefonos = document.createElement("input");
var textoTelefono= document.createTextNode("Telefono:");
telefonos.placeholder="Formato: 123-456-7890";
telefonos.setAttribute("type","tel");
telefonos.setAttribute("required","true");
telefonos.setAttribute("pattern","[0-9]{3}-[0-9]{3})-[0-9]{3}");
telefonos.id="campo5"
div6.appendChild(textoTelefono);
div6.appendChild(telefonos);

//select
//Crer nodo de tipo Element div7
var div7 = document.createElement("div");
formulario.appendChild(div7);
var campoCiudades= document.createElement("select");
var textoCiudades= document.createTextNode("Ciudades:");
var opcion =document.createElement("option");
campoCiudades.appendChild(opcion);
var contenido=document.createTextNode("Escoja una ciudad");
opcion.setAttribute("selected","enable");
opcion.appendChild(contenido);

//Crer nodo de tipo Element opcion1
var opcion1 = document.createElement("option");
//campoCiudades.id = "ciudades"
campoCiudades.appendChild(opcion1);
//Crer nodo de tipo Text contenido1
var contenido1 = document.createTextNode("¡Paris!");
opcion1.appendChild(contenido1);
//Crer nodo de tipo Element opcion2
var opcion2 = document.createElement("option");
campoCiudades.appendChild(opcion2);
//Crer nodo de tipo Text contenido2
var contenido2=document.createTextNode("¡Roma!");
opcion2.appendChild(contenido2);
//Crer nodo de tipo Element opcion3
var opcion3 = document.createElement("option");
campoCiudades.appendChild(opcion3);
//Crer nodo de tipo Text contenido3
var contenido3 = document.createTextNode("¡Berlin!");
opcion3.appendChild(contenido3);
div7.appendChild(textoCiudades);
div7.appendChild(campoCiudades);

//bottom radio
//Crer nodo de tipo Element div8
var div8 = document.createElement("div");
formulario.appendChild(div8);
//Crer nodo de tipo Text textoRadio
var textoRadio= document.createTextNode("Transporte:");
div8.appendChild(textoRadio);

//Radio1
//Crer nodo de tipo Element radio1
var radio1 = document.createElement("input");  
radio1.type = "radio";   
radio1.name = "radioGrp";   
radio1.id = "rad1";   
radio1.value = "miradio1";   
radio1.defaultChecked = true;    
radio1.checked = true; 

//Radio2
//Crer nodo de tipo Element radio2
var radio2 = document.createElement("input");   
radio2.type = "radio";   
radio2.name = "radioGrp";   
radio2.id = "rad2";   
radio2.value = "miradio2"; 
   
//Radio3
//Crer nodo de tipo Element radio3
var radio3 = document.createElement("input");   
radio3.type = "radio";   
radio3.name = "radioGrp";   
radio3.id = "rad3";   
radio3.value = "miradio3"; 
//Radio4
//Crer nodo de tipo Element radio4
var radio4 = document.createElement("input");   
radio4.type = "radio";   
radio4.name = "radioGrp";   
radio4.id = "rad4";   
radio4.value = "miradio4"; 

//Crer nodo de tipo Text objTextNode1
var objTextNode1 = document.createTextNode("Avión"); 
//Crer nodo de tipo Element objLabel1
var objLabel1 = document.createElement("label");   
objLabel1.htmlFor = radio1.id;   
objLabel1.appendChild(radio1);   
objLabel1.appendChild(objTextNode1)
div8.appendChild(objLabel1)
div8.appendChild(radio1)

//Crer nodo de tipo Text objTextNode2
var objTextNode2 = document.createTextNode("Barco");  
//Crer nodo de tipo Element objLabel2
var objLabel2 = document.createElement("label");   
objLabel2.htmlFor = radio2.id;   
objLabel2.appendChild(radio2);   
objLabel2.appendChild(objTextNode2)
div8.appendChild(objLabel2)
div8.appendChild(radio2)

//Crer nodo de tipo Text objTextNode3
var objTextNode3 = document.createTextNode("Coche");   
//Crer nodo de tipo Element objLabel3
var objLabel3 = document.createElement("label");   
objLabel3.htmlFor = radio3.id;   
objLabel3.appendChild(radio3);   
objLabel3.appendChild(objTextNode3)
div8.appendChild(objLabel3)
div8.appendChild(radio3)

//Crer nodo de tipo Text objTextNode4
var objTextNode4 = document.createTextNode("Autobus"); 
//Crer nodo de tipo Element objLabel4
var objLabel4 = document.createElement("label");   
objLabel4.htmlFor = radio4.id;   
objLabel4.appendChild(radio4);   
objLabel4.appendChild(objTextNode4)
div8.appendChild(objLabel4)
div8.appendChild(radio4)

//CHECKBOX
//Crer nodo de tipo Element div9
var div9 = document.createElement("div");
formulario.appendChild(div9);

var check_value = new Array( )
check_value[0] = "I work at home"
check_value[1] = "Train/Subway"
check_value[2] = "Walk"
check_value[3] = "Bicycle"

for(var count in check_value)
    {
    //Crer nodo de tipo Element ptworkinfo
    var ptworkinfo=document.createElement("input");   
    ptworkinfo.value=(check_value[count] + '</br>');
    ptworkinfo.type="checkbox";
    ptworkinfo.id="ptworkinfo" + count;
    div9.appendChild(ptworkinfo);
    }

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
formulario.appendChild(div10);
//1ªIMG
var img = new Image(150, 200);
img.src = "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80";

img.style.border = "2px solid black";
img.style.borderRadius = "2px";
img.alt="Paris"
div10.appendChild(img);
//2ªIMG
var img = new Image(200, 200);
img.src = "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=796&q=80";

img.style.border = "2px solid black";
img.style.borderRadius = "2px";
img.alt="Roma"
div10.appendChild(img);
//3ªIMG
var img = new Image(200, 200);
img.src = "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

img.style.border = "2px solid black";
img.style.borderRadius = "2px";
img.alt="Berlin"
div10.appendChild(img);

//2º FORMA AÑADIR IMAGENES
for(let i = 0; i < 3; i++) {
    const img =new Image(190, 190);;
    img.src = "https://picsum.photos/250/350?id=" + i;
    if(i === 5) {
      img.style.borderRadius = "50%";

    }
    img.classList.add("img-margin");
    div10.appendChild(img);
  }
  //Crer nodo de tipo Element input
  var input = document.createElement('TEXTAREA');
  input.placeholder="Introduzca su comentario aqui:";
  input.setAttribute('name', 'post');
  input.setAttribute('maxlength', 5000);
  input.setAttribute('cols', 75);
  input.setAttribute('rows', 10);
  input.setAttribute('required','true');
div10.appendChild(input)

//Botón Entregar
//Crer nodo de tipo Element campoEntregar
var campoEntregar= document.createElement("input");
campoEntregar.setAttribute("type", "submit");
campoEntregar.setAttribute("value", "Entregar");
formulario.appendChild(campoEntregar);

//Botón Limpiar formulario
//Crer nodo de tipo Element campoBorrar
var campoBorrar= document.createElement("input");
campoBorrar.setAttribute("type", "reset");
campoBorrar.setAttribute("value", "Limpiar formulario");
formulario.appendChild(campoBorrar);