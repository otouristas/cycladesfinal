import React from 'react';
import { SlidersHorizontal, Calendar, MapPin } from 'lucide-react';
import RentACarCard from '../components/cards/RentACarCard';
import SearchBar from '../components/SearchBar';

const cars = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Yaris',
    category: 'Economy',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80',
    price: '€35',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    make: 'Peugeot',
    model: '208',
    category: 'Compact',
    image: 'https://images.unsplash.com/photo-1582639510494-c80b5de9f148?auto=format&fit=crop&q=80',
    price: '€40',
    seats: 5,
    transmission: 'Manual',
    fuelType: 'Petrol',
    rating: 4.7,
    reviews: 98
  },
  {
    id: 3,
    make: 'Jeep',
    model: 'Renegade',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80',
    price: '€65',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    rating: 4.9,
    reviews: 156
  }
];

export default function RentACar() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Rent a Car in Cyclades</h1>
          <SearchBar />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-sm h-fit">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Filters</h2>
              <SlidersHorizontal className="h-5 w-5 text-gray-500" />
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pick-up Location
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter location"
                  />
                  <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pick-up Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Return Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full px-4 py-2 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Type
                </label>
                <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="">All Types</option>
                  <option value="economy">Economy</option>
                  <option value="compact">Compact</option>
                  <option value="suv">SUV</option>
                </select>
              </div>
            </div>
          </div>

          {/* Car Listings */}
          <div className="flex-1">
            <div className="grid gap-6">
              {cars.map((car) => (
                <RentACarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}