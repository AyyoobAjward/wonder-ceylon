"use client";

import Link from 'next/link';
import { Star, Clock, MapPin, Check, X, ShieldCheck, Users, Calendar, ArrowLeft, Info } from 'lucide-react';
import { useParams } from 'next/navigation';
import BookingForm from '@/components/BookingForm';

export default function TourDetails() {
  const params = useParams();
  const id = params.id;

  // Mock data for the tour
  const tour = {
    id: id,
    title: "Essential Cultural Triangle",
    duration: "5 Days",
    price: 450,
    rating: 4.9,
    reviews: 128,
    category: "Culture",
    image: "https://images.pexels.com/photos/2444403/pexels-photo-2444403.jpeg",
    description: "Explore the ancient cities of Anuradhapura, Polonnaruwa, and the majestic Sigiriya Rock Fortress. This deep dive into Sri Lanka's rich history will take you back in time. Witness the marvels of ancient engineering and beautifully carved stone monuments that have stood the test of time.",
    highlights: [
      "Climb the iconic Sigiriya Rock Fortress",
      "Explore the ancient ruins of Polonnaruwa",
      "Visit the sacred city of Anuradhapura",
      "Experience a traditional Sri Lankan village tour",
      "Discover the Dambulla Cave Temple"
    ],
    included: [
      "4 nights accommodation in 4-star hotels",
      "Daily breakfast and dinner",
      "Air-conditioned private vehicle with English speaking guide",
      "All entrance fees to cultural sites",
      "Airport pickup and drop-off"
    ],
    notIncluded: [
      "International flights",
      "Lunches",
      "Visa fees",
      "Personal expenses and tips"
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-900 transition-colors pt-24 pb-24">
      <div className="container mx-auto px-6">
        {/* Navigation */}
        <Link href="/tours" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 dark:hover:text-white font-black text-xs uppercase tracking-[0.2em] mb-10 transition-colors group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Tours
        </Link>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            {/* Hero Section */}
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl mb-12 group">
              <img src={tour.image} alt={tour.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 text-white z-10">
                <div className="bg-brand-500 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 inline-block shadow-lg">
                  {tour.category}
                </div>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">{tour.title}</h1>
                <div className="flex items-center gap-6 opacity-80 font-bold text-sm">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-brand-500 text-brand-500" />
                    <span>{tour.rating} ({tour.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-500" />
                    <span>{tour.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-white dark:bg-dark-800 rounded-[3rem] p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-slate-50 dark:border-white/5 mb-12">
              <div className="mb-12">
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">Tour Overview</h3>
                <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-medium">
                  {tour.description}
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-widest text-xs">Tour Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tour.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-4 text-slate-600 dark:text-slate-400 font-medium">
                      <div className="bg-brand-50 dark:bg-brand-900/30 p-1.5 rounded-full text-brand-600 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-slate-50 dark:border-white/5">
                <div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-widest text-xs">What's Included</h3>
                  <div className="space-y-4">
                    {tour.included.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-slate-500 dark:text-slate-400">
                        <Check className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-8 uppercase tracking-widest text-xs">Not Included</h3>
                  <div className="space-y-4">
                    {tour.notIncluded.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-slate-500 dark:text-slate-400">
                        <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32 space-y-8">
              <BookingForm price={tour.price} tourTitle={tour.title} />

              <div className="bg-dark-900 p-8 rounded-[2.5rem] text-white flex items-center gap-6 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <ShieldCheck className="w-20 h-20" />
                </div>
                <div className="bg-brand-500 p-4 rounded-2xl relative z-10">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div className="relative z-10">
                  <h4 className="font-black text-sm uppercase tracking-widest mb-1">Book with Confidence</h4>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Free cancellation up to 7 days before departure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
