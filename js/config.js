/* Conteúdo inicial e configuração do site. Edite livremente. */
window.SITE = {
  "id": "forum",
  "name": "Forum",
  "kind": "forum",
  "tagline": "A comunidade para tirar dúvidas, compartilhar projetos e aprender junto.",
  "hero": {
    "eyebrow": "Comunidade",
    "title": "Pergunte, responda e construa com a comunidade",
    "cta": "Ver discussões",
    "ctaHref": "#list",
    "secondary": "Regras da comunidade",
    "secondaryHref": "#extra",
    "stats": [
      [
        "Membros",
        "8.420"
      ],
      [
        "Tópicos",
        "3.190"
      ],
      [
        "Online agora",
        "126"
      ]
    ]
  },
  "listTitle": "Discussões",
  "sorts": [
    [
      "recent",
      "Mais recentes"
    ],
    [
      "popular",
      "Mais vistas"
    ]
  ],
  "labels": {
    "items": "Tópicos",
    "item": "Tópico"
  },
  "moderate": false,
  "categories": [
    {
      "id": "geral",
      "name": "Geral"
    },
    {
      "id": "ajuda",
      "name": "Ajuda"
    },
    {
      "id": "projetos",
      "name": "Projetos"
    },
    {
      "id": "anuncios",
      "name": "Anúncios"
    }
  ],
  "items": [
    {
      "id": "boas-vindas",
      "title": "Boas-vindas! Leia antes de postar",
      "category": "anuncios",
      "author": "Moderação",
      "pinned": true,
      "locked": true,
      "views": 5210,
      "image": "",
      "excerpt": "Regras, dicas para perguntar bem e como funciona a comunidade.",
      "body": "Seja respeitoso, pesquise antes de perguntar e use um título claro.\n\nInclua o que você já tentou e o resultado esperado. Isso ajuda todos a responderem mais rápido.",
      "date": "2026-10-09T00:00:00.000Z"
    },
    {
      "id": "primeiro-projeto",
      "title": "Mostrei meu primeiro projeto: app de finanças",
      "category": "projetos",
      "author": "Ana Lima",
      "views": 640,
      "image": "",
      "excerpt": "Feito em 3 semanas, aceito sugestões de melhoria!",
      "body": "Depois de muito estudo, publiquei meu app de controle financeiro. Tem gráficos mensais, categorias e metas.\n\nO que vocês melhorariam na experiência?",
      "date": "2026-11-17T00:00:00.000Z"
    },
    {
      "id": "erro-deploy",
      "title": "Erro 404 ao publicar meu site",
      "category": "ajuda",
      "author": "Pedro H.",
      "views": 312,
      "image": "",
      "excerpt": "Localmente funciona, mas publicado só aparece página em branco.",
      "body": "Rodando localmente tudo funciona. Depois de publicar, as páginas internas retornam 404.\n\nAlguém já passou por isso?",
      "date": "2026-11-16T00:00:00.000Z"
    },
    {
      "id": "melhor-forma-estudar",
      "title": "Qual a melhor forma de estudar programação?",
      "category": "geral",
      "author": "Júlia M.",
      "views": 1290,
      "image": "",
      "excerpt": "Cursos, projetos práticos ou livros? Como vocês aprenderam?",
      "body": "Estou começando agora e fico perdida entre tantas opções.\n\nComo foi a jornada de vocês?",
      "date": "2026-11-14T00:00:00.000Z"
    }
  ],
  "comments": [
    {
      "id": "r1",
      "itemId": "erro-deploy",
      "author": "Carlos",
      "text": "Verifique se os links apontam para arquivos .html existentes e se o servidor está configurado para SPA, se for o caso.",
      "date": "2026-11-16T00:00:00.000Z",
      "status": "aprovado"
    },
    {
      "id": "r2",
      "itemId": "melhor-forma-estudar",
      "author": "Ana Lima",
      "text": "Projetos práticos! Escolha algo que você usaria e construa aos poucos.",
      "date": "2026-11-15T00:00:00.000Z",
      "status": "aprovado"
    },
    {
      "id": "r3",
      "itemId": "primeiro-projeto",
      "author": "Rafa",
      "text": "Ficou ótimo. Sugiro exportar relatórios em CSV.",
      "date": "2026-11-18T00:00:00.000Z",
      "status": "aprovado"
    }
  ],
  "nav": [
    {
      "label": "Discussões",
      "href": "index.html"
    },
    {
      "label": "Ajuda",
      "href": "index.html?cat=ajuda"
    },
    {
      "label": "Projetos",
      "href": "index.html?cat=projetos"
    },
    {
      "label": "Anúncios",
      "href": "index.html?cat=anuncios"
    }
  ],
  "footer": [
    {
      "title": "Comunidade",
      "links": [
        {
          "label": "Regras",
          "href": "item.html?id=boas-vindas"
        },
        {
          "label": "Discussões",
          "href": "index.html"
        }
      ]
    },
    {
      "title": "Institucional",
      "links": [
        {
          "label": "Sobre nós",
          "href": "index.html#extra"
        },
        {
          "label": "Política de privacidade",
          "href": "index.html#extra"
        },
        {
          "label": "Painel admin",
          "href": "admin.html"
        }
      ]
    }
  ],
  "extra": "<div class=\"feature-band\"><div><strong>Seja respeitoso</strong><span class=\"muted\">Críticas ao conteúdo, nunca às pessoas.</span></div><div><strong>Pergunte bem</strong><span class=\"muted\">Título claro, contexto e o que já tentou.</span></div><div><strong>Compartilhe</strong><span class=\"muted\">Responda e marque soluções que ajudaram.</span></div></div><div class=\"newsletter\"><div><h2>Resumo semanal da comunidade</h2><p>As melhores discussões da semana no seu e-mail.</p></div><form data-newsletter><input class=\"input\" type=\"email\" name=\"email\" required placeholder=\"seu@email.com\" aria-label=\"E-mail\" /><button class=\"btn\">Inscrever</button></form></div>"
};
