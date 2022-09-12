import {connect} from "mongoose";

(async () => {
    console.log('Attempting to connect to MongoDB...')
    try {
    const db = await connect(process.env.MONGODB_URI)
    console.log('Database is connected to', db.connection.name)
    } catch (error) {
        console.error('Error Connection:',error)
    }
})()
