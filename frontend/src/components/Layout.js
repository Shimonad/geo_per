import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const location = useLocation();

  const navigationItems = [
    { label: "Why Me", href: "/why-me", hasDropdown: false },
    { label: "Products", href: "#", hasDropdown: true, disabled: true },
    { label: "Solutions", href: "/solutions", hasDropdown: true },
    { label: "Pricing", href: "/about", hasDropdown: false },
    { label: "Resources", href: "#", hasDropdown: true, disabled: true }
  ];

  const isActivePage = (href) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Google Announcement Bar */}
      {showAnnouncement && (
        <div className="bg-[#1a73e8] text-white py-3 px-4 relative">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex-1 text-center">
              <p className="text-sm font-normal">
                Get ready for Shimona's charged Third Party Integration and Quality Evaluations to streamline every user's experience!{" "}
                <Link 
                  to="/solutions"
                  className="underline hover:no-underline font-medium"
                >
                  Learn More
                </Link>
              </p>
            </div>
            <button
              onClick={() => setShowAnnouncement(false)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors duration-200"
              aria-label="Close announcement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Google Maps Platform Header */}
      <header className="bg-white border-b border-[#e8eaed] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Google Maps Platform Logo */}
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-6 h-6">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path fill="#4285f4" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle fill="#ffffff" cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                <span className="text-[22px] font-normal text-[#5f6368] tracking-[-0.01em]">
                  Google Maps Platform
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-0">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.disabled ? (
                    <button
                      disabled
                      className="flex items-center space-x-1 px-4 py-2 text-sm font-medium text-[#5f6368] opacity-50 cursor-not-allowed"
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium transition-colors duration-200 relative ${
                        isActivePage(item.href)
                          ? 'text-[#1a73e8]'
                          : 'text-[#5f6368] hover:text-[#1a73e8]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                      {isActivePage(item.href) && (
                        <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#1a73e8] rounded-full"></div>
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-3">
              <Button 
                variant="ghost"
                className="text-[#1a73e8] hover:bg-[#f8f9fa] hover:text-[#1a73e8] text-sm font-medium px-4 py-2"
              >
                Contact sales
              </Button>
              <Button 
                className="bg-[#1a73e8] hover:bg-[#1557b1] text-white text-sm font-medium px-6 py-2 rounded-md shadow-sm"
              >
                Get started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#5f6368] hover:text-[#1a73e8] p-2"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-[#e8eaed] bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                      isActivePage(item.href)
                        ? 'text-[#1a73e8] bg-[#f8f9fa]'
                        : 'text-[#5f6368] hover:text-[#1a73e8] hover:bg-[#f8f9fa]'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  <Button 
                    variant="ghost"
                    className="w-full justify-start text-[#1a73e8] hover:bg-[#f8f9fa]"
                  >
                    Contact sales
                  </Button>
                  <Button 
                    className="w-full bg-[#1a73e8] hover:bg-[#1557b1] text-white"
                  >
                    Get started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Google Footer */}
      <footer className="bg-[#f8f9fa] border-t border-[#e8eaed] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path fill="#4285f4" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle fill="#ffffff" cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                <span className="text-lg font-medium text-[#202124]">Shimona Dubey</span>
              </div>
              <p className="text-[#5f6368] mb-6 max-w-md text-sm leading-relaxed">
                Technical Product Manager specializing in geo-location platforms and third-party integrations. 
                Building products that delight millions of users worldwide.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/shimona-dubey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5f6368] hover:text-[#1a73e8] transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:shimona.dubey@email.com"
                  className="text-[#5f6368] hover:text-[#1a73e8] transition-colors duration-200"
                >
                  Email
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-medium text-[#202124] mb-4">Portfolio</h4>
              <ul className="space-y-3">
                {[
                  { label: "Why Me", href: "/why-me" },
                  { label: "About", href: "/about" },
                  { label: "Challenges", href: "/challenges" },
                  { label: "Solutions", href: "/solutions" },
                  { label: "Contact", href: "/contact" }
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-[#5f6368] hover:text-[#1a73e8] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-medium text-[#202124] mb-4">Connect</h4>
              <div className="space-y-3">
                <p className="text-sm text-[#5f6368]">shimona.dubey@email.com</p>
                <p className="text-sm text-[#5f6368]">Boston, MA</p>
                <p className="text-sm text-[#5f6368]">Available for Google Geo TPM role</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#e8eaed] mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-[#5f6368]">
                © 2025 Shimona Dubey. All rights reserved.
              </p>
              <p className="text-sm text-[#5f6368] mt-2 md:mt-0">
                Built with precision for Google's standards
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;