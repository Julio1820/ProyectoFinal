//noprotect

//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var propiedades_35 = 0.35 // 35 %
var sueldo_5 = 0.05 // 5%

var hijos_20 = 0.2 // 20%


//Recargo
var recargo_casado
var recargo_asegurado
var recargo_hijos
var recargo_total

var inicio = ""
var edad_conyuge
var edad_conyuge_numero
var cantidad_hijos
var cantidad_hijos_numero
var edad_numero
var propiedades
var recargo_propiedades
var sueldo
var recargo_sueldo
var precio_final
var nombre
var edad

inicio = prompt("Bienvenido, ¿Desea realizar cotizaciones? Si/No")
while (inicio.toUpperCase () == "SI") { 

 
//Mensajes de alerta para ingresar datos 
nombre = prompt("Ingrese su nombre (Nombre y apellido), por favor")

edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
edad_numero = parseInt(edad)

if (edad_numero <18){ 
alert ("Edad no válida, no es mayor de edad")
break
}

propiedades= prompt ("¿Cuantas propiedades tiene a su nombre? Ingrese solamente números")
recargo_propiedades = propiedades * propiedades_35 * (precio_base)

sueldo = prompt("¿Cuál es su sueldo ordinario? Ingrese solamente números")
recargo_sueldo = sueldo * sueldo_5


var casado = prompt("¿Está casado actualmente? (Si/No)")
//Comprobamos la edad del cónyuge, solamente si se está casado/a


if(casado.toUpperCase () == "SI") {
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
  edad_conyuge_numero = parseInt(edad_conyuge)
if(edad_conyuge <18){ 
  alert ("Edad no válida, no es mayor de edad")
break
  }
}
else if (casado.toUpperCase () == "NO")  {
  recargo_casado=0
}


var hijos = prompt("¿Tiene hijos o hijas? (Si/No)")
//Comprobamos la cantidad de hijos solamente si los tienen
if (hijos.toUpperCase () == "SI"){
  cantidad_hijos = prompt("¿Cuántos hijos tiene?")
  cantidad_hijos_numero = parseInt(cantidad_hijos)
  recargo_hijos= cantidad_hijos_numero * hijos_20 * ( precio_base)
}
else if (hijos.toUpperCase () == "NO"){
  recargo_hijos= 0
}
  
//calculo de recargo asegurado
if(edad_numero >= 18 && edad_numero <=24){ 
  recargo_asegurado = precio_base * edad_18
}
else if (edad_numero >= 25 && edad_numero <=49){
  recargo_asegurado = precio_base * edad_25
}
else if (edad_numero >= 50){
  recargo_asegurado = precio_base * edad_50
}


// calculo de recargo de conyuge
if (edad_conyuge_numero >= 18 && edad_conyuge_numero <=24){ 
  recargo_casado = precio_base * casado_18
}
else if (edad_conyuge_numero >= 25 && edad_conyuge_numero <=49){
  recargo_casado = precio_base * casado_25
}
else if (edad_conyuge_numero >= 50){
  recargo_casado = precio_base * casado_50
}

recargo_total= recargo_asegurado+recargo_casado+recargo_hijos+recargo_propiedades+recargo_sueldo


precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado: "+ nombre)
alert ("El recargo total será de: "+ recargo_total)
alert ("El precio será de: "+ precio_final)

inicio = prompt("¿Desea seguir realizando cotizaciones? Si/Salir")
if (inicio.toUpperCase () == "SALIR" ){
  break
}

}
