"use client";

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, ShieldCheck, Lock, CreditCard, Calendar, Users, MapPin, ArrowLeft } from 'lucide-react';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const tourTitle = searchParams.get('tour') || "Selected Tour";
  const date = searchParams.get('date') || "Not selected";
  const guests = searchParams.get('guests') || "1";
  const total = searchParams.get('total') || "0";

  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="bg-white dark:bg-dark-800 rounded-[3rem] shadow-2xl p-12 text-center max-w-2xl mx-auto border border-slate-50 dark:border-white/5 mt-10 animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>
        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">Booking Confirmed!</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-10 text-lg font-medium leading-relaxed">
          Thank you for choosing Wonder Ceylon. Your booking for <span className="text-slate-900 dark:text-white font-black">"{tourTitle}"</span> has been successfully processed.
        </p>
        <Link href="/" className="bg-dark-900 dark:bg-white dark:text-dark-900 hover:bg-black dark:hover:bg-brand-500 dark:hover:text-white text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all inline-block shadow-xl shadow-dark-900/20 active:scale-95">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Checkout Form */}
      <div className="w-full lg:w-2/3">
        <div className="bg-white dark:bg-dark-800 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] dark:shadow-none p-10 border border-slate-50 dark:border-white/5">
          <div className="flex items-center gap-3 mb-10 pb-6 border-b border-slate-50 dark:border-white/5">
            <div className="bg-brand-50 dark:bg-brand-900/30 p-3 rounded-2xl">
              <Users className="w-6 h-6 text-brand-600 dark:text-brand-400" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Traveler Details</h2>
          </div>
          
          <form onSubmit={handleSubmit} id="checkout-form" className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-4">First Name</label>
                <input required type="text" className="w-full bg-slate-50 dark:bg-dark-900 border-none rounded-2xl px-6 py-4 text-slate-900 dark:text-white font-bold placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-brand-500 transition-all outline-none" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-4">Last Name</label>
                <input required type="text" className="w-full bg-slate-50 dark:bg-dark-900 border-none rounded-2xl px-6 py-4 text-slate-900 dark:text-white font-bold placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-brand-500 transition-all outline-none" placeholder="Doe" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-4">Email Address</label>
                <input required type="email" className="w-full bg-slate-50 dark:bg-dark-900 border-none rounded-2xl px-6 py-4 text-slate-900 dark:text-white font-bold placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-brand-500 transition-all outline-none" placeholder="john@example.com" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-4">Phone Number</label>
                <input required type="tel" className="w-full bg-slate-50 dark:bg-dark-900 border-none rounded-2xl px-6 py-4 text-slate-900 dark:text-white font-bold placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-brand-500 transition-all outline-none" placeholder="+94 77 000 0000" />
              </div>
            </div>

            <div className="pt-10 border-t border-slate-50 dark:border-white/5">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-brand-50 dark:bg-brand-900/30 p-3 rounded-2xl">
                  <CreditCard className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Payment Method</h2>
              </div>
              
              <div className="bg-slate-50 dark:bg-dark-900 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 mb-10 relative overflow-hidden transition-colors">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <ShieldCheck className="w-32 h-32" />
                </div>
                
                <div className="flex items-center gap-2 mb-8">
                  <Lock className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                  <span className="text-xs font-black uppercase tracking-widest text-slate-600 dark:text-slate-400">Secure 256-bit Encryption</span>
                </div>
                
                <div className="space-y-6 relative z-10">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-2">Card Number</label>
                    <div className="relative">
                      <input required type="text" className="w-full bg-white dark:bg-dark-800 border-none rounded-2xl pl-12 pr-6 py-4 text-slate-900 dark:text-white font-bold placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-brand-500 transition-all outline-none" placeholder="0000 0000 0000 0000" />
                      <CreditCard className="w-5 h-5 text-slate-300 dark:text-slate-600 absolute left-4 top-4.5" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-2">Expiry Date</label>
                      <input required type="text" className="w-full bg-white dark:bg-dark-800 border-none rounded-2xl px-6 py-4 text-slate-900 dark:text-white font-bold placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-brand-500 transition-all outline-none" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-2">CVC</label>
                      <input required type="password" maxLength={4} className="w-full bg-white dark:bg-dark-800 border-none rounded-2xl px-6 py-4 text-slate-900 dark:text-white font-bold placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-brand-500 transition-all outline-none" placeholder="123" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              type="submit" 
              form="checkout-form"
              disabled={isProcessing}
              className="w-full bg-brand-500 hover:bg-brand-600 disabled:bg-slate-300 dark:disabled:bg-dark-700 disabled:cursor-not-allowed text-white font-black py-6 rounded-[1.5rem] flex items-center justify-center gap-3 transition-all shadow-xl shadow-brand-500/20 text-sm uppercase tracking-[0.2em] hover:-translate-y-1 active:scale-[0.98]"
            >
              {isProcessing ? (
                <div className="h-6 w-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5" />
                  Complete Payment of ${total}
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Order Summary */}
      <div className="w-full lg:w-1/3">
        <div className="bg-white/95 dark:bg-dark-800/95 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:shadow-none p-10 border border-slate-50 dark:border-white/5 sticky top-32">
          <h2 className="text-xl font-black text-slate-900 dark:text-white mb-8 border-b border-slate-50 dark:border-white/5 pb-6 tracking-tight">Booking Summary</h2>
          
          <div className="space-y-6 mb-10">
            {[
              { icon: <MapPin className="w-5 h-5" />, label: "Tour", val: tourTitle },
              { icon: <Calendar className="w-5 h-5" />, label: "Date", val: date },
              { icon: <Users className="w-5 h-5" />, label: "Guests", val: guests }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="bg-slate-50 dark:bg-dark-900 p-2.5 rounded-xl text-brand-600 dark:text-brand-400">
                  {item.icon}
                </div>
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">{item.label}</span>
                  <span className="block font-black text-slate-900 dark:text-white leading-tight">{item.val}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="pt-8 border-t border-slate-100 dark:border-white/5 mb-8 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Subtotal</span>
              <span className="font-black text-slate-900 dark:text-white text-lg">${total}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Taxes</span>
              <span className="font-black text-slate-900 dark:text-white text-lg">$0.00</span>
            </div>
            <div className="flex justify-between items-center pt-6 mt-6 border-t border-slate-100 dark:border-white/5">
              <span className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Total Due</span>
              <span className="text-3xl font-black text-brand-600 dark:text-brand-400 tracking-tighter">${total}</span>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-dark-900 p-6 rounded-2xl flex items-center gap-4 border border-slate-100 dark:border-white/5">
            <div className="bg-white dark:bg-dark-800 p-2 rounded-xl shadow-sm">
              <ShieldCheck className="w-6 h-6 text-brand-600 dark:text-brand-400" />
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-bold leading-relaxed uppercase tracking-wider">
              Secure 256-bit encrypted checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 dark:bg-dark-900 transition-colors">
      <div className="container mx-auto px-6">
        <Link href="/tours" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 dark:hover:text-white font-black text-xs uppercase tracking-[0.2em] mb-10 transition-colors group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Tours
        </Link>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-16 tracking-tighter text-center uppercase">Secure Checkout</h1>
        <Suspense fallback={<div className="text-center py-20 text-slate-500 font-bold text-xl animate-pulse uppercase tracking-widest">Establishing secure connection...</div>}>
          <CheckoutContent />
        </Suspense>
      </div>
    </div>
  );
}
