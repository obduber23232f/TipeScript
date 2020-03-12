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
    direcion_x:number
    direcion_y:number

    dibujar(){
        contexto.fillStyle = this.color
        contexto.fillRect(this.posicion_x, this.posicion_y, this.tamano, this.tamano)
        console.log(this.color)
    }
    actualizar(){
        this.posicion_x += this.direcion_x
        this.posicion_y += this.direcion_y
        console.log()
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
r.tamano = 13
r.direcion_x = 10
r.direcion_y = 10

r.dibujar()

contexto.fillRect(0,0,300,300)
contexto.clearRect(10,10,200,200)

setInterval(()=>{
    console.log("Repetir")
    contexto.clearRect(0,0,canvas.width,canvas.height)
    r.dibujar()
    r.actualizar()
    
},1000/100000000004)

/* let r2:Pelota = new Pelota()

r2.color = "amarillo"
r2.dibujar() */