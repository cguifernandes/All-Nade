import dbConnection from '../../../../services/db';
import Client from '../../../../services/models/Client';

dbConnection()

export default async function handler(req : any, res : any) {
    const {_id} = req.body;

    try {
        const clients = await Client.find({_id: _id}, {"idMovie": 1, _id: 0});
        res.status(200).json({data: clients})   
    } catch(error) {
        console.log(error);
        res.status(500).json({error: error});
    }
}