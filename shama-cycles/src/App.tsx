import { useState } from 'react';
import { Menu, X, Home, User, Settings, Mail } from 'lucide-react';

export default function ResponsiveWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header/Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl sm:text-2xl font-bold text-blue-600">YourLogo</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 transition">
                <Home className="w-4 h-4 mr-2" />
                Home
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 transition">
                <User className="w-4 h-4 mr-2" />
                About
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 transition">
                <Settings className="w-4 h-4 mr-2" />
                Services
              </a>
              <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 transition">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </a>
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
          <div className="md:hidden border-t border-gray-200">
            <nav className="px-4 py-3 space-y-2">
              <a href="#" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <Home className="w-4 h-4 mr-3" />
                Home
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <User className="w-4 h-4 mr-3" />
                About
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <Settings className="w-4 h-4 mr-3" />
                Services
              </a>
              <a href="#" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <Mail className="w-4 h-4 mr-3" />
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Welcome to Your Site
            </h2>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              This is a fully responsive website that looks great on any device
            </p>
            <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Our Features
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Feature Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Home className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Feature One</h4>
            <p className="text-gray-600">
              Description of your first feature goes here. Keep it concise and engaging.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <User className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Feature Two</h4>
            <p className="text-gray-600">
              Description of your second feature goes here. Make it compelling.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Settings className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Feature Three</h4>
            <p className="text-gray-600">
              Description of your third feature goes here. Highlight the benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h5 className="font-semibold mb-4">About</h5>
              <p className="text-gray-400 text-sm">
                Your company description goes here.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Links</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: info@example.com</li>
                <li>Phone: (123) 456-7890</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Social</a>
                <a href="#" className="text-gray-400 hover:text-white">Links</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 Your Company. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}