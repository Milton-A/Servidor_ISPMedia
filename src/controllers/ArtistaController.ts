import { Request, Response } from "express";
import Artista from "../models/ArtistaModel";

class ArtistaController {
  /**
   * Cria um novo artista
   * @param req Request com os dados do artista a ser criado
   * @param res Response para enviar a resposta HTTP
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const novoArtista = req.body;
      const artistaCriado = await Artista.create(novoArtista);
      res
        .status(201)
        .json({ message: "Artista criado com sucesso!", data: artistaCriado });
    } catch (error) {
      console.error("Erro ao criar artista:", error);
      res.status(500).json({ error: "Erro ao criar artista" });
    }
  }

  /**
   * Lista todos os artistas
   * @param req Request com os parâmetros da requisição (opcional)
   * @param res Response para enviar a resposta HTTP
   */
  async list(req: Request, res: Response): Promise<void> {
    try {
      const artistas = await Artista.findAll();
      res
        .status(200)
        .json({ message: "Artistas listados com sucesso!", data: artistas });
    } catch (error) {
      console.error("Erro ao listar artistas:", error);
      res.status(500).json({ error: "Erro ao listar artistas" });
    }
  }

  /**
   * Busca um artista por ID
   * @param req Request com o ID do artista a ser buscado
   * @param res Response para enviar a resposta HTTP
   */
  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const artista = await Artista.findByPk(id);
      if (artista) {
        res
          .status(200)
          .json({ message: "Artistas encontrado com sucesso!", data: artista });
      } else {
        res.status(404).json({ error: "Artista não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao buscar artista por ID:", error);
      res.status(500).json({ error: "Erro ao buscar artista por ID" });
    }
  }

  /**
   * Atualiza um artista existente por ID
   * @param req Request com o ID do artista a ser atualizado e os novos dados
   * @param res Response para enviar a resposta HTTP
   */
  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const novosDadosArtista = req.body;
    try {
      const artistaAtualizado = await Artista.update(novosDadosArtista, {
        where: { id_artista: id },
        returning: true,
      });
      if (artistaAtualizado[0] === 1) {
        res.status(200).json({
          message: "Artista actualizado com sucesso!",
          data: artistaAtualizado[1][0],
        });
      } else {
        res.status(404).json({ error: "Artista não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao atualizar artista por ID:", error);
      res.status(500).json({ error: "Erro ao atualizar artista por ID" });
    }
  }

  /**
   * Exclui um artista por ID
   * @param req Request com o ID do artista a ser excluído
   * @param res Response para enviar a resposta HTTP
   */
  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const artista = await Artista.findByPk(id);
      const artistaExcluido = await Artista.destroy({
        where: { id_artista: id },
      });
      if (artistaExcluido === 1) {
        res.status(204).json({
          message: "Artista eliminado com sucesso!",
          data: artista,
        });
      } else {
        res.status(404).json({ error: "Artista não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao excluir artista por ID:", error);
      res.status(500).json({ error: "Erro ao excluir artista por ID" });
    }
  }
}

export default new ArtistaController();
