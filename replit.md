# Projeto Web Full-Stack - Flask + PostgreSQL + Replit Auth

## Visão Geral
Aplicação web full-stack profissional com backend Flask, banco de dados PostgreSQL (SQLite como fallback), sistema de autenticação Replit Auth, múltiplas páginas e tema dark/light mode.

## Estado Atual
- ✅ Backend Flask configurado com SQLAlchemy ORM
- ✅ Banco de dados com modelos User, OAuth e Contact
- ✅ Sistema de autenticação Replit Auth integrado
- ✅ Proteção de rotas com decorator @require_login
- ✅ Múltiplas páginas: Home, Dashboard, Profile, About
- ✅ Templates Jinja2 com herança (base.html)
- ✅ Sistema de Tema Escuro/Claro com localStorage
- ✅ Botões de Login/Logout no header
- ✅ API endpoints (/api/health, /api/contact, /api/contacts)
- ✅ CORS habilitado para desenvolvimento
- ✅ ProxyFix para deployment no Replit

## Estrutura do Projeto

```
projeto/
├── app.py              - Configuração Flask e SQLAlchemy
├── main.py             - Entry point da aplicação
├── routes.py           - Rotas e endpoints da aplicação
├── models.py           - Modelos de banco de dados (User, OAuth, Contact)
├── replit_auth.py      - Blueprint de autenticação Replit
├── templates/          - Templates Jinja2
│   ├── base.html       - Template base com header/footer
│   ├── index.html      - Página inicial
│   ├── dashboard.html  - Dashboard (protegido)
│   ├── profile.html    - Perfil do usuário (protegido)
│   ├── about.html      - Página sobre
│   └── 403.html        - Página de erro de autenticação
├── static/
│   ├── css/
│   │   └── style.css   - Estilos com suporte a dark mode
│   └── js/
│       └── script.js   - JavaScript com tema toggle
├── .gitignore
├── pyproject.toml      - Dependências Python (uv)
├── uv.lock
└── README.md
```

## Tecnologias Utilizadas

### Backend
- **Flask 3.x** - Framework web Python
- **SQLAlchemy** - ORM para banco de dados
- **Flask-Login** - Gerenciamento de sessões
- **Flask-Dance** - Integração OAuth
- **PostgreSQL/SQLite** - Banco de dados

### Frontend
- **Jinja2** - Template engine
- **HTML5** - Estrutura semântica
- **CSS3** - Variáveis CSS, Flexbox, Grid, animações
- **JavaScript** - ES6+, localStorage, DOM manipulation

### Autenticação
- **Replit Auth** - OAuth com Google, GitHub, X, Apple
- **PyJWT** - Token handling
- **Flask-CORS** - Cross-origin requests

## Arquitetura

### Frontend
- Página única (SPA-style) com múltiplas seções
- Navegação sticky no topo
- Seções: Hero, Sobre, Contato
- Design mobile-first responsivo

### Funcionalidades JavaScript
1. **Sistema de Tema Escuro** - Alternância entre tema claro e escuro com localStorage
2. Smooth scrolling para navegação
3. Animações ao scroll usando Intersection Observer
4. Formulário de contato com validação
5. Console logging para debug
6. Atualização automática do ano no footer
7. Detecção de preferência de tema do sistema (prefers-color-scheme)

### Estilos CSS
- **Variáveis CSS para temas** - Suporte completo a tema claro e escuro
- Grid e Flexbox para layouts
- Transições e animações suaves
- Media queries para responsividade
- Gradientes lineares modernos
- Tema escuro com cores otimizadas (#121212, #1e1e1e)
- Botão de alternância de tema com animação de rotação

## Como Funciona o Servidor
O arquivo `server.py` cria um servidor HTTP simples que:
- Serve arquivos estáticos na porta 5000
- Desabilita cache para facilitar desenvolvimento
- Usa binding 0.0.0.0 para funcionar no Replit

## Configuração do Replit

### Workflows
- **flask-server**: Executa `python main.py`
- **Porta**: 5000 (webview)
- **Módulo**: python-3.11

### Variáveis de Ambiente Necessárias
- `SESSION_SECRET` - Secret key para sessões Flask (✅ configurado)
- `REPL_ID` - ID do Repl (✅ auto-configurado)
- `DATABASE_URL` - URL do PostgreSQL (opcional, usa SQLite como fallback)
- `ISSUER_URL` - URL do OAuth issuer (default: https://replit.com/oidc)

### Integrações Instaladas
- `python_database==1.0.0` - Suporte a PostgreSQL
- `python_log_in_with_replit==1.0.0` - Sistema de autenticação

## Próximos Passos Sugeridos
- [ ] Migrar de SQLite para PostgreSQL em produção
- [ ] Implementar sistema de perfis de usuário editáveis
- [ ] Adicionar upload de imagem de perfil
- [ ] Criar sistema de mensagens entre usuários
- [ ] Implementar dashboard com dados reais
- [ ] Adicionar testes automatizados

## Modificações Recentes
- **12/11/2025 18:00**: Estrutura inicial HTML/CSS/JS criada
- **12/11/2025 20:30**: Sistema de tema escuro/claro implementado
- **12/11/2025 21:00**: Migração completa para Flask full-stack:
  - Backend Flask com SQLAlchemy ORM
  - Modelos de banco: User, OAuth, Contact
  - Replit Auth integrado com OAuth
  - Múltiplas páginas com templates Jinja2
  - Rotas protegidas com @require_login
  - API endpoints REST
  - ProxyFix para Replit deployment
  - Botões de login/logout no header
  - Páginas de dashboard e perfil com dados do usuário
