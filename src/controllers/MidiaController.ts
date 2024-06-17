import { Request, Response } from "express";
import Midia from "../models/MidiaModel";

class MidiaController {
  /**
   * Cria uma nova mídia
   * @param req Request com os dados da mídia a ser criada
   * @param res Response para enviar a resposta HTTP
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const novaMidia = req.body;
      const midiaCriada = await Midia.create(novaMidia);
      res.status(201).json(midiaCriada);
    } catch (error) {
      console.error("Erro ao criar mídia:", error);
      res.status(500).json({ error: "Erro ao criar mídia" });
    }
  }

  /**
   * Lista todas as mídias
   * @param req Request com os parâmetros da requisição (opcional)
   * @param res Response para enviar a resposta HTTP
   */
  async list(req: Request, res: Response): Promise<void> {
    try {
      const midias = await Midia.findAll();
      res.status(200).json({ message: "Midias concluída", data: midias });
    } catch (error) {
      console.error("Erro ao listar mídias:", error);
      res.status(500).json({ error: "Erro ao listar mídias" });
    }
  }

  /**
   * Busca uma mídia por ID
   * @param req Request com o ID da mídia a ser buscada
   * @param res Response para enviar a resposta HTTP
   */
  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const midia = await Midia.findByPk(id);
      if (midia) {
        res.status(200).json(midia);
      } else {
        res.status(404).json({ error: "Mídia não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao buscar mídia por ID:", error);
      res.status(500).json({ error: "Erro ao buscar mídia por ID" });
    }
  }

  /**
   * Atualiza uma mídia por ID
   * @param req Request com o ID da mídia a ser atualizada e os novos dados
   * @param res Response para enviar a resposta HTTP
   */
  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const novosDadosMidia = req.body;
    try {
      const midiaAtualizada = await Midia.update(novosDadosMidia, {
        where: { id_midia: id },
        returning: true,
      });
      if (midiaAtualizada[0] === 1) {
        res.status(200).json(midiaAtualizada[1][0]);
      } else {
        res.status(404).json({ error: "Mídia não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao atualizar mídia por ID:", error);
      res.status(500).json({ error: "Erro ao atualizar mídia por ID" });
    }
  }

  /**
   * Exclui uma mídia por ID
   * @param req Request com o ID da mídia a ser excluída
   * @param res Response para enviar a resposta HTTP
   */
  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const midiaExcluida = await Midia.destroy({
        where: { id_midia: id },
      });
      if (midiaExcluida === 1) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "Mídia não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao excluir mídia por ID:", error);
      res.status(500).json({ error: "Erro ao excluir mídia por ID" });
    }
  }
}

export default new MidiaController();
