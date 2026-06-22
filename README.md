# 🕊️ PeaceNet Backend

API REST da rede social pela paz mundial — conectando governos, ONGs, ativistas e cidadãos em torno de um único objetivo: **paz mundial e fim dos conflitos armados**.

## 🚀 Tecnologias

- Node.js + TypeScript
- Express
- PostgreSQL 18
- JWT (autenticação)
- bcryptjs (criptografia de senha)
- Nodemon (hot reload)

## 📁 Arquitetura

src/

├── config/         # Banco de dados e migrations

├── entities/       # Interfaces TypeScript

├── repositories/   # Acesso ao banco de dados

├── services/       # Regras de negócio

├── controllers/    # Handlers das requisições

├── middlewares/    # Autenticação JWT

└── routes/         # Definição das rotas

## ⚙️ Como rodar

```bash
# Clone o repositório
git clone https://github.com/EDNARDOPPEIXOTO99/peacenet-backend.git

# Instale as dependências
npm install

# Configure o .env
cp .env.example .env
# edite o .env com suas credenciais

# Rode o servidor
npm run dev
```

## 📡 Rotas disponíveis

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| GET | / | Status da API | ❌ |
| POST | /api/users/register | Cadastro de usuário | ❌ |
| POST | /api/users/login | Login + JWT | ❌ |
| GET | /api/users/profile/:id | Perfil do usuário | ✅ |
| GET | /api/users | Listar usuários | ✅ |

OBS.: 

❌ Não precisa de token — rotas públicas, qualquer um acessa (register, login, status)

✅ Precisa de token — rotas protegidas, só acessa quem está logado (perfil, listar usuários)

## 🌍 Módulos da PeaceNet

- **PAZ** — conflitos, disputas, acordos, governos, ONU
- **SOLIDARIEDADE** — vaquinhas, doações, campanhas humanitárias
- **RELAÇÕES_HUMANAS** — raças, gêneros, culturas, conexões

## 🏆 Hackathon

Projeto desenvolvido para o **Hackathon Fullstack — Trilha PU12**
TIC-Hub | Programa Residência em TIC 12 | UECE + IFCE + Softex + MCTI

---

Desenvolvido por **Ednardo Peixoto** 🕊️