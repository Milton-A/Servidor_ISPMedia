import { Request, Response } from "express";
import UserProfile from "../models/UserProfile";
import bcrypt from "bcrypt";
const saltRounds = 10;

interface AuthenticatedRequest extends Request {
  user?: { id: string; username: string };
}

const checkPassword = async (senha: string, hash: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(senha, hash, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

const generatePassword = (senha: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(senha, saltRounds, (err, hash) => {
      if (err) reject(err);
      resolve(hash);
    });
  });
};

class UserProfileController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const novoPerfil = req.body;
      novoPerfil.senha = await generatePassword(novoPerfil.senha);

      const perfilCriado = await UserProfile.create(novoPerfil);
      res.status(201).json(perfilCriado);
    } catch (error) {
      console.error("Erro ao criar perfil de usuário:", error);
      res.status(500).json({ error: "Erro ao criar perfil de usuário" });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const perfis: UserProfile[] = await UserProfile.findAll();
      res.status(200).json(perfis);
    } catch (error) {
      console.error("Erro ao listar perfis de usuários:", error);
      res.status(500).json({ error: "Erro ao listar perfis de usuários" });
    }
  }

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

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const novosDadosPerfil = req.body;
    try {
      const [updatedCount, updatedProfiles] = await UserProfile.update(
        novosDadosPerfil,
        {
          where: { id_perfil_usuario: id },
          returning: true,
        }
      );
      if (updatedCount === 1) {
        res.status(200).json(updatedProfiles[0]);
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

  async login(req: Request, res: Response): Promise<void> {
    const { username, senha } = req.body;
    try {
      const user: UserProfile | null = await UserProfile.findOne({
        where: { username },
      });
      if (!user) {
        res.status(401).json({ error: "Credenciais inválidas" });
        return; // Exit function after sending response
      }

      const isPasswordValid = await checkPassword(senha, user.senha);

      if (!user) {
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
