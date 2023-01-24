import mongoose, { Types } from "mongoose";

const ClientSchema = new mongoose.Schema({
    email: String,
    nome: String,
    senha: String,
});

const Client =  mongoose.models.Client || mongoose.model('Client', ClientSchema);

export default Client