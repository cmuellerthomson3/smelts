import React from 'react';
import { Fish, Droplets, Users } from 'lucide-react';

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Through dedicated research, community engagement, and conservation efforts, we've made significant strides in protecting marine ecosystems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Fish className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Species Protected</h3>
            <p className="text-4xl font-bold text-blue-600 mb-2">50+</p>
            <p className="text-gray-600">Marine species protected through our conservation programs</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Droplets className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Ocean Area</h3>
            <p className="text-4xl font-bold text-blue-600 mb-2">10,000</p>
            <p className="text-gray-600">Square kilometers of ocean protected</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
            <p className="text-4xl font-bold text-blue-600 mb-2">25,000+</p>
            <p className="text-gray-600">People engaged in conservation efforts</p>
          </div>
        </div>
      </div>
    </section>
  );
}