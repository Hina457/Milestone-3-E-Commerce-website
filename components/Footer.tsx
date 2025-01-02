



import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-pink-500 text-white mt-5">
      {/* Address and Subscription Section */}
      <div className="px-6 py-12 md:px-12 lg:px-24 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Address */}
        <div>
          <h2 className="text-lg font-semibold">ADDRESS</h2>
          <p className="text-sm mt-2">
            Plot No 1/47 Willayatabad Manghopir Road, Karachi, Pakistan.
          </p>
        </div>

        {/* Subscription */}
        <div>
          <h2 className="text-lg font-semibold">SUBSCRIBE</h2>
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <input
              className="flex-1 p-3 rounded-lg text-black"
              type="email"
              placeholder="Enter your Email"
            />
           
          </div>
          <p className="text-xs mt-2">By subscribing you agree with our Privacy Policy</p>
        </div>

        {/* Agile Help Center */}
        <div>
          <h2 className="text-lg font-semibold">AGILE HELP CENTER</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>021 32555557</li>
            <li>Cellphone: 0345-6878326</li>
            <li>WhatsApp: 0345-6878326</li>
            <li>Email: customer@dr-rashel-official.com</li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h2 className="text-lg font-semibold">POLICIES</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Return & Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Operational Hours</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-white py-6 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright and Links */}
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; 2023 Alvi Store. All rights reserved.</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-2 text-sm">
            <a href="#" className="underline">
              Privacy Policy
            </a>
            <a href="#" className="underline">
              Terms of Service
            </a>
            <a href="#" className="underline">
              Cookies Settings
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaFacebook size={20} />
          <FaInstagram size={20} />
          <FaTwitter size={20} />
          <FaLinkedin size={20} />
        </div>
      </div>
    </div>
  );
}
