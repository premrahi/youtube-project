import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isMenuOpen = useSelector( store => store.app.isMenuOpen)


  return (
    <div className="flex ">

      {isMenuOpen && <div className="w-60"> <Sidebar /></div>}  

      <Outlet />
        
    </div>
  )
}

export default Body ;