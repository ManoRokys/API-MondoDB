import express from "express";
import mongoose from "./config/db-connection.js";
import Animes from "./models/Animes.js"
const app = express();

// Importando as rotas (endpoints) de Games
import animeRoutes from './routes/animeRoutes.js'

// Configurações do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', animeRoutes)

// Iniciando a conexão com o banco de dados do MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/api-thegames")

// ROTA PRINCIPAL
app.get("/", (req, res) => {
  //   res.send("API iniciada com sucesso!");
  const animes = [
    {
      title: "Anime 1",
      year: 2020,
      season: "Winter",
      eps: 12,
    },
    {
      title: "Anime 2",
      year: 2024,
      season: "Summer",
      eps: 200,
    },
  ];
  res.json(animes)
});

// Iniciando o servidor
const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API rodando em http://localhost:${port}.`);
  }
});
