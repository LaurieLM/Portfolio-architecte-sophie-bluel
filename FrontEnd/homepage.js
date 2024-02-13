async function getWorks() {
    const works = await fetch('http://localhost:5678/api/works');
    const reponse = await works.json();

    console.log(reponse);

    return reponse;
}

async function displayWorks() {
    const works = await getWorks();
        for (let i = 0; i < works.length; i++) {
            const projects = works[i];

            const gallery = document.querySelector(".gallery");
            const figure = document.createElement("figure");

            const imgElement = document.createElement("img");
            imgElement.src = projects.imageUrl;

            const titleElement = document.createElement("figcaption");
            titleElement.innerText = projects.title;

            gallery.appendChild(figure);
            figure.appendChild(imgElement);
            figure.appendChild(titleElement);
        }
}

displayWorks();

