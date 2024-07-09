import { Request, Response } from "express";
import PlaylistUsuario from "../models/PlaylIstUsuarioModel";
import Playlist from "../models/PlaylistModel";
import UserProfile from "../models/UserProfile";

type PlaylistMidia = {
  id_playlist_usuario: number;
  id_perfil_usuario: number;
  id_playlist: number;
  playlist: {
    nome: string;
  };
};
class PlaylistUsuarioController {
  /**
   * Cria uma nova associação entre mídia e playlist
   * @param req Request com os dados da associação a ser criada
   * @param res Response para enviar a resposta HTTP
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const novasAssociacoes = req.body;

      const associacoesCriadas = await PlaylistUsuario.bulkCreate(
        novasAssociacoes
      );
      res.status(201).json({ data: associacoesCriadas });
    } catch (error) {
      console.error("Erro ao criar associação de mídia e playlist:", error);
      res
        .status(500)
        .json({ error: "Erro ao criar associação de mídia e playlist" });
    }
  }

  /**
   * Lista todas as associações entre mídia e playlist
   * @param req Request com os parâmetros da requisição (opcional)
   * @param res Response para enviar a resposta HTTP
   */
  async list(req: Request, res: Response): Promise<void> {
    try {
      const associacoes = await PlaylistUsuario.findAll();
      res.status(200).json({ data: associacoes });
    } catch (error) {
      console.error("Erro ao listar associações de usuario e playlist:", error);
      res
        .status(500)
        .json({ error: "Erro ao listar associações de usuario e playlist" });
    }
  }

  /**
   * Busca uma associação entre mídia e playlist por ID
   * @param req Request com o ID da associação a ser buscada
   * @param res Response para enviar a resposta HTTP
   */
  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const associacao = await PlaylistUsuario.findByPk(id);
      if (associacao) {
        res.status(200).json(associacao);
      } else {
        res.status(404).json({ error: "Associação não encontrada" });
      }
    } catch (error) {
      console.error(
        "Erro ao buscar associação de mídia e playlist por ID:",
        error
      );
      res.status(500).json({
        error: "Erro ao buscar associação de mídia e playlist por ID",
      });
    }
  }

  /**
   * Atualiza uma associação entre mídia e playlist por ID
   * @param req Request com o ID da associação a ser atualizada e os novos dados
   * @param res Response para enviar a resposta HTTP
   */
  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const novosDadosAssociacao = req.body;
    try {
      const associacaoAtualizada = await PlaylistUsuario.update(
        novosDadosAssociacao,
        {
          where: { id_playlist_media: id },
          returning: true,
        }
      );
      if (associacaoAtualizada[0] === 1) {
        res.status(200).json({ data: associacaoAtualizada[1][0] });
      } else {
        res.status(404).json({ error: "Associação não encontrada" });
      }
    } catch (error) {
      console.error(
        "Erro ao atualizar associação de mídia e playlist por ID:",
        error
      );
      res.status(500).json({
        error: "Erro ao atualizar associação de mídia e playlist por ID",
      });
    }
  }

  async getUsersPlaylist(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const playlistUsuarios = await PlaylistUsuario.findAll({
        where: { id_playlist: id },
        include: [
          {
            model: UserProfile,
            as: "perfil_usuario",
            attributes: ["id_perfil_usuario", "username"], // Atributos do perfil de usuário que deseja retornar
          },
        ],
      });

      if (playlistUsuarios) {
        res.status(200).json({ data: playlistUsuarios });
      } else {
        res.status(404).json({ error: "Usuários da playlist não encontrados" });
      }
    } catch (error) {
      console.error("Erro ao buscar usuários da playlist por ID:", error);
      res
        .status(500)
        .json({ error: "Erro ao buscar usuários da playlist por ID" });
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const playlistUsuario = await PlaylistUsuario.findAll({
        include: [
          {
            model: Playlist,
            as: "playlist",
            attributes: ["nome"],
          },
        ],
      });
      //   const playlistsUnicas: { [key: string]: PlaylistMidia } = {};
      //   playlistUsuario.forEach((item) => {
      //     const playlistNome = item.dataValues.playlist.nome;
      //     if (!playlistsUnicas[playlistNome]) {
      //       playlistsUnicas[playlistNome] = {
      //         ...item.dataValues,
      //         playlist: item.dataValues.playlist,
      //         updatedAt: item.dataValues.updatedAt, // Ensure this is set
      //       };
      //     }
      //   });

      //   const resultadoFinal = Object.values(playlistsUnicas);

      if (playlistUsuario) {
        res.status(200).json({ data: playlistUsuario });
      } else {
        res.status(404).json({ error: "Grupo de usuário não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao buscar playlist de usuário por ID:", error);
      res
        .status(500)
        .json(`${error}: Erro ao buscar playlist de usuário por ID`);
    }
  }
  /**
   * Exclui uma associação entre mídia e playlist por ID
   * @param req Request com o ID da associação a ser excluída
   * @param res Response para enviar a resposta HTTP
   */
  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const associacaoExcluida = await PlaylistUsuario.destroy({
        where: { id_playlist_usuario: id },
      });
      if (associacaoExcluida === 1) {
        res.status(204).json({ data: associacaoExcluida });
      } else {
        res.status(404).json({ error: "Associação não encontrada" });
      }
    } catch (error) {
      console.error(
        "Erro ao excluir associação de mídia e playlist por ID:",
        error
      );
      res.status(500).json({
        error: "Erro ao excluir associação de mídia e playlist por ID",
      });
    }
  }
}

export default new PlaylistUsuarioController();
