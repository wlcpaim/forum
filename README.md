# Forum

Fórum com categorias, tópicos fixados e fechados, busca, contagem de respostas e visitas, página de discussão com respostas e painel admin (tópicos, categorias, moderação de respostas, inscritos e configurações).

## Páginas
- `index.html`
- `item.html`
- `admin.html`

## Painel admin
Acesse `admin.html`. No primeiro acesso você define a senha do painel.

Importante: nesta versão o conteúdo e a senha ficam salvos **no navegador** (localStorage). Para vários administradores, pedidos reais e pagamentos, conecte um banco de dados e um provedor de pagamento.

## Estrutura
```
css/theme.css   cores e fontes do preset
css/style.css   layout e componentes
js/config.js    conteúdo inicial (produtos, posts, categorias)
js/store.js     dados salvos no navegador
js/site.js      páginas públicas
js/admin.js     painel administrativo
```

HTML, CSS e JavaScript puros, sem build. Publique como site estático.

---
Criado pelo **WLC.IA Studio**.
