import animeService from "../services/animeService.js";
import { ObjectId } from "mongodb";

// Função para listar os jogos
const getAllAnimes = async (req, res) => {
  try {
    const animes = await animeService.getAll();
    // Requisição feita com sucesso - Cod. 200 (OK)
    res.status(200).json({ animes: animes });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para cadastrar jogos
const createAnime = async (req, res) => {
  try {
    // Desestruturação
    // Capturando valores
    const { title, season, year, eps } = req.body;
    // Cadastrando no banco
    await animeService.Create(title, season, year, eps);
    res.sendStatus(201); // Código 201 (CREATED)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para deletar jogos
const deleteAnime = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      animeService.Delete(id);
      res.sendStatus(204); // Código 204 (NO CONTENT)
    } else {
      res.sendStatus(400); // Código 400 (BAD REQUEST)
      // Requisição mal formada
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para alterar um jogo
const updateAnime = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      // Desestruturação
      //const title = req.body.title
      const { title, season, year, eps } = req.body;
      animeServiceService.Update(id, title, season, year, eps);
      res.sendStatus(200); // Código 200 (OK): Requisição bem sucedida
    } else {
      res.sendStatus(400); // Código 400 (Bad Request): Requisição mal formada
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

// Função para buscar um único jogo
const getOneAnime = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const anime = await animeService.getOne(id);
      if (!anime) {
        res.sendStatus(404); // Código 404: NOT FOUND - Não encontrado
      } else {
        res.status(200).json({ anime });
      }
    } else {
      res.sendStatus(400); // Código 400: Bad Request
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500); // Erro interno do servidor
  }
};

export default { getAllAnimes, createAnime, deleteAnime, updateAnime, getOneAnime };
