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

class Pelota{
    posicion_x:number
    posicion_y:number
    tamano:number
    color:string

    dibujar(){
        contexto.fillStyle = this.color
        contexto.fillRect(this.posicion_x, this.posicion_y, this.tamano, this.tamano)
        console.log(this.color)
    }
}


let canvas :any = document.getElementById("lienzo");
let contexto:CanvasRenderingContext2D = canvas.getContext("2d");
canvas.width = 600
canvas.height = 400


let r:Pelota = new Pelota()
r.color = "red"
r.posicion_x = 10
r.posicion_y = 10
r.tamano = 130

r.dibujar()


/* let r2:Pelota = new Pelota()

r2.color = "amarillo"
r2.dibujar() */