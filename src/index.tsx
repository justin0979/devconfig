import { createRoot } from "react-dom/client";
import App from "&components/App";
import "&sass/main.scss";

const container = document.getElementById(
  "root",
) as HTMLElement;
const root = createRoot(container);
root.render(<App />);

// if (module.hot) {
//   module.hot.accept();
// }
