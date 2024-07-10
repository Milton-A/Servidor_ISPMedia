import { Request, Response } from "express";
import TipoMedia from "../models/TipoMediaModel";

class TipoMediaController {
  /**
   * Cria um novo tipo de mídia
   * @param req Request com os dados do tipo de mídia a ser criado
   * @param res Response para enviar a resposta HTTP
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const novoTipoMedia = req.body;
      const tipoMediaCriado = await TipoMedia.bulkCreate(novoTipoMedia);
      res.status(201).json({ data: tipoMediaCriado });
    } catch (error) {
      console.error("Erro ao criar tipo de mídia:", error);
      res.status(500).json({ error: "Erro ao criar tipo de mídia" });
    }
  }

  /**
   * Lista todos os tipos de mídia
   * @param req Request com os parâmetros da requisição (opcional)
   * @param res Response para enviar a resposta HTTP
   */
  async list(req: Request, res: Response): Promise<void> {
    try {
      const tiposMedia = await TipoMedia.findAll();
      res.status(200).json({ data: tiposMedia });
    } catch (error) {
      console.error("Erro ao listar tipos de mídia:", error);
      res.status(500).json({ error: "Erro ao listar tipos de mídia" });
    }
  }

  /**
   * Busca um tipo de mídia por ID
   * @param req Request com o ID do tipo de mídia a ser buscado
   * @param res Response para enviar a resposta HTTP
   */
  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const tipoMedia = await TipoMedia.findByPk(id);
      if (tipoMedia) {
        res.status(200).json(tipoMedia);
      } else {
        res.status(404).json({ error: "Tipo de mídia não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao buscar tipo de mídia por ID:", error);
      res.status(500).json({ error: "Erro ao buscar tipo de mídia por ID" });
    }
  }

  /**
   * Atualiza um tipo de mídia por ID
   * @param req Request com o ID do tipo de mídia a ser atualizado e os novos dados
   * @param res Response para enviar a resposta HTTP
   */
  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const novosDadosTipoMedia = req.body;
    try {
      const tipoMediaAtualizado = await TipoMedia.update(novosDadosTipoMedia, {
        where: { id_tipo_media: id },
        returning: true,
      });
      if (tipoMediaAtualizado[0] === 1) {
        res.status(200).json(tipoMediaAtualizado[1][0]);
      } else {
        res.status(404).json({ error: "Tipo de mídia não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao atualizar tipo de mídia por ID:", error);
      res.status(500).json({ error: "Erro ao atualizar tipo de mídia por ID" });
    }
  }

  /**
   * Exclui um tipo de mídia por ID
   * @param req Request com o ID do tipo de mídia a ser excluído
   * @param res Response para enviar a resposta HTTP
   */
  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const tipoMediaExcluido = await TipoMedia.destroy({
        where: { id_tipo_media: id },
      });
      if (tipoMediaExcluido === 1) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "Tipo de mídia não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao excluir tipo de mídia por ID:", error);
      res.status(500).json({ error: "Erro ao excluir tipo de mídia por ID" });
    }
  }
}

export default new TipoMediaController();
