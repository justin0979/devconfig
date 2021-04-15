import "../public/index.html";
import "./main.scss";

const saying2 = document.createElement("h2");
saying2.innerHTML = "webpack-dev-server";

const saying = document.createElement("h2");
saying.innerHTML = "Working with Webpack 5";
const app = document.querySelector(".app");
app.appendChild(saying2);
app.appendChild(saying);

const environment = document.createElement("h3");
environment.innerHTML = `Environment = ${process.env.NODE_ENV}`;

const module_hot = document.createElement("h3");
app.appendChild(environment);
