Passo 1: Gerar as Migrations
Execute os seguintes comandos para gerar as migrations:

npx sequelize-cli migration:generate --name create-tipo_media
npx sequelize-cli migration:generate --name create-formato_media
npx sequelize-cli migration:generate --name create-editora
npx sequelize-cli migration:generate --name create-artista
npx sequelize-cli migration:generate --name create-compositores
npx sequelize-cli migration:generate --name create-genero_media
npx sequelize-cli migration:generate --name create-midia
npx sequelize-cli migration:generate --name create-concerto
npx sequelize-cli migration:generate --name create-midia_artista
npx sequelize-cli migration:generate --name create-midia_compositor
npx sequelize-cli migration:generate --name create-legendas
npx sequelize-cli migration:generate --name create-midia_album
npx sequelize-cli migration:generate --name create-album
npx sequelize-cli migration:generate --name create-usuario
npx sequelize-cli migration:generate --name create-grupo
npx sequelize-cli migration:generate --name create-papel_usuario_grupo
npx sequelize-cli migration:generate --name create-perfil_usuario
npx sequelize-cli migration:generate --name create-partilha
npx sequelize-cli migration:generate --name create-notificacoes
npx sequelize-cli migration:generate --name create-criticas
npx sequelize-cli migration:generate --name create-radio
npx sequelize-cli migration:generate --name create-playlist
npx sequelize-cli migration:generate --name create-grupo_media
npx sequelize-cli migration:generate --name create-gupo_usuario

passo 2: criar as tabelas

npx sequelize-cli db:migrate  
 Passo 3: Criar as relações entre as tabelas
