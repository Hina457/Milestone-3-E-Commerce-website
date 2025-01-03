

import { FaRegHeart } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Cart (){
    return(
        <div className="">
            <h1 className="text-5xl mt-7 ml-11 font-bold">Your Shopping Cart</h1>
    <div className="px-4 lg:px-16 py-8">
      {/* Main Container */}
      <div className="flex flex-wrap justify-center lg:justify-between gap-8">
        {/* Left Section */}
        <div className="flex-1 max-w-3xl">
          <p className="font-bold text-xl lg:text-2xl mb-4">products!</p>
          {/* First Box */}
          <div className="w-full p-4 shadow-lg rounded-lg flex gap-4">
            {/* <Image src={chair} alt="pic" width={150} height={150} className="self-center" /> */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <p className="text-gray-800 font-medium text-base">Men cotton jacket</p>
                <p className="text-gray-800 font-medium text-sm">MRP: $99</p>
              </div>
              <h1 className="text-gray-500 text-sm mt-2">Men causal Slim fit</h1>
              <p className="text-gray-500 text-sm mt-1">Size L | Quantity 1</p>
              <div className="flex gap-4 mt-4">
                <FaRegHeart className="text-gray-400 w-6 h-6 cursor-pointer" />
                <RiDeleteBin6Line className="text-gray-400 w-6 h-6 cursor-pointer" />
              </div>
            </div>
          </div>
          {/* Second Box */}
          <div className="w-full p-4 shadow-lg rounded-lg flex gap-4 mt-4">
            {/* <Image src={chair5} alt="pic" width={150} height={150} className="self-center" /> */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <p className="text-gray-800 font-medium text-base">Men causal Slim fit</p>
                <p className="text-gray-800 font-medium text-sm">MRP: $99</p>
              </div>
              <h1 className="text-gray-500 text-sm mt-2">Ashen Slate/Cobalt Bliss</h1>
              <p className="text-gray-500 text-sm mt-1">Size L | Quantity 1</p>
              <div className="flex gap-4 mt-4">
                <FaRegHeart className="text-gray-400 w-6 h-6 cursor-pointer" />
                <RiDeleteBin6Line className="text-gray-400 w-6 h-6 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        {/* Right Section */}
      
        </div>
      </div>
    </div>
  );
}
        
