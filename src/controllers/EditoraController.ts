import { Request, Response } from "express";
import Editora from "../models/EditoraModel";

class EditoraController {
  /**
   * Cria uma nova editora
   * @param req Request com os dados da editora a ser criada
   * @param res Response para enviar a resposta HTTP
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const novaEditora = req.body;
      const editoraCriada = await Editora.create(novaEditora);
      res.status(201).json(editoraCriada);
    } catch (error) {
      console.error("Erro ao criar editora:", error);
      res.status(500).json({ error: "Erro ao criar editora" });
    }
  }

  /**
   * Lista todas as editoras
   * @param req Request com os parâmetros da requisição (opcional)
   * @param res Response para enviar a resposta HTTP
   */
  async list(req: Request, res: Response): Promise<void> {
    try {
      const editoras = await Editora.findAll();
      res.status(200).json(editoras);
    } catch (error) {
      console.error("Erro ao listar editoras:", error);
      res.status(500).json({ error: "Erro ao listar editoras" });
    }
  }

  /**
   * Busca uma editora por ID
   * @param req Request com o ID da editora a ser buscada
   * @param res Response para enviar a resposta HTTP
   */
  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const editora = await Editora.findByPk(id);
      if (editora) {
        res.status(200).json(editora);
      } else {
        res.status(404).json({ error: "Editora não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao buscar editora por ID:", error);
      res.status(500).json({ error: "Erro ao buscar editora por ID" });
    }
  }

  /**
   * Atualiza uma editora existente por ID
   * @param req Request com o ID da editora a ser atualizada e os novos dados
   * @param res Response para enviar a resposta HTTP
   */
  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const novosDadosEditora = req.body;
    try {
      const editoraAtualizada = await Editora.update(novosDadosEditora, {
        where: { id_editora: id },
        returning: true,
      });
      if (editoraAtualizada[0] === 1) {
        res.status(200).json(editoraAtualizada[1][0]);
      } else {
        res.status(404).json({ error: "Editora não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao atualizar editora por ID:", error);
      res.status(500).json({ error: "Erro ao atualizar editora por ID" });
    }
  }

  /**
   * Exclui uma editora por ID
   * @param req Request com o ID da editora a ser excluída
   * @param res Response para enviar a resposta HTTP
   */
  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const editoraExcluida = await Editora.destroy({
        where: { id_editora: id },
      });
      if (editoraExcluida === 1) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "Editora não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao excluir editora por ID:", error);
      res.status(500).json({ error: "Erro ao excluir editora por ID" });
    }
  }
}

export default new EditoraController();
