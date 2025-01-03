


import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
export default function Contact() {
    return (
     
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 ">
        <div className="w-full max-w-lg border border-pink-700  h-[500px] rounded-lg shadow-md p-6 bg-[url('/bg2.webp')]">
       
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
          <form className="space-y-4">
            {/* Name Input */}
            <div>
              <label typeof="name" className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
  
            {/* Email Input */}
            <div>
              <label typeof="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
  
            {/* Message Input */}
            <div>
              <label typeof="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition duration-200"
              >
                Submit
              </button>
              </div>
                <div className="flex justify-center items-center gap-3 text-pink-600 ">
                        <FaFacebook size={30} className="hover:text-pink-300 animate-bounce delay-0" />
                        <FaInstagram size={30} className="hover:text-pink-300 animate-bounce delay-0" />
                        <FaTwitter size={30} className="hover:text-pink-300 animate-bounce delay-0" />
                        <FaLinkedin size={30} className="hover:text-pink-300 animate-bounce delay-0" />
                      </div>

            
          </form>
        </div>
      </div>
      
    );
  }
  