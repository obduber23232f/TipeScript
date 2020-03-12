/* class Figura {
    x:number
    y:number
    nombre:string
    mostrarInformacion(){
        console.log("El nombre de la persona")
        console.log(this.nombre)
    }
}
let p:Figura
p = new Figura()
/* /* p.nombre = "obduber"
p.nombre = prompt("ingresa tu nombre")
p.mostrarInformacion()
 */
var Pelota = /** @class */ (function () {
    function Pelota() {
    }
    Pelota.prototype.dibujar = function () {
        contexto.fillStyle = this.color;
        contexto.fillRect(this.posicion_x, this.posicion_y, this.tamano, this.tamano);
        console.log(this.color);
    };
    return Pelota;
}());
var canvas = document.getElementById("lienzo");
var contexto = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;
var r = new Pelota();
r.color = "red";
r.posicion_x = 10;
r.posicion_y = 10;
r.tamano = 130;
r.dibujar();
/* let r2:Pelota = new Pelota()

r2.color = "amarillo"
r2.dibujar() */ 
