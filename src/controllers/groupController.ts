import { RequestHandler } from "express";
import GroupModel from "../models/groupModel";

export const getAllGroups: RequestHandler = async (req, res, next) => {
  const allGroups: GroupModel[] = await GroupModel.findAll();

  return res
    .status(200)
    .json({ message: "Consulta grupos concluidas", data: allGroups });
};

export const createGroup: RequestHandler = async (req, res, next) => {
  const createdGroup = await GroupModel.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Grupo criado com Sucesso!", data: createdGroup });
};

export const updateGroup: RequestHandler = async (req, res, next) => {
  const { id_grupo } = req.params;
  await GroupModel.update({ ...req.body }, { where: { id_grupo } });
  const updatedGroup: GroupModel | null = await GroupModel.findByPk(id_grupo);
  return res
    .status(200)
    .json({ message: "Pesquisa concluida com sucesso!", data: updatedGroup });
};

export const deleteGroup: RequestHandler = async (req, res, next) => {
  const { id_grupo } = req.params;
  const deletedGroup: GroupModel | null = await GroupModel.findByPk(id_grupo);

  await GroupModel.destroy({ where: { id_grupo } });
  return res
    .status(200)
    .json({ message: "Grupo eliminado com Sucesso!", data: deletedGroup });
};

export const getGroupById: RequestHandler = async (req, res, next) => {
  const { id_grupo } = req.params;
  const getedGroup: GroupModel | null = await GroupModel.findByPk(id_grupo);
  return res
    .status(200)
    .json({ message: "Pesquisa concluida com sucesso!", data: getedGroup });
};
