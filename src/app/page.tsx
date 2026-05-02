"use client";

import Link from 'next/link';
import { Search, MapPin, Calendar, Users, Star, ArrowRight, ShieldCheck, ThumbsUp, Clock, Compass, Waves, Camera } from 'lucide-react';

export default function Home() {
  const featuredTours = [
    {
      id: 1,
      title: "Essential Cultural Triangle",
      duration: "5 Days",
      price: "$450",
      rating: 4.9,
      reviews: 128,
      image: "https://images.pexels.com/photos/2444403/pexels-photo-2444403.jpeg",
      description: "Explore the ancient cities of Anuradhapura, Polonnaruwa, and the majestic Sigiriya Rock Fortress."
    },
    {
      id: 2,
      title: "Yala Wildlife Safari",
      duration: "3 Days",
      price: "$320",
      rating: 4.8,
      reviews: 94,
      image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg",
      description: "Experience the thrill of spotting leopards, elephants, and exotic birds in their natural habitat."
    },
    {
      id: 3,
      title: "Ella Train Journey & Tea Trails",
      duration: "4 Days",
      price: "$380",
      rating: 5.0,
      reviews: 215,
      image: "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg",
      description: "Take the world's most scenic train ride and wander through lush green tea plantations."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-dark-900 transition-colors">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[20s] ease-out scale-105"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/40 to-dark-900/90 backdrop-brightness-[0.85]"></div>
        </div>
        
        <div className="container relative z-10 px-6 mx-auto text-center flex flex-col items-center pt-20">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md mb-8 shadow-2xl animate-bounce-subtle">
            <Star className="w-3.5 h-3.5 text-brand-400 fill-brand-400" />
            <span>Premium Sri Lanka Experiences</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tighter drop-shadow-2xl">
            Experience <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-500 to-accent-400">Pure Wonder</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-100 mb-14 max-w-2xl drop-shadow-lg font-medium leading-relaxed opacity-90 tracking-tight">
            Curated journeys through the heart of the Indian Ocean. Where ancient heritage meets modern luxury.
          </p>
          
          {/* Premium Search Bar */}
          <div className="w-full max-w-5xl bg-white/95 dark:bg-dark-800/90 backdrop-blur-xl p-3 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-white/10 flex flex-col md:flex-row gap-2 items-center">
            {[
              { icon: <MapPin />, label: "Destination", placeholder: "Where to?" },
              { icon: <Calendar />, label: "Date", placeholder: "When?" },
              { icon: <Users />, label: "Guests", placeholder: "How many?" }
            ].map((item, i) => (
              <div key={i} className="flex-1 w-full flex items-center gap-4 px-6 py-3 hover:bg-slate-50 dark:hover:bg-dark-700 rounded-2xl transition-all cursor-pointer group">
                <div className="bg-brand-50 dark:bg-brand-900/30 p-2.5 rounded-full text-brand-500 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="flex-1 text-left">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black mb-0.5">{item.label}</p>
                  <input type="text" placeholder={item.placeholder} className="w-full bg-transparent outline-none text-slate-800 dark:text-white font-bold placeholder:text-slate-300 text-sm md:text-base" />
                </div>
                {i < 2 && <div className="hidden md:block w-px h-10 bg-slate-100 dark:bg-white/10 ml-4"></div>}
              </div>
            ))}
            
            <Link href="/tours" className="w-full md:w-auto bg-brand-500 hover:bg-brand-600 text-white px-10 py-5 rounded-3xl flex items-center justify-center transition-all shadow-xl shadow-brand-500/20 active:scale-95 group">
              <Search className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-white dark:bg-dark-900 border-b border-slate-50 dark:border-white/5 transition-colors relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <ShieldCheck className="w-6 h-6" />, title: "Safe & Secure", desc: "Government Approved" },
              { icon: <ThumbsUp className="w-6 h-6" />, title: "Local Experts", desc: "Certified Guides" },
              { icon: <Star className="w-6 h-6" />, title: "5-Star Rated", desc: "Top on TripAdvisor" },
              { icon: <Clock className="w-6 h-6" />, title: "24/7 Support", desc: "Always here for you" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 group">
                <div className="bg-brand-50 dark:bg-brand-900/30 text-brand-500 p-5 rounded-[2.5rem] group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-500 shadow-sm">
                  {item.icon}
                </div>
                <div className="pt-2">
                  <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-[11px] mb-1.5">{item.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-40 container mx-auto px-6 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 blur-[120px] -z-10 rounded-full"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl text-left">
            <div className="w-12 h-1 bg-brand-500 mb-6"></div>
            <span className="text-brand-600 dark:text-brand-400 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Handpicked Collection</span>
            <h2 className="text-6xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9]">Signature <span className="text-brand-500">Experiences</span></h2>
          </div>
          <Link href="/tours" className="group flex items-center gap-4 font-black text-slate-900 dark:text-white uppercase tracking-[0.2em] text-[10px] hover:text-brand-600 dark:hover:text-brand-400 transition-all bg-white dark:bg-dark-800 px-10 py-5 rounded-[2rem] shadow-xl shadow-black/5 dark:shadow-none border border-slate-100 dark:border-white/5 active:scale-95">
            Explore Collection
            <div className="p-2 bg-slate-50 dark:bg-dark-900 rounded-full group-hover:bg-brand-500 group-hover:text-white transition-colors">
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {featuredTours.map((tour, idx) => (
            <Link key={tour.id} href={`/tours/${tour.id}`} className={`group bg-white dark:bg-dark-800 rounded-[3rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.04)] dark:shadow-none border border-slate-100/50 dark:border-white/5 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_50px_100px_rgba(0,0,0,0.1)] ${idx === 1 ? 'lg:translate-y-12' : ''}`}>
              <div className="relative h-[450px] overflow-hidden">
                <div className="absolute top-8 left-8 z-20 bg-white/95 dark:bg-dark-900/95 backdrop-blur-md text-slate-900 dark:text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl border border-white/20">
                  {tour.duration}
                </div>
                <div className="absolute top-8 right-8 z-20 bg-brand-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-2xl">
                  <Star className="w-3.5 h-3.5 fill-white" />
                  <span className="font-black text-xs">{tour.rating}</span>
                </div>
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                
                <div className="absolute bottom-8 left-8 right-8 z-20">
                   <h3 className="text-3xl font-black text-white mb-2 tracking-tight leading-[1.1] drop-shadow-lg">{tour.title}</h3>
                   <div className="flex items-center gap-2 text-brand-300 font-bold text-[10px] uppercase tracking-widest">
                     <MapPin className="w-3 h-3" />
                     Sri Lanka
                   </div>
                </div>
              </div>
              
              <div className="p-10">
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-10 leading-relaxed font-medium line-clamp-2">
                  {tour.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest block mb-1">Per Person</span>
                    <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">{tour.price}</span>
                  </div>
                  <div className="w-14 h-14 bg-brand-500 text-white rounded-2xl flex items-center justify-center transition-all shadow-xl shadow-brand-500/30 group-hover:bg-dark-900 dark:group-hover:bg-white dark:group-hover:text-dark-900 active:scale-90 group-hover:rotate-12">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Services Quick Links */}
      <section className="py-32 bg-white dark:bg-dark-900 transition-colors border-t border-slate-50 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-brand-600 dark:text-brand-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Complete Solutions</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter">Everything for Your <span className="text-brand-500">Journey</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { href: "/tours", icon: <Compass />, name: "Guided Tours", desc: "Expert-led private and group tours across the island." },
              { href: "/taxi", icon: <CarIcon />, name: "Airport Taxi", desc: "Reliable city and airport transfers with premium vehicles." },
              { href: "/hotels", icon: <BedIcon />, name: "Luxury Hotels", desc: "Handpicked premium accommodations for a perfect stay." }
            ].map((service, i) => (
              <Link key={i} href={service.href} className="group bg-slate-50 dark:bg-dark-800/50 hover:bg-white dark:hover:bg-dark-800 p-10 rounded-[2.5rem] border border-slate-100 dark:border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] text-center">
                <div className="w-20 h-20 bg-white dark:bg-dark-900 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:bg-brand-500 group-hover:text-white transition-all duration-500 group-hover:scale-110">
                  <div className="w-10 h-10 transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight leading-none group-hover:text-brand-500 transition-colors">{service.name}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">{service.desc}</p>
                <div className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-black text-[10px] uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Explore <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function CarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
  )
}

function BedIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>
  )
}
