import React from "react";
import { Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Shimona Dubey</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Technical Product Manager specializing in geo-location platforms and third-party integrations. 
              Building products that delight millions of users worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/shimona-dubey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:shimona.dubey@email.com"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Why Me", href: "#why-me" },
                { label: "Challenges", href: "#challenges" },
                { label: "Solutions", href: "#solution-section" },
                { label: "Contact", href: "#contact" }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">shimona.dubey@email.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Boston, MA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Shimona Dubey. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with passion for Google Geo TPM role
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;