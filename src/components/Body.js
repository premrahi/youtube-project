import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import Head from "./Head";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const location = useLocation();
  const isWatchPage = location.pathname === "/watch";
  return (
    <>
      <Head />
      <div className="flex ">
        {isMenuOpen && (
          <div className={isWatchPage ? "absolute z-10" : "w-60"}>
            <Sidebar />
          </div>
        )}

        <Outlet />
      </div>
    </>
  );
};

export default Body;
