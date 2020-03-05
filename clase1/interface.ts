interface IAlumno{

    nombre:string
    apellido:string
    edad:number
    cedula:string

}
let alumno1:IAlumno={
    nombre:"obduber",
    apellido:"martinez",
    cedula:"27736532",
    edad:18
    
}
/* let alumno1:IAlumno={
    nombre:"",
    apellido:"",
    cedula:"",
    edad:0
    
}
 */

 function mostrar(x:IAlumno){
   console.log(x.nombre)
   console.log(x.apellido)
   console.log(x.edad)
   console.log(x.cedula)
 }

console.log(alumno1);
mostrar(alumno1)
mostrar({
    nombre:"",
    apellido:"",
    cedula:"",
    edad:0
})
