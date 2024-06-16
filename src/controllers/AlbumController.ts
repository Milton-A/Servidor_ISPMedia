import { Request, Response } from "express";
import Album from "../models/AlbumModel";

class AlbumController {
  /**
   * Cria um novo álbum
   * @param req Request com os dados do álbum a ser criado
   * @param res Response para enviar a resposta HTTP
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const novoAlbum = req.body;
      const albumCriado = await Album.create(novoAlbum);
      res
        .status(201)
        .json({ message: "Album criado com sucesso!", data: albumCriado });
    } catch (error) {
      console.error("Erro ao criar álbum:", error);
      res.status(500).json({ error: "Erro ao criar álbum" });
    }
  }

  /**
   * Lista todos os álbuns
   * @param req Request com os parâmetros da requisição (opcional)
   * @param res Response para enviar a resposta HTTP
   */
  async list(req: Request, res: Response): Promise<void> {
    try {
      const albuns: Album[] = await Album.findAll();
      res
        .status(200)
        .json({ message: "Albuns listados com sucesso!", data: albuns });
    } catch (error) {
      console.error("Erro ao listar álbuns:", error);
      res.status(500).json({ error: "Erro ao listar álbuns" });
    }
  }

  /**
   * Busca um álbum por ID
   * @param req Request com o ID do álbum a ser buscado
   * @param res Response para enviar a resposta HTTP
   */
  async findById(req: Request, res: Response): Promise<void> {
    const { id_album } = req.params;
    try {
      const album: Album | null = await Album.findByPk(id_album);
      if (album) {
        res
          .status(200)
          .json({ message: "Album encontrado com sucesso!", data: album });
      } else {
        res.status(404).json({ error: "Álbum não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao buscar álbum por ID:", error);
      res.status(500).json({ error: "Erro ao buscar álbum por ID" });
    }
  }

  /**
   * Atualiza um álbum existente por ID
   * @param req Request com o ID do álbum a ser atualizado e os novos dados
   * @param res Response para enviar a resposta HTTP
   */
  async update(req: Request, res: Response): Promise<void> {
    const { id_album } = req.params;
    const novosDadosAlbum: Album = req.body;
    try {
      const albumAtualizado = await Album.update(novosDadosAlbum, {
        where: { id_album: id_album },
        returning: true,
      });
      if (albumAtualizado[0] === 1) {
        res.status(200).json({
          message: "Album encontrado com sucesso!",
          data: albumAtualizado[1][0],
        });
      } else {
        res.status(404).json({ error: "Álbum não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao atualizar álbum por ID:", error);
      res.status(500).json({ error: "Erro ao atualizar álbum por ID" });
    }
  }

  /**
   * Exclui um álbum por ID
   * @param req Request com o ID do álbum a ser excluído
   * @param res Response para enviar a resposta HTTP
   */
  async delete(req: Request, res: Response): Promise<void> {
    const { id_album } = req.params;
    try {
      const deletedAlbum: Album | null = await Album.findByPk(id_album);
      const responseDestroy = await Album.destroy({
        where: { id_album: id_album },
      });
      if (responseDestroy === 1) {
        res.status(204).end();
      } else {
        res
          .status(404)
          .json({ error: "Álbum não encontrado", data: deletedAlbum });
      }
    } catch (error) {
      console.error("Erro ao excluir álbum por ID:", error);
      res.status(500).json({ error: "Erro ao excluir álbum por ID" });
    }
  }
}

export default new AlbumController();
