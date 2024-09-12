import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">To Let Home Finder</h2>
          <p>&copy; 2023 To Let Home Finder. All rights reserved.</p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Quick Links</h2>
          <ul>
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Follow Us</h2>
          <ul className="flex space-x-4">
            <li>
              <a href="https://facebook.com" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-center">
        <p>Contact us: info@tolethomefinder.com | +1 234 567 890</p>
      </div>
    </footer>
  );
}

export default Footer;
