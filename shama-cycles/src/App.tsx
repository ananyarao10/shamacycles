import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function ShamaCycles() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <span className="text-sm font-semibold text-gray-600">SHAMA</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 font-medium hover:text-red-600 transition">Home</a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition">About</a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition">Bikes</a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition">Services</a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition">Community</a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition">Our Race Team</a>
              <a href="#" className="text-gray-700 hover:text-red-600 transition">Contact Us</a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-3 space-y-2">
              <a href="#" className="block px-3 py-2 text-gray-900 font-medium hover:bg-gray-100 rounded-md">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">About</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Bikes</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Services</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Community</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Our Race Team</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Contact Us</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4">
                  SHAMA CYCLES
                </h1>
                <div className="h-1 bg-red-600 w-full mb-6"></div>
              </div>

              <div className="space-y-4">
                <p className="text-lg">
                  A home away from home for bike lovers.<br />
                  Personalized sales, bike fitting, and service.
                </p>
                <p className="text-lg">
                  Making every new bike sale, upgrade and service<br />
                  specific for the customer and their needs.
                </p>
              </div>

              <button className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
                <ArrowRight className="w-5 h-5" />
                <span>schedule a bike fit</span>
              </button>

              {/* Large Image Bottom Left */}
              <div className="mt-8 hidden lg:block">
                <div className="w-full h-80 bg-gray-300 rounded"></div>
              </div>
            </div>

            {/* Right Images */}
            <div className="space-y-4">
              <div className="w-full h-80 sm:h-96 bg-gray-300 rounded"></div>
              <div className="w-full h-64 sm:h-80 bg-gray-300 rounded"></div>
            </div>

            {/* Mobile Large Image */}
            <div className="lg:hidden">
              <div className="w-full h-80 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <span className="text-sm font-semibold text-gray-600">SHAMA</span>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap gap-4 text-sm">
              <a href="#" className="text-gray-900 font-medium border-l-2 border-red-600 pl-2">Home</a>
              <a href="#" className="text-gray-700 hover:text-red-600">About</a>
              <a href="#" className="text-gray-700 hover:text-red-600">Bikes</a>
              <a href="#" className="text-gray-700 hover:text-red-600">Services</a>
              <a href="#" className="text-gray-700 hover:text-red-600">Community</a>
              <a href="#" className="text-gray-700 hover:text-red-600">Our Race Team</a>
            </nav>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white hover:bg-blue-700 transition">
                f
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded flex items-center justify-center text-white hover:opacity-90 transition">
                ig
              </a>
            </div>
          </div>

          {/* Address & Copyright */}
          <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0 text-sm text-gray-600">
            <p>2000 Edwards St B150, Houston, TX 77007</p>
            <p>Copyright © 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}