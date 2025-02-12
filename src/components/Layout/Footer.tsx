import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-warm-white border-t border-golden/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl mb-4">
              <span className="font-garamond font-semibold">BISHA</span> events
            </h3>

            <p className="text-gray-600">
              Creating unforgettable moments with elegance and sophistication.
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-xl mb-4">Contact Us</h4>
            <div className="space-y-2">
              <p className="flex items-center justify-center gap-2">
                <a href="https://wa.me/923218421990" className="flex items-center gap-2">
                  <Phone size={16} className="text-golden" />
                  <span>+92 321 8421990</span>
                </a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <a href="mailto:contact@bishaevents.com" className="flex items-center gap-2">
                  <Mail size={16} className="text-golden" />
                  <span>contact@bishaevents.com</span>
                </a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <a
                  href="https://www.google.com/maps/place/Phase+6,+Lahore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MapPin size={16} className="text-golden" />
                  <span>Phase 6, Lahore</span>
                </a>
              </p>
            </div>
          </div>


          <div className="text-center md:text-right">
            <h4 className="text-xl mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="" className="text-golden hover:text-golden/80 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/bishaevents_/" className="text-golden hover:text-golden/80 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="mailto:contact@bishaevents.com" className="text-golden hover:text-golden/80 transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://wa.me/923218421990" className="text-golden hover:text-golden/80 transition-colors">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-golden/20 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Bisha Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;