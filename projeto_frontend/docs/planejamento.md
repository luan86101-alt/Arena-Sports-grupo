# Planejamento — ARENA SPORTS

## 1. Objetivo do site em uma frase
Reunir clubes, competições, jogos e classificações em um portal esportivo que mostra a fonte e a data de atualização de cada informação.

## 2. Problema ou necessidade
O torcedor costuma procurar resultados, tabelas e informações de clubes em vários sites diferentes, muitas vezes sem saber de onde veio o dado ou se ele está atualizado. O ARENA SPORTS concentra essas informações em um só lugar e identifica a origem de cada uma.

## 3. O que o visitante poderá fazer
- Conhecer o projeto e o portal;
- Ver o portal em funcionamento (iframe) e buscar clubes;
- Conhecer os recursos gratuitos do portal e sugerir novos pela página de orçamento (sem custo e sem vendas);
- Ver imagens, vídeo e áudio;
- Ler novidades, perguntas frequentes e ver como a equipe trabalha;
- Enviar uma mensagem pelo formulário de contato (sem envio real).

## 4. Conteúdos oferecidos
Texto institucional, recursos do portal, módulos do projeto, galeria de capturas, vídeo e áudio, novidades, FAQ, dois formulários.

## 5. Resultado esperado após a visita
O visitante entende o que é o ARENA SPORTS, sabe de onde vêm os dados, consegue testar o portal e sabe como falar com a equipe ou sugerir um recurso.

## 6. Público-alvo
Torcedores e entusiastas de esporte, e avaliadores do trabalho acadêmico.

## 7. Características do público-alvo
> *Hipóteses do grupo — validar ou ajustar.*
- Faixa etária ampla, com predomínio de jovens e adultos;
- Acesso principalmente por celular;
- Valorizam rapidez, clareza e confiança na informação;
- Conhecimento técnico variado.

## 8. Mapa de navegação

```
index.html (Início)
├── sobre.html
├── servicos.html ──► orcamento.html
├── projetos.html  (portal em iframe)
├── galeria.html   (imagens, vídeo, áudio)
├── noticias.html
├── equipe.html
├── faq.html ──► contato.html
├── contato.html   (formulário)
└── orcamento.html (formulário)
```
Todas as páginas compartilham o mesmo cabeçalho e menu, com as 10 páginas acessíveis a partir de qualquer uma delas.

## 9. Descrição das 10 páginas

| Página | Descrição |
|---|---|
| `index.html` | Hero com proposta, placar ilustrativo, esportes, passo a passo de uso, vídeo, novidades e chamada para o portal. |
| `sobre.html` | O que é o projeto, missão, valores, como funciona e aviso de que é trabalho acadêmico. |
| `servicos.html` | Seis recursos gratuitos do portal em cards. |
| `projetos.html` | Portal interativo em iframe, módulos e tecnologias. |
| `galeria.html` | Cinco imagens (capturas do portal e identidade visual) com filtro, vídeo e áudio. |
| `noticias.html` | Cinco novidades do projeto e links de fontes oficiais. |
| `equipe.html` | Como a equipe trabalha (Git, branches, diário de bordo). |
| `faq.html` | Nove perguntas em acordeão (`details`). |
| `contato.html` | Formulário de contato com validação HTML5. |
| `orcamento.html` | Formulário de solicitação de orçamento (R$ 0,00, sem vendas) com validação HTML5. |

## 10. Identidade visual e paleta de cores

A identidade vem do portal ARENA SPORTS: fundo noturno, verde de gramado e detalhes âmbar.

| Nome | Hex | Uso |
|---|---|---|
| Noite | `#0e1319` | Cabeçalho, rodapé e faixas de título |
| Gramado | `#17a34a` | Botões e destaques |
| Gramado escuro | `#0f7a36` | Links e textos sobre fundo claro (contraste) |
| Âmbar | `#f5b82e` | Foco do teclado e avisos |
| Giz | `#f3f4f6` | Fundo das páginas |
| Tinta | `#14181f` | Texto principal |

**Tipografia:** fontes do sistema (`Segoe UI`, `system-ui`, `Helvetica Neue`, `Arial`), com títulos em peso 800 e espaçamento levemente fechado.
**Elementos:** cards, botões com hover, faixa verde sob o título de cada página e capturas reais do portal.

## 11. Tecnologias
HTML5, CSS3, JavaScript puro, Git e GitHub, VS Code. Sem frameworks.
