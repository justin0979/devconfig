import { Route } from "./components";
import { HomePage } from "./pages";

const App: React.FC = () => {
  return (
    <>
      <Route path="/">
        <HomePage />
      </Route>
    </>
  );
};

export default App;
