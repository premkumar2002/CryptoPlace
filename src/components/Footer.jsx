import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold mb-2 text-gray-200">CryptoPlace</h2>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-2 text-gray-200">Quick Links</h3>
            <ul className="text-sm flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <li><a href="/" className="hover:text-gray-200 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-gray-200 transition-colors">About</a></li>
              <li><a href="/services" className="hover:text-gray-200 transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-gray-200 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="text-center sm:text-right">
            <h3 className="text-lg font-semibold mb-2 text-gray-200">Connect With Us</h3>
            <div className="flex justify-center sm:justify-end space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200 transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="mailto:info@cryptoplace.com" className="text-gray-400 hover:text-gray-200 transition-colors">
                <Mail size={24} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-4 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} CryptoPlace. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

