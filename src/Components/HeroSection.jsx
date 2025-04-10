import { PiWhatsappLogo } from "react-icons/pi";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import logo from '../../public/king-kalyan.svg';

const HeroSection = () => {
  return (
    <div id="" className="bg-gray-50">
      <div className="min-h-screen flex items-center justify-center w-full">
        <div className="container py-12 flex flex-col md:flex-row justify-between items-center px-4 md:px-12 w-full">
        
          {/* Text Section */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left w-full md:w-1/2">
            <div className="mb-6 md:ms-12 lg:ms-24 w-full flex flex-col items-center md:items-start">
              {/* Whatsapp Button */}
              <button className="flex items-center justify-center bg-yellow-500 text-white py-3 px-6 rounded-full mb-4 w-48 sm:w-52 md:w-60">
                <span className="mr-2">
                  <PiWhatsappLogo />
                </span>
                +91999****999
              </button>
              {/* App Download Button */}
              <button className="flex items-center justify-center bg-gray-800 text-white py-3 px-6 rounded-full w-48 sm:w-52 md:w-60">
                <span className="mr-2">
                  <IoLogoGooglePlaystore />
                </span>
                APP Download
              </button>
            </div>
            
            {/* Heading */}
            <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4 md:ms-12 lg:ms-24">
              आपका अपना मटका गेम ऐप
            </h1>
            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base max-w-md md:ms-12 lg:ms-24">
              आपका बाजार अपने ऐप में जोड़ें साथ ही पाए एडमिन पैनल वहां से अपना रिजल्ट कमिशन खुद अपडेट करे, मात्र 30 मिनट में आपका खुद का ऐप. अब खेलिए और खिलाइये अपने एजेंट्स और ग्राहकों को अपनी खुद की ऐप में.
            </p>
          </div>
  
          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="border-8 border-[#1D4ED8] rounded-full p-1">
              <div className="border border-[#1D4ED8] bg-[#1D4ED8] rounded-full p-6">
                <img
                  src={logo}
                  alt="Smart Buki App Mockup"
                  className="lg:w-[400px] lg:h-[400px] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[200px] md:h-[200px]  drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
