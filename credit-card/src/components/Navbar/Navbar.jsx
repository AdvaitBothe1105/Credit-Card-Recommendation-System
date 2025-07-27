import logo from "../../assets/Logo.png";
import { FaRegUserCircle } from "react-icons/fa";
// import "./Navbar.css";
import "../../App.css";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="w-full bg-[#222a32] border-b border-gray-700 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center space-x-2"
            >
              <img
                src={logo}
                width={105}
                height={24}
                alt="VYOMA Logo"
                className="object-contain rounded-2xl"
              />
            </Link>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                to="/incomepage"
                className="bg-[#EDEAE7] text-black px-5 py-2 rounded-lg text-base font-semibold shadow hover:bg-[#e1d9c9] transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
