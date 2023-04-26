import express from "express";
import indexRouter from "./routes/aprendices.routes.js"
import cors from "cors";

//iniciamos nuestra app express
const app = express()

//Permite procesar los datos del cliente, si es un bojeto json lo podra recibir 
app.use(express.json())
app.use(cors("*"))

app.use(indexRouter)

//permite que nos podamos comunicar entre aplicaciones web 
app.listen(3000);
console.log(`Aplicacion corriendo en el puerto ${3000}`)