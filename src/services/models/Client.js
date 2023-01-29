import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    email: String,
    nome: String,
    senha: String,
    idMovie: Array
});

const Client =  mongoose.models.Client || mongoose.model('Client', ClientSchema);

export default Client