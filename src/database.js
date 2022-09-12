import {connect} from "mongoose";

(async () => {
    console.log('Attempting to connect to MongoDB...')
    try {
    const db = await connect('mongodb+srv://root:Ucbh8080xx@cluster0.yphzgqn.mongodb.net/loan')
    console.log('Database is connected to', db.connection.name)
    } catch (error) {
        console.error('Error Connection:',error)
    }
})()
