import dbConnection from '../../../../services/db';
import Client from '../../../../services/models/Client';

dbConnection()

export default async function handler(req : any, res : any) {
    const {_id} = req.body;
    const {idMovie} = req.body;

    try {
        const clients = await Client.updateOne({_id: _id}, { $pull: {idMovie: idMovie}});
        res.status(200).json({data: clients})
    } catch(error) {
        console.log(error);
        res.status(500).json({error: error});
    }
}