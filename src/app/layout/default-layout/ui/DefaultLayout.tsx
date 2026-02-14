import { Outlet } from "react-router";
import './DefaultLayout.scss'

const DefaultLayout = () => {
  return (
    <div className="default-layout">
      <header>header</header>

      <main className="default-layout__main">
        <Outlet />
      </main>

      <footer>footer</footer>
    </div>
  );
};

export default DefaultLayout;