import { Request, Response } from "express";
import Critica from "../models/CriticasModel";

class CriticaController {
  /**
   * Cria uma nova crítica
   * @param req Request com os dados da crítica a ser criada
   * @param res Response para enviar a resposta HTTP
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const novaCritica = req.body;
      const criticaCriada = await Critica.create(novaCritica);
      res.status(201).json({ data: criticaCriada });
    } catch (error) {
      console.error("Erro ao criar crítica:", error);
      res.status(500).json({ error: "Erro ao criar crítica" });
    }
  }

  /**
   * Lista todas as críticas
   * @param req Request com os parâmetros da requisição (opcional)
   * @param res Response para enviar a resposta HTTP
   */
  async list(req: Request, res: Response): Promise<void> {
    try {
      const criticas = await Critica.findAll();
      res.status(200).json(criticas);
    } catch (error) {
      console.error("Erro ao listar críticas:", error);
      res.status(500).json({ error: "Erro ao listar críticas" });
    }
  }

  /**
   * Busca uma crítica por ID
   * @param req Request com o ID da crítica a ser buscada
   * @param res Response para enviar a resposta HTTP
   */
  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const critica = await Critica.findByPk(id);
      if (critica) {
        res.status(200).json(critica);
      } else {
        res.status(404).json({ error: "Crítica não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao buscar crítica por ID:", error);
      res.status(500).json({ error: "Erro ao buscar crítica por ID" });
    }
  }
  async getCommentByIdMidia(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const critica = await Critica.findAll({ where: { id_midia: id } });
      if (critica) {
        res.status(200).json({ data: critica });
      } else {
        res.status(404).json({ error: "Crítica não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao buscar crítica por ID:", error);
      res.status(500).json({ error: "Erro ao buscar crítica por ID" });
    }
  }

  /**
   * Atualiza uma crítica existente por ID
   * @param req Request com o ID da crítica a ser atualizada e os novos dados
   * @param res Response para enviar a resposta HTTP
   */
  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const novosDadosCritica = req.body;
    try {
      const criticaAtualizada = await Critica.update(novosDadosCritica, {
        where: { id_critica: id },
        returning: true,
      });
      if (criticaAtualizada[0] === 1) {
        res.status(200).json(criticaAtualizada[1][0]);
      } else {
        res.status(404).json({ error: "Crítica não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao atualizar crítica por ID:", error);
      res.status(500).json({ error: "Erro ao atualizar crítica por ID" });
    }
  }

  /**
   * Exclui uma crítica por ID
   * @param req Request com o ID da crítica a ser excluída
   * @param res Response para enviar a resposta HTTP
   */
  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const criticaExcluida = await Critica.destroy({
        where: { id_critica: id },
      });
      if (criticaExcluida === 1) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "Crítica não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao excluir crítica por ID:", error);
      res.status(500).json({ error: "Erro ao excluir crítica por ID" });
    }
  }
}

export default new CriticaController();
