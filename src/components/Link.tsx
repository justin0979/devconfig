import { ReactNode } from "react";
import { useNavigation } from "../hooks";

interface LinkProps {
  to: string;
  children: ReactNode;
}

const Link = ({ to, children }: LinkProps) => {
  const { currentPath, navigate } = useNavigation();

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };

  return (
    <a
      onClick={handleClick}
      href={to}
      className={`link ${to === currentPath ? "link__active" : ""}`}
    >
      {children}
    </a>
  );
};

export default Link;
