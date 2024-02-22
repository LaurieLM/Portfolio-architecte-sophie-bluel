async function app() {
  // Récupération des travaux
  const reponse = await fetch("http://localhost:5678/api/works");
  const works = await reponse.json();

  // Affichage des travaux
  async function displayWorks(element) {
    for (let i = 0; i < element.length; i++) {
      const projects = element[i];

      const gallery = document.querySelector(".modal-gallery");
      const figure = document.createElement("figure");

      const imgElement = document.createElement("img");
      imgElement.src = projects.imageUrl;

      const trashIcon = document.createElement("button");
      trashIcon.classList.add("trash");
      trashIcon.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

      gallery.appendChild(figure);
      figure.appendChild(imgElement);
      figure.appendChild(trashIcon);
    }
  }
  displayWorks(works);
}

app();

let modal = null;

const openModal = function (e) {
  e.preventDefault();
  const target = document.querySelector("#modal1");
  target.style.display = "flex";
  modal = target;
  modal.addEventListener("click", closeModal);
  modal.querySelector(".js-modal-close").addEventListener("click", closeModal);
  modal
    .querySelector(".js-modal-stop")
    .addEventListener("click", stopPropagation);
};

const closeModal = function (e) {
  e.preventDefault();
  modal.style.display = "none";
};

const stopPropagation = function (e) {
  e.stopPropagation();
};

document.querySelectorAll(".js-modal").forEach((a) => {
  a.addEventListener("click", openModal);
});
