import React from 'react';
import { Building2, Users2, Target, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8">About VisionPress</h1>
      
      <div className="prose prose-lg max-w-none mb-12">
        <p className="text-xl text-gray-600 mb-8">
          VisionPress is a pioneering digital news platform committed to delivering accurate, timely, and innovative journalism to readers worldwide.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          {
            icon: Building2,
            title: 'Our Mission',
            description: 'To provide unbiased, comprehensive news coverage that empowers readers to make informed decisions.'
          },
          {
            icon: Users2,
            title: 'Our Team',
            description: 'A diverse group of experienced journalists and industry experts committed to excellence.'
          },
          {
            icon: Target,
            title: 'Our Vision',
            description: 'To be the most trusted source of news and information in the digital age.'
          },
          {
            icon: Award,
            title: 'Our Values',
            description: 'Integrity, accuracy, innovation, and commitment to truth in journalism.'
          }
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <item.icon className="w-8 h-8 mb-4 text-gray-800" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6">Our Story</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Founded in 2024, VisionPress emerged from a vision to revolutionize digital journalism. In an era of rapid technological advancement and changing media landscapes, we recognized the need for a news platform that combines traditional journalistic values with innovative digital approaches.
          </p>
          <p>
            Our platform has grown to serve millions of readers worldwide, maintaining our commitment to accuracy, fairness, and comprehensive coverage of the stories that matter most.
          </p>
        </div>
      </div>
    </div>
  );
}