import { useState } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'audit', label: 'Profit Recovery Audit' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'articles', label: 'Articles' },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const scrollToSection = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     const offset = 80;
  //     const elementPosition = element.getBoundingClientRect().top;
  //     const offsetPosition = elementPosition + window.pageYOffset - offset;

  //     window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  //     setIsMenuOpen(false);
  //   }
  // };

  return (
    <nav className="bg-[#4A7EC1] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            
            <div className="text-2xl font-bold flex items-center">
              <span className="text-green-300 mr-1">🏛</span>
              <span className="font-semibold">FinServe</span>
              <span className="text-gray-300 ml-1">360</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-[#6BA3E8] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button className="hidden md:block bg-[#6BA3E8] hover:bg-[#5A92D7] text-white px-6 py-2.5 rounded-md shadow-md transition-all hover:shadow-lg">
            Book a Call
          </button>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 border-t border-white/20 pt-4">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-white hover:text-[#6BA3E8] transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <button className="w-full bg-[#6BA3E8] hover:bg-[#5A92D7] text-white px-6 py-2.5 rounded-md shadow-md transition-all">
              Book a Call
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
