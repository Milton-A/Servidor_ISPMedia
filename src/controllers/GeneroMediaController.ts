import { Request, Response } from "express";
import GeneroMedia from "../models/GeneroMediaModel";

class GeneroMediaController {
  /**
   * Cria um novo gênero de mídia
   * @param req Request com os dados do gênero de mídia a ser criado
   * @param res Response para enviar a resposta HTTP
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const novoGeneroMedia = req.body;
      const generoMediaCriado = await GeneroMedia.create(novoGeneroMedia);
      res.status(201).json({ data: generoMediaCriado });
    } catch (error) {
      console.error("Erro ao criar gênero de mídia:", error);
      res.status(500).json({ error: "Erro ao criar gênero de mídia" });
    }
  }

  /**
   * Lista todos os gêneros de mídia
   * @param req Request com os parâmetros da requisição (opcional)
   * @param res Response para enviar a resposta HTTP
   */
  async list(req: Request, res: Response): Promise<void> {
    try {
      const generosMedia = await GeneroMedia.findAll();
      res.status(200).json({ data: generosMedia });
    } catch (error) {
      console.error("Erro ao listar gêneros de mídia:", error);
      res.status(500).json({ error: "Erro ao listar gêneros de mídia" });
    }
  }

  /**
   * Busca um gênero de mídia por ID
   * @param req Request com o ID do gênero de mídia a ser buscado
   * @param res Response para enviar a resposta HTTP
   */
  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const generoMedia = await GeneroMedia.findByPk(id);
      if (generoMedia) {
        res.status(200).json({ data: generoMedia });
      } else {
        res.status(404).json({ error: "Gênero de mídia não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao buscar gênero de mídia por ID:", error);
      res.status(500).json({ error: "Erro ao buscar gênero de mídia por ID" });
    }
  }

  /**
   * Atualiza um gênero de mídia existente por ID
   * @param req Request com o ID do gênero de mídia a ser atualizado e os novos dados
   * @param res Response para enviar a resposta HTTP
   */
  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const novosDadosGeneroMedia = req.body;
    try {
      const generoMediaAtualizado = await GeneroMedia.update(
        novosDadosGeneroMedia,
        {
          where: { id_genero_media: id },
          returning: true,
        }
      );
      if (generoMediaAtualizado[0] === 1) {
        res.status(200).json({ data: generoMediaAtualizado[1][0] });
      } else {
        res.status(404).json({ error: "Gênero de mídia não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao atualizar gênero de mídia por ID:", error);
      res
        .status(500)
        .json({ error: "Erro ao atualizar gênero de mídia por ID" });
    }
  }

  /**
   * Exclui um gênero de mídia por ID
   * @param req Request com o ID do gênero de mídia a ser excluído
   * @param res Response para enviar a resposta HTTP
   */
  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const generoMediaExcluido = await GeneroMedia.destroy({
        where: { id_genero_media: id },
      });
      if (generoMediaExcluido === 1) {
        res.status(204).json({ data: generoMediaExcluido });
      } else {
        res.status(404).json({ error: "Gênero de mídia não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao excluir gênero de mídia por ID:", error);
      res.status(500).json({ error: "Erro ao excluir gênero de mídia por ID" });
    }
  }
}

export default new GeneroMediaController();
