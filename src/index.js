import _ from "lodash";
import "./style.css";

import { home } from "./home.js";

const content = document.getElementById("content");

const menu = document.createElement("div");
menu.classList.add("menu");
content.appendChild(menu);

content.insertAdjacentHTML("afterend", "<footer></footer>");

home();
