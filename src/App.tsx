import { Route, Menu } from "./components";
import { HomePage, CounterPage, ButtonPage } from "./pages";

const App: React.FC = () => {
  const routes = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "Counter", path: "/counter" },
    { id: 3, label: "Buttons", path: "/buttons" },
  ];

  return (
    <div className="app" data-testid="apptest">
      <Menu routes={routes} />
      <div className="home">
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/counter">
          <CounterPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
      </div>
    </div>
  );
};

export default App;
