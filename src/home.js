export const home = () => {
  const title = document.createElement("div");
  title.classList.add("title");
  const menu = document.querySelector(".menu");

  menu.appendChild(title);
};
