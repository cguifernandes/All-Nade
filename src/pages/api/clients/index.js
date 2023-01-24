import dbConnection from '../../../services/db';
import Client from '../../../services/models/Client';

dbConnection()

export default async function handler(req, res) {
    const {method} = req

    switch(method) {
        case 'GET':
            try {
                const clients = await Client.find({})
                res.status(200).json({data: clients})
            } catch (err) {
                console.log(err)
                res.status(500).json({err})
            }
        break;

        case 'POST':
            try {
                const {nome, email, senha} = req.body

                if(!nome && !email && !senha) throw 'invalid data'

                const clients = await Client.create({nome, email, senha})

                res.status(201).json({data: clients})
            } catch (err) {
                console.log(err)
                res.status(500).json({err})
            }
        break;
    }
}