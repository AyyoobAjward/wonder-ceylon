"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Star, MapPin, Coffee, Wifi, Waves, ArrowLeft, BedDouble, Check, ShieldCheck, Calendar, Users, Info } from 'lucide-react';
import { useState } from 'react';

export default function HotelDetails() {
  const params = useParams();
  const id = params.id;

  // Mock data for the hotel
  const hotel = {
    id: id,
    name: "The Blue Water Hotel",
    location: "Wadduwa",
    rating: 4.9,
    reviews: 420,
    price: 120,
    description: "Nestled among coconut groves along the pristine shores of Wadduwa, The Blue Water Hotel is a masterpiece of modern architecture and tropical elegance. Designed by the legendary Geoffrey Bawa, this resort offers a seamless blend of indoor and outdoor living, with expansive pools that seem to merge with the Indian Ocean.",
    images: [
      "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg",
      "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg"
    ],
    amenities: [
      { icon: <Wifi className="w-5 h-5" />, label: "Free High-Speed WiFi" },
      { icon: <Waves className="w-5 h-5" />, label: "Infinity Pool" },
      { icon: <Coffee className="w-5 h-5" />, label: "Complimentary Breakfast" },
      { icon: <BedDouble className="w-5 h-5" />, label: "King Size Beds" },
      { icon: <ShieldCheck className="w-5 h-5" />, label: "24/7 Security" }
    ],
    rooms: [
      { name: "Deluxe Ocean View", price: 120, beds: "1 King Bed", size: "45 sqm" },
      { name: "Executive Suite", price: 250, beds: "1 King Bed + Lounge", size: "85 sqm" },
      { name: "Presidential Villa", price: 580, beds: "2 King Beds", size: "150 sqm" }
    ]
  };

  const [selectedRoom, setSelectedRoom] = useState(hotel.rooms[0]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-900 transition-colors pt-24 pb-24">
      <div className="container mx-auto px-6">
        {/* Navigation */}
        <Link href="/hotels" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 dark:hover:text-white font-black text-xs uppercase tracking-[0.2em] mb-10 transition-colors group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Hotels
        </Link>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            {/* Gallery Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 h-[600px]">
              <div className="md:col-span-3 rounded-[3rem] overflow-hidden shadow-2xl relative group">
                <img src={hotel.images[0]} alt={hotel.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40"></div>
              </div>
              <div className="hidden md:flex flex-col gap-4">
                <div className="h-1/2 rounded-[2rem] overflow-hidden shadow-xl">
                  <img src={hotel.images[1]} alt="Interior" className="w-full h-full object-cover" />
                </div>
                <div className="h-1/2 rounded-[2rem] overflow-hidden shadow-xl relative">
                  <img src={hotel.images[2]} alt="Pool" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-black text-xs uppercase tracking-widest cursor-pointer hover:bg-black/20 transition-all">
                    +12 Photos
                  </div>
                </div>
              </div>
            </div>

            {/* Hotel Info Card */}
            <div className="bg-white dark:bg-dark-800 rounded-[3rem] p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-slate-50 dark:border-white/5 mb-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-1.5 bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                  <Star className="w-4 h-4 fill-brand-500" />
                  <span>{hotel.rating} Excellent</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-xs font-black uppercase tracking-widest">
                  <Info className="w-4 h-4" />
                  <span>{hotel.reviews} Verified Reviews</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter leading-none">{hotel.name}</h1>
              
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold mb-10 pb-10 border-b border-slate-50 dark:border-white/5">
                <MapPin className="w-5 h-5 text-brand-500" />
                <span>{hotel.location}, Sri Lanka — <span className="text-brand-600 dark:text-brand-400 cursor-pointer hover:underline">Show on map</span></span>
              </div>

              <div className="mb-12">
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">About this hotel</h3>
                <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-medium">
                  {hotel.description}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
                {hotel.amenities.map((amenity, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-6 rounded-[2rem] bg-slate-50 dark:bg-dark-900 border border-slate-100 dark:border-white/5 text-center group hover:bg-brand-500 hover:text-white transition-all duration-300">
                    <div className="mb-3 text-brand-500 group-hover:text-white">
                      {amenity.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest leading-tight">{amenity.label}</span>
                  </div>
                ))}
              </div>

              {/* Room Selection */}
              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-widest text-xs">Select Room Type</h3>
                <div className="space-y-4">
                  {hotel.rooms.map((room, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedRoom(room)}
                      className={`p-8 rounded-[2rem] border-2 transition-all cursor-pointer flex flex-col md:flex-row justify-between items-center gap-6 ${
                        selectedRoom.name === room.name 
                          ? 'border-brand-500 bg-brand-50/30 dark:bg-brand-900/10' 
                          : 'border-slate-50 dark:border-white/5 bg-white dark:bg-dark-800'
                      }`}
                    >
                      <div className="flex items-center gap-6">
                        <div className="w-20 h-20 bg-slate-100 dark:bg-dark-900 rounded-2xl flex items-center justify-center">
                          <BedDouble className="w-10 h-10 text-slate-300" />
                        </div>
                        <div>
                          <h4 className="text-xl font-black text-slate-900 dark:text-white mb-1">{room.name}</h4>
                          <div className="flex gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                            <span>{room.beds}</span>
                            <span>•</span>
                            <span>{room.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-black text-slate-900 dark:text-white">${room.price}</span>
                        <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest">Per Night</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32 space-y-8">
              <div className="bg-white dark:bg-dark-800 rounded-[3rem] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-slate-50 dark:border-white/5">
                <div className="mb-8">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Stay Total</span>
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">${selectedRoom.price}</span>
                    <span className="text-sm font-bold text-slate-400 mb-2">/ night</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="bg-slate-50 dark:bg-dark-900 p-6 rounded-2xl border border-slate-100 dark:border-white/5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2 ml-1">Check-in / Out</label>
                    <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold">
                      <Calendar className="w-4 h-4 text-brand-500" />
                      <span>Select Dates</span>
                    </div>
                  </div>
                  <div className="bg-slate-50 dark:bg-dark-900 p-6 rounded-2xl border border-slate-100 dark:border-white/5">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2 ml-1">Guests</label>
                    <div className="flex items-center gap-3 text-slate-900 dark:text-white font-bold">
                      <Users className="w-4 h-4 text-brand-500" />
                      <span>2 Adults, 1 Child</span>
                    </div>
                  </div>
                </div>

                <Link 
                  href={`/checkout?type=hotel&id=${id}&room=${encodeURIComponent(selectedRoom.name)}&total=${selectedRoom.price}`}
                  className="w-full bg-brand-500 hover:bg-brand-600 text-white font-black py-6 rounded-[1.5rem] flex items-center justify-center gap-3 transition-all shadow-xl shadow-brand-500/20 text-sm uppercase tracking-[0.2em] active:scale-95 group"
                >
                  Confirm Booking
                  <ArrowLeft className="w-4 h-4 rotate-180 transition-transform group-hover:translate-x-1" />
                </Link>

                <p className="mt-8 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">No hidden booking fees</p>
              </div>

              <div className="bg-dark-900 p-8 rounded-[2.5rem] text-white flex items-center gap-6 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <ShieldCheck className="w-20 h-20" />
                </div>
                <div className="bg-brand-500 p-4 rounded-2xl relative z-10">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div className="relative z-10">
                  <h4 className="font-black text-sm uppercase tracking-widest mb-1">Instant Guarantee</h4>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Free cancellation up to 48h before arrival</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
