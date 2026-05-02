"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Compass, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-900 flex items-center justify-center p-6 relative overflow-hidden transition-colors">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-600/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center group">
            <div className="relative w-64 h-16 transition-transform duration-500 group-hover:scale-105">
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
        </div>

        {/* Login Card */}
        <div className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-2xl p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/50 dark:border-white/5">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Welcome Back</h1>
            <p className="text-slate-500 dark:text-slate-400 font-bold text-sm uppercase tracking-widest">Sign in to your account</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-4">Email Address</label>
              <div className="relative">
                <input type="email" placeholder="name@example.com" className="w-full bg-slate-100/50 dark:bg-dark-900/50 border-none rounded-2xl px-6 py-4 pl-12 text-slate-900 dark:text-white font-bold placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-brand-500 transition-all outline-none" />
                <Mail className="w-5 h-5 text-slate-300 dark:text-slate-600 absolute left-4 top-4.5" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-4">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Password</label>
                <Link href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400 hover:text-brand-700 transition-colors">Forgot?</Link>
              </div>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  className="w-full bg-slate-100/50 dark:bg-dark-900/50 border-none rounded-2xl px-6 py-4 pl-12 text-slate-900 dark:text-white font-bold placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-brand-500 transition-all outline-none" 
                />
                <Lock className="w-5 h-5 text-slate-300 dark:text-slate-600 absolute left-4 top-4.5" />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4.5 text-slate-300 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button className="w-full bg-brand-500 hover:bg-brand-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-brand-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 uppercase tracking-widest text-xs mt-8">
              Sign In
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-10">
            <div className="relative flex items-center mb-8">
              <div className="flex-grow border-t border-slate-100 dark:border-white/5"></div>
              <span className="flex-shrink mx-4 text-[10px] font-black uppercase tracking-widest text-slate-300 dark:text-slate-600">Or continue with</span>
              <div className="flex-grow border-t border-slate-100 dark:border-white/5"></div>
            </div>
            {/* Social logins can be added here */}
          </div>
        </div>

        <p className="mt-10 text-center text-slate-500 dark:text-slate-400 font-bold text-sm">
          Don't have an account? <Link href="#" className="text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors">Join Wonder Ceylon</Link>
        </p>
      </div>
    </div>
  );
}
