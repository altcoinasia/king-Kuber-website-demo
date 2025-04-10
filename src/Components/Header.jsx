import { useState } from "react";
import { Link } from "react-scroll";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5"; // Import icons for the menu
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="absolute top-0 w-full flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow">
      <div className="flex justify-between w-full items-center">
        {/* Logo */}
        <div className="bg-blue-600/50 w-28 h-12 flex items-center justify-center rounded-md">
          <h1 className="font-semibold text-white">King Kalyan</h1>
        </div>

        {/* Hamburger Menu (only visible on mobile) */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-blue-600 text-2xl">
            {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}{" "}
            {/* Toggle menu icon */}
          </button>
        </div>

        <div className="hidden md:flex flex-col md:flex-row justify-end items-center w-full">
          <nav className="flex items-center space-x-4">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer text-blue-600 hover:underline"
            >
              होम
            </Link>
            <Link
              to="result"
              smooth={true}
              duration={500}
              className="cursor-pointer text-blue-600 hover:underline"
            >
              रिज़ल्ट
            </Link>
            <Link
              to="advantage"
              smooth={true}
              duration={500}
              className="cursor-pointer text-blue-600 hover:underline"
            >
              एप्लीकेशन की खासियत
            </Link>
          </nav>
          <button className="ml-0 md:ml-4 bg-blue-600/50 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
            Get App
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center md:hidden z-50">
          <div>
            <IoMdClose
              className="absolute top-10 right-4"
              onClick={() => !setIsOpen()}
            />
          </div>
          <nav className="flex flex-col items-center space-y-4">
            <Link
              onClick={toggleSidebar}
              to="hero"
              smooth={true}
              duration={500}
              className="cursor-pointer text-blue-600 text-xl"
            >
              होम
            </Link>
            <Link
              to="result"
              smooth={true}
              duration={500}
              className="cursor-pointer text-blue-600 hover:underline"
            >
              रिज़ल्ट
            </Link>
            <Link
              onClick={toggleSidebar}
              to="advantage"
              smooth={true}
              duration={500}
              className="cursor-pointer text-blue-600 text-xl"
            >
              एप्लीकेशन की खासियत
            </Link>
            <button className="mt-4 bg-blue-600/50 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
              Get App
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
