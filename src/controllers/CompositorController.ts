import { Request, Response } from "express";
import Compositor from "../models/CompositorModel";

class CompositorController {
  /**
   * Cria um novo compositor
   * @param req Request com os dados do compositor a ser criado
   * @param res Response para enviar a resposta HTTP
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const novoCompositor = req.body;
      const compositorCriado = await Compositor.create(novoCompositor);
      res.status(201).json(compositorCriado);
    } catch (error) {
      console.error("Erro ao criar compositor:", error);
      res.status(500).json({ error: "Erro ao criar compositor" });
    }
  }

  /**
   * Lista todos os compositores
   * @param req Request com os parâmetros da requisição (opcional)
   * @param res Response para enviar a resposta HTTP
   */
  async list(req: Request, res: Response): Promise<void> {
    try {
      const compositores = await Compositor.findAll();
      res.status(200).json(compositores);
    } catch (error) {
      console.error("Erro ao listar compositores:", error);
      res.status(500).json({ error: "Erro ao listar compositores" });
    }
  }

  /**
   * Busca um compositor por ID
   * @param req Request com o ID do compositor a ser buscado
   * @param res Response para enviar a resposta HTTP
   */
  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const compositor = await Compositor.findByPk(id);
      if (compositor) {
        res.status(200).json(compositor);
      } else {
        res.status(404).json({ error: "Compositor não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao buscar compositor por ID:", error);
      res.status(500).json({ error: "Erro ao buscar compositor por ID" });
    }
  }

  /**
   * Atualiza um compositor existente por ID
   * @param req Request com o ID do compositor a ser atualizado e os novos dados
   * @param res Response para enviar a resposta HTTP
   */
  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const novosDadosCompositor = req.body;
    try {
      const compositorAtualizado = await Compositor.update(
        novosDadosCompositor,
        {
          where: { id_compositor: id },
          returning: true,
        }
      );
      if (compositorAtualizado[0] === 1) {
        res.status(200).json(compositorAtualizado[1][0]);
      } else {
        res.status(404).json({ error: "Compositor não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao atualizar compositor por ID:", error);
      res.status(500).json({ error: "Erro ao atualizar compositor por ID" });
    }
  }

  /**
   * Exclui um compositor por ID
   * @param req Request com o ID do compositor a ser excluído
   * @param res Response para enviar a resposta HTTP
   */
  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const compositorExcluido = await Compositor.destroy({
        where: { id_compositor: id },
      });
      if (compositorExcluido === 1) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "Compositor não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao excluir compositor por ID:", error);
      res.status(500).json({ error: "Erro ao excluir compositor por ID" });
    }
  }
}

export default new CompositorController();
