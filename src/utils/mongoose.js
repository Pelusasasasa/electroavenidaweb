import {connect,connection} from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.MONGODB_URI;

const conn = {
    isConnected: false
}

export async function conectDB(){

    if (conn.isConnected) {
        return;
    };

    const db = await connect('mongodb+srv://Agustinlorenzatto:Pelu13524@electro-avenida.wp979qj.mongodb.net/Electro-Avenida?retryWrites=true&w=majority&appName=Electro-Avenid');
    conn.isConnected = db.connections[0].readyState;
    console.log("AAAAAAs")
    console.log(db.connections[0])
};

connection.on('connected',() => {
    console.log('Mongoose is Conected');
});

connection.on('error',() => {
    console.log(error)
});