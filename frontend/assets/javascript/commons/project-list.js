const baseRoute = 'http://localhost:5678/api';

const fetchProjects = async () => {
  const res = await fetch(`${baseRoute}/works`);
  const data = await res.json();

  data.forEach(row => {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const figcaption = document.createElement('figcaption');

    img.setAttribute('src', row.imageUrl);
    img.setAttribute('alt', row.title);
    figcaption.textContent = row.title;
    figure.appendChild(img);
    figure.appendChild(figcaption);
    document.getElementsByClassName('gallery')[0].append(figure);
  })
}

export { fetchProjects };