/*crear un algoritmo donde esten listados 10 pacientes de un hospital, 
Se debe crear una funcion que recorra los pacientes y si uno de sus nombres empieza con C, 
decirle que no puede pasar, si empieza con A decirle que espere, y si empieza con otra letra dejarlo pasar.

let Pacientes=["Carlos","Diego", "Jazmin", "Luis", "Serrano", "Jimmy", "Eli", "Vladimir", "Sharon", "Roy"];
let Edad=["23","20","24","25","26","19","18","16","20"];

 //Mostrar Pacientes
console.log("Lista De Pacientes");
console.log(Pacientes);

//Observar Iniciales con funcion
const Buscar_Inicial= (search)=> {
    let i=0;
    while (i<search.length) {
        if (search[i].startsWith("C")) {
            console.log("El Paciente",search[i],"No Puede Pasar");
        }else
        if (search[i].startsWith("A")) {
            console.log("El Paciente",search[i],"Debe Esperar");
        }else{
            console.log("El Paciente",search[i],"Puede Pasar");
        }
        i++;
    }
}
Buscar_Inicial(Pacientes);*/

//Observar Iniciales con clases

let Pacientes=["Carlos","Diego", "Jazmin", "Luis", "Serrano", "Jimmy", "Eli", "Vladimir", "Sharon", "Roy"];

/*const recorrerA =(aprend) =>{
    let i=0;
    while (i<aprend.length) {
        if (aprend[i].startsWith(`a`)) {
            console.log(`${aprend[i]} Espere Por Favor`)
        }else
        if (aprend[i].startsWith(`c`)) {
            console.log(`${aprend[i]} No Puede Pasar`)
        }else{
            console.log(`${aprend[i]} Puede Pasar`)
        }
        i++;
    }
}

recorrerA(Pacientes);*/

// class Aprendiz{
//     constructor(Nombre,Edad,Sexo,Competencia,Pacientes){
//         this.Nombre=Nombre;
//         this.Edad=Edad;
//         this.Sexo=Sexo;
//         this.Competencia=Competencia;
//         this.Pacientes=Pacientes;
//     }

//     ShowInfoAprendiz(){
//         console.log(`Tu Nombre es ${this.Nombre} tienes ${this.Edad} años y eres un(a) ${this.Sexo} tu competencia es ${this.Competencia}`)
//     }
//     recorrerA(){
//         let i=0;
//         while(i<10){
//             if(this.Pacientes[i].startsWith("c")){
//                 console.log(`${this.Pacientes[i]} No Puede Pasar`)
//             }else
//             if (this.Pacientes[i].startsWith("a")) {
//                 console.log(`${this.Pacientes[i]} Espere Por Favor`)
//             }else{
//                 console.log(`${this.Pacientes[i]} Puede Pasar`)
//             }
//             i++;
//         }
//     }
// }

// let Programacion=new Aprendiz("Julian", 23, "Masculino", "JavaSE", Pacientes);
// Programacion.ShowInfoAprendiz();
// Programacion.recorrerA();


console.log("***--- Asincronia ***---")
//Promises
//Pido el listado de 5mil usuarios
//muestro el menu principal
//muestro foto de perfil
//muestro todo ...
//muestro listado de 5mil usuarios

const tareaAsincrona =() => {
    let promise =new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("Proceso asincrono terminado");
            resolve();
        }, 1300);
    })

    return Promise
}

tareaAsincrona().then(function(){
    console.log("Todo OK")
})

console.log("Veamos Si Funciona");