import ReactDOM from "react-dom/client";
import App from "components/App";
import "./sass/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

//  Comment out below after webpack-dev-server v4.1.0
//  if (module.hot) {
//    module.hot.accept();
//  }
