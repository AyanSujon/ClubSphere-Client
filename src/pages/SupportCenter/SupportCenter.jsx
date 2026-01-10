
import React from "react";
import { FiSearch, FiMail, FiPhone, FiAlertCircle, FiBookOpen } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";

export default function SupportCenter() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ------------ HERO SECTION ------------ */}
      <div className="bg-[#0b99ce] text-white py-20 px-6 text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-4">
          Support Center
        </h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Need help with ClubSphere? Browse FAQs or reach out to our support team.
        </p>

        <div className="max-w-xl mx-auto mt-8">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 text-black focus:outline-[#fe3885]"
            />
          </div>
        </div>
      </div>

      {/* ------------ QUICK LINKS ------------ */}
      <div className="max-w-6xl mx-auto px-2 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Quick Help Links
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <FaRegQuestionCircle className="text-[#fe3885] text-4xl mb-3" />
            <h3 className="font-semibold text-lg mb-2">Frequently Asked Questions</h3>
            <p className="text-sm text-gray-600">Find answers to the most common questions.</p>
          </div>

          <div className="card bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <FiBookOpen className="text-[#fe3885] text-4xl mb-3" />
            <h3 className="font-semibold text-lg mb-2">Getting Started Guide</h3>
            <p className="text-sm text-gray-600">Learn how to join clubs and register for events.</p>
          </div>

          <div className="card bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <FiAlertCircle className="text-[#fe3885] text-4xl mb-3" />
            <h3 className="font-semibold text-lg mb-2">Report an Issue</h3>
            <p className="text-sm text-gray-600">Something not working? Let us know.</p>
          </div>
        </div>
      </div>

      {/* ------------ FAQ SECTION ------------ */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {/* FAQ Item */}
          <div className="collapse collapse-arrow bg-white shadow-md rounded-xl">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              How do I join a club?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              Search for a club → Open details → Click Join Club.  
              If it’s paid, Stripe payment will be required.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white shadow-md rounded-xl">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              How can I create my own club?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              Login → Go to Dashboard → Apply as Club Manager → Create Club form.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white shadow-md rounded-xl">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              How do payments work?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              ClubSphere uses Stripe test mode for secure payment processing.
            </div>
          </div>

          <div className="collapse collapse-arrow bg-white shadow-md rounded-xl">
            <input type="checkbox" />
            <div className="collapse-title text-lg font-medium">
              Why was my club registration rejected?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              Only approved clubs meet our guidelines.  
              Check your club details or contact support.
            </div>
          </div>
        </div>
      </div>

      {/* ------------ CONTACT SECTION ------------ */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Contact Support
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card bg-white shadow-md p-6 rounded-xl">
            <FiMail className="text-[#0b99ce] text-4xl mb-3" />
            <h3 className="font-semibold text-lg mb-1">Email Us</h3>
            <p className="text-gray-600 text-sm">support@clubsphere.com</p>
          </div>

          <div className="card bg-white shadow-md p-6 rounded-xl">
            <FiPhone className="text-[#0b99ce] text-4xl mb-3" />
            <h3 className="font-semibold text-lg mb-1">Call Us</h3>
            <p className="text-gray-600 text-sm">+1 (800) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
}
