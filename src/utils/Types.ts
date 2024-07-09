export type LegendaDTO = {
  id_legendas?: number;
  arquivo: string;
  estado: boolean;
};

export type MidiaDTO = {
  id_midia?: number;
  titulo: string;
  id_legenda: number;
  id_genero_media: number;
  id_tipo_media: number;
  duracao: string;
  arquivo: string;
  formato_media: string;
  tamanho: string;
  data: string;
  id_perfil_usuario: number;
  estado: boolean;
  imagem?: Buffer;
  descricao: string;
  visibilidade: string;
};
