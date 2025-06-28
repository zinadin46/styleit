import React from 'react';
import { ArrowRight, Sparkles, Palette } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>New: AI-Powered Design Assistant</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Design Your
              <span className="block bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Perfect Look
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Create custom dresses, style your wardrobe, and shop personalized fashion. 
              Your style, your way, with our innovative design tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary inline-flex items-center justify-center space-x-2">
                <Palette className="h-5 w-5" />
                <span>Start Designing</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="btn-secondary">
                Explore Collections
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Designs Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">25K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-xl p-6 shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg" 
                  alt="Fashion Design" 
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">Custom Evening Dress</h3>
                  <p className="text-gray-600">Designed by Sarah M.</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 bg-white rounded-full p-4 shadow-lg animate-bounce">
              <Sparkles className="h-6 w-6 text-pink-500" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg animate-pulse">
              <Palette className="h-6 w-6 text-purple-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;