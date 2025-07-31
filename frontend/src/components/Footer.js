import React from "react";
import { Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Shimona Dubey</h3>
            <p className=" mb-6 max-w-md">
              Data + Strategy = Product that you love.
            </p>
          </div>

          {/* Contact Icons on Right */}
          <div className="flex md:justify-end ">
            <a
              href="mailto:shimonadubey2509@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/shimonadubey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Shimona Dubey. All rights reserved.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 py-6 border-t border-gray-100 pb-0">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <div className="text-2xl font-light text-gray-900 flex items-center justify-center mb-4">
                <span className="text-blue-600">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-600">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
                <span className="ml-2 text-gray-500">Portfolio</span>
              </div>
              <p className="text-gray-600 font-light mb-2">&copy; 2025 Interactive Strategic Portfolio. All rights reserved.</p>
              <p className="text-sm text-gray-500 font-light">
                Crafted to demonstrate strategic thinking for Technical Program Manager excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;