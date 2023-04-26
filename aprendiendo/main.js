        //var = ¡ Ya No Se Usa !
        //let = La nueva forma de declarar variables
        //En JS no se declaran tipos de datos, el los interpreta
        /*SCOPE:commo el alcance de una variable tendra en tu codigo. 
        en otras palabras, el scope decide a que variables tienes acceso en cada parte del codigo. 
        ejemplo: el escope de cada funcion*/
        
        //Seccion #1
        /*console.log("Empezando La Clase JS");
        alert("Soy Una Alerta");

        //scope 1
        let primera=23;
        let segunda=47;
        let tres ="hola";
        const estable="No Cambio";

        let resultado=primera+segunda;

        console.log(resultado);

        function salir(){
            //scope 2
            let on =true;
            console.log(on);
            return on;
        }*/

        //Seccion 2#
        //--Diferencia entre let y const--

        /*let factura2= 55231; //Guardando un espacio es memoria, que puede cambiar el futuro; Se pueden modificar

        const factura = 55231; //No se puede modificar

        factura2=28;

        console.log("let:", factura2);
        console.log("const:", factura);

        if(factura2 == true){
            console.log("Si hay una factura");
        }else 
        if(factura2=23){
            console.log("No hay una factura");
        }else{
            console.log("Pailas");
        }

        let res =factura2 ? "Si hay una factura" : "No Hay Una factura";

        console.log(res);*/


        /*Ciclos repetitivos (for, while, do-while)

        console.log("Ciclos repetitivos (for,while,do-while)");

        for(let i=0;i<=10;i++){
            console.log(i);
        }

        let i=0;
        while(i<10){
            console.log(i);
            i++;
        }

        do{
            console.log(i);
            i++
        }while(i<=10)*/


        /*--Manejo De Strings--
        console.log("--Manejo de strings--");
        let saludo="Hola Clase!";
        console.log(saludo);

        //Encontrar un caracter, si no lo encuentra pone -1, si lo encuentra pone el numero de ubicacion
        console.log(saludo.indexOf("Cl"));

        //String inicia o termina
        console.log(saludo.startsWith("C"));
        console.log(saludo.endsWith("!"));

        //si el String incluye cierto caracter o palabra
        console.log(saludo.includes("s"));*/


        /*Operadores
        console.log("**--Operadores--**");

        //Operador AND (&&) Devuelve b si a y b son verdaderos, sino a
        console.log(45 && false); //45
        console.log(50 && "10"); //"10"

        //Operador OR (||) Devuelve a (si es verdadero), o si no, b
        console.log(false || "Verdadero");
        console.log("10" || 10);

        let isCorrect = true;
        const doTask = () => "OK!";
        console.log(isCorrect && doTask);*/


        /*Arreglos
        console.log("**--Arreglos--**");

        let instructores =["Juan","Jesu", "Carla"];
        console.log(instructores[2]);

        const tecnico ={
            name: "Programacion De Software",
            time: "1 año",
            practicas: true
        }

        console.log(tecnico.name + " " + tecnico.time);*/


        /*Interpolacion De Variables
        console.log("--- Interpolacion De Variables---");

        const data =`Soy un texto combinado con variables
        ${tecnico.practicas} como esta y esta ${instructores}`

        console.log(data);*/


        /*Funcion= Es un fragmento de codigo, que resuelve un problema unico y muy puntual, y se puede reutilizar cuantas veces sea necesario
        function Sumar(x,y) {
            let suma=x +y;
            console.log("Suma: " +suma);
            return 5 + 20 ;  
        }

        let instructores =["Juan","Jesu", "Carla"];
        //Funcion De Flecha
        const Saludar= (instruc) => {
            let i=0
            while (i<instruc.length) {
                console.log(`Hola Profesor ${instruc[i]}`);
                i++;
            }
        }

        Sumar(5,20);
        Saludar(instructores);*/

        /*Rest: Junta los elementos en un arreglo
        function SaludarRest(saludo,...nombres) {
            for(i in nombres){
            console.log(`${saludo} ${nombres[i]}`);
            }
        }
        SaludarRest("hola","fernando","javier","Maritza","Teo");*/

        /*Spread: Esparce los elementos como si fueran enviados en forma separada
        function SaludarSpread(saludo,...nombres) {
            console.log(`${saludo} ${nombres}.`);
        }

        let personas =["Maria", "Juan", "Pedro", "Julian"];
        SaludarSpread("Hola",personas);*/

        /*let partes =["Piernas", "Brazos"];
        let cuerpo=["Cabeza", "Cuello",...partes,"Pies","Cabello"];

        console.log(cuerpo);*/


        /*Clases: Es una plantilla, define las propiedades y metodos de un objeto. se pueden reutilizar por medio de instancia.
        Cada clase una tiene sus propiedades y metodos
        todas las clases tienen un constructor donde se definen datos iniciales.*/
        console.log("***---Clases---***");
        
        class Personas{
            constructor(nombre ,edad, sexo){
                this.nombre = nombre;
                this.edad = edad;
                this.sexo =sexo;
            }
            getName(){
                console.log("Tu te llamas "+ this.nombre)
            }

            getAllinfo(){
                console.log(`Tu Nombre Es ${this.nombre} tienes ${this.edad} años y eres un(a) ${this.sexo}`)
            }
        }

        //Juanes Es una constancia de la clase persona, osea que juanes ahora es un objeto.
        let Juanes =new Personas("Juanes",47,"Masculino");
        Juanes.getName();
        Juanes.getAllinfo();

        class Aprendiz extends Personas{
            constructor(nombre, edad, sexo, programa, competencia){
                super (nombre, edad, sexo);
                this.programa=programa;
                this.competencia=competencia;
            }
            getAprendiz(){
                console.log(`Te llamas ${this.nombre} tienes ${this.edad} años eres un(a) ${this.sexo}, tu programa es ${this.programa} y estas dando ${this.competencia}`)
            }
        }

        let Julian =new Aprendiz("Julian", 19, "Masculino", "Motores", "Mantenimiento De Vehiculos Pesados");
        Julian.getAprendiz();
