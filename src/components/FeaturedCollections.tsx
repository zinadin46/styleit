import React from 'react';
import { ArrowRight, Heart, ShoppingBag } from 'lucide-react';

const FeaturedCollections: React.FC = () => {
  const collections = [
    {
      id: 1,
      title: "Summer Elegance",
      description: "Light, breezy designs perfect for the season",
      image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
      price: "From $89",
      items: "24 items"
    },
    {
      id: 2,
      title: "Evening Glamour",
      description: "Sophisticated pieces for special occasions",
      image: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg",
      price: "From $149",
      items: "18 items"
    },
    {
      id: 3,
      title: "Casual Chic",
      description: "Comfortable yet stylish everyday wear",
      image: "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg",
      price: "From $65",
      items: "32 items"
    },
    {
      id: 4,
      title: "Business Professional",
      description: "Powerful and polished office attire",
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
      price: "From $120",
      items: "20 items"
    }
  ];

  return (
    <section id="collections" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our curated collections of trending styles and timeless classics, 
            all available for customization or ready-to-wear.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group">
              <div className="relative overflow-hidden">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <button className="bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                    <Heart className="h-5 w-5 text-gray-700" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <button className="w-full bg-white text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2">
                    <ShoppingBag className="h-4 w-4" />
                    <span>Quick Shop</span>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{collection.title}</h3>
                  <span className="text-sm text-gray-500">{collection.items}</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{collection.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-pink-600">{collection.price}</span>
                  <button className="text-pink-600 hover:text-pink-700 inline-flex items-center space-x-1 text-sm font-medium">
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;