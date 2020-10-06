import "$public/index.html";
import "main.scss";

interface Sayings {
  text: string;
  title: string;
}

const sayings: Sayings = {
  text: "This interface works with typescript!",
  title: "Typescript Front End",
};

const app = document.querySelector(".app");

const title = document.createElement("h1");
title.innerHTML = sayings.title;
app.appendChild(title);

const saying = document.createElement("h2");
saying.innerHTML = sayings.text;
app.appendChild(saying);
