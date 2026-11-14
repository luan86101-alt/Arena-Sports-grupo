# ARENA SPORTS — Projeto Front-End

> Portal esportivo acadêmico feito com HTML5, CSS3 e JavaScript puro.

## Objetivo

Desenvolver um site completo, responsivo e organizado para a disciplina de Desenvolvimento Web (Front-End), aplicando HTML5 semântico, CSS3 reutilizável, JavaScript apenas onde necessário, formulários com validação nativa e recursos multimídia.

## Descrição geral

O **ARENA SPORTS** apresenta um portal esportivo que reúne clubes, competições, jogos e classificações, mostrando a fonte e a hora de atualização de cada dado. O site de apresentação tem 10 páginas interligadas; o portal em si (protótipo interativo) está incorporado por `iframe` na página **Projetos**.

> **Aviso:** o projeto é gratuito e **não vende nada**. A página *Serviços* lista os recursos do portal e a página *Orçamento* (exigida pelo professor) recebe sugestões de recursos, sempre a custo R$ 0,00. Por ser um projeto Front-End acadêmico, **os formulários não enviam nem armazenam dados em servidor**.

## Tecnologias utilizadas

- HTML5 (elementos semânticos: `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `footer`)
- CSS3 (variáveis, grid, flexbox, media queries) em um único arquivo externo
- JavaScript puro (sem frameworks) — finalidades documentadas em `js/script.js`
- Git e GitHub para versionamento

## Estrutura de diretórios

```
projeto_frontend/
├── index.html          Página inicial
├── sobre.html          Apresentação do projeto
├── servicos.html       Recursos gratuitos do portal
├── projetos.html       Portal em iframe e módulos
├── galeria.html        Capturas, vídeo e áudio
├── noticias.html       Novidades do projeto
├── equipe.html         Equipe (campos a preencher)
├── faq.html            Perguntas frequentes
├── contato.html        Formulário de contato
├── orcamento.html      Formulário de solicitação (sem custo)
├── css/style.css       Estilos reutilizados por todas as páginas
├── js/script.js        Menu, feedback de formulários, contador, filtro
├── img/                logo.png, favicon.png, capturas do portal, poster do vídeo
├── assets/
│   ├── audio/          apito.mp3 e apito.wav
│   ├── video/          vinheta.mp4 e vinheta.webm
│   └── outros/         arena_sports_app.html (portal exibido no iframe)
└── docs/               README, planejamento, diário de bordo, relatório
```

## Como executar o projeto

1. Instale o [VS Code](https://code.visualstudio.com/).
2. Abra a pasta `projeto_frontend` (**Arquivo > Abrir Pasta**).
3. Instale a extensão **Live Server** e clique em **Go Live** com `index.html` aberto.
   - Alternativa: dê dois cliques em `index.html` para abrir no navegador.
4. O portal da página **Projetos** consulta APIs externas (TheSportsDB e Wikipédia); é necessária conexão com a internet para ele carregar dados.

## Recursos externos (documentação)

| Recurso | Uso | Observação |
|---|---|---|
| TheSportsDB (`thesportsdb.com`) | Dados de clubes e competições no portal em iframe | Consultado pelo portal em tempo de execução |
| Wikipédia (`wikipedia.org`) | Resumos de história e títulos no portal | Consultada pelo portal em tempo de execução |
| CBF, FIFA | Links de referência na página Notícias | Apenas links |

Todos os demais recursos (logo, capturas do portal, vídeo, áudio) foram **criados para este projeto** e ficam em pastas locais. Nenhuma fonte tipográfica externa é usada.

## Validação W3C

Valide cada página em <https://validator.w3.org/> (aba *Validate by File Upload*). Para o CSS, use <https://jigsaw.w3.org/css-validator/>. O arquivo `assets/outros/arena_sports_app.html` é o portal completo e **não** faz parte da validação das 10 páginas.

## Integrantes do grupo

| Nome | RA | Função | E-mail |
|---|---|---|---|
| [preencher] | [preencher] | [preencher] | [preencher] |
| [preencher] | [preencher] | [preencher] | [preencher] |
| [preencher] | [preencher] | [preencher] | [preencher] |
| [preencher] | [preencher] | [preencher] | [preencher] |
| [preencher] | [preencher] | [preencher] | [preencher] |

- **Professor(a):** [preencher]
- **Disciplina / Instituição:** [preencher]

## Link do GitHub

**Repositório:** [colar aqui o endereço real do repositório do grupo]

---

## Git e GitHub: passo a passo

### 1. Instalar e configurar o Git (uma vez por computador)

```bash
git --version
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@exemplo.com"
```

### 2. Criar o repositório no GitHub

1. Entre em <https://github.com> e clique em **New repository**.
2. Dê um nome (ex.: `arena-sports-frontend`), escolha *Public* ou *Private* e **não** marque para criar README (o projeto já tem um).
3. Copie a URL do repositório criado.

### 3. Inicializar e enviar o projeto (feito por um integrante)

```bash
cd projeto_frontend
git init
git add .
git commit -m "Primeira versão do projeto"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

### 4. Trabalho colaborativo

1. O dono do repositório convida os colegas em **Settings > Collaborators**.
2. Cada colega clona o projeto:
   ```bash
   git clone URL_DO_REPOSITORIO
   cd nome-do-repositorio
   ```
3. Cada pessoa cria uma branch para a sua tarefa:
   ```bash
   git checkout -b feature/nome-da-tarefa
   ```
4. Depois de editar, registre e envie:
   ```bash
   git add .
   git commit -m "Descreve o que foi feito"
   git push -u origin feature/nome-da-tarefa
   ```
5. No GitHub, abra um **Pull Request**, peça revisão de um colega e faça o *merge* na `main`.
6. Antes de começar a trabalhar de novo, atualize a sua cópia:
   ```bash
   git checkout main
   git pull
   ```

### 5. Principais comandos

| Comando | Para que serve |
|---|---|
| `git status` | Mostra o que mudou |
| `git add arquivo` / `git add .` | Prepara arquivos para o commit |
| `git commit -m "mensagem"` | Registra uma versão |
| `git log --oneline` | Lista o histórico |
| `git diff` | Mostra as diferenças ainda não preparadas |
| `git branch` | Lista as branches |
| `git checkout -b nome` | Cria e muda para uma branch |
| `git checkout nome` | Muda de branch |
| `git merge nome` | Junta uma branch na atual |
| `git pull` | Baixa e integra as mudanças do GitHub |
| `git push` | Envia seus commits ao GitHub |
| `git clone URL` | Copia um repositório para o seu computador |

**Dicas:** faça commits pequenos e com mensagens claras; sempre faça `git pull` antes de `git push`; se aparecer conflito, o VS Code mostra as opções *Accept Current / Incoming / Both*.
