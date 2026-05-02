"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Car, Star, Users, Briefcase, Check, ArrowRight, MapPin, Shield, Clock, ArrowLeft, Navigation, ShieldCheck, Zap } from 'lucide-react';
import { useState } from 'react';

export default function TaxiDetails() {
  const params = useParams();
  const id = params.id;

  // Mock data for the vehicle
  const vehicles = [
    {
      id: 1,
      name: "Standard Sedan",
      type: "Budget Friendly",
      passengers: 3,
      luggage: 2,
      price: 0.50,
      image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      features: ["Dual-Zone AC", "Professional English Speaking Driver", "Clean & Sanitized Interior", "Complimentary Water", "Child Seat (On Request)"]
    },
    {
      id: 2,
      name: "Premium SUV",
      type: "Family & Comfort",
      passengers: 6,
      luggage: 4,
      price: 0.80,
      image: "https://images.pexels.com/photos/977003/pexels-photo-977003.jpeg",
      features: ["Extra Legroom", "Spacious Trunk", "Safe for Kids", "Premium Sound System", "Leather Interior"]
    }
  ];

  const vehicle = vehicles.find(v => v.id.toString() === id) || vehicles[0];

  const [pickup, setPickup] = useState("Colombo International Airport (BIA)");
  const [dropoff, setDropoff] = useState("Galle Fort, Southern Province");
  const distance = 120; // km
  const totalCost = (vehicle.price * distance).toFixed(2);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-900 transition-colors pt-24 pb-24">
      <div className="container mx-auto px-6">
        {/* Navigation */}
        <Link href="/taxi" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 dark:hover:text-white font-black text-xs uppercase tracking-[0.2em] mb-10 transition-colors group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Transfers
        </Link>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            {/* Vehicle Showreel */}
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl mb-12 group">
              <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 text-white z-10">
                <div className="bg-brand-500 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 inline-block shadow-lg">
                  {vehicle.type}
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-2">{vehicle.name}</h1>
                <div className="flex items-center gap-6 opacity-80 font-bold text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{vehicle.passengers} Passengers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{vehicle.luggage} Large Bags</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Details & Specs Card */}
            <div className="bg-white dark:bg-dark-800 rounded-[3rem] p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-slate-50 dark:border-white/5 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-widest text-xs">Vehicle Specifications</h3>
                  <div className="space-y-6">
                    {vehicle.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-4 text-slate-600 dark:text-slate-400 font-medium">
                        <div className="bg-brand-50 dark:bg-brand-900/30 p-1.5 rounded-full text-brand-600 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-dark-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Car className="w-32 h-32" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-widest text-xs relative z-10">Safe & Professional</h3>
                  <div className="space-y-8 relative z-10">
                    <div className="flex gap-4">
                      <div className="bg-white dark:bg-dark-800 p-3 rounded-2xl shadow-sm text-brand-500">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 dark:text-white text-xs uppercase tracking-widest mb-1">Insured Journey</h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Full passenger liability cover</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-white dark:bg-dark-800 p-3 rounded-2xl shadow-sm text-brand-500">
                        <Navigation className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 dark:text-white text-xs uppercase tracking-widest mb-1">GPS Tracked</h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Real-time location monitoring</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-white dark:bg-dark-800 p-3 rounded-2xl shadow-sm text-brand-500">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900 dark:text-white text-xs uppercase tracking-widest mb-1">Flight Tracking</h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Free wait for flight delays</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking / Route Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32 space-y-8">
              <div className="bg-white dark:bg-dark-800 rounded-[3rem] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-slate-50 dark:border-white/5">
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-widest text-xs border-b border-slate-50 dark:border-white/5 pb-6">Instant Quote</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Pick-up Location</label>
                    <div className="bg-slate-50 dark:bg-dark-900 p-5 rounded-2xl border border-slate-100 dark:border-white/5 flex items-center gap-3 text-sm font-bold text-slate-900 dark:text-white">
                      <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                      <input value={pickup} onChange={(e) => setPickup(e.target.value)} className="bg-transparent outline-none w-full" />
                    </div>
                  </div>
                  
                  <div className="flex justify-center -my-2 relative z-10">
                    <div className="bg-brand-500 text-white p-2 rounded-full shadow-lg border-4 border-white dark:border-dark-800">
                      <Navigation className="w-4 h-4 rotate-180" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Drop-off Location</label>
                    <div className="bg-slate-50 dark:bg-dark-900 p-5 rounded-2xl border border-slate-100 dark:border-white/5 flex items-center gap-3 text-sm font-bold text-slate-900 dark:text-white">
                      <div className="w-2 h-2 rounded-full bg-brand-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                      <input value={dropoff} onChange={(e) => setDropoff(e.target.value)} className="bg-transparent outline-none w-full" />
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-dark-900 p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 mb-10">
                  <div className="flex justify-between items-center mb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <span>Distance (Est.)</span>
                    <span>{distance} KM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest">Total Price</span>
                    <span className="text-3xl font-black text-brand-500 tracking-tighter">${totalCost}</span>
                  </div>
                </div>

                <Link 
                  href={`/checkout?type=taxi&id=${id}&pickup=${encodeURIComponent(pickup)}&dropoff=${encodeURIComponent(dropoff)}&total=${totalCost}`}
                  className="w-full bg-brand-500 hover:bg-brand-600 text-white font-black py-6 rounded-[1.5rem] flex items-center justify-center gap-3 transition-all shadow-xl shadow-brand-500/20 text-sm uppercase tracking-[0.2em] active:scale-95 group"
                >
                  Confirm Transfer
                  <Zap className="w-4 h-4 transition-transform group-hover:scale-110" />
                </Link>
              </div>

              <div className="bg-brand-500 p-8 rounded-[2.5rem] text-white flex items-center gap-6 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                  <ShieldCheck className="w-20 h-20" />
                </div>
                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-black text-sm uppercase tracking-widest mb-1">Fixed Price Guarantee</h4>
                  <p className="text-[11px] opacity-80 font-bold uppercase tracking-wider">No hidden surge charges or waiting fees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
