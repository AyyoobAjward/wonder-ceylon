"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Compass, Phone, Mail, Search, Globe, Moon, Sun } from 'lucide-react';
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Trust Bar */}
      <div className={`hidden md:block transition-all duration-500 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100 bg-dark-900/40 backdrop-blur-sm border-b border-white/10'}`}>
        <div className="max-w-7xl mx-auto h-full px-6 flex justify-between items-center text-[13px] font-medium text-white/80">
          <div className="flex items-center gap-6">
            <a href="tel:+94112345678" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-brand-400" />
              +94 112 345 678
            </a>
            <a href="mailto:info@wonderceylon.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-brand-400" />
              info@wonderceylon.com
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
              <Globe className="w-3.5 h-3.5" />
              English (US)
            </span>
            <div className="flex items-center gap-3">
              <Link href="/login" className="hover:text-white transition-colors">Login</Link>
              <span className="w-px h-3 bg-white/20"></span>
              <Link href="#" className="hover:text-white transition-colors">Register</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-xl shadow-lg py-3' 
          : 'bg-transparent py-6 md:py-8'
      }`}>
        <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className={`relative transition-all duration-500 ${
              isScrolled ? 'w-44 h-11' : 'w-52 h-14'
            }`}>
              {/* Logo for Dark Backgrounds (Hero or Dark Mode) */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${
                !isScrolled || resolvedTheme === 'dark' ? 'opacity-100' : 'opacity-0'
              }`}>
                <Image
                  src="/logo-dark.png"
                  alt="Wonder Ceylon Logo"
                  fill
                  className="object-contain mix-blend-screen"
                  priority
                />
              </div>
              {/* Logo for Light Backgrounds (Scrolled Light Mode) */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${
                isScrolled && resolvedTheme === 'light' ? 'opacity-100' : 'opacity-0'
              }`}>
                <Image
                  src="/logo-light.png"
                  alt="Wonder Ceylon Logo"
                  fill
                  className="object-contain mix-blend-multiply"
                  priority
                />
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 font-bold text-[13px] uppercase tracking-widest">
            {[
              { name: 'Home', href: '/' },
              { name: 'Tours', href: '/tours' },
              { name: 'Taxi', href: '/taxi' },
              { name: 'Hotels', href: '/hotels' },
              { name: 'About', href: '/about#about-us' },
              { name: 'Contact', href: '/about#contact-us' }
            ].map((item, idx) => (
              <Link key={idx} href={item.href} className="relative group">
                <span className={`transition-colors duration-300 ${
                  isScrolled ? 'text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400' : 'text-white/90 hover:text-white'
                }`}>
                  {item.name}
                </span>
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-brand-500' : 'bg-brand-400'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-all duration-300 hover:bg-slate-100 dark:hover:bg-white/10 ${
                isScrolled ? 'text-slate-700 dark:text-white' : 'text-white'
              }`}
            >
              {resolvedTheme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button className={`p-2.5 rounded-full transition-all duration-300 hover:bg-slate-100 dark:hover:bg-white/10 ${
              isScrolled ? 'text-slate-700 dark:text-white' : 'text-white'
            }`}>
              <Search className="w-5 h-5" />
            </button>
            
            <Link href="/tours" className={`hidden md:flex px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${
              isScrolled 
                ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25 hover:bg-brand-600' 
                : 'bg-white text-dark-900 shadow-xl shadow-black/5 hover:bg-slate-50'
            }`}>
              Book Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className={`lg:hidden p-2.5 rounded-xl transition-all ${
                isScrolled ? 'bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-white' : 'bg-white/10 text-white backdrop-blur-md'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-dark-900 shadow-2xl p-8 flex flex-col gap-5 text-slate-900 dark:text-white font-black text-lg border-t border-slate-100 dark:border-white/5 animate-in fade-in slide-in-from-top-4 duration-300">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
          <Link href="/tours" onClick={() => setMobileMenuOpen(false)}>TOURS</Link>
          <Link href="/taxi" onClick={() => setMobileMenuOpen(false)}>TAXI</Link>
          <Link href="/hotels" onClick={() => setMobileMenuOpen(false)}>HOTELS</Link>
          <Link href="/about#about-us" onClick={() => setMobileMenuOpen(false)}>ABOUT US</Link>
          <Link href="/about#contact-us" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
          <div className="flex flex-col gap-3 mt-4">
            <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white px-6 py-4 rounded-2xl text-center font-black uppercase tracking-widest text-xs">
              LOG IN
            </Link>
            <Link href="/tours" onClick={() => setMobileMenuOpen(false)} className="bg-brand-500 text-white px-6 py-4 rounded-2xl text-center font-black uppercase tracking-widest text-xs shadow-xl shadow-brand-500/20">
              BOOK A TOUR
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}



