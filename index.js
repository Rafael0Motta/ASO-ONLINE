/* SCROLL BUTTON */
window.addEventListener("scroll", function () {
  var topBtn = document.getElementById("topBtn");
  if (window.scrollY > 100) {
    topBtn.classList.add("active");
  } else {
    topBtn.classList.remove("active");
  }
});

/* HAMBURGUER MENU */
function showSidebar() {
  const sidebar = document.querySelector(".navItensContainerMobile");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".navItensContainerMobile");
  sidebar.style.display = "none";
}

/* ABOUT CARDS */
const contentText = [
  {
    id: "aboutCardSearch",
    image: "./assets/IMGS/info1.jpg",
    alt: "Img Card",
    h3: `Busca por funcionário`,
    p1: `Com um menu simples e objetivo, é possível acessar todo o histórico de um determinado funcionário. Isso inclui:`,
    ul: [
      "Avaliações ambientais realizadas no colaborador.",
      "Alterações de função ao longo do tempo.",
      "Prazos dos documentos vigentes relacionados ao funcionário.",
    ],
    p2: `
      Dessa forma, nenhuma informação se perde e todas estão facilmente acessíveis em caso de fiscalização ou consulta legal.`,
  },
  {
    id: "aboutCardGeneration",
    image: "./assets/IMGS/info2.jpg",
    alt: "Img Card",
    h3: `Geração de PPP`,
    p1: `A plataforma permite a geração imediata do PPP (Perfil Profissiográfico Previdenciário) para um funcionário. Com ferramentas intuitivas, você pode:`,
    ul: [
      "Criar, editar e acompanhar documentos importantes com facilidade.",
      "Encontrar registros de funcionários específicos, incluindo exames e histórico inseridos no sistema.",
    ],
    p2: `Esses dados são necessários para, com apenas um clique, gerar o PPP de forma rápida e eficiente.`,
  },
  {
    id: "aboutCardDocs",
    image: "./assets/IMGS/info3.jpg",
    alt: "Img Card",
    h3: `Gestão de Documentos e Notificações`,
    p1: `Com a plataforma, é possível:`,
    ul: [
      "Acompanhar prazos de documentos: Mantenha-se atualizado sobre os vencimentos de documentos importantes.",
      "Receber notificações próximas ao vencimento: Evite multas e penalidades ao ser notificado antes do prazo expirar.",
      "Criar e trabalhar com todos os documentos da área de SST: Atenda às necessidades de empresas com SESMT e prestadoras de serviços, conforme a legislação vigente.",
    ],
    p2: ``,
  },
  {
    id: "aboutCardAgility",
    image: "./assets/IMGS/info4.jpg",
    alt: "Img Card",
    h3: `Agilidade e Conformidade Legal`,
    p1: `Com a nossa plataforma, oferecemos:`,
    ul: [
      "Conformidade legal automatizada: A legislação é integrada ao sistema, garantindo que as obrigações legais sejam seguidas de forma precisa e eficiente.",
      "Economia de tempo: Evite a perda de tempo na busca por dados, prazos e valores. Tudo é organizado e acessível com apenas alguns cliques.",
      "Tranquilidade e segurança: Os usuários podem ficar tranquilos sabendo que estão cumprindo suas responsabilidades legais de forma confiável. Os documentos são gerados rapidamente, de maneira segura e armazenados em nosso servidor para fácil acesso e referência futura.",
    ],
    p2: ``,
  },
];

const aboutSection = document.getElementById("aboutCardContainer");
contentText.forEach((data) => {
  const card = document.createElement("div");
  card.classList.add("aboutCard");
  card.setAttribute("id", data.id);

  const image = document.createElement("img");
  image.classList.add("aboutCardImage");
  image.setAttribute("src", data.image);
  image.setAttribute("alt", data.alt);

  const content = document.createElement("div");
  content.classList.add("aboutCardContent");

  const title = document.createElement("h3");
  title.classList.add("aboutCardTitle");
  title.innerHTML = data.h3;

  const desc = document.createElement("p");
  desc.classList.add("aboutCardDesc");
  desc.innerHTML = data.p1;

  const ul = document.createElement("ul");
  ul.classList.add("aboutCardList");

  data.ul.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("aboutCardListItem");
    li.innerHTML = item;
    ul.appendChild(li);
  });

  const desc1 = document.createElement("p");
  desc1.classList.add("aboutCardDesc");
  desc1.innerHTML = data.p2;

  card.appendChild(image);
  content.appendChild(title);
  content.appendChild(desc);
  content.appendChild(ul);
  content.appendChild(desc1);
  card.appendChild(content);

  aboutSection.appendChild(card);
});
