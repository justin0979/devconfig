import { Route, Menu } from "./components";
import { HomePage, CounterPage } from "./pages";

const App: React.FC = () => {
  const routes = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "Counter", path: "/counter" },
  ];

  return (
    <div className="app">
      <Menu routes={routes} />
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/counter">
        <CounterPage />
      </Route>
    </div>
  );
};

export default App;
