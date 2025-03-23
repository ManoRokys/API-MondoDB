import mongoose from "mongoose";

const animeSchema = new mongoose.Schema({
  title: String,
  season: String,
  year: Number,
  eps: Number,
});

// Aqui está sendo criado a coleção anime no banco de dados
const Anime = mongoose.model("Anime", animeSchema);

export default Anime;
