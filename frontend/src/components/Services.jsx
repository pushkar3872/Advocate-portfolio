import React from 'react';
import { Calculator, FileText, Receipt, Briefcase, FileCheck, Key, Building, ClipboardCheck, BarChart2 } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      id: 1,
      title: "Accounting",
      description: "Complete bookkeeping and accounting services for businesses of all sizes",
      icon: <Calculator size={28} />
    },
    {
      id: 2,
      title: "GST Working and Returns",
      description: "Comprehensive GST compliance services including filing and reconciliation",
      icon: <Receipt size={28} />
    },
    {
      id: 3,
      title: "Income Tax Return",
      description: "Expert preparation and filing of income tax returns for individuals and businesses",
      icon: <FileText size={28} />
    },
    {
      id: 4,
      title: "Income Tax Audit",
      description: "Professional auditing services to ensure compliance with income tax regulations",
      icon: <FileCheck size={28} />
    },
    {
      id: 5,
      title: "TDS Working and Returns",
      description: "Complete TDS compliance services including calculation and timely filing",
      icon: <Receipt size={28} />
    },
    {
      id: 6,
      title: "Digital Signature (Class 3)",
      description: "Procurement and renewal of Class 3 Digital Signature Certificates",
      icon: <Key size={28} />
    },
    {
      id: 7,
      title: "Professional Tax Working and Return",
      description: "Professional tax registration, calculation and filing services",
      icon: <Briefcase size={28} />
    },
    {
      id: 8,
      title: "All Types of Registration",
      description: "Shop Act, Udyam, GST, PT, Partnership, Food License and more",
      icon: <Building size={28} />
    },
    {
      id: 9,
      title: "Monthly/Quarterly/Six Monthly Review",
      description: "Regular review of accounts to ensure compliance and financial health",
      icon: <BarChart2 size={28} />
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-stone-900 py-24 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 bg-amber-600 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-stone-500 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-amber-700 text-white rounded-md font-medium mb-4">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Professional Legal Services</h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            We provide comprehensive legal and financial solutions tailored to meet your specific needs.
            Our team of experts ensures compliance and excellence in all services offered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div 
              key={service.id} 
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-md shadow-xl hover:shadow-2xl transition-all border border-gray-700 group hover:border-amber-700 hover:translate-y-[-10px] duration-300"
            >
              <div className="p-6 relative">
                {/* Floating Icon */}
                <div className="absolute -top-6 left-6 w-12 h-12 bg-amber-700 rounded-md shadow-lg flex items-center justify-center text-white group-hover:bg-amber-600 transition-colors">
                  {service.icon}
                </div>
                
                <div className="pt-8">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note Box */}
        <div className="mt-16 bg-gray-800 border-l-4 border-amber-700 rounded-md p-6 shadow-lg">
          <h4 className="text-xl font-bold text-white mb-3 flex items-center">
            <ClipboardCheck className="mr-2 text-amber-500" size={24} />
            Additional Services
          </h4>
          <p className="text-gray-300">
            We also work on GST, TDS and other compliance services on an assignment basis. 
            Contact us to discuss your specific requirements and how we can assist you with tailored solutions.
          </p>
        </div>
      </div>
    </div>
  );
}