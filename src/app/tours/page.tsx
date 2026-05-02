"use client";

import Link from 'next/link';
import { Star, Clock, Filter, ChevronDown, ArrowRight, MapPin } from 'lucide-react';

export default function ToursListing() {
  const allTours = [
    {
      id: 1,
      title: "Essential Cultural Triangle",
      duration: "5 Days",
      price: "$450",
      rating: 4.9,
      reviews: 128,
      category: "Culture",
      image: "https://images.pexels.com/photos/2444403/pexels-photo-2444403.jpeg",
      description: "Explore the ancient cities of Anuradhapura, Polonnaruwa, and the majestic Sigiriya Rock Fortress. A deep dive into Sri Lanka's rich history."
    },
    {
      id: 2,
      title: "Yala Wildlife Safari",
      duration: "3 Days",
      price: "$320",
      rating: 4.8,
      reviews: 94,
      category: "Wildlife",
      image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
      description: "Experience the thrill of spotting leopards, elephants, and exotic birds in their natural habitat at Yala National Park."
    },
    {
      id: 3,
      title: "Ella Train Journey & Tea Trails",
      duration: "4 Days",
      price: "$380",
      rating: 5.0,
      reviews: 215,
      category: "Scenic",
      image: "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg",
      description: "Take the world's most scenic train ride and wander through lush green tea plantations in the central highlands."
    },
    {
      id: 4,
      title: "Galle Fort & South Coast Beach",
      duration: "4 Days",
      price: "$400",
      rating: 4.7,
      reviews: 156,
      category: "Beach",
      image: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg",
      description: "Relax on pristine golden beaches and explore the historic UNESCO World Heritage site of Galle Dutch Fort."
    },
    {
      id: 5,
      title: "Ultimate Island Explorer",
      duration: "10 Days",
      price: "$1200",
      rating: 4.9,
      reviews: 302,
      category: "Comprehensive",
      image: "https://images.pexels.com/photos/1650829/pexels-photo-1650829.jpeg",
      description: "The complete Sri Lankan experience. Beaches, wildlife, culture, and highlands all packed into one unforgettable journey."
    },
    {
      id: 6,
      title: "Adam's Peak Trekking Adventure",
      duration: "2 Days",
      price: "$150",
      rating: 4.6,
      reviews: 87,
      category: "Adventure",
      image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg",
      description: "A challenging overnight trek to the sacred summit of Adam's Peak to witness the most spectacular sunrise in the country."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-900 transition-colors">
      {/* Immersive Header Banner */}
      <div className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[20s] scale-110"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg')" }}
        >
          <div className="absolute inset-0 bg-dark-900/60 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="container relative z-10 px-6 mx-auto text-center pt-20">
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-md mb-6">
            <MapPin className="w-3.5 h-3.5 text-brand-400" />
            <span>Discover Sri Lanka</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter drop-shadow-2xl">
            Explore Our <span className="text-brand-400">Premium Tours</span>
          </h1>
          <p className="text-slate-200 max-w-2xl mx-auto text-lg font-medium opacity-90">
            From the misty mountains to the golden shores, find your perfect adventure.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-10 relative z-20 pb-24">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white/95 dark:bg-dark-800/95 backdrop-blur-xl p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-white/5 sticky top-32 transition-colors">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-50 dark:border-white/5">
                <div className="bg-brand-50 dark:bg-brand-900/30 p-2 rounded-xl">
                  <Filter className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                </div>
                <h2 className="font-black text-xl text-slate-900 dark:text-white tracking-tight">Filters</h2>
              </div>
              
              <div className="mb-8">
                <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-4 text-sm uppercase tracking-wider">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {["All", "Culture", "Wildlife", "Beach", "Scenic", "Adventure"].map((cat, i) => (
                    <button key={i} className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                      i === 0 
                        ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20' 
                        : 'bg-slate-50 dark:bg-dark-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-dark-700'
                    }`}>
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-4 text-sm uppercase tracking-wider">Price Range</h3>
                <input type="range" className="w-full accent-brand-500 h-1.5 bg-slate-100 dark:bg-dark-900 rounded-lg appearance-none cursor-pointer" />
                <div className="flex justify-between mt-2 text-xs font-bold text-slate-400">
                  <span>$100</span>
                  <span>$2000+</span>
                </div>
              </div>

              <button className="w-full bg-dark-900 dark:bg-white dark:text-dark-900 text-white font-black py-4 rounded-2xl hover:bg-black dark:hover:bg-brand-500 dark:hover:text-white transition-all shadow-xl active:scale-95 uppercase tracking-widest text-xs">
                Apply Search
              </button>
            </div>
          </div>

          {/* Tours Grid */}
          <div className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-10 px-2">
              <p className="text-slate-500 dark:text-slate-400 font-bold text-sm">Showing <span className="text-slate-900 dark:text-white">{allTours.length} premium tours</span></p>
              <div className="flex items-center gap-2 cursor-pointer bg-white dark:bg-dark-800 px-4 py-2 rounded-xl border border-slate-100 dark:border-white/5 shadow-sm transition-colors">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Sort by: <span className="text-brand-600 dark:text-brand-400">Featured</span></span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {allTours.map((tour) => (
                <Link href={`/tours/${tour.id}`} key={tour.id} className="group bg-white dark:bg-dark-800 rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-slate-50 dark:border-white/5 block transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute top-6 left-6 z-10 bg-white/95 dark:bg-dark-900/95 backdrop-blur-md text-slate-900 dark:text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                      {tour.category}
                    </div>
                    <div className="absolute top-6 right-6 z-10 bg-brand-500 text-white px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                      <Star className="w-3 h-3 fill-white" />
                      <span className="font-black text-xs">{tour.rating}</span>
                    </div>
                    <img 
                      src={tour.image} 
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-3 text-[11px] font-black text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-3">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{tour.duration} Journey</span>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-brand-500 transition-colors leading-tight">{tour.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed font-medium line-clamp-2">
                      {tour.description}
                    </p>
                    
                    <div className="flex justify-between items-center pt-6 border-t border-slate-50 dark:border-white/5">
                      <div>
                        <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest block mb-1">From</span>
                        <span className="text-2xl font-black text-slate-900 dark:text-white">{tour.price}</span>
                      </div>
                      <div className="bg-slate-50 dark:bg-dark-900 group-hover:bg-brand-500 group-hover:text-white text-slate-400 dark:text-slate-600 p-4 rounded-2xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-500/25">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
