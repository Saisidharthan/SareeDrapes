import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-amber-200 bg-clip-text text-transparent">
                SareeGlow
              </span>
            </div>
            <p className="text-amber-100 mb-4">
              Timeless sarees, zero hassle. Pre-pleating service that makes you shine effortlessly.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-yellow-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-amber-200 hover:text-yellow-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-amber-100 hover:text-yellow-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-amber-100 hover:text-yellow-300 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-amber-100 hover:text-yellow-300 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-amber-100 hover:text-yellow-300 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-200">Services</h3>
            <ul className="space-y-2">
              <li className="text-amber-100">Classic Pre-Pleating</li>
              <li className="text-amber-100">Trendy Fusion Pleats</li>
              <li className="text-amber-100">Bridal Express</li>
              <li className="text-amber-100">Eco-Replenish Kit</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-200">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-amber-100">
                <Mail size={16} className="text-yellow-300" />
                <span>hello@sareeglow.com</span>
              </li>
              <li className="flex items-center space-x-2 text-amber-100">
                <Phone size={16} className="text-yellow-300" />
                <span>+91-98765-43210</span>
              </li>
              <li className="flex items-center space-x-2 text-amber-100">
                <MapPin size={16} className="text-yellow-300" />
                <span>Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-8 pt-8 text-center">
          <p className="text-amber-200">
            © 2025 SareeGlow. All rights reserved. | 
            <span className="text-yellow-300"> Saree Hacks for Busy Queens</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;