import React, { useEffect, useState } from "react";
import { FaBars, FaEnvelope, FaHome, FaInfoCircle, FaPhoneAlt, FaShoppingBag, FaTimes } from "react-icons/fa"; 
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'
import image5 from './assets/image5.jpg'
import image6 from './assets/image6.jpg'

import { MdContactPage } from "react-icons/md";


const suits = [
  { id: 1, name: "የሴቶች የሃበሻ አልባሳት", price: 4500, image: image2 },
  { id: 2, name: "የወንዶች የሃበሻ አልባሳት", price: 5200, image:image3 },
  { id: 3, name: "የቤተሰብ የሃበሻ አልባሳት", price: 16000, image: image4 },
   { id: 4, name: "የሰርግ አልባሳት", price: 22000, image: image6 }
];


const testimonials = [
  {
    id: 1,
    name: "ሳሙኤል ታደሰ",
    location: "አዲስ አበባ",
    quote: "የሰርችሁት የሃበሻ አልባስ በጣም ያማረኝ። በሰርተኝ በጋብዣዬ ላይ ሁሉም ደስ ብሎት ተመለከተኝ።",
    image: "/images/samuel.jpg",
  },
  {
    id: 2,
    name: "መቅደስ አለማየሁ",
    location: "ባህር ዳር",
    quote: "የእናንተ አልባሳት ዘመናዊ ናቸው፣ በጥራት እና በዋጋ ላይ የሚያስደንቁ። ሁሌም AddisStyle ነው የምመርጠው።",
    image: "/images/mekdes.jpg",
  },
  {
    id: 3,
    name: "ዮናስ ገብረ",
    location: "ሀዋሳ",
    quote: "የሰርቻችሁት አልባስ በዝና ነበር። በደንብ ተስማሚ ነበር፣ እና ሁሉም ደስ ብሎት አስተያየት ሰጠኝ።",
    image: "/images/yonas.jpg",
  },
];
const LandingPage = () => {
  const [navBg, setNavBg] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  //  Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setNavBg(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans scroll-smooth">
      
      {/*  Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition duration-300 ${navBg ? "bg-black shadow-lg" : "bg-black/70"}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
          <h1 className="text-xl font-bold tracking-wide text-yellow-400">HabeshaClothing</h1>

          {/*  Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-white">
            <a href="#home" className="hover:text-yellow-400">Home</a>
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#products" className="hover:text-yellow-400">Shop</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <div className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-black text-white p-6 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <ul className="space-y-6 text-lg">
            <li><a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">About</a></li>
            <li><a href="#products" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">Shop</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/*  Hero Section */}
      <section id="home" className="relative h-screen flex flex-col justify-center items-center text-center text-white">
        <img 
          src={image1} 
          alt="Suits" 
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
        <div className="relative z-10 px-4  mt-0 md:mt-40 lg:mt-56">
          <h1 className="text-3xl md:text-7xl font-bold animate-pulse">ዘመንን የሚቆጣጠር ውበት</h1>
          <p className="mt-4 text-m md:text-2xl">Handcrafted Heritage Woven into Every Thread</p>
          <button className="mt-6 px-8 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600 transition transform hover:scale-105">
            አሁን ይግዙ 
          </button>
        </div>
      </section>

   <section id="products" className="py-16 px-6 md:px-20 bg-gray-50">
  <h2 className="text-3xl font-bold text-center mb-10">🔥 የተመረጡ አልባሳት(slide)</h2>

  <div className="overflow-x-auto">
    <div className="flex gap-6 md:gap-8 w-max">
      {suits.map((suit) => (
        <div
          key={suit.id}
          className="w-[calc(100vw-3rem)] sm:w-[calc(50vw-3rem)] md:w-[calc(33.333vw-2rem)] flex-shrink-0 bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
        >
          {/* Image */}
          <div className="w-full aspect-[4/3] bg-white flex items-center justify-center overflow-hidden">
            <img
              src={suit.image}
              alt={suit.name}
              className="object-contain w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col justify-between h-[180px]">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{suit.name}</h3>
              <p className="text-gray-600 text-lg mt-2">{suit.price} ብር</p>
            </div>
            <button className="mt-4 w-full bg-yellow-500 text-black py-2 rounded hover:bg-yellow-600 transition">
              አሁን ይግዙ
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    {/*  Updated About Section – Habesha Focus */}
<section id="about" className="bg-gray-50 py-20 px-6 md:px-20">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <img
      src={image5}
      alt="Habesha Clothing"
      className="rounded-lg shadow-xl"
    />
    <div>
      <h2 className="text-4xl font-bold mb-6 text-gray-800">👗 ለምን <b>HabeshaClothing</b></h2>
      <p className="text-gray-700 mb-6 leading-relaxed text-lg">
        <strong>HabeshaClothing</strong> በኢትዮጵያ ውስጥ የተሰሩ የሃበሻ አልባሳትን በአዲስ እቅፍ እና በባህላዊ ውበት የሚያቀርብ የልብስ ሱቅ ነው።
        ባህላዊነትን ከዘመናዊ ዲዛይን ጋር በመዋሃድ የሚያምሩ አልባሳትን እንፈጥራለን።
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-3 text-base">
        <li>✅ በኢትዮጵያ የተሰሩ እና በአካባቢ አሠራር የተዘጋጀ</li>
        <li>✅ የባህላዊ  ከዘመናዊ ዲዛይን ጋር የሚያዋሃድ</li>
        <li>✅ ለጋብዣ፣ ለበዓላት እና  አልባሳትን የሚስማማ</li>
        <li>✅ በጥራት እና በዋጋ  የሚያስደንቁ አልባሳት</li>
      </ul>
    </div>
  </div>
</section>

          {/*  customer's response */}
<section id="testimonials" className="bg-white py-16 px-6 md:px-20">
  <h2 className="text-3xl font-bold text-center mb-10">💬what our customers say</h2>
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
    {testimonials.map((testimonial) => (
      <div key={testimonial.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
        <p className="text-gray-800 italic mb-4">“{testimonial.quote}”</p>
        <div className="flex items-center">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.location}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>



  <section id="contact" className="bg-white text-gray-900 py-20 px-6 md:px-20">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start">

    {/*  Contact Information */}
    <div className="space-y-6">
      <h2 className="text-4xl font-bold text-yellow-600">Contact Us</h2>
      <p className="text-gray-700">We’d love to hear from you! Reach out via phone, email, or drop us a message using the form.</p>
      <div className="space-y-3 text-sm">
        <p><strong>📍 Address:</strong> piassa, Addis Ababa, Ethiopia</p>
        <p><strong>📱 Phone 1:</strong> <a href="tel:+251911123456" className="text-yellow-600 hover:underline">+251 911 123 456</a></p>
        <p><strong>📱 Phone 2:</strong> <a href="tel:+251922987654" className="text-yellow-600 hover:underline">+251 922 437 654</a></p>
        <p><strong>📧 Email:</strong> <a href="mailto:suits@addisstyle.com" className="text-yellow-600 hover:underline">HabeshaCloth2@gmail.com</a></p>
        <p><strong>🕒 Hours:</strong> Mon–Sat, 9:00 AM – 6:00 PM</p>
      </div>
    </div>

    {/*  Contact Form */}
    <div className="md:col-span-2 mt-8 md:mt-0">
      <form className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="md:col-span-2 p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <textarea
          placeholder="Your Message..."
          rows="5"
          className="md:col-span-2 p-4 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        ></textarea>
        <button
          type="submit"
          className="md:col-span-2 w-full bg-yellow-500 text-black font-semibold py-4 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>



{/*  Footer Section */}
<section className="bg-gray-900 text-white py-10 px-6 md:px-20">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

    {/* 🔗 Quick Links */}
   <div>
  <h3 className="text-xl font-semibold mb-4">🔗 Quick Links</h3>
  <ul className="space-y-3 text-sm">
    <li>
      <a href="#home" className="flex items-center gap-3 hover:text-yellow-400">
        <FaHome className="text-lg" /> Home
      </a>
    </li>
    <li>
      <a href="#about" className="flex items-center gap-3 hover:text-yellow-400">
        <FaInfoCircle className="text-lg" /> About Us
      </a>
    </li>
    <li>
      <a href="#products" className="flex items-center gap-3 hover:text-yellow-400">
        <FaShoppingBag className="text-lg" /> Shop Habeshawears
      </a>
    </li>
  </ul>
</div>

    {/*  Social Media */}
    <div>
      <h3 className="text-xl font-semibold mb-4">🌐 Follow Us</h3>
      <p className="text-gray-300 text-sm mb-4">Stay connected for the latest arrivals & discounts.</p>
      <ul className="space-y-3 text-sm">
        <li>
          <a href="#" className="flex items-center gap-3 hover:text-yellow-400">
            <FaFacebookF className="text-lg" /> Facebook
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center gap-3 hover:text-yellow-400">
            <FaInstagram className="text-lg" /> Instagram
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center gap-3 hover:text-yellow-400">
            <FaTwitter className="text-lg" /> Twitter
          </a>
        </li>
      </ul>
    </div>
  </div>

  {/*  Footer  */}
  <div className="text-center text-gray-400 mt-10 text-xs">
    © {new Date().getFullYear()} HabeshaCloth. All Rights Reserved.
  </div>
</section>
    </div>
  );
};

export default LandingPage;
