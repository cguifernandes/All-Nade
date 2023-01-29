import dbConnection from '../../../services/db';
import Client from '../../../services/models/Client';

dbConnection()

export default async function handler(req : any, res : any) {
    const {nome, email, senha} = req.body;

    try {
        const clients = await Client.create({nome, email, senha});
        res.status(200).json({data: clients})
    } catch(error) {
        console.log(error);
        res.status(500).json({error: error});
    }
}