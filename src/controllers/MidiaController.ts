import { Request, Response } from "express";
import Midia from "../models/MidiaModel";
import TipoMedia from "../models/TipoMediaModel";
import Legenda from "../models/LegendaModel";
import UserProfile from "../models/UserProfile";
import GeneroMedia from "../models/GeneroMediaModel";
import fs from "fs";
import path from "path";
import { comrpessMidia } from "../services/compress";

class MidiaController {
  /**
   * Cria uma nova mídia
   * @param req Request com os dados da mídia a ser criada
   * @param res Response para enviar a resposta HTTP
   */

  async create(req: Request, res: Response): Promise<void> {
    try {
      const novoArquivo = await comrpessMidia(
        req.file ? req.file.path : "Sem arquivo"
      );
      const {
        data: {
          titulo,
          id_legenda,
          id_genero_media,
          id_tipo_media,
          duracao,
          formato_media,
          tamanho,
          data,
          id_perfil_usuario,
          estado,
          descricao,
          visibilidade,
          imagem,
        },
      } = req.body;

      if (!imagem) {
        res.status(400).send("No image provided");
      }
      const matches = imagem.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
      if (!matches) {
        res.status(400).send("Invalid image format");
      }

      const imageBuffer = Buffer.from(matches[2], "base64");
      const novaMidia = await Midia.create({
        titulo,
        id_legenda,
        id_genero_media,
        id_tipo_media,
        duracao,
        formato_media,
        tamanho,
        data,
        id_perfil_usuario,
        estado,
        imagem: imageBuffer,
        descricao,
        visibilidade,
        arquivo: novoArquivo.split("/")[2],
      });

      res.status(201).json({ message: "Midias inserida", data: novaMidia });
    } catch (error) {
      console.error("Erro ao criar mídia:", error);
      res.status(500).json({ error: "Erro ao criar mídia" });
    }
  }

  /**
   * Lista todas as mídias
   * @param req Request com os parâmetros da requisição (opcional)
   * @param res Response para enviar a resposta HTTP
   */
  async list(req: Request, res: Response): Promise<void> {
    try {
      const midias = await Midia.findAll({
        include: [
          {
            model: TipoMedia,
            as: "tipoMedia",
          },
          {
            model: UserProfile,
            as: "perfilUsuario",
          },
          {
            model: Legenda,
            as: "legenda",
          },
          {
            model: GeneroMedia,
            as: "generoMedia",
          },
        ],
      });

      const midiasComImagensBase64 = midias.map((midia) => ({
        ...midia.toJSON(),
        imagem: midia.imagem.toString("base64"),
      }));

      res.status(200).json({
        message: "Mídias listadas com sucesso",
        data: midiasComImagensBase64,
      });
    } catch (error) {
      console.error("Erro ao listar mídias:", error);
      res.status(500).json({ error: "Erro ao listar mídias" });
    }
  }

  /**
   * Busca uma mídia por ID
   * @param req Request com o ID da mídia a ser buscada
   * @param res Response para enviar a resposta HTTP
   */
  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const midia = await Midia.findByPk(id);
      if (midia) {
        res.status(200).json(midia);
      } else {
        res.status(404).json({ error: "Mídia não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao buscar mídia por ID:", error);
      res.status(500).json({ error: "Erro ao buscar mídia por ID" });
    }
  }

  /**
   * Atualiza uma mídia por ID
   * @param req Request com o ID da mídia a ser atualizada e os novos dados
   * @param res Response para enviar a resposta HTTP
   */
  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const novosDadosMidia = req.body;
    try {
      const midiaAtualizada = await Midia.update(novosDadosMidia, {
        where: { id_midia: id },
        returning: true,
      });
      if (midiaAtualizada[0] === 1) {
        res.status(200).json(midiaAtualizada[1][0]);
      } else {
        res.status(404).json({ error: "Mídia não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao atualizar mídia por ID:", error);
      res.status(500).json({ error: "Erro ao atualizar mídia por ID" });
    }
  }

  async stream(req: Request, res: Response): Promise<void> {
    try {
      const { midia } = req.params;

      const videoPath = "output_dash/output_compressed.mp4";

      const videoFilePath = path.join("public/output_dash", midia);
      const stat = fs.statSync(videoFilePath);
      const fileSize = stat.size;

      const range = req.headers.range;
      if (range) {
        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

        const chunksize = end - start + 1;
        const file = fs.createReadStream(videoFilePath, { start, end });
        const head = {
          "Content-Range": `bytes ${start}-${end}/${fileSize}`,
          "Accept-Ranges": "bytes",
          "Content-Length": chunksize,
          "Content-Type": "video/mp4",
        };

        res.writeHead(206, head);
        file.pipe(res);
      } else {
        const head = {
          "Content-Length": fileSize,
          "Content-Type": "video/mp4",
        };
        res.writeHead(200, head);
        fs.createReadStream(videoFilePath).pipe(res);
      }
    } catch (err) {
      console.error("Error during streaming:", err);
      res.status(500).send("Server error");
    }
  }

  /**
   * Exclui uma mídia por ID
   * @param req Request com o ID da mídia a ser excluída
   * @param res Response para enviar a resposta HTTP
   */
  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const midiaExcluida = await Midia.destroy({
        where: { id_midia: id },
      });
      if (midiaExcluida === 1) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "Mídia não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao excluir mídia por ID:", error);
      res.status(500).json({ error: "Erro ao excluir mídia por ID" });
    }
  }
}

export default new MidiaController();
