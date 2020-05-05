import React, { useState, Suspense, lazy } from "react";
const Lazy = lazy(() => import("./Lazy"));

const App = () => {
  const [loaded, setLoaded] = useState(false);

  const lazyLoadLazy = () => {
    if (loaded) {
      return (
        <Suspense fallback="Lazy loading Lazy component">
          <Lazy />
        </Suspense>
      );
    }
    return <h1>Loaded here</h1>;
  };

  return (
    <div className="app">
      <h1>Basic React App Component</h1>
      {lazyLoadLazy()}
      <button onClick={() => setLoaded(!loaded)}>lazy load</button>
    </div>
  );
};

export default App;
