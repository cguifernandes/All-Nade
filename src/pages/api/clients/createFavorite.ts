import dbConnection from '../../../services/db';
import Client from '../../../services/models/Client';

dbConnection()

export default async function handler(req : any, res : any) {
    const { idMovie } = req.body;

    try {
        const favorites = await Client.create({idMovie})
        res.status(200).json({data: favorites})
    } catch(error) {
        console.log(error);
        res.status(500).json({error: error});
    }
}