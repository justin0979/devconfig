import axios from "axios";
import "./main.scss";

const starting = async () => {
  const response = await axios.get(
    "https://jsonPlaceholder.typicode.com/users",
  );

  const users = response.data;

  const ul = document.createElement("ul");

  users.forEach((user) => {
    const li = document.createElement("li");
    li.key = user.id;
    li.innerHTML = user.name;
    ul.appendChild(li);
  });

  const saying2 = document.createElement("h2");
  saying2.innerHTML = "webpack-dev-server";

  const saying = document.createElement("h2");
  saying.innerHTML = "Working with Webpack 5";
  const app = document.querySelector(".app");
  app.appendChild(saying2);
  app.appendChild(saying);

  const environment = document.createElement("h3");
  environment.innerHTML = `Environment = ${process.env.NODE_ENV}`;

  // const module_hot = document.createElement("h3");
  app.appendChild(environment);

  app.appendChild(ul);

  const reminder = `run "npm uninstall axios" if it is not needed.`;
  const p_reminder = document.createElement("p");
  p_reminder.innerHTML = reminder;
  app.appendChild(p_reminder);
};

starting();
