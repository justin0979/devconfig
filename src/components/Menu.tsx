import Link from "./Link";

interface Route {
  id: number | string;
  label: string;
  path: string;
}

interface SidebarProps {
  routes: Route[];
}

const Sidebar = ({ routes }: SidebarProps) => {
  const renderedPaths = routes.map((route) => {
    return (
      <Link key={route.id} to={route.path}>
        {route.label}
      </Link>
    );
  });

  return (
    <div className="nav">
      <div className="nav__bar">{renderedPaths}</div>
    </div>
  );
};

export default Sidebar;
