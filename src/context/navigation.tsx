import { createContext, useState, useEffect, ReactNode } from "react";

interface INavigationContext {
  currentPath: string;
  navigate: (to: string) => void;
}

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationContext = createContext({} as INavigationContext);

export const NavigationProvider = ({
  children,
}: NavigationProviderProps) => {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname,
  );

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to: string) => {
    setCurrentPath(to);
    window.history.pushState({}, "", to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};
