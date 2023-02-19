import { Provider } from "react-redux";
import { store } from "&state";
import { HomePage } from "./pages";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

export default App;
