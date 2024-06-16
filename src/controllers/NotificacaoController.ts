import { Request, Response } from "express";
import Notificacao from "../models/NotificationsModel";

class NotificacaoController {
  /**
   * Cria uma nova notificação
   * @param req Request com os dados da notificação a ser criada
   * @param res Response para enviar a resposta HTTP
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const novaNotificacao = req.body;
      const notificacaoCriada = await Notificacao.create(novaNotificacao);
      res.status(201).json(notificacaoCriada);
    } catch (error) {
      console.error("Erro ao criar notificação:", error);
      res.status(500).json({ error: "Erro ao criar notificação" });
    }
  }

  /**
   * Lista todas as notificações
   * @param req Request com os parâmetros da requisição (opcional)
   * @param res Response para enviar a resposta HTTP
   */
  async list(req: Request, res: Response): Promise<void> {
    try {
      const notificacoes = await Notificacao.findAll();
      res.status(200).json(notificacoes);
    } catch (error) {
      console.error("Erro ao listar notificações:", error);
      res.status(500).json({ error: "Erro ao listar notificações" });
    }
  }

  /**
   * Busca uma notificação por ID
   * @param req Request com o ID da notificação a ser buscada
   * @param res Response para enviar a resposta HTTP
   */
  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const notificacao = await Notificacao.findByPk(id);
      if (notificacao) {
        res.status(200).json(notificacao);
      } else {
        res.status(404).json({ error: "Notificação não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao buscar notificação por ID:", error);
      res.status(500).json({ error: "Erro ao buscar notificação por ID" });
    }
  }

  /**
   * Atualiza uma notificação por ID
   * @param req Request com o ID da notificação a ser atualizada e os novos dados
   * @param res Response para enviar a resposta HTTP
   */
  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const novosDadosNotificacao = req.body;
    try {
      const notificacaoAtualizada = await Notificacao.update(
        novosDadosNotificacao,
        {
          where: { id_notificacao: id },
          returning: true,
        }
      );
      if (notificacaoAtualizada[0] === 1) {
        res.status(200).json(notificacaoAtualizada[1][0]);
      } else {
        res.status(404).json({ error: "Notificação não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao atualizar notificação por ID:", error);
      res.status(500).json({ error: "Erro ao atualizar notificação por ID" });
    }
  }

  /**
   * Exclui uma notificação por ID
   * @param req Request com o ID da notificação a ser excluída
   * @param res Response para enviar a resposta HTTP
   */
  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const notificacaoExcluida = await Notificacao.destroy({
        where: { id_notificacao: id },
      });
      if (notificacaoExcluida === 1) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "Notificação não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao excluir notificação por ID:", error);
      res.status(500).json({ error: "Erro ao excluir notificação por ID" });
    }
  }
}

export default new NotificacaoController();
