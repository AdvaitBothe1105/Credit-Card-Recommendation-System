'use client';

import { useState } from 'react';
import { Switch } from '@headlessui/react';

export const ApplyCard = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 mb-10">
      <h2 className="text-3xl font-bold text-center text-gray-900">Apply for a Credit Card</h2>
      <p className="text-center text-gray-600 mt-2">Fill out the form below to apply.</p>

      <form action="#" method="POST" className="mt-6 space-y-6">
        {/* Personal Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">First Name</label>
            <input type="text" id="first-name" name="first-name" required className="mt-2 block w-full rounded-md border border-gray-300 p-2 focus:outline-indigo-600" />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">Last Name</label>
            <input type="text" id="last-name" name="last-name" required className="mt-2 block w-full rounded-md border border-gray-300 p-2 focus:outline-indigo-600" />
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-900">Email</label>
          <input type="email" id="email" name="email" required className="mt-2 block w-full rounded-md border border-gray-300 p-2 focus:outline-indigo-600" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-900">Phone Number</label>
          <input type="text" id="phone" name="phone" required className="mt-2 block w-full rounded-md border border-gray-300 p-2 focus:outline-indigo-600" />
        </div>

        {/* Financial Details */}
        <div>
          <label htmlFor="income" className="block text-sm font-semibold text-gray-900">Annual Income (INR)</label>
          <input type="number" id="income" name="income" required className="mt-2 block w-full rounded-md border border-gray-300 p-2 focus:outline-indigo-600" />
        </div>
        
        <div>
          <label htmlFor="employment" className="block text-sm font-semibold text-gray-900">Employment Status</label>
          <select id="employment" name="employment" required className="mt-2 block w-full rounded-md border border-gray-300 p-2 focus:outline-indigo-600">
            <option value="">Select</option>
            <option value="Salaried">Salaried</option>
            <option value="Self-employed">Self-employed</option>
            <option value="Student">Student</option>
            <option value="Unemployed">Unemployed</option>
          </select>
        </div>
        {/* Agreement */}
        <div className="flex items-center gap-x-3">
          <Switch checked={agreed} onChange={setAgreed} className={`${agreed ? 'bg-indigo-600' : 'bg-gray-300'} relative inline-flex h-6 w-11 items-center rounded-full transition`}>
            <span className="sr-only">Agree to terms</span>
            <span className={`${agreed ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform bg-white rounded-full transition`} />
          </Switch>
          <label className="text-sm text-gray-700">
            I agree to the <a href="#" className="text-indigo-600 font-semibold">terms and conditions</a>.
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 focus:outline-none">
          Apply Now
        </button>
      </form>
    </div>
  );
};
