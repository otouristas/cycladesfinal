import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import TrendingSection from '../components/TrendingSection';
import FeaturedListings from '../components/FeaturedListings';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <SearchBar />
        </div>
      </div>
      <Categories />
      <TrendingSection />
      <FeaturedListings />
    </div>
  );
}