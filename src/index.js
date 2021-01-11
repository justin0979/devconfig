import "../public/index.html";
import "./main.scss";

const saying2 = document.createElement("h2");
saying2.innerHTML = "webpack-dev-server";

const saying = document.createElement("h2");
saying.innerHTML = "Working with Webpack 5";
const app = document.querySelector(".app");
app.appendChild(saying2);
app.appendChild(saying);
