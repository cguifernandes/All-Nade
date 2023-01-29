import mongoose from "mongoose";

const FavoriteSchema = new mongoose.Schema({
    idMovie: String
});

const Favorite =  mongoose.models.Favorite || mongoose.model('Favorite', FavoriteSchema);

export default Favorite;