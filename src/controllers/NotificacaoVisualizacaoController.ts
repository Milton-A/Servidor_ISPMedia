import { Request, Response } from "express";
import NotificacaoVisualizacaoModel from "../models/NotificacaoVisualizacaoModel";

class NotificacaoVisualizacaoController {
  /**
   * Cria uma nova visualização de notificação
   * @param req Request com os dados da visualização de notificação a ser criada
   * @param res Response para enviar a resposta HTTP
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const novaVisualizacao = req.body;
      const visualizacaoCriada = await NotificacaoVisualizacaoModel.create(
        novaVisualizacao
      );
      res.status(201).json(visualizacaoCriada);
    } catch (error) {
      console.error("Erro ao criar visualização de notificação:", error);
      res
        .status(500)
        .json({ error: "Erro ao criar visualização de notificação" });
    }
  }

  /**
   * Lista todas as visualizações de notificação
   * @param req Request com os parâmetros da requisição (opcional)
   * @param res Response para enviar a resposta HTTP
   */
  async list(req: Request, res: Response): Promise<void> {
    try {
      const visualizacoes = await NotificacaoVisualizacaoModel.findAll();
      res.status(200).json(visualizacoes);
    } catch (error) {
      console.error("Erro ao listar visualizações de notificação:", error);
      res
        .status(500)
        .json({ error: "Erro ao listar visualizações de notificação" });
    }
  }

  /**
   * Busca uma visualização de notificação por ID
   * @param req Request com o ID da visualização de notificação a ser buscada
   * @param res Response para enviar a resposta HTTP
   */
  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const visualizacao = await NotificacaoVisualizacaoModel.findByPk(id);
      if (visualizacao) {
        res.status(200).json(visualizacao);
      } else {
        res
          .status(404)
          .json({ error: "Visualização de notificação não encontrada" });
      }
    } catch (error) {
      console.error(
        "Erro ao buscar visualização de notificação por ID:",
        error
      );
      res
        .status(500)
        .json({ error: "Erro ao buscar visualização de notificação por ID" });
    }
  }

  /**
   * Atualiza uma visualização de notificação por ID
   * @param req Request com o ID da visualização de notificação a ser atualizada e os novos dados
   * @param res Response para enviar a resposta HTTP
   */
  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const novosDadosVisualizacao = req.body;
    try {
      const visualizacaoAtualizada = await NotificacaoVisualizacaoModel.update(
        novosDadosVisualizacao,
        {
          where: { id_notificacao_visualizacao: id },
          returning: true,
        }
      );
      if (visualizacaoAtualizada[0] === 1) {
        res.status(200).json(visualizacaoAtualizada[1][0]);
      } else {
        res
          .status(404)
          .json({ error: "Visualização de notificação não encontrada" });
      }
    } catch (error) {
      console.error(
        "Erro ao atualizar visualização de notificação por ID:",
        error
      );
      res
        .status(500)
        .json({
          error: "Erro ao atualizar visualização de notificação por ID",
        });
    }
  }

  /**
   * Exclui uma visualização de notificação por ID
   * @param req Request com o ID da visualização de notificação a ser excluída
   * @param res Response para enviar a resposta HTTP
   */
  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const visualizacaoExcluida = await NotificacaoVisualizacaoModel.destroy({
        where: { id_notificacao_visualizacao: id },
      });
      if (visualizacaoExcluida === 1) {
        res.status(204).end();
      } else {
        res
          .status(404)
          .json({ error: "Visualização de notificação não encontrada" });
      }
    } catch (error) {
      console.error(
        "Erro ao excluir visualização de notificação por ID:",
        error
      );
      res
        .status(500)
        .json({ error: "Erro ao excluir visualização de notificação por ID" });
    }
  }
}

export default new NotificacaoVisualizacaoController();
