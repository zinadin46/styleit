import React, { useState } from 'react';
import { Filter, Grid3X3, List, Heart, ShoppingBag, Star } from 'lucide-react';

const ShopSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const products = [
    {
      id: 1,
      name: "Elegant Maxi Dress",
      price: 129,
      originalPrice: 159,
      rating: 4.8,
      reviews: 124,
      image: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg",
      isCustomizable: true,
      colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'],
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
      id: 2,
      name: "Cocktail Party Dress",
      price: 89,
      originalPrice: null,
      rating: 4.6,
      reviews: 89,
      image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg",
      isCustomizable: true,
      colors: ['#2C3E50', '#E74C3C', '#8E44AD', '#F39C12'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 3,
      name: "Business Blazer Dress",
      price: 149,
      originalPrice: 179,
      rating: 4.9,
      reviews: 201,
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
      isCustomizable: false,
      colors: ['#2C3E50', '#34495E', '#7F8C8D'],
      sizes: ['XS', 'S', 'M', 'L']
    },
    {
      id: 4,
      name: "Bohemian Summer Dress",
      price: 79,
      originalPrice: 99,
      rating: 4.7,
      reviews: 156,
      image: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg",
      isCustomizable: true,
      colors: ['#E8F5E8', '#FFF8DC', '#FFE4E1', '#F0E68C'],
      sizes: ['S', 'M', 'L']
    }
  ];

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop Our Collection</h2>
            <p className="text-gray-600">Discover ready-to-wear pieces and customizable designs</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-6 lg:mt-0">
            <button className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors">
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </button>
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                }`}
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className={`grid gap-8 ${viewMode === 'grid' ? 'sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
          {products.map((product) => (
            <div key={product.id} className={`bg-white rounded-2xl overflow-hidden shadow-lg card-hover group ${
              viewMode === 'list' ? 'flex' : ''
            }`}>
              <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-64 flex-shrink-0' : ''}`}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
                    viewMode === 'list' ? 'w-full h-full' : 'w-full h-64'
                  }`}
                />
                <div className="absolute top-4 right-4 space-y-2">
                  {product.isCustomizable && (
                    <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                      Customizable
                    </span>
                  )}
                  <button className="block bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                    <Heart className="h-4 w-4 text-gray-700" />
                  </button>
                </div>
                
                {product.originalPrice && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      Sale
                    </span>
                  </div>
                )}
              </div>
              
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-center mb-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                    <span className="text-sm text-gray-400">({product.reviews})</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <span className="text-sm text-gray-600 block mb-2">Colors:</span>
                    <div className="flex space-x-2">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 rounded-full border-2 border-gray-200 cursor-pointer hover:scale-110 transition-transform"
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-sm text-gray-600 block mb-2">Sizes:</span>
                    <div className="flex space-x-2">
                      {product.sizes.map((size, index) => (
                        <span
                          key={index}
                          className="text-xs border border-gray-200 px-2 py-1 rounded cursor-pointer hover:border-pink-500 hover:text-pink-500 transition-colors"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-medium transition-colors inline-flex items-center justify-center space-x-2">
                    <ShoppingBag className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                  {product.isCustomizable && (
                    <button className="px-4 py-2 border border-pink-500 text-pink-500 hover:bg-pink-50 rounded-lg font-medium transition-colors">
                      Customize
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;