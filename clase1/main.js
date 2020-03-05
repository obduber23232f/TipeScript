var nombre;
var apellido;
var f;
var casado;
nombre = "obduber";
f = 18;
casado = false;
console.log(nombre);
console.log(f);
console.log(casado);
/* function saludar(nombre:string){
alert("hola" +nombre)
}
saludar("obduber")}
let nombre:string = prompt ("Escribe tu nombre")
*/
/* function sumar(f:number,n2:number):number{
    return f
}
sumar(9,200)
console.log(sumar)
 */
function promedia(n1, n2, n3, solo_sumar) {
    var suma = n1 + n2 + n3;
    if (solo_sumar) {
        return suma;
    }
    else {
        return suma / 3;
    }
}
promedia(10, 20, 30);
console.log(promedia);
