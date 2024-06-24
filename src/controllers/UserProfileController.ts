import { Request, Response } from "express";
import UserProfile from "../models/UserProfile";
import bcrypt from "bcrypt";
const saltRounds = 10;

interface AuthenticatedRequest extends Request {
  user?: { id: string; username: string };
}

const checkPassword = async (senha: string, hash: string) => {
  try {
    const result = await bcrypt.compare(senha, hash);
    // Aqui 'result' é do tipo 'boolean'
    if (result) {
      console.log("As senhas coincidem!");
    } else {
      console.log("As senhas não coincidem!");
    }
    return result;
  } catch (error) {
    console.error("Erro ao comparar senhas:", error);
  }
};

const generatePassword = (senha: string) => {
  bcrypt.hash(senha, saltRounds, (hash) => {
    return hash;
  });
};

class UserProfileController {
  /**
   * Cria um novo perfil de usuário
   * @param req Request com os dados do perfil de usuário a ser criado
   * @param res Response para enviar a resposta HTTP
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const novoPerfil = req.body;
      novoPerfil.senha = generatePassword(novoPerfil.senha);

      const perfilCriado = await UserProfile.create(novoPerfil);
      res.status(201).json(perfilCriado);
    } catch (error) {
      console.error("Erro ao criar perfil de usuário:", error);
      res.status(500).json({ error: "Erro ao criar perfil de usuário" });
    }
  }

  /**
   * Lista todos os perfis de usuários
   * @param req Request com os parâmetros da requisição (opcional)
   * @param res Response para enviar a resposta HTTP
   */
  async list(req: Request, res: Response): Promise<void> {
    try {
      const perfis: UserProfile[] = await UserProfile.findAll();
      res.status(200).json(perfis);
    } catch (error) {
      console.error("Erro ao listar perfis de usuários:", error);
      res.status(500).json({ error: "Erro ao listar perfis de usuários" });
    }
  }

  /**
   * Busca um perfil de usuário por ID
   * @param req Request com o ID do perfil de usuário a ser buscado
   * @param res Response para enviar a resposta HTTP
   */
  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const perfil = await UserProfile.findByPk(id);
      if (perfil) {
        res.status(200).json(perfil);
      } else {
        res.status(404).json({ error: "Perfil de usuário não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao buscar perfil de usuário por ID:", error);
      res
        .status(500)
        .json({ error: "Erro ao buscar perfil de usuário por ID" });
    }
  }

  /**
   * Atualiza um perfil de usuário existente por ID
   * @param req Request com o ID do perfil de usuário a ser atualizado e os novos dados
   * @param res Response para enviar a resposta HTTP
   */
  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const novosDadosPerfil = req.body;
    try {
      const perfilAtualizado = await UserProfile.update(novosDadosPerfil, {
        where: { id_perfil_usuario: id },
        returning: true,
      });
      if (perfilAtualizado[0] === 1) {
        res.status(200).json(perfilAtualizado[1][0]);
      } else {
        res.status(404).json({ error: "Perfil de usuário não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao atualizar perfil de usuário por ID:", error);
      res
        .status(500)
        .json({ error: "Erro ao atualizar perfil de usuário por ID" });
    }
  }

  /**
   * Exclui um perfil de usuário por ID
   * @param req Request com o ID do perfil de usuário a ser excluído
   * @param res Response para enviar a resposta HTTP
   */
  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const perfilExcluido = await UserProfile.destroy({
        where: { id_perfil_usuario: id },
      });
      if (perfilExcluido === 1) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "Perfil de usuário não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao excluir perfil de usuário por ID:", error);
      res
        .status(500)
        .json({ error: "Erro ao excluir perfil de usuário por ID" });
    }
  }

  /**
   * Realiza o login do usuário
   * @param req Request com as credenciais do usuário
   * @param res Response para enviar a resposta HTTP
   */
  async login(req: Request, res: Response): Promise<void> {
    const { username, senha } = req.body;
    try {
      const user: UserProfile | null = await UserProfile.findOne({
        where: { username },
      });
      if (!user) {
        res.status(401).json({ error: "Credenciais inválidas" });
      }

      const isPasswordValid = checkPassword(senha, user ? user.senha : "");

      if (!isPasswordValid) {
        res.status(401).json({ error: "Credenciais inválidas" });
      } else {
        res.status(200).json({ status: 200, message: "OK", data: user });
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      res.status(500).json({ error: "Erro ao realizar login" });
    }
  }
}

export default new UserProfileController();
