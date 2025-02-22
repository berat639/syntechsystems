import { 
    MapPin, 
    Phone, 
    Mail, 
    Facebook, 
    Twitter, 
    Instagram, 
    Linkedin 
  } from 'lucide-react';
  
  const Footer = () => {
    return (
      <footer className="bg-white dark:bg-gray-900 shadow-sm pt-10 pb-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* İletişim Bilgileri */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Contact Info</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer group">
                <MapPin className="text-blue-500 group-hover:scale-110 transition-transform duration-200" size={18} /> 
                Konutkent, Dumlupınar Blv. No:381, 06810 Yenimahalle/Ankara
              </p>
              <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer group">
                <Phone className="text-blue-500 group-hover:scale-110 transition-transform duration-200" size={18} /> 
                +90 507 665 23 67
              </p>
              <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer group">
                <Mail className="text-blue-500 group-hover:scale-110 transition-transform duration-200" size={18} /> 
                info@syntechsystem.com
              </p>
            </div>
          </div>
  
          {/* Harita */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Location</h3>
            <div className="w-full h-48 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden bg-gray-100 dark:bg-gray-800">
              <iframe
                className="w-full h-full dark:invert-92 dark:grayscale dark:contrast-83"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.8897076223837!2d32.66409091744384!3d39.88483507943205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d339feefbc6b3b%3A0x67d020253f8258f7!2sSiSa%20Kule!5e0!3m2!1str!2str!4v1699387543999!5m2!1str!2str"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-hidden="false"
                tabIndex="0"
              />
            </div>
          </div>
  
          {/* Sosyal Medya */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Social</h3>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com/sirketiniz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 group"
              >
                <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a 
                href="https://twitter.com/sirketiniz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 group"
              >
                <Twitter className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a 
                href="https://instagram.com/sirketiniz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 group"
              >
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a 
                href="https://linkedin.com/company/sirketiniz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 group"
              >
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>
  
        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} SynTech. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;