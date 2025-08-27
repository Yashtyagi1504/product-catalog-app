import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white p-6 mt-6">
      <div className="flex flex-col md:flex-row justify-between gap-6 text-center md:text-left">
        <div>
          <h3 className="font-bold mb-2">Filters</h3>
          <p>All</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">About Us</h3>
          <p>About Us</p>
          <p>Contact</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-3">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
      </div>
      <p className="text-center mt-4">© 2024 American</p>
    </footer>
  );
};

export default Footer;
