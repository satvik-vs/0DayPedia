import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-mono relative overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.1)_0%,rgba(0,0,0,0.9)_100%)]">
        <div className="absolute inset-0 matrix-grid"></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : ''}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold tracking-wider text-green-500">
              <span className="glitch-text">&lt;0daypedia/&gt;</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/about" 
                className={`transition-colors ${location.pathname === '/about' ? 'text-green-400' : 'text-gray-400 hover:text-green-400'}`}
              >
                About
              </Link>
              <Link 
                to="/community" 
                className={`transition-colors ${location.pathname === '/community' ? 'text-green-400' : 'text-gray-400 hover:text-green-400'}`}
              >
                Community
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors ${location.pathname === '/contact' ? 'text-green-400' : 'text-gray-400 hover:text-green-400'}`}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-32 md:pt-40">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-green-500/20 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-center sm:text-left">
              &copy; {new Date().getFullYear()} Pentesterpedia. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/satvikblog" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transform hover:scale-110 transition-all duration-300">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/satvik-vemulapalli" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transform hover:scale-110 transition-all duration-300">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;