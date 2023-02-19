import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "&state";
import { NavigationProvider } from "./context";
import App from "./App";
import "&sass/main.scss";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <NavigationProvider>
      <App />
    </NavigationProvider>
    ,
  </Provider>,
);

// if (module.hot) {
//   module.hot.accept();
// }
