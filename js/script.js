// perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expand", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}

// Animação link Interno

function initLinkInterno() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");
  function scrollToArticle(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const article = document.querySelector(href);
    article.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToArticle);
  });
}
initLinkInterno();