"use client";

import Link from 'next/link';
import { Star, MapPin, Coffee, Wifi, Waves, ArrowRight, BedDouble } from 'lucide-react';

export default function HotelsPage() {
  const hotels = [
    {
      id: 1,
      name: "The Blue Water Hotel",
      location: "Wadduwa",
      rating: 4.9,
      reviews: 420,
      price: "$120",
      image: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg",
      tags: ["Beachfront", "Spa"]
    },
    {
      id: 2,
      name: "Heritage Kandy",
      location: "Kandy",
      rating: 4.7,
      reviews: 310,
      price: "$95",
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      tags: ["City Center", "Pool"]
    },
    {
      id: 3,
      name: "Wild Coast Lodge",
      location: "Yala",
      rating: 5.0,
      reviews: 185,
      price: "$450",
      image: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
      tags: ["Wildlife", "Luxury"]
    },
    {
      id: 4,
      name: "Tea Garden Resort",
      location: "Ella",
      rating: 4.8,
      reviews: 240,
      price: "$110",
      image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg",
      tags: ["Scenic", "Boutique"]
    },
    {
      id: 5,
      name: "Galle Fort Boutique",
      location: "Galle",
      rating: 4.9,
      reviews: 156,
      price: "$180",
      image: "https://images.pexels.com/photos/2034330/pexels-photo-2034330.jpeg",
      tags: ["Historic", "Gourmet"]
    },
    {
      id: 6,
      name: "Anantara Peace Haven",
      location: "Tangalle",
      rating: 5.0,
      reviews: 380,
      price: "$320",
      image: "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg",
      tags: ["Secluded", "Wellness"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-900 transition-colors">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[20s] scale-110"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg')" }}
        >
          <div className="absolute inset-0 bg-dark-900/60 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="container relative z-10 px-6 mx-auto text-center pt-20">
          <span className="inline-block py-1 px-4 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-400 text-xs font-black uppercase tracking-[0.2em] mb-6">
            Luxury Stays
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            Book <span className="text-brand-500">Premium Hotels</span>
          </h1>
          <p className="text-slate-200 max-w-2xl mx-auto text-lg font-medium opacity-90">
            Handpicked luxury accommodations for your perfect Sri Lankan getaway.
          </p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {hotels.map((hotel) => (
            <Link key={hotel.id} href={`/hotels/${hotel.id}`} className="group bg-white dark:bg-dark-800 rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.03)] dark:shadow-none border border-slate-50 dark:border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-6 left-6 z-10 flex gap-2">
                  {hotel.tags.map((tag, i) => (
                    <span key={i} className="bg-white/95 dark:bg-dark-900/95 backdrop-blur-md text-slate-900 dark:text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute top-6 right-6 z-10 bg-brand-500 text-white px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3 fill-white" />
                  <span className="font-black text-xs">{hotel.rating}</span>
                </div>
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 text-[10px] font-black text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{hotel.location}, Sri Lanka</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 group-hover:text-brand-500 transition-colors tracking-tight leading-tight">{hotel.name}</h3>
                
                <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-50 dark:border-white/5 text-slate-400 dark:text-slate-500">
                  <div className="flex items-center gap-4">
                    <Wifi className="w-5 h-5" />
                    <Coffee className="w-5 h-5" />
                    <Waves className="w-5 h-5" />
                    <BedDouble className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest">{hotel.reviews} Reviews</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest block mb-1">Per Night from</span>
                    <span className="text-2xl font-black text-slate-900 dark:text-white">{hotel.price}</span>
                  </div>
                  <div className="bg-dark-900 dark:bg-white dark:text-dark-900 hover:bg-brand-500 dark:hover:bg-brand-500 dark:hover:text-white text-white px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all shadow-lg flex items-center gap-2">
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
