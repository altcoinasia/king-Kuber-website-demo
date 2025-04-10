import { BiMobileVibration } from "react-icons/bi";
import { FaUnity } from "react-icons/fa";
import { TfiServer } from "react-icons/tfi";
import { LuShieldCheck } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import logo from '../../public/king-kalyan.svg'


const Advantage = () => {
  return (
    <div className="bg-white py-12">
      <div>
        <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          एप्लीकेशन की खासियत
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          अपना और हमारा बाजार साथ में अपने एजेंट्स और ग्राहकों को खिलाये.
        </p>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center ">
        
        <div className="md:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-2">
              <BiMobileVibration className="text-[#5777ba] text-3xl" />
              <p className="text-gray-600">
                30 मिनट में पाए आपका खुद का एप्लीकेशन
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaUnity className="text-[#5777ba] text-3xl" />
              <p className="text-gray-600">10 मिनट में पाए बैलेंस</p>
            </div>{" "}
            <div className="flex items-center gap-2">
              <TfiServer className="text-[#5777ba] text-3xl" />
              <p className="text-gray-600">सर्वर की कोई चिंता नहीं</p>
            </div>{" "}
            <div className="flex items-center gap-2">
              <LuShieldCheck className="text-[#5777ba] text-3xl" />
              <p className="text-gray-600">खुद का UPI ऐड करे</p>
            </div>{" "}
            <div className="flex items-center gap-2">
              <FaReact className="text-[#5777ba] text-3xl" />
              <p className="text-gray-600">ग्राहकों को कोई सीमा नहीं</p>
            </div>{" "}
            <div className="flex items-center gap-2">
              <RiAdminLine className="text-[#5777ba] text-3xl" />
              <p className="text-gray-600">पाए एडमिन पैनल</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center ">
          <div className="border-8 border-[#1D4ED8] rounded-full p-1">
            <div className="border border-[#1D4ED8] bg-[#1D4ED8] rounded-full p-6">

            <img
      
            src={logo}
            alt="Smart Buki App Mockup"
            className=" lg:w-[400px] lg:h-[400px] w-[200px] h-[200px] drop-shadow-lg"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
