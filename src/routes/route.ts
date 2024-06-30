import express from "express";

import GroupRoutes from "./group/route";
import AlbumRoot from "./album/routes";
import ArtistaRoot from "./artista/routes";
import CompositoRoot from "./compositor/routes";
import GeneroRoot from "./generoMedia/routes";
import CriticaRoot from "./criticas/routes";
import EditoraRoot from "./editora/routes";
import GroupMidia from "./groupMedia/routes";
import groupUser from "./groupUser/routes";
import LegendaRoot from "./legenda/routes";
import MidiaRoot from "./midia/routes";
import MidiaAlbumRoot from "./midiaAlbum/routes";
import MidiaArtistaRoot from "./midiaArtista/routes";
import MidiaCompositorRoot from "./midiaCompositor/routes";
import NotificationsRoot from "./notifications/routes";
import NotificationsVisualizer from "./notificationsVisualizer/routes";
import PartilhaRoot from "./partilha/routes";
import PlaylistRoot from "./playlist/routes";
import PlaylistMidiaRoot from "./playlistMidia/routes";
import TipoMidiaRoot from "./tipoMidia/routes";
import UserRoot from "./user/routes";
import UserProfileRoot from "./userProfile/routes";
import PlaylistUsuarioRoot from "./PlaylistUsuario/routes";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Hello, world!");
});

routes.use("/group", GroupRoutes);
routes.use("/album", AlbumRoot);
routes.use("/artista", ArtistaRoot);
routes.use("/compositor", CompositoRoot);
routes.use("/genero", GeneroRoot);
routes.use("/critica", CriticaRoot);
routes.use("/editora", EditoraRoot);
routes.use("/groupMedia", GroupMidia);
routes.use("/groupUser", groupUser);
routes.use("/legenda", LegendaRoot);
routes.use("/midia", MidiaRoot);
routes.use("/midiaAlbum", MidiaAlbumRoot);
routes.use("/midiaArtista", MidiaArtistaRoot);
routes.use("/midiaCompositor", MidiaCompositorRoot);
routes.use("/notifications", NotificationsRoot);
routes.use("/notificationsVisualizer", NotificationsVisualizer);
routes.use("/partilha", PartilhaRoot);
routes.use("/playlist", PlaylistRoot);
routes.use("/playlistMidia", PlaylistMidiaRoot);
routes.use("/playlistUsuario", PlaylistUsuarioRoot);
routes.use("/tipoMidia", TipoMidiaRoot);
routes.use("/user", UserRoot);
routes.use("/userProfile", UserProfileRoot);

export default routes;
