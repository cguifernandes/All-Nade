import dbConnection from '../../../../services/db';
import Client from '../../../../services/models/Client';

dbConnection()

export default async function handler(req : any, res : any) {
    const {ClientID} = req.query;
    const {idMovie} = req.body;

    if (await Client.find({idMovie: 0})) {
        try {
            const clients = await Client.updateOne({_id: ClientID}, {$addToSet: {idMovie: idMovie}})
            res.status(200).json({data: clients})
        } catch (error) {
            console.log(error);
            res.status(500).json({error: error});
        }
    }
}