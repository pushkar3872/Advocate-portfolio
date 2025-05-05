import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  ThumbsUp, 
  MessageCircle, 
  Award, 
  ArrowRight, 
  ArrowLeft,
  Search,
  Filter,
  Users
} from 'lucide-react';

export default function Reviews() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  
  // Featured reviews to highlight at the top
  const featuredTestimonials = [
    {
      name: "Sanjay Patel",
      role: "Business Owner",
      company: "Patel Enterprises",
      content: "Adv. Sharma's expertise in tax matters saved my business from significant financial penalties. His advice was clear, practical and incredibly valuable.",
      rating: 5,
      category: "business",
      featured: true,
      date: "April 15, 2025"
    },
    {
      name: "Priya Mehta",
      role: "Corporate Client",
      company: "Mehta Industries Ltd.",
      content: "The attention to detail and thorough approach to our corporate legal matters has been exceptional. I highly recommend Adv. Sharma for any business legal needs.",
      rating: 5,
      category: "corporate",
      featured: true,
      date: "March 22, 2025"
    },
    {
      name: "Rahul Gupta",
      role: "Individual Client",
      content: "During a very challenging personal legal battle, Adv. Sharma provided not just legal expertise but also compassionate guidance that made all the difference.",
      rating: 5,
      category: "personal",
      featured: true,
      date: "February 10, 2025"
    }
  ];
  
  // Additional testimonials
  const allTestimonials = [
    ...featuredTestimonials,
    
    {
      name: "Vikram Singh",
      role: "Tech Entrepreneur",
      company: "InnovaTech Solutions",
      content: "From startup registration to intellectual property protection, Adv. Sharma guided us through every legal aspect of our business with expertise.",
      rating: 4,
      category: "business",
      date: "March 12, 2025"
    },
    {
      name: "Neha Joshi",
      role: "Family Law Client",
      content: "In my custody case, Adv. Sharma was not only a skilled lawyer but also showed great empathy and understanding during a difficult time.",
      rating: 5,
      category: "personal",
      date: "April 5, 2025"
    },
    {
      name: "Rajesh Kumar",
      role: "GST Compliance Client",
      company: "Kumar Electronics",
      content: "The GST compliance services provided were thorough and saved us from potential issues. Always provides proactive advice.",
      rating: 5,
      category: "tax",
      date: "February 18, 2025"
    },
    {
      name: "Meera Reddy",
      role: "Corporate Secretary",
      company: "Global Innovations Inc.",
      content: "Adv. Sharma's corporate legal advice has been instrumental in our company's growth and compliance strategy.",
      rating: 4,
      category: "corporate",
      date: "March 30, 2025"
    }
  ];
  
  // Filter testimonials
  const filteredTestimonials = allTestimonials.filter(testimonial => {
    const matchesFilter = filter === 'all' || testimonial.category === filter;
    const matchesSearch = testimonial.content.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (testimonial.company && testimonial.company.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });
  
  // Paginate testimonials
  const itemsPerPage = 6;
  const pageCount = Math.ceil(filteredTestimonials.length / itemsPerPage);
  const displayedTestimonials = filteredTestimonials.slice(
    currentPage * itemsPerPage, 
    (currentPage + 1) * itemsPerPage
  );
  
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, pageCount - 1));
  };
  
  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };
  
 

  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-stone-900 min-h-screen py-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center">
          <div className="inline-flex items-center justify-center gap-2 bg-amber-700 text-white px-4 py-1.5 rounded-full mb-4">
            <MessageCircle size={16} />
            <span className="font-medium text-sm">Client Feedback</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Testimonials</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Hear from our satisfied clients about their experience working with Adv. Rohit Sharma and our committed legal team
          </p>
          <div className="w-24 h-1 bg-amber-700 mx-auto rounded-full mb-12"></div>
        </div>
      </div>
      
      {/* Featured Testimonials Slider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gray-900 bg-opacity-60 rounded-xl p-6 md:p-10 shadow-xl border border-gray-800">
          <div className="flex items-center gap-2 mb-6">
            <Award size={24} className="text-amber-500" />
            <h2 className="text-2xl font-semibold text-white">Featured Testimonials</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 hover:border-amber-600 transition-all hover:transform hover:scale-[1.02]"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#F59E0B" className="text-amber-500 mr-1" />
                    ))}
                  </div>
                  <Quote size={24} className="text-amber-600 opacity-50" />
                </div>
                
                <p className="text-gray-300 italic mb-6 line-clamp-4">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center mr-4 text-white font-bold shadow-md">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-white">{testimonial.name}</div>
                    <div className="text-amber-500 text-sm">{testimonial.role}</div>
                    {testimonial.company && (
                      <div className="text-gray-400 text-xs">{testimonial.company}</div>
                    )}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-700 text-xs text-gray-400 flex justify-between items-center">
                  <span>{testimonial.date}</span>
                  <span className="flex items-center gap-1">
                    <ThumbsUp size={14} className="text-amber-500" />
                    <span>Verified</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      
      {/* Leave a Review CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gradient-to-r from-amber-800 to-amber-700 rounded-xl p-8 md:p-12 shadow-xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Have You Worked with Adv. Rohit Sharma?</h3>
          <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
            Share your experience and help others make informed decisions about their legal representation
          </p>
          <button className="bg-white text-amber-800 py-3 px-8 rounded-md font-medium flex items-center justify-center gap-2 mx-auto hover:bg-gray-100 transition shadow-lg">
            <MessageCircle size={20} />
            Leave Your Review
          </button>
        </div>
      </div>
    </div>
  );
}