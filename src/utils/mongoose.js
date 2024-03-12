import {connect,connection} from "mongoose";

const conn = {
    isConnected: false
}

export async function conectDB(){

    if (conn.isConnected) {
        return;
    };

    const db = await connect('mongodb://192.168.0.101:27017/electroAvenida');
    conn.isConnected = db.connections[0].readyState;
};

connection.on('connected',() => {
    console.log('Mongoose is Conected');
});

connection.on('error',() => {
    console.log(error)
});