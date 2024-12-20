import React from 'react';
import { Compass, Building2, UtensilsCrossed, Map, Ship } from 'lucide-react';

const categories = [
  { icon: Compass, name: 'Activities', count: '250+' },
  { icon: Building2, name: 'Hotels', count: '180+' },
  { icon: UtensilsCrossed, name: 'Restaurants', count: '320+' },
  { icon: Map, name: 'Travel Guides', count: '45+' },
  { icon: Ship, name: 'Island Hopping', count: '30+' },
];

export default function Categories() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Explore by Category</h2>
        
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <category.icon className="h-8 w-8 text-blue-600" />
              <h3 className="mt-4 font-medium text-gray-900">{category.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{category.count} listings</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}