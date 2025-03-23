import express from "express";
const animeRoutes = express.Router();
import animeController from "../controllers/animeController.js";

// Endpoint para listar todos os games (rota)
animeRoutes.get("/animes", animeController.getAllAnimes);

// Endpoint para cadastrar um jogo
animeRoutes.post("/animes", animeController.createAnime);

// Endpoint para excluir um jogo
animeRoutes.delete("/animes/:id", animeController.deleteAnime);

// Endpoint para alterar um jogo
animeRoutes.put("/animes/:id", animeController.updateAnime)

// Endpoint para listar um único jogo
animeRoutes.get("/animes/:id", animeController.getOneAnime)

export default animeRoutes;
