import { Request, Response } from "express";
import GroupModel from "../models/groupModel";

export const getAllGroups = async (req: Request, res: Response) => {
  try {
    const allGroups: GroupModel[] = await GroupModel.findAll();
    return res.status(200).json(allGroups);
  } catch (error) {
    console.error("Erro ao buscar todos os grupos:", error);
    return res
      .status(500)
      .json({ message: "Erro ao buscar grupos", error: error });
  }
};

export const createGroup = async (req: Request, res: Response) => {
  try {
    const createdGroup: GroupModel = await GroupModel.create({ ...req.body });
    return res.status(200).json({ data: createdGroup });
  } catch (error) {
    console.error("Erro ao criar grupo:", error);
    return res
      .status(500)
      .json({ message: "Erro ao criar grupo", error: error });
  }
};

export const updateGroup = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await GroupModel.update({ ...req.body }, { where: { id } });
    const updatedGroup: GroupModel | null = await GroupModel.findByPk(id);
    return res.status(200).json(updatedGroup);
  } catch (error) {
    console.error("Erro ao atualizar grupo:", error);
    return res
      .status(500)
      .json({ message: "Erro ao atualizar grupo", error: error });
  }
};

export const deleteGroup = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedGroup: GroupModel | null = await GroupModel.findByPk(id);
    if (!deletedGroup) {
      return res
        .status(404)
        .json({ message: "Grupo não encontrado para exclusão" });
    }
    await GroupModel.destroy({ where: { id } });
    return res.status(200).json(deletedGroup);
  } catch (error) {
    console.error("Erro ao deletar grupo:", error);
    return res
      .status(500)
      .json({ message: "Erro ao deletar grupo", error: error });
  }
};

export const getGroupById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const group: GroupModel | null = await GroupModel.findByPk(id);
    if (!group) {
      return res.status(404).json({ message: "Grupo não encontrado" });
    }
    return res.status(200).json(group);
  } catch (error) {
    console.error("Erro ao buscar grupo por ID:", error);
    return res
      .status(500)
      .json({ message: "Erro ao buscar grupo por ID", error: error });
  }
};
