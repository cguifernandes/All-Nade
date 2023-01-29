import { NextRequest } from 'next/server';
import dbConnection from '../../../services/db';
import Client from '../../../services/models/Client';

dbConnection()

export default async function handler(req : any, res : any) {
    try {
        const clients = await Client.find({})
        res.status(200).json({data: clients})
    } catch(error) {
        console.log(error);
        res.status(500).json({error: error});
    }
}