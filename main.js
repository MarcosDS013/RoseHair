//function menu

function burger() {
  var burger = document.getElementById('burger');
  var links = document.getElementById('links');
  var quit = document.getElementById('quit');
  burger.style.padding = '10px 10px 75vw 25vw';
  links.style.display = 'flex';
  quit.style.display = 'inline';
}


function quit() {
  var burger = document.getElementById("burger");
  var links = document.getElementById("links");
  var quit = document.getElementById("quit");
  burger.style.padding = "40px 40px 40px 40px";
  links.style.display = "none";
  quit.style.display = "none";
}

//=================================================

// show/hide faqs
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    // change icon
    const icon = faq.querySelector(".faq_icon i");
    if (icon.className === "bx bxs-plus-square") {
      icon.className = "bx bxs-minus-square";
    } else {
      icon.className = "bx bxs-plus-square";
    }
  });
});

//============================================================

// add background style to navbar
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

//===============================================================

$(document).ready(function () {
  // Animação suave de rolagem quando o ícone de seta para cima for clicado
  $(".footer-iconTop a").click(function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link

    // Animação de rolagem suave
    $("html, body").animate(
      {
        scrollTop: 0, // Rola para o topo da página
      },
      800 // Velocidade
    );
  });
});

//===============================================================

//efeito que acompanha o menu ao descer a página
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});
