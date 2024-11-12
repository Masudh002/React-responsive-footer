//import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gray-800 px-4 md:px-16 lg:px-28">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h1 className=" text-lg font-bold mb-4 text-white">About Us</h1>
                <p className=" text-gray-300">
                    We are a team dedicated to providing the best products and services to our customers
                </p>
            </div>
            <div>
                <h1 className=" text-lg font-bold mb-4 text-white">Quick Links</h1>
                <ul>
                    <li><a href="#" className=" text-gray-300 hover:underline">Home</a></li>
                    <li><a href="#" className=" text-gray-300 hover:underline">Services</a></li>
                    <li><a href="#" className=" text-gray-300 hover:underline">About</a></li>
                    <li><a href="#" className=" text-gray-300 hover:underline">Contact</a></li>
                </ul>
            </div>
            <div>
                <h1 className=" text-lg font-bold mb-4 text-white">Follow Us</h1>
                <ul className=" flex space-x-4">
                <li><FaFacebookF className=" text-blue-500"/>{" "}<a href="" className=" text-gray-300 hover:underline">Facebook</a></li>
                <li><FaTwitter className=" text-blue-500"/>{" "}<a href="" className=" text-gray-300 hover:underline">Twitter</a></li>
                <li><FaInstagram className=" text-blue-500"/>{" "}<a href="" className=" text-gray-300 hover:underline">Instagram</a></li>
                </ul>
            </div>
        </div>
        <div className=" border-t border-gray-600 p-4">
            <p className=" text-gray-300 text-center mt-4"> &copy; 2024 Code With Masudh. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
