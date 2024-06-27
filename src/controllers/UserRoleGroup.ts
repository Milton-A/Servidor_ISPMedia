import { Request, Response } from "express";
import PapelUsuarioGrupo from "../models/UserRoleGroupModel";

class PapelUsuarioGrupoController {
  /**
   * Cria um novo papel de usuário no grupo
   * @param req Request com os dados do papel a ser criado
   * @param res Response para enviar a resposta HTTP
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const novoPapelUsuarioGrupo = req.body;
      const papelUsuarioGrupoCriado = await PapelUsuarioGrupo.create(
        novoPapelUsuarioGrupo
      );
      res.status(201).json(papelUsuarioGrupoCriado);
    } catch (error) {
      console.error("Erro ao criar papel de usuário no grupo:", error);
      res.status(500).json(error);
    }
  }

  /**
   * Lista todos os papéis de usuários no grupo
   * @param req Request com os parâmetros da requisição (opcional)
   * @param res Response para enviar a resposta HTTP
   */
  async list(req: Request, res: Response): Promise<void> {
    try {
      const papeisUsuarioGrupo = await PapelUsuarioGrupo.findAll();
      res.status(200).json(papeisUsuarioGrupo);
    } catch (error) {
      console.error("Erro ao listar papéis de usuários no grupo:", error);
      res
        .status(500)
        .json(`${error}: Erro ao listar papéis de usuários no grupo`);
    }
  }

  /**
   * Busca um papel de usuário no grupo por ID
   * @param req Request com o ID do papel a ser buscado
   * @param res Response para enviar a resposta HTTP
   */
  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const papelUsuarioGrupo = await PapelUsuarioGrupo.findByPk(id);
      if (papelUsuarioGrupo) {
        res
          .status(200)
          .json({ message: "Papel encontrado", data: papelUsuarioGrupo });
      } else {
        res
          .status(404)
          .json({ error: "Papel de usuário no grupo não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao buscar papel de usuário no grupo por ID:", error);
      res
        .status(500)
        .json({ error: "Erro ao buscar papel de usuário no grupo por ID" });
    }
  }

  /**
   * Atualiza um papel de usuário no grupo existente por ID
   * @param req Request com o ID do papel a ser atualizado e os novos dados
   * @param res Response para enviar a resposta HTTP
   */
  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const novosDadosPapelUsuarioGrupo = req.body;
    try {
      const papelUsuarioGrupoAtualizado = await PapelUsuarioGrupo.update(
        novosDadosPapelUsuarioGrupo,
        {
          where: { id_papel_usuario_grupo: id },
          returning: true,
        }
      );
      if (papelUsuarioGrupoAtualizado[0] === 1) {
        res.status(200).json(papelUsuarioGrupoAtualizado[1][0]);
      } else {
        res
          .status(404)
          .json({ error: "Papel de usuário no grupo não encontrado" });
      }
    } catch (error) {
      console.error(
        "Erro ao atualizar papel de usuário no grupo por ID:",
        error
      );
      res
        .status(500)
        .json({ error: "Erro ao atualizar papel de usuário no grupo por ID" });
    }
  }

  /**
   * Exclui um papel de usuário no grupo por ID
   * @param req Request com o ID do papel a ser excluído
   * @param res Response para enviar a resposta HTTP
   */
  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const papelUsuarioGrupoExcluido = await PapelUsuarioGrupo.destroy({
        where: { id_papel_usuario_grupo: id },
      });
      if (papelUsuarioGrupoExcluido === 1) {
        res.status(204).end();
      } else {
        res
          .status(404)
          .json({ error: "Papel de usuário no grupo não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao excluir papel de usuário no grupo por ID:", error);
      res
        .status(500)
        .json({ error: "Erro ao excluir papel de usuário no grupo por ID" });
    }
  }
}

export default new PapelUsuarioGrupoController();
