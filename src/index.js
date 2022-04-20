import ReactDOM from "react-dom/client";
import App from "components/App";
import "./sass/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />,
);

//  Comment out below after webpack-dev-server v4.1.0
//  if (module.hot) {
//    module.hot.accept();
//  }
