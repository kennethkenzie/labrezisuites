import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { MdDarkMode } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';

function Header() {
  return (
    <nav className="bg-[#1f1f27] text-white py-4 px-6 flex justify-between items-center">
      {/* Left Menu Icon */}
      <div className="flex items-center space-x-4">
        <div className="text-xl cursor-pointer">
          <span className="text-white">&#9776;</span>
        </div>
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" className="h-6" />
          <span className="text-white text-lg font-semibold">
            william.<span className="text-[#f9cb33]">design</span>
          </span>
        </div>
      </div>

      {/* Center Navigation Links */}
      <div className="hidden md:flex space-x-6 text-gray-300">
        <a href="#" className="text-white">Home</a>
        <a href="#">Services</a>
        <a href="#">Portfolio</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>

      {/* Right Icons */}
      <div className="flex items-center space-x-4">
        {/* Language */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <img
            src="https://flagcdn.com/us.svg"
            alt="English"
            className="h-4 w-6 object-cover"
          />
          <span className="text-white text-sm">English</span>
          <BsGlobe className="text-white text-sm" />
        </div>

        {/* Social Icons */}
        <FaFacebookF className="cursor-pointer" />
        <FiX className="cursor-pointer" />
        <FaYoutube className="cursor-pointer" />
        <FaLinkedinIn className="cursor-pointer" />

        {/* Dark Mode Toggle */}
        <div className="ml-4 cursor-pointer">
          <MdDarkMode className="text-yellow-400 text-lg" />
        </div>
      </div>
    </nav>
  );
}

export default Header;
