import { Request, Response } from "express";
import UserModel from "../models/UserModel";
import { SendEmail } from "../services/sendMail";

class UserController {
  /**
   * Cria um novo usuário
   * @param req Request com os dados do usuário a ser criado
   * @param res Response para enviar a resposta HTTP
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const novoUsuario = req.body;
      const usuarioCriado = await UserModel.create(novoUsuario);
      res.status(200).json({ data: usuarioCriado });
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      res.status(500).json({ error: "Erro ao criar usuário" });
    }
  }

  /**
   * Lista todos os usuários
   * @param req Request com os parâmetros da requisição (opcional)
   * @param res Response para enviar a resposta HTTP
   */
  async list(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserModel.findAll();
      res.status(200).json({ data: users });
    } catch (error) {
      console.error("Erro ao listar Usuários:", error);
      res.status(500).json({ error: "Erro ao listar Usuários" });
    }
  }

  /**
   * Busca um usuário por ID
   * @param req Request com o ID do usuário a ser buscado
   * @param res Response para enviar a resposta HTTP
   */
  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const usuario = await UserModel.findByPk(id);
      if (usuario) {
        res.status(200).json(usuario);
      } else {
        res.status(404).json({ error: "Usuário não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao buscar usuário por ID:", error);
      res.status(500).json({ error: "Erro ao buscar usuário por ID" });
    }
  }

  /**
   * Atualiza um usuário existente por ID
   * @param req Request com o ID do usuário a ser atualizado e os novos dados
   * @param res Response para enviar a resposta HTTP
   */
  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const novosDadosUsuario = req.body;
    try {
      const usuarioAtualizado = await UserModel.update(novosDadosUsuario, {
        where: { id_usuario: id },
        returning: true,
      });
      if (usuarioAtualizado[0] === 1) {
        res.status(200).json(usuarioAtualizado[1][0]);
      } else {
        res.status(404).json({ error: "Usuário não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao atualizar usuário por ID:", error);
      res.status(500).json({ error: "Erro ao atualizar usuário por ID" });
    }
  }

  /**
   * Exclui um usuário por ID
   * @param req Request com o ID do usuário a ser excluído
   * @param res Response para enviar a resposta HTTP
   */
  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const usuarioExcluido = await UserModel.destroy({
        where: { id_usuario: id },
      });
      if (usuarioExcluido === 1) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "Usuário não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao excluir usuário por ID:", error);
      res.status(500).json({ error: "Erro ao excluir usuário por ID" });
    }
  }
}

export default new UserController();
