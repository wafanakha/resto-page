import _ from "lodash";
import "./style.css";
import Bg from "./background.jpg";

import { home } from "./home.js";

const content = document.getElementById("content");

const menu = document.createElement("div");
menu.classList.add("menu");
content.appendChild(menu);

myBg = new Image();
myBg.src = Bg;

content.insertAdjacentHTML("afterend", "<footer></footer>");

home();
