# Projeto Web Básico

Um projeto web profissional estruturado com HTML, CSS e JavaScript.

## 📁 Estrutura do Projeto

```
projeto/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos CSS
├── js/
│   └── script.js      # JavaScript
├── img/               # Imagens do projeto
├── assets/            # Recursos adicionais (fontes, ícones, etc)
├── server.py          # Servidor web Python
└── README.md          # Este arquivo
```

## 🚀 Como Executar

### Opção 1: Servidor Python (Replit)
O servidor já está configurado e rodando automaticamente na porta 5000.

### Opção 2: Servidor Python Manual
```bash
python server.py
```

### Opção 3: Live Server (VS Code)
Instale a extensão "Live Server" e clique com o botão direito em `index.html`.

## 📋 Funcionalidades

- ✅ Navegação suave entre seções
- ✅ Design responsivo para mobile
- ✅ Formulário de contato funcional
- ✅ Animações ao scroll
- ✅ Cards informativos
- ✅ Estilo moderno com gradientes
- ✅ **Tema Escuro/Claro** - Alternância com um clique
- ✅ Preferência de tema salva no navegador
- ✅ Detecção automática de preferência do sistema

## 🎨 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização moderna com Flexbox e Grid
- **JavaScript** - Interatividade e animações
- **Python** - Servidor web simples

## 🌙 Tema Escuro

O projeto possui um sistema completo de tema escuro:

- **Alternar tema**: Clique no botão 🌙/☀️ no canto superior direito
- **Persistência**: Sua preferência é salva automaticamente no navegador
- **Detecção automática**: Se você nunca escolheu, usa a preferência do seu sistema
- **Transições suaves**: Animações ao alternar entre temas

### Cores do Tema Escuro

```css
[data-theme="dark"] {
  --text-color: #e4e4e4;
  --bg-color: #121212;
  --card-bg: #1e1e1e;
  --border-color: #333;
}
```

## 📝 Como Personalizar

1. **Cores**: Edite as variáveis CSS em `css/style.css`:
   ```css
   :root {
     --primary-color: #667eea;
     --secondary-color: #764ba2;
   }
   ```

2. **Conteúdo**: Modifique o texto diretamente em `index.html`

3. **Funcionalidades**: Adicione mais scripts em `js/script.js`

4. **Imagens**: Coloque suas imagens na pasta `img/`

5. **Tema**: Personalize as cores do tema escuro alterando as variáveis `[data-theme="dark"]`

## 🔧 Próximos Passos

- [ ] Adicionar mais páginas
- [ ] Integrar com backend real
- [ ] Adicionar banco de dados
- [ ] Implementar autenticação
- [ ] Deploy em produção

## 📄 Licença

Este projeto é livre para uso educacional e comercial.

---

**Desenvolvido com ❤️ para aprendizado**
