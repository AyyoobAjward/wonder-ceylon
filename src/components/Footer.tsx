"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Globe, Camera, MessageCircle, ShieldCheck, CreditCard, Lock, Compass, ArrowRight, Share2 } from 'lucide-react';

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <footer className="bg-white dark:bg-dark-950 h-96"></footer>;

  return (
    <footer className="relative bg-white dark:bg-dark-950 text-slate-500 dark:text-slate-400 pt-32 pb-12 border-t border-slate-200/50 dark:border-white/5 transition-colors overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/5 blur-[120px] rounded-full -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-500/5 blur-[100px] rounded-full translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          {/* Brand & Mission */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center group mb-10">
              <div className="relative w-56 h-14 transition-transform duration-500 group-hover:scale-105">
                {/* Logo for Dark Mode */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  resolvedTheme === 'dark' ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Image
                    src="/logo-dark.png"
                    alt="Wonder Ceylon Logo"
                    fill
                    className="object-contain mix-blend-screen"
                  />
                </div>
                {/* Logo for Light Mode */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  resolvedTheme === 'light' ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Image
                    src="/logo-light.png"
                    alt="Wonder Ceylon Logo"
                    fill
                    className="object-contain mix-blend-multiply"
                  />
                </div>
              </div>
            </Link>
            <p className="text-lg font-medium leading-relaxed mb-10 text-slate-600 dark:text-slate-300 max-w-md">
              Crafting premium travel experiences across the pearl of the Indian Ocean. We combine local expertise with luxury standards to show you the heart of Sri Lanka.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <Globe className="w-5 h-5" />, label: 'Website' },
                { icon: <Camera className="w-5 h-5" />, label: 'Instagram' },
                { icon: <MessageCircle className="w-5 h-5" />, label: 'WhatsApp' },
                { icon: <Share2 className="w-5 h-5" />, label: 'Share' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  aria-label={social.label}
                  className="h-12 w-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-brand-500 hover:text-white hover:border-brand-500 hover:-translate-y-1 transition-all shadow-sm active:scale-95"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation & Services */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-slate-900 dark:text-white font-black uppercase tracking-[0.2em] text-[11px] mb-10">Exploration</h3>
              <ul className="flex flex-col gap-5">
                {[
                  { name: 'Tour Packages', href: '/tours' },
                  { name: 'Taxi Service', href: '/taxi' },
                  { name: 'Hotel Booking', href: '/hotels' },
                  { name: 'Private Guide', href: '#' }
                ].map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-[11px] font-bold uppercase tracking-widest hover:text-brand-500 transition-colors flex items-center group">
                      <span className="w-0 h-px bg-brand-500 transition-all group-hover:w-4 mr-0 group-hover:mr-2"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-slate-900 dark:text-white font-black uppercase tracking-[0.2em] text-[11px] mb-10">Company</h3>
              <ul className="flex flex-col gap-5">
                {[
                  { name: 'Our Story', href: '/about#about-us' },
                  { name: 'Privacy Policy', href: '#' },
                  { name: 'Terms of Service', href: '#' },
                  { name: 'Contact Us', href: '/about#contact-us' }
                ].map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-[11px] font-bold uppercase tracking-widest hover:text-brand-500 transition-colors flex items-center group">
                      <span className="w-0 h-px bg-brand-500 transition-all group-hover:w-4 mr-0 group-hover:mr-2"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="lg:col-span-3">
            <h3 className="text-slate-900 dark:text-white font-black uppercase tracking-[0.2em] text-[11px] mb-10">Stay Inspired</h3>
            <p className="text-[11px] font-bold uppercase tracking-widest mb-6 text-slate-500 dark:text-slate-500">Join our luxury travel circle for exclusive offers</p>
            <div className="relative mb-8 group">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-5 text-[10px] font-black tracking-widest outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand-500 text-white px-5 rounded-xl hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/20 active:scale-95 group-focus-within:scale-105">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-dark-950 bg-slate-200 dark:bg-dark-800 flex items-center justify-center text-[10px] font-bold overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <span className="text-brand-500">500+</span> Explorers joined
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-200/50 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em]">
            <p className="opacity-60">
              © {new Date().getFullYear()} Wonder Ceylon Travel Sri Lanka
            </p>
            <div className="hidden md:flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
              <p className="text-brand-600 dark:text-brand-400">
                Designed for explorers
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/5">
               <ShieldCheck className="w-4 h-4 text-brand-500" />
               <span className="text-[9px] font-black uppercase tracking-widest">Secure</span>
             </div>
             <div className="flex items-center gap-6">
                <span className="text-[10px] font-black">VISA</span>
                <span className="text-[10px] font-black">MASTERCARD</span>
                <span className="text-[10px] font-black">AMEX</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
