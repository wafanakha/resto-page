export const home = () => {
  const title = document.createElement("div");
  title.classList.add("title");
  const titleName = document.createElement("h2");
  const titileName_text = document.createTextNode("TITLE HERE");

  const menu = document.querySelector(".menu");

  const info = document.createElement("div");
  info.classList.add("info");

  const about = document.createElement("div");
  const aboutparag = document.createElement("p");
  const aboutparag_text = document.createTextNode(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia adipisci officia, blanditiis a corrupti ducimus deserunt suscipit laboriosam voluptatem nisi?"
  );

  aboutparag.appendChild(aboutparag_text);
  about.appendChild(aboutparag);
  info.appendChild(about);

  titleName.appendChild(titileName_text);
  title.appendChild(titleName);

  menu.appendChild(title);
  menu.appendChild(info);
};
