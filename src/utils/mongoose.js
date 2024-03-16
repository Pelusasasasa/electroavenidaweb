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

    const db = await connect(URL);
    conn.isConnected = db.connections[0].readyState;
};

connection.on('connected',() => {
    console.log('Mongoose is Conected');
});

connection.on('error',() => {
    console.log(error)
});