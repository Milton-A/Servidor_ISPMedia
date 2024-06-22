import { Request, Response } from "express";
import GrupoUsuario from "../models/GroupUserModel";

class GrupoUsuarioController {
  /**
   * Cria um novo grupo de usuário
   * @param req Request com os dados do grupo de usuário a ser criado
   * @param res Response para enviar a resposta HTTP
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const novoGrupoUsuario = req.body;
      const grupoUsuarioCriado = await GrupoUsuario.create(novoGrupoUsuario);
      res.status(201).json(grupoUsuarioCriado);
    } catch (error) {
      console.error("Erro ao criar grupo de usuário:", error);
      res.status(500).json({ error: "Erro ao criar grupo de usuário" });
    }
  }

  /**
   * Lista todos os grupos de usuários
   * @param req Request com os parâmetros da requisição (opcional)
   * @param res Response para enviar a resposta HTTP
   */
  async list(req: Request, res: Response): Promise<void> {
    try {
      const gruposUsuarios = await GrupoUsuario.findAll();
      res.status(200).json(gruposUsuarios);
    } catch (error) {
      console.error("Erro ao listar grupos de usuários:", error);
      res.status(500).json({ error: "Erro ao listar grupos de usuários" });
    }
  }

  /**
   * Busca um grupo de usuário por ID
   * @param req Request com o ID do grupo de usuário a ser buscado
   * @param res Response para enviar a resposta HTTP
   */
  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const grupoUsuario = await GrupoUsuario.findByPk(id);
      if (grupoUsuario) {
        res.status(200).json(grupoUsuario);
      } else {
        res.status(404).json({ error: "Grupo de usuário não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao buscar grupo de usuário por ID:", error);
      res.status(500).json({ error: "Erro ao buscar grupo de usuário por ID" });
    }
  }

  /**
   * Atualiza um grupo de usuário existente por ID
   * @param req Request com o ID do grupo de usuário a ser atualizado e os novos dados
   * @param res Response para enviar a resposta HTTP
   */
  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const novosDadosGrupoUsuario = req.body;
    try {
      const grupoUsuarioAtualizado = await GrupoUsuario.update(
        novosDadosGrupoUsuario,
        {
          where: { id_grupo_usuario: id },
          returning: true,
        }
      );
      if (grupoUsuarioAtualizado[0] === 1) {
        res.status(200).json(grupoUsuarioAtualizado[1][0]);
      } else {
        res.status(404).json({ error: "Grupo de usuário não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao atualizar grupo de usuário por ID:", error);
      res
        .status(500)
        .json({ error: "Erro ao atualizar grupo de usuário por ID" });
    }
  }

  /**
   * Exclui um grupo de usuário por ID
   * @param req Request com o ID do grupo de usuário a ser excluído
   * @param res Response para enviar a resposta HTTP
   */
  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const grupoUsuarioExcluido = await GrupoUsuario.destroy({
        where: { id_grupo_usuario: id },
      });
      if (grupoUsuarioExcluido === 1) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "Grupo de usuário não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao excluir grupo de usuário por ID:", error);
      res
        .status(500)
        .json({ error: "Erro ao excluir grupo de usuário por ID" });
    }
  }
}

export default new GrupoUsuarioController();