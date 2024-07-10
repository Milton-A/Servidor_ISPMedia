import { Request, Response } from "express";
import GrupoMediaModel from "../models/GrupoMediaModel";
import Midia from "../models/MidiaModel";
import GrupoModel from "../models/groupModel";

class GrupoMediaController {
  /**
   * Cria um novo registro em grupo_media
   * @param req Request com os dados do registro a ser criado
   * @param res Response para enviar a resposta HTTP
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const novoGrupoMedia = req.body;
      const grupoMediaCriado = await GrupoMediaModel.create(novoGrupoMedia);
      res.status(201).json({ data: grupoMediaCriado });
    } catch (error) {
      console.error("Erro ao criar grupo_media:", error);
      res.status(500).json({ error: "Erro ao criar grupo_media" });
    }
  }

  /**
   * Lista todos os registros em grupo_media
   * @param req Request com os parâmetros da requisição (opcional)
   * @param res Response para enviar a resposta HTTP
   */
  async list(req: Request, res: Response): Promise<void> {
    try {
      const grupoMedia = await GrupoMediaModel.findAll({
        include: [
          {
            model: Midia,
            as: "midia",
            attributes: ["titulo"],
          },
          {
            model: GrupoModel,
            as: "grupo",
            attributes: ["nome"],
          },
        ],
      });
      res.status(200).json({ data: grupoMedia });
    } catch (error) {
      console.error("Erro ao listar grupo_media:", error);
      res.status(500).json({ error: "Erro ao listar grupo_media" });
    }
  }

  /**
   * Busca um registro em grupo_media por ID
   * @param req Request com o ID do registro a ser buscado
   * @param res Response para enviar a resposta HTTP
   */
  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const grupoMedia = await GrupoMediaModel.findByPk(id);
      if (grupoMedia) {
        res.status(200).json({ data: grupoMedia });
      } else {
        res.status(404).json({ error: "Registro não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao buscar grupo_media por ID:", error);
      res.status(500).json({ error: "Erro ao buscar grupo_media por ID" });
    }
  }

  /**
   * Atualiza um registro em grupo_media por ID
   * @param req Request com o ID do registro a ser atualizado e os novos dados
   * @param res Response para enviar a resposta HTTP
   */
  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const novosDadosGrupoMedia = req.body;
    try {
      const grupoMediaAtualizado = await GrupoMediaModel.update(
        novosDadosGrupoMedia,
        {
          where: { id_grupo_media: id },
          returning: true,
        }
      );
      if (grupoMediaAtualizado[0] === 1) {
        res.status(200).json({ data: grupoMediaAtualizado[1][0] });
      } else {
        res.status(404).json({ error: "Registro não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao atualizar grupo_media por ID:", error);
      res.status(500).json({ error: "Erro ao atualizar grupo_media por ID" });
    }
  }

  /**
   * Exclui um registro em grupo_media por ID
   * @param req Request com o ID do registro a ser excluído
   * @param res Response para enviar a resposta HTTP
   */
  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const grupoMediaExcluido = await GrupoMediaModel.destroy({
        where: { id_grupo_media: id },
      });
      if (grupoMediaExcluido === 1) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "Registro não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao excluir grupo_media por ID:", error);
      res.status(500).json({ error: "Erro ao excluir grupo_media por ID" });
    }
  }
  async getMidiaById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const playlists = await GrupoMediaModel.findAll({
        where: { id_grupo: id },
        include: [
          {
            model: Midia,
            as: "midia",
            attributes: ["titulo"],
          },
          {
            model: GrupoModel,
            as: "grupo",
            attributes: ["nome"],
          },
        ],
      });
      if (playlists) {
        res.status(200).json({ data: playlists });
      } else {
        res.status(404).json({ error: "Grupo de usuário não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao buscar grupo de usuário por ID:", error);
      res.status(500).json(`${error}: Erro ao buscar grupo de usuário por ID`);
    }
  }
}

export default new GrupoMediaController();
