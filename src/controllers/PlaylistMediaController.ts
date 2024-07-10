import { Request, Response } from "express";
import PlaylistMedia from "../models/PlaylistMidiaModel";
import Playlist from "../models/PlaylistModel";
import Midia from "../models/MidiaModel";

type PlaylistMidia = {
  id_playlist_media: number;
  id_midia: number;
  id_playlist: number;
  playlist: {
    nome: string;
  };
};
class PlaylistMediaController {
  /**
   * Cria uma nova associação entre mídia e playlist
   * @param req Request com os dados da associação a ser criada
   * @param res Response para enviar a resposta HTTP
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const novaAssociacao = req.body;
      const associacaoCriada = await PlaylistMedia.bulkCreate(novaAssociacao);
      res.status(201).json({ data: associacaoCriada });
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
      const associacoes = await PlaylistMedia.findAll();
      res.status(200).json({ data: associacoes });
    } catch (error) {
      console.error("Erro ao listar associações de mídia e playlist:", error);
      res
        .status(500)
        .json({ error: "Erro ao listar associações de mídia e playlist" });
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
      const associacao = await PlaylistMedia.findByPk(id);
      if (associacao) {
        res.status(200).json({ data: associacao });
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
      const associacaoAtualizada = await PlaylistMedia.update(
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
  async getMidiaById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const playlists = await PlaylistMedia.findAll({
        where: { id_playlist: id },
        include: [
          {
            model: Midia,
            as: "midia",
            attributes: ["titulo"],
          },
          {
            model: Playlist,
            as: "playlist",
            attributes: ["nome"],
          },
        ],
      });
      if (playlists) {
        res.status(200).json({ data: playlists });
      } else {
        res.status(404).json({ error: "Grupo de usuário não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao buscar grupo de usuário por ID:", error);
      res.status(500).json(`${error}: Erro ao buscar grupo de usuário por ID`);
    }
  }
  async getUserById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const grupoUsuario = await PlaylistMedia.findAll({
        where: { id_perfil_usuario: id },
        include: [
          {
            model: Playlist,
            as: "playlist",
            attributes: ["nome"],
          },
        ],
      });
      const playlistsUnicas: { [key: string]: PlaylistMidia } = {};
      grupoUsuario.forEach((item) => {
        const playlistNome = item.dataValues.playlist.nome;
        if (!playlistsUnicas[playlistNome]) {
          playlistsUnicas[playlistNome] = {
            ...item.dataValues,
            playlist: item.dataValues.playlist,
            updatedAt: item.dataValues.updatedAt, // Ensure this is set
          };
        }
      });

      const resultadoFinal = Object.values(playlistsUnicas);

      if (grupoUsuario) {
        res.status(200).json({ data: resultadoFinal });
      } else {
        res.status(404).json({ error: "Grupo de usuário não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao buscar grupo de usuário por ID:", error);
      res.status(500).json(`${error}: Erro ao buscar grupo de usuário por ID`);
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
      const associacaoExcluida = await PlaylistMedia.destroy({
        where: { id_playlist_media: id },
      });
      if (associacaoExcluida === 1) {
        res.status(204).end();
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

export default new PlaylistMediaController();
