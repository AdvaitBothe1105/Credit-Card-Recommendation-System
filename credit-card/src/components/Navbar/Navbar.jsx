import logo from "../../assets/Logo.png";
import { FaRegUserCircle } from "react-icons/fa";
// import "./Navbar.css";
import '../../App.css'
import { Button } from "@/components/ui/button"


export const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <div className="logo">
          <img
              src={logo}
              alt="Logo"
              width={105}
              height={24}
              className="d-inline-block align-text-top rounded-full"
            />
          </div>
          <Button variant="outline" className="font-bold text-xl"> <FaRegUserCircle className="mr-2 mb-2 mt-2"/> LOGIN</Button>
          {/* <div className="login flex items-center justify-center text-[#3e6678] bg-[#EDEAE7] rounded-full p-2">
            <FaRegUserCircle className="size-5 mr-2 mb-2"/>
            <p className="font-bold">LOGIN</p>
          </div> */}
        </div>
      </nav>
    </>
  );
};