import Anime from "../models/Animes.js";

class animeService {
  // async / await
  // Função para listar os animes
  async getAll() {
    try {
      const animes = await Anime.find();
      return animes;
    } catch (error) {
      console.log(error);
    }
  }

  // Função para cadastrar animes
  async Create(title, season, year, eps) {
    try {
      const newAnime = new Anime({
        // title : title
        title,
        season,
        year,
        eps,
      });
      // Método do mongoose para cadastrar .save()
      await newAnime.save();
    } catch (error) {
      console.log(error);
    }
  }

  // Função para deletar animes
  async Delete(id) {
    try {
      await Anime.findByIdAndDelete(id);
      console.log(`Anime com a id: ${id} foi excluído.`);
    } catch (error) {
      console.log(error);
    }
  }

  // Função para alterar animes
  async Update(id, title, season, year, eps) {
    try {
      await Anime.findByIdAndUpdate(id, {
        // title : title
        title,
        season,
        year,
        eps,
      });
      console.log(`Dados do anime com a id: ${id} alterados com sucesso.`);
    } catch (error) {
      console.log(error);
    }
  }

  // Função para listar um único anime
  async getOne(id) {
    try {
      const anime = await Anime.findOne({ _id: id });
      return anime;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new animeService();
