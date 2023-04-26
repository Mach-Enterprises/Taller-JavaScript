import {pool} from "../db.js";

export const getAprendices = async (req,res) =>{
    console.log("hola")
    try{
        const[result]= await pool.query("SELECT * FROM usuarios ORDER BY id DESC");
        console.log("resultado: "+ result[0])
        res.json(result);
    }catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getAprendiz = async (req, res)=>{
    try {
        const[result]= await pool.query("SELECT * FROM usuarios where id=?",[
            req.params.id,
        ])
        if(result.length ===0){
            return res.status(404).json({message: "Aprendiz not found"})
        }
        res.json(result[0])
    } catch (error){
        return res.status(404).json({message: error.message})
    }
}

export const createAprendiz = async(req,res)=>{
    try {
        const {nombre,cedula,celular}= req.body;
        const [result] = await pool.query(
            "insert into usuarios(nombre, cedula, celular) values(?,?,?)",[nombre, cedula, celular]
            );
        res.json({
            id: result.insertId,
            nombre,
            cedula,
            celular
        });
    } catch (error) {
        return res.status(404).json({message:error.message});
    }
}


//Editar
export const editAprendiz = async(req,res)=>{
    try {
        const[result] = await pool.query("update usuarios set ? where id=?", 
        [req.body, req.params.id]);
        return res.status(200).json({result});
    } catch (error) {
        return res.status(404).json({message:error.message});
    }
}


//Eliminar
export const deleteAprendiz=async(req,res)=>{
    try {
        const{result}=await pool.query(
            "delete from usuarios where id=?",
            [req.params.id]);
        return res.status(200).json({message:"Usuario Eliminado"});  
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}