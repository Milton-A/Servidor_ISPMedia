---

## Configuração e Migração das Tabelas com Sequelize

### Passo 1: Gerar as Migrations

Execute os seguintes comandos para gerar as migrations necessárias:

```bash
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
```

### Passo 2: Criar Alter Tables

Use os comandos a seguir para gerar as migrations de alteração para adicionar chaves estrangeiras às tabelas:

```bash
npx sequelize-cli migration:generate --name add-foreign-key-to-grupo_media
npx sequelize-cli migration:generate --name add-foreign-keys-to-midia_compositor
npx sequelize-cli migration:generate --name add-foreign-keys-to-midia_artista
npx sequelize-cli migration:generate --name add-foreign-keys-to-midia_album
npx sequelize-cli migration:generate --name add-foreign-keys-to-legendas
npx sequelize-cli migration:generate --name add-foreign-keys-to-editora
npx sequelize-cli migration:generate --name add-foreign-keys-to-midia
npx sequelize-cli migration:generate --name add-foreign-keys-to-concerto
npx sequelize-cli migration:generate --name add-foreign-keys-to-criticas
npx sequelize-cli migration:generate --name add-foreign-keys-to-grupo_usuario
npx sequelize-cli migration:generate --name add-foreign-keys-to-partilha
npx sequelize-cli migration:generate --name add-foreign-key-to-perfil_usuario
npx sequelize-cli migration:generate --name add-foreign-key-to-notificacoes
npx sequelize-cli migration:generate --name add-foreign-keys-to-grupo_media
npx sequelize-cli migration:generate --name add-foreign-keys-to-playlist
npx sequelize-cli migration:generate --name add-foreign-keys-to-artista 
```

### Passo 3: Criar a Base de Dados

Antes de migrar as tabelas, certifique-se de criar a base de dados executando o comando:

```bash
npx sequelize-cli db:create
```

### Passo 4: Migrar as Tabelas

Aplique as migrations para criar as tabelas no banco de dados:

```bash
npx sequelize-cli db:migrate
```

---
