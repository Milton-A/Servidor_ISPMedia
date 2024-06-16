import { Request, Response } from "express";
import Partilha from "../models/PartilhaModel";

class PartilhaController {
  /**
   * Cria uma nova partilha
   * @param req Request com os dados da partilha a ser criada
   * @param res Response para enviar a resposta HTTP
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const novaPartilha = req.body;
      const partilhaCriada = await Partilha.create(novaPartilha);
      res.status(201).json(partilhaCriada);
    } catch (error) {
      console.error("Erro ao criar partilha:", error);
      res.status(500).json({ error: "Erro ao criar partilha" });
    }
  }

  /**
   * Lista todas as partilhas
   * @param req Request com os parâmetros da requisição (opcional)
   * @param res Response para enviar a resposta HTTP
   */
  async list(req: Request, res: Response): Promise<void> {
    try {
      const partilhas: Partilha[] = await Partilha.findAll();
      res.status(200).json(partilhas);
    } catch (error) {
      console.error("Erro ao listar partilhas:", error);
      res.status(500).json({ error: "Erro ao listar partilhas" });
    }
  }

  /**
   * Busca uma partilha por ID
   * @param req Request com o ID da partilha a ser buscada
   * @param res Response para enviar a resposta HTTP
   */
  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const partilha: Partilha | null = await Partilha.findByPk(id);
      if (partilha) {
        res.status(200).json(partilha);
      } else {
        res.status(404).json({ error: "Partilha não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao buscar partilha por ID:", error);
      res.status(500).json({ error: "Erro ao buscar partilha por ID" });
    }
  }

  /**
   * Atualiza uma partilha por ID
   * @param req Request com o ID da partilha a ser atualizada e os novos dados
   * @param res Response para enviar a resposta HTTP
   */
  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const novosDadosPartilha = req.body;
    try {
      const partilhaAtualizada = await Partilha.update(novosDadosPartilha, {
        where: { id_partilha: id },
        returning: true,
      });
      if (partilhaAtualizada[0] === 1) {
        res.status(200).json(partilhaAtualizada[1][0]);
      } else {
        res.status(404).json({ error: "Partilha não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao atualizar partilha por ID:", error);
      res.status(500).json({ error: "Erro ao atualizar partilha por ID" });
    }
  }

  /**
   * Exclui uma partilha por ID
   * @param req Request com o ID da partilha a ser excluída
   * @param res Response para enviar a resposta HTTP
   */
  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const partilhaExcluida = await Partilha.destroy({
        where: { id_partilha: id },
      });
      if (partilhaExcluida === 1) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "Partilha não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao excluir partilha por ID:", error);
      res.status(500).json({ error: "Erro ao excluir partilha por ID" });
    }
  }
}

export default new PartilhaController();
