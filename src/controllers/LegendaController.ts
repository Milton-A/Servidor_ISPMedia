import { Request, Response } from "express";
import Legenda from "../models/LegendaModel";
import { LegendaDTO } from "../utils/Types";
class LegendaController {
  /**
   * Cria uma nova legenda
   * @param req Request com os dados da legenda a ser criada
   * @param res Response para enviar a resposta HTTP
   */
  async create(req: Request, res: Response): Promise<void> {
    try {
      const novaLegenda: LegendaDTO = {
        estado: true,
        arquivo: "",
      };
      novaLegenda.arquivo = req.file?.path ? req.file?.path : "Sem arquivo";

      const legendaCriada = await Legenda.create({
        arquivo: novaLegenda.arquivo,
        estado: novaLegenda.estado,
      });
      res
        .status(201)
        .json({ message: "Legenda inserida", data: legendaCriada });
    } catch (error) {
      console.error("Erro ao criar legenda:", error);
      res.status(500).json({ error: "Erro ao criar legenda" });
    }
  }

  /**
   * Lista todas as legendas
   * @param req Request com os parâmetros da requisição (opcional)
   * @param res Response para enviar a resposta HTTP
   */
  async list(req: Request, res: Response): Promise<void> {
    try {
      const legendas = await Legenda.findAll();
      res.status(200).json({ message: "Legendas Listadas", data: legendas });
    } catch (error) {
      console.error("Erro ao listar legendas:", error);
      res.status(500).json({ error: "Erro ao listar legendas" });
    }
  }

  /**
   * Busca uma legenda por ID
   * @param req Request com o ID da legenda a ser buscada
   * @param res Response para enviar a resposta HTTP
   */
  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const legenda = await Legenda.findByPk(id);
      if (legenda) {
        res.status(200).json(legenda);
      } else {
        res.status(404).json({ error: "Legenda não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao buscar legenda por ID:", error);
      res.status(500).json({ error: "Erro ao buscar legenda por ID" });
    }
  }

  /**
   * Atualiza uma legenda existente por ID
   * @param req Request com o ID da legenda a ser atualizada e os novos dados
   * @param res Response para enviar a resposta HTTP
   */
  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const novosDadosLegenda = req.body;
    try {
      const legendaAtualizada = await Legenda.update(novosDadosLegenda, {
        where: { id_legendas: id },
        returning: true,
      });
      if (legendaAtualizada[0] === 1) {
        res.status(200).json(legendaAtualizada[1][0]);
      } else {
        res.status(404).json({ error: "Legenda não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao atualizar legenda por ID:", error);
      res.status(500).json({ error: "Erro ao atualizar legenda por ID" });
    }
  }

  /**
   * Exclui uma legenda por ID
   * @param req Request com o ID da legenda a ser excluída
   * @param res Response para enviar a resposta HTTP
   */
  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const legendaExcluida = await Legenda.destroy({
        where: { id_legendas: id },
      });
      if (legendaExcluida === 1) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "Legenda não encontrada" });
      }
    } catch (error) {
      console.error("Erro ao excluir legenda por ID:", error);
      res.status(500).json({ error: "Erro ao excluir legenda por ID" });
    }
  }
}

export default new LegendaController();
