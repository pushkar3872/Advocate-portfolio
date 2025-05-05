import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Linkedin, 
  Facebook, 
  Twitter, 
  Calendar,
  MessageSquare,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    caseType: '',
    message: '',
    privacy: false
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-stone-900 text-white">
      {/* Contact Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center gap-2 bg-amber-700 text-white px-4 py-1.5 rounded-full mb-4">
            <MessageSquare size={16} />
            <span className="font-medium text-sm">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Have legal questions or need representation? Our team is here to assist you.
          </p>
          <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full mb-12"></div>
        </div>
      </div>

      {/* Contact Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-700 h-full">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                {/* Office Address */}
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-700 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Office Address</h3>
                    <p className="text-gray-300">
                      Sr.No- 585 <br />
                      Salibary Park,Near Lodha Corner<br />
                      Darshani Chouk, Gultekadi <br />
                      pune - 411037
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-700 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone Numbers</h3>
                    <p className="text-gray-300 mb-1">Office: 9527407072</p>
                    <p className="text-gray-300">Mobile: 9527407072</p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-700 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email Address</h3>
                    <p className="text-gray-300 mb-1">bapudombale@gmail.com</p>
                    
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-700 rounded-lg flex items-center justify-center mr-4 shrink-0">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Office Hours</h3>
                    <p className="text-gray-300 mb-1">Monday - Saturday: 8:00 AM - 11:00 AM and 5:00 Pm - 8:00 Pm</p>
                    <p className="text-gray-300">Sunday: Closed (Appointments Only)</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="font-semibold text-white mb-4">Connect With Us</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors">
                    <Linkedin size={18} className="text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors">
                    <Twitter size={18} className="text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors">
                    <Facebook size={18} className="text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-amber-700 rounded-full flex items-center justify-center transition-colors">
                    <Instagram size={18} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Subject of your message"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="caseType" className="block text-sm font-medium text-gray-300 mb-1">Case Type</label>
                  <select
                    id="caseType"
                    value={formData.caseType}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Select case type</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="criminal">Criminal Law</option>
                    <option value="family">Family Law</option>
                    <option value="property">Property Law</option>
                    <option value="tax">Tax Law</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Your Message *</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Please describe your legal issue or inquiry"
                    required
                  ></textarea>
                </div>

                <div className="flex items-start mb-6">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-amber-500 border-gray-500 bg-gray-700 mt-1"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-300">
                    I agree to the <a href="#" className="text-amber-500 hover:underline">privacy policy</a> and consent to the processing of my personal data as described therein.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center transition-colors w-full sm:w-auto"
                >
                  Send Message
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Consultation Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-r from-amber-700 to-amber-600 rounded-xl p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-2">Schedule a Free Consultation</h2>
              <p className="text-amber-100">
                Speak with our legal experts about your case and learn how we can help you navigate the legal process.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <a 
                href="#" 
                className="bg-white text-amber-700 hover:bg-amber-100 font-medium px-6 py-3 rounded-lg flex items-center justify-center transition-colors"
              >
                <Calendar size={18} className="mr-2" />
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700">
          <div className="aspect-w-16 aspect-h-9 bg-gray-700">
            {/* In a real application, you would embed a Google Map or similar service here */}


            <div className="w-full h-64 md:h-[450px] bg-gray-700 flex items-center justify-center rounded-md overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.9301302935005!2d73.87361497496207!3d18.486823782600137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1d7cb30fb95%3A0xce0498610b31681a!2sAccounts%20Point!5e0!3m2!1sen!2sin!4v1746437717251!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}