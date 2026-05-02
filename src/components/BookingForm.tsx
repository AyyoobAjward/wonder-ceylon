"use client";

import { useState } from "react";
import { Calendar as CalendarIcon, Users, CreditCard, ChevronDown, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BookingForm({ price, tourTitle }: { price: number, tourTitle: string }) {
  const router = useRouter();
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState("");

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (date) {
      router.push(`/checkout?tour=${encodeURIComponent(tourTitle)}&guests=${guests}&date=${date}&total=${price * guests}`);
    } else {
      alert("Please select a date first.");
    }
  };

  return (
    <div className="bg-white dark:bg-dark-800 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-slate-50 dark:border-white/5 overflow-hidden">
      <div className="bg-slate-50 dark:bg-dark-900/50 p-8 border-b border-slate-100 dark:border-white/5 flex justify-between items-end transition-colors">
        <div>
          <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest block mb-1">Price per person</span>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">${price}</span>
            <span className="text-slate-400 text-xs font-bold">USD</span>
          </div>
        </div>
      </div>

      <div className="p-8">
        <form onSubmit={handleBooking} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-2">Select Date</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <CalendarIcon className="h-4 w-4 text-brand-500" />
              </div>
              <input 
                type="date" 
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="block w-full pl-12 pr-5 py-4 border-none rounded-2xl bg-slate-50 dark:bg-dark-900 font-bold text-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-brand-500 transition-all text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 ml-2">Total Guests</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Users className="h-4 w-4 text-brand-500" />
              </div>
              <select 
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="block w-full pl-12 pr-10 py-4 border-none rounded-2xl bg-slate-50 dark:bg-dark-900 font-bold text-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-brand-500 transition-all text-sm appearance-none"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-50 dark:border-white/5 mt-8">
            <div className="flex justify-between items-center mb-8">
              <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Total Payment</span>
              <span className="text-3xl font-black text-brand-600 dark:text-brand-400 tracking-tighter">${price * guests}</span>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-brand-500 hover:bg-brand-600 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-brand-500/20 active:scale-[0.98] uppercase tracking-widest text-xs group"
            >
              Confirm Booking
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
