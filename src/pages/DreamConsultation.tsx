import React from 'react';
import { motion } from 'framer-motion';

const DreamConsultation = () => {
  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <h1 className="section-title">Dream Consultation</h1>
        <form className="bg-white shadow-lg rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name*
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golden focus:border-golden"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Date*
              </label>
              <input
                type="date"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golden focus:border-golden"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time*
              </label>
              <select
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golden focus:border-golden"
              >
                {Array.from({ length: 48 }, (_, i) => {
                  const hour = Math.floor(i / 2);
                  const minute = i % 2 === 0 ? '00' : '30';
                  const ampm = hour < 12 ? 'AM' : 'PM';
                  const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
                  return `${hour12}:${minute} ${ampm}`;
                }).map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Type*
              </label>
              <select
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golden focus:border-golden"
              >
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="sundowner">Sundowner</option>
                <option value="brunch">Brunch</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Venue*
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golden focus:border-golden"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Guests*
              </label>
              <input
                type="range"
                min="0"
                max="5000"
                step="50"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>0</span>
                <span>5000</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Number*
              </label>
              <input
                type="tel"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golden focus:border-golden"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email*
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golden focus:border-golden"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tell Us More About Your Event
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-golden focus:border-golden"
              ></textarea>
            </div>
          </div>
          <div className="mt-6">
            <button type="submit" className="w-full btn-primary">
              Submit Consultation Request
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default DreamConsultation;