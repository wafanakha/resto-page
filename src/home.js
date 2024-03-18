export const home = () => {
  const title = document.createElement("div");
  title.classList.add("title");
  const menu = document.querySelector(".menu");

  const info = document.createElement("div");
  info.classList.add("info");

  menu.appendChild(title);
  menu.appendChild(info);
};
