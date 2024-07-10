import { Request, Response } from "express";
import Playlist from "../models/PlaylistModel";

class PlaylistController {
  /**
   * Cria uma nova playlist
   * @param req Request com os dados da playlist a ser criada
   * @param res Response para enviar a resposta HTTP
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const novaPlaylist = req.body;
      const playlistCriada = await Playlist.create(novaPlaylist);
      res.status(201).json({ data: playlistCriada });
    } catch (error) {
      console.error("Erro ao criar playlist:", error);
      res.status(500).json({ error: "Erro ao criar playlist" });
    }
  }

  /**
   * Lista todas as playlists
   * @param req Request com os parâmetros da requisição (opcional)
   * @param res Response para enviar a resposta HTTP
   */
  async list(req: Request, res: Response): Promise<void> {
    try {
      const playlists = await Playlist.findAll();
      res.status(200).json(playlists);
    } catch (error) {
      console.error("Erro ao listar playlists:", error);
      res.status(500).json({ error: "Erro ao listar playlists" });
    }
  }

  /**
   * Busca uma playlist por ID
   * @param req Request com o ID da playlist a ser buscada
   * @param res Response para enviar a resposta HTTP
   */
  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const playlist = await Playlist.findByPk(id);
      if (playlist) {
        res.status(200).json(playlist);
      } else {
        res.status(404).json({ error: "Playlist não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao buscar playlist por ID:", error);
      res.status(500).json({ error: "Erro ao buscar playlist por ID" });
    }
  }

  /**
   * Atualiza uma playlist por ID
   * @param req Request com o ID da playlist a ser atualizada e os novos dados
   * @param res Response para enviar a resposta HTTP
   */
  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const novosDadosPlaylist = req.body;
    try {
      const playlistAtualizada = await Playlist.update(
        { nome: novosDadosPlaylist.nome },
        {
          where: { id_playlist: id },
          returning: true,
        }
      );
      if (playlistAtualizada[0] === 1) {
        res.status(200).json(playlistAtualizada[1][0]);
      } else {
        res.status(404).json({ error: "Playlist não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao atualizar playlist por ID:", error);
      res.status(500).json({ error: "Erro ao atualizar playlist por ID" });
    }
  }

  /**
   * Exclui uma playlist por ID
   * @param req Request com o ID da playlist a ser excluída
   * @param res Response para enviar a resposta HTTP
   */
  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const playlistExcluida = await Playlist.destroy({
        where: { id_playlist: id },
      });
      if (playlistExcluida === 1) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "Playlist não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao excluir playlist por ID:", error);
      res.status(500).json({ error: "Erro ao excluir playlist por ID" });
    }
  }
}

export default new PlaylistController();
