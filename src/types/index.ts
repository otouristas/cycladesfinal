export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Activity {
  id: number;
  title: string;
  description: string;
  location: string;
  image: string;
  price: string;
  duration: string;
  rating: number;
  reviews: number;
  category: string;
}

export interface Hotel {
  id: number;
  name: string;
  location: string;
  image: string;
  price: string;
  rating: number;
  reviews: number;
  amenities: string[];
  description: string;
}

export interface Island {
  id: number;
  name: string;
  description: string;
  image: string;
  highlights: string[];
  weather: {
    temp: string;
    condition: string;
  };
  activities: number;
}

export interface TravelGuide {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
  readTime: number;
  category: string;
  content?: string;
}

export interface CarRental {
  id: number;
  make: string;
  model: string;
  category: string;
  image: string;
  price: string;
  seats: number;
  transmission: string;
  fuelType: string;
  rating: number;
  reviews: number;
}