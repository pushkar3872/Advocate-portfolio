import React from 'react';
import { Calendar, PhoneCall } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10">
      {/* Call to Action Section */}
      <section className="py-20 bg-amber-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Professional Legal Assistance?
          </h2>
          <p className="text-amber-100 text-lg mb-8 max-w-3xl mx-auto">
            Schedule a consultation today and let us help you navigate your legal challenges with expertise and dedication.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-amber-800 py-3 px-8 rounded-md font-medium flex items-center justify-center gap-2 transition-all shadow-lg hover:bg-gray-100">
              <Calendar size={20} />
              Schedule Consultation
            </button>
            <button className="bg-amber-800 text-white py-3 px-8 rounded-md font-medium flex items-center justify-center gap-2 transition-all shadow-md hover:bg-amber-900 border border-amber-600">
              <PhoneCall size={20} />
              Call: +91 9876543210
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
}
