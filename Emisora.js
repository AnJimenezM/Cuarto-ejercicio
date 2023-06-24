

var nombre = [];
 var cedula = [];
 var fechaNacimiento = [];
 var CorreoElectronico = [];
 var Ciudad_origen = [];
 var  ciudad_residencia = [];
 var artista_favorito = [];
 var cancion1 = [];
 var cancion2 = [];
 var cancion3 = [];
 var participantes = [];

 for(var i = 0; i < 6; i++){

   nombre.push(prompt("ingresa su nombre"));
   cedula.push(prompt("ingrese numero de cedula"));
   fechaNacimiento.push(prompt("ingresa la fecha de nacimiento"));
   CorreoElectronico.push(prompt("ingresa el correo electronico"));
   Ciudad_origen.push(prompt("ingresa la ciudad de origen"));
   ciudad_residencia.push(prompt("ingresa la ciudad de residencia"));
   artista_favorito.push(prompt("ingresa el artista favorito"));
   cancion1.push(prompt("ingresa la cancion1"));
   cancion2.push(prompt("ingresa la cancion2"));
   cancion3.push(prompt("ingresa la cancion3"));
   
 }

 var posicion = prompt("ingrese posición de la persona que desea ver");

 document.write("nombres" + nombre [posicion] + "<br> cedula: "+ cedula[posicion] +"<br> fecha de nacimiento: " + fechaNacimiento[pocision] + "br> CorreoElectronico" + CorreoElectronico[posicion] + "<br> ciudad de origen: " + ciudad_origen[pocision] + "<br> ciudad de residencia: " + ciudad_residencia[posicion] + "<br> artista favorito" + artista_favorito[posicion] + "<br> cancion1" + cancion1[posicion] + "<br> cancion2: " + cancion2[posicion] + "<br> cancion3: " + cancion3);

 for(var i = 0; i < participantes.length; i ++){

   document.log(participantes[i].nombre);
   document.log(participantes[i].cedula);
   document.log(participantes[i].fechaNacimiento);
   document.log(participantes[i].CorreoElectronico);
   document.log(participantes[i].Ciudad_origen);
   document.log(participantes[i].ciudad_residencia);
   document.log(participantes[i].artista_favorito);
   document.log(participantes[i].cancion1);
   document.log(participantes[i].cancion2);
   document.log(participantes[i].cancion3);

   var numeroAleatorio = Math.floor(Math.random() * participantes.length +1);
   var ganador = participantes[numeroAleatorio];

   var ganador = prompt("desea saber el ganador de la rifa");

   alert("El ganadorn de la rifa es: "+ ganador.nombre);
 }