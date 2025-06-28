import React from 'react';
import { Palette, Layers, Sparkles, ArrowRight, Shirt, Scissors, PaintBucket } from 'lucide-react';

const DesignStudio: React.FC = () => {
  const designTools = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Color Palette",
      description: "Choose from thousands of colors and gradients"
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Fabric Textures",
      description: "Premium fabrics and materials to choose from"
    },
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Custom Cuts",
      description: "Design unique silhouettes and patterns"
    },
    {
      icon: <PaintBucket className="h-8 w-8" />,
      title: "Style Elements",
      description: "Add buttons, zippers, and decorative elements"
    }
  ];

  return (
    <section id="design" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            <span>Design Studio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Bring Your Vision to Life
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our intuitive design studio gives you the power to create stunning, personalized fashion pieces
            with professional-grade tools and unlimited creativity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Design Interface Preview */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-50 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10"></div>
              <div className="relative">
                <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Design Canvas</h3>
                    <Shirt className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg h-64 flex items-center justify-center">
                    <img 
                      src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg" 
                      alt="Dress Design"
                      className="h-48 w-32 object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
                
                {/* Design Tools */}
                <div className="grid grid-cols-2 gap-4">
                  {designTools.map((tool, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-pink-500 mb-2">{tool.icon}</div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-1">{tool.title}</h4>
                      <p className="text-xs text-gray-600">{tool.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 rounded-full p-3 flex-shrink-0">
                  <Palette className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Drag & Drop Interface</h3>
                  <p className="text-gray-600">Intuitive design tools that make creating custom dresses as easy as drag and drop.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                  <Layers className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Materials</h3>
                  <p className="text-gray-600">Choose from our extensive collection of high-quality fabrics and materials.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-indigo-100 rounded-full p-3 flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Styling Assistant</h3>
                  <p className="text-gray-600">Get personalized suggestions and styling tips from our AI-powered assistant.</p>
                </div>
              </div>
            </div>

            <button className="btn-primary inline-flex items-center space-x-2">
              <span>Try Design Studio</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignStudio;