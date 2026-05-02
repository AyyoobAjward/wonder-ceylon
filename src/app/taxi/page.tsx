"use client";

import Link from 'next/link';
import { Car, Star, Users, Briefcase, Check, ArrowRight, MapPin, Shield, Clock } from 'lucide-react';

export default function TaxiPage() {
  const vehicles = [
    {
      id: 1,
      name: "Standard Sedan",
      type: "Budget Friendly",
      passengers: 3,
      luggage: 2,
      price: "$0.50/km",
      image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      features: ["AC", "Professional Driver", "Clean Interior"]
    },
    {
      id: 2,
      name: "Premium SUV",
      type: "Family & Comfort",
      passengers: 6,
      luggage: 4,
      price: "$0.80/km",
      image: "https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg",
      features: ["Extra Legroom", "Spacious Trunk", "Safe for Kids"]
    },
    {
      id: 3,
      name: "Luxury Van",
      type: "Group Travels",
      passengers: 12,
      luggage: 10,
      price: "$1.20/km",
      image: "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg",
      features: ["Luxury Seating", "Entertainment System", "Wi-Fi Onboard"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-900 transition-colors">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[20s] scale-110"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/210143/pexels-photo-210143.jpeg')" }}
        >
          <div className="absolute inset-0 bg-dark-900/60 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="container relative z-10 px-6 mx-auto text-center pt-20">
          <span className="inline-block py-1 px-4 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-400 text-xs font-black uppercase tracking-[0.2em] mb-6">
            Airport & City Transfers
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            Book a <span className="text-brand-500">Premium Ride</span>
          </h1>
          <p className="text-slate-200 max-w-2xl mx-auto text-lg font-medium opacity-90">
            Professional chauffeurs and well-maintained vehicles for a safe journey across Sri Lanka.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {vehicles.map((vehicle) => (
            <Link key={vehicle.id} href={`/taxi/${vehicle.id}`} className="group bg-white dark:bg-dark-800 rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.03)] dark:shadow-none border border-slate-50 dark:border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-6 left-6 z-10 bg-white/95 dark:bg-dark-900/95 backdrop-blur-md text-slate-900 dark:text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                  {vehicle.type}
                </div>
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-brand-500 transition-colors tracking-tight leading-tight">{vehicle.name}</h3>
                
                <div className="flex gap-6 mb-8 pb-6 border-b border-slate-50 dark:border-white/5">
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-bold">
                    <Users className="w-4 h-4 text-brand-500" />
                    <span>{vehicle.passengers} Seats</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-bold">
                    <Briefcase className="w-4 h-4 text-brand-500" />
                    <span>{vehicle.luggage} Bags</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {vehicle.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm font-medium">
                      <div className="bg-brand-50 dark:bg-brand-900/30 p-1 rounded-full text-brand-600 dark:text-brand-400">
                        <Check className="w-3 h-3" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center pt-6 border-t border-slate-50 dark:border-white/5">
                  <div>
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest block mb-1">Rates from</span>
                    <span className="text-2xl font-black text-slate-900 dark:text-white">{vehicle.price}</span>
                  </div>
                  <div className="bg-dark-900 dark:bg-white dark:text-dark-900 hover:bg-brand-500 dark:hover:bg-brand-500 dark:hover:text-white text-white px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all shadow-lg flex items-center gap-2">
                    Book Ride
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Features Row */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-200 dark:border-white/5 pt-24">
          {[
            { icon: <MapPin />, title: "Live Tracking", desc: "Know exactly where your driver is with real-time tracking." },
            { icon: <Shield />, title: "Safe & Secure", desc: "All our drivers are background-checked and professionally trained." },
            { icon: <Clock />, title: "Fixed Pricing", desc: "No hidden fees. What you see is what you pay for your journey." }
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <div className="bg-white dark:bg-dark-800 w-16 h-16 rounded-[2rem] shadow-lg flex items-center justify-center text-brand-500 mx-auto mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 border border-slate-50 dark:border-white/5">
                {item.icon}
              </div>
              <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2">{item.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
