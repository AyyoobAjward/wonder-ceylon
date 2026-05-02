import { MapPin, Phone, Mail, Clock, ShieldCheck, ThumbsUp, Star, Send, Globe, Camera, MessageCircle } from 'lucide-react';

export default function AboutContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors">
      {/* Immersive Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[30s] scale-110"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg')" }}
        >
          <div className="absolute inset-0 bg-dark-900/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="container relative z-10 px-6 mx-auto text-center pt-20">
          <span className="inline-block py-1 px-4 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-400 text-xs font-black uppercase tracking-[0.2em] mb-6">
            Our Identity
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
            The Story Behind <br/> <span className="text-brand-500">Wonder Ceylon</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg font-medium">
            Dedicated to providing unforgettable Sri Lankan journeys with local expertise and premium comfort since 2014.
          </p>
        </div>
      </section>

      {/* About Section - The Mission */}
      <section className="py-24 bg-white dark:bg-dark-900 overflow-hidden transition-colors" id="about-us">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg" 
                  alt="Sri Lanka Culture" 
                  className="rounded-[2.5rem] w-full h-[450px] object-cover shadow-2xl z-10"
                />
                <div className="flex flex-col gap-4 pt-12">
                  <img 
                    src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg" 
                    alt="Beach View" 
                    className="rounded-[2.5rem] w-full h-[300px] object-cover shadow-2xl"
                  />
                  <div className="bg-brand-500 p-8 rounded-[2.5rem] text-white shadow-xl">
                    <h4 className="text-4xl font-black mb-1">10+</h4>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-80">Years Excellence</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-50 dark:bg-brand-900/20 rounded-full -z-0 blur-3xl opacity-60"></div>
            </div>

            <div className="relative z-10">
              <span className="text-brand-600 dark:text-brand-400 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Our Mission</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-8 leading-tight tracking-tight">
                Crafting Authentic <br/> Sri Lankan Experiences
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed font-medium">
                Wonder Ceylon was born from a passion for showcasing the hidden gems of Sri Lanka. We believe that travel should be more than just visiting places; it should be about connecting with cultures, nature, and people.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <ShieldCheck className="w-6 h-6" />, title: "Trust & Safety", desc: "Government licensed and fully insured vehicles." },
                  { icon: <ThumbsUp className="w-6 h-6" />, title: "Local Expertise", desc: "Drivers who know every secret corner of the island." },
                  { icon: <Star className="w-6 h-6" />, title: "Premium Quality", desc: "Luxury air-conditioned fleet for ultimate comfort." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-5">
                    <div className="bg-brand-50 dark:bg-brand-900/30 p-3 rounded-2xl text-brand-600 dark:text-brand-400 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: "15k+", label: "Happy Travelers" },
              { val: "250+", label: "Custom Tours" },
              { val: "50+", label: "Expert Guides" },
              { val: "100%", label: "Satisfaction" }
            ].map((stat, i) => (
              <div key={i}>
                <h3 className="text-4xl md:text-5xl font-black text-brand-500 mb-2 tracking-tighter">{stat.val}</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-50 dark:bg-dark-900 transition-colors" id="contact-us">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="text-brand-600 dark:text-brand-400 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter leading-tight">Ready to Start <br/> Your Journey?</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">Have questions or ready to book? Our team is available 24/7 to help you plan the perfect trip.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {[
                { icon: <Phone className="w-6 h-6" />, label: "Call Us", val: "+94 112 345 678", sub: "Available 24/7" },
                { icon: <Mail className="w-6 h-6" />, label: "Email Us", val: "info@wonderceylon.com", sub: "Replies within 2 hours" },
                { icon: <MapPin className="w-6 h-6" />, label: "Visit Us", val: "123 Galle Road, Colombo", sub: "Head Office" }
              ].map((info, i) => (
                <div key={i} className="bg-white dark:bg-dark-800 p-8 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.03)] dark:shadow-none border border-slate-100 dark:border-white/5 transition-all hover:shadow-xl group">
                  <div className="bg-brand-50 dark:bg-brand-900/30 w-12 h-12 rounded-2xl flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all">
                    {info.icon}
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">{info.label}</p>
                  <h4 className="text-lg font-black text-slate-900 dark:text-white mb-1">{info.val}</h4>
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-400">{info.sub}</p>
                </div>
              ))}
              
              {/* Social Links */}
              <div className="flex gap-4 pt-6 justify-center lg:justify-start">
                {[<Camera key="i" />, <Globe key="g" />, <MessageCircle key="m" />].map((icon, i) => (
                  <button key={i} className="w-12 h-12 rounded-full bg-white dark:bg-dark-800 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-brand-500 hover:text-white dark:hover:text-white hover:border-brand-500 transition-all shadow-sm">
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-dark-800 p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:shadow-none border border-slate-100 dark:border-white/5">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-4">Your Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-slate-50 dark:bg-dark-900/50 border-none rounded-2xl px-6 py-4 text-slate-900 dark:text-white font-bold placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-brand-500 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-4">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 dark:bg-dark-900/50 border-none rounded-2xl px-6 py-4 text-slate-900 dark:text-white font-bold placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-brand-500 transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-4">Subject</label>
                    <select className="w-full bg-slate-50 dark:bg-dark-900/50 border-none rounded-2xl px-6 py-4 text-slate-900 dark:text-white font-bold focus:ring-2 focus:ring-brand-500 transition-all appearance-none">
                      <option>General Inquiry</option>
                      <option>Booking Request</option>
                      <option>Tour Customization</option>
                      <option>Support</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 ml-4">Your Message</label>
                    <textarea rows={6} placeholder="How can we help you plan your journey?" className="w-full bg-slate-50 dark:bg-dark-900/50 border-none rounded-2xl px-6 py-4 text-slate-900 dark:text-white font-bold placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:ring-2 focus:ring-brand-500 transition-all resize-none"></textarea>
                  </div>
                  <button className="w-full bg-brand-500 hover:bg-brand-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-brand-500/20 transition-all active:scale-95 flex items-center justify-center gap-3 uppercase tracking-widest text-sm">
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-slate-200 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg')" }}>
          <div className="absolute inset-0 bg-dark-900/10 backdrop-grayscale hover:backdrop-none transition-all duration-700"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500 rounded-full animate-ping opacity-25"></div>
              <div className="relative bg-brand-500 p-4 rounded-full shadow-2xl text-white">
                <MapPin className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
