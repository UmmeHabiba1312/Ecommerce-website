"use client"; // Mark this as a Client Component

import Link from 'next/link';
import React from 'react';
import { FaQuestionCircle, FaShippingFast, FaExchangeAlt, FaPhoneAlt, FaChevronRight } from 'react-icons/fa';

const HelpPage = () => {
  return (
    <main className="mt-[40px] mb-[60px] px-4 lg:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-[#272343] mb-8">Help & Support</h1>

        {/* Search Bar for Help */}
        <div className="mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#029FAE] focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#029FAE] hover:text-[#272343]">
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Links Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#272343] mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <FaQuestionCircle className="text-[#029FAE] w-6 h-6" />
                <h3 className="text-lg font-medium text-[#272343]"><Link href='/faqs'>FAQs</Link></h3>
              </div>
              <p className="text-sm text-[#757575]">
                Find answers to common questions about orders, payments, and more.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <FaShippingFast className="text-[#029FAE] w-6 h-6" />
                <h3 className="text-lg font-medium text-[#272343]">Shipping Info</h3>
              </div>
              <p className="text-sm text-[#757575]">
                Learn about our shipping options, delivery times, and tracking.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <FaExchangeAlt className="text-[#029FAE] w-6 h-6" />
                <h3 className="text-lg font-medium text-[#272343]">Returns & Exchanges</h3>
              </div>
              <p className="text-sm text-[#757575]">
                Understand our return policy and how to initiate a return.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#272343] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "How do I place an order?",
                answer:
                  "Browse our collection, select your desired chair, and click 'Add to Cart.' Proceed to checkout to complete your purchase.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards, PayPal, and other secure payment methods.",
              },
              {
                question: "Can I modify or cancel my order?",
                answer:
                  "Orders can be modified or canceled within 1 hour of placement. Contact our support team for assistance.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-[#272343]">{faq.question}</h3>
                <p className="text-sm text-[#757575] mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Support Section */}
        <section>
          <h2 className="text-2xl font-semibold text-[#272343] mb-6">Contact Support</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-sm text-[#757575] mb-6">
              If you need further assistance, our support team is here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#029FAE] w-6 h-6" />
                <div>
                  <h3 className="text-lg font-medium text-[#272343]">Call Us</h3>
                  <p className="text-sm text-[#757575]">0307-2502073</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaQuestionCircle className="text-[#029FAE] w-6 h-6" />
                <div>
                  <h3 className="text-lg font-medium text-[#272343]">Email Us</h3>
                  <p className="text-sm text-[#757575]">ummeyhabiba1312@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HelpPage;