alert("soy una gonorrea!!");
console.log("Saludos desde el mas alla");


var nombre = "Karen";
var edad = 30;


alert("Su nombre es: " + nombre + " Su edad es: " + edad)
console.log("Su nombre es: "+ nombre + " Su edad es: "  +edad)

var nombre = prompt("Escriba su nombre");
var edad = prompt("Por favor digite su edad");

console.log("Su nombre es: " + nombre + " Su edad es: " + edad);

alert("Su nombre es: " + nombre + " Su edad es: " + edad)

if (edad >= 18) {
    console.log("usted es mayor de edad")

}

else {

    console.log("todavia eres menor de edad")
}

if (nombre === "karen") {
    console.log("si, puedes pasar")
}

else {
    console.log("no eres karen, no puedes pasar," + " no se quien eres " + nombre)
}

function evaluarDatos(){

var nombre= document.getElementById("nombre").value;
var edad= document.getElementById("edad").value;
    

    console.log("su nobre es: " + nombre);
    console.log("su edad es: " + edad);
}