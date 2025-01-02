

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

export default function Header() {
    return (
        <header className="bg-pink-500 shadow-md w-full  top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                {/* Logo */}
                <div className="text-2xl font-bold text-white font-serif">
                    <Link href="/">Alvi-Shop</Link>
                </div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6 text-white font-serif">
                    <Link href="/" className="hover:text-blue-600">Home</Link>
                    <Link href="/Products" className="hover:text-blue-600">Products</Link>
                    <Link href="/About" className="hover:text-blue-600">About Us</Link>
                    <Link href="/Contact" className="hover:text-blue-600">Contact</Link>
                </nav>

                {/* Icons */}
                <div className="flex items-center space-x-4 ">
                    <Link href="/" className="relative flex">
                        <FaShoppingCart className="text-gray-700 hover:text-pink-300 text-2xl" />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
                        
                    </Link>
                    <FaHeart className="ml-5 text-2xl text-gray-700 hover:text-pink-300"/>
                    
                   
                    <div className="md:hidden">
                        <IoMdMenu className="text-2xl text-gray-700 hover:text-pink-500" />
                       
                    </div>
                </div>
            </div>
        </header>
    );
}
