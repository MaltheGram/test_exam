import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


mongoose.connect(process.env.MONGO_DB_HOST, {"dbName": process.env.MONGO_DB_NAME});
const mongoDBClient = mongoose.connection; 

export function mongoConnSetup() {
    return new Promise((resolve, reject) => {
        mongoDBClient.on('error', (error) => {
            reject(error);
        });
        mongoDBClient.once('open', () => {
            resolve(mongoDBClient);
        });
    });
}

export async function closeMongoConn() {
    try {
        await mongoose.connection.close();
        console.log('Connection to MongoDB closed');
    } catch (error) {
        console.error('Error closing MongoDB connection:', error);
    }
}

export default mongoDBClient;
