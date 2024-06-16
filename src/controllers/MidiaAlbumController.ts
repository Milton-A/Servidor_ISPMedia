import { Request, Response } from "express";
import MidiaAlbum from "../models/MidiaAlbumModel";

class MidiaAlbumController {
  /**
   * Cria uma nova associação entre mídia e álbum
   * @param req Request com os dados da associação a ser criada
   * @param res Response para enviar a resposta HTTP
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const novaAssociacao = req.body;
      const associacaoCriada = await MidiaAlbum.create(novaAssociacao);
      res.status(201).json(associacaoCriada);
    } catch (error) {
      console.error("Erro ao criar associação:", error);
      res.status(500).json({ error: "Erro ao criar associação" });
    }
  }

  /**
   * Lista todas as associações entre mídia e álbum
   * @param req Request com os parâmetros da requisição (opcional)
   * @param res Response para enviar a resposta HTTP
   */
  async list(req: Request, res: Response): Promise<void> {
    try {
      const associacoes = await MidiaAlbum.findAll();
      res.status(200).json(associacoes);
    } catch (error) {
      console.error("Erro ao listar associações:", error);
      res.status(500).json({ error: "Erro ao listar associações" });
    }
  }

  /**
   * Busca uma associação entre mídia e álbum por ID
   * @param req Request com o ID da associação a ser buscada
   * @param res Response para enviar a resposta HTTP
   */
  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const associacao = await MidiaAlbum.findByPk(id);
      if (associacao) {
        res.status(200).json(associacao);
      } else {
        res.status(404).json({ error: "Associação não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao buscar associação por ID:", error);
      res.status(500).json({ error: "Erro ao buscar associação por ID" });
    }
  }

  /**
   * Atualiza uma associação existente entre mídia e álbum por ID
   * @param req Request com o ID da associação a ser atualizada e os novos dados
   * @param res Response para enviar a resposta HTTP
   */
  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const novosDadosAssociacao = req.body;
    try {
      const associacaoAtualizada = await MidiaAlbum.update(
        novosDadosAssociacao,
        {
          where: { id_midia_album: id },
          returning: true,
        }
      );
      if (associacaoAtualizada[0] === 1) {
        res.status(200).json(associacaoAtualizada[1][0]);
      } else {
        res.status(404).json({ error: "Associação não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao atualizar associação por ID:", error);
      res.status(500).json({ error: "Erro ao atualizar associação por ID" });
    }
  }

  /**
   * Exclui uma associação entre mídia e álbum por ID
   * @param req Request com o ID da associação a ser excluída
   * @param res Response para enviar a resposta HTTP
   */
  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const associacaoExcluida = await MidiaAlbum.destroy({
        where: { id_midia_album: id },
      });
      if (associacaoExcluida === 1) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "Associação não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao excluir associação por ID:", error);
      res.status(500).json({ error: "Erro ao excluir associação por ID" });
    }
  }
}

export default new MidiaAlbumController();
