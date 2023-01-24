import dbConnection from '../../../services/db';
import Client from '../../../services/models/Client';

dbConnection()

export default async function handler(req, res) {
    try {
        const {ClientID} = req.query 

        if(!ClientID) throw 'invalid data'

        const clients = await Client.findById({_id: ClientID})
        res.status(200).json({data: clients})
    } catch (err) {
        console.log(err)
        res.status(500).json({err})
    }
}