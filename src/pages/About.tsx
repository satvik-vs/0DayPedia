import React from 'react';
import { Shield, Lock, Terminal } from 'lucide-react';

function About() {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500">
              About 0daypedia
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
            Building the future of cybersecurity education and community collaboration
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-black/40 border border-green-500/20 rounded-lg p-8 backdrop-blur-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-500 mb-6">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            0daypedia aims to revolutionize how security professionals learn, collaborate, and grow. 
            We're building a platform where knowledge meets practice, and where the next generation of 
            cybersecurity experts can thrive.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 mt-8">
            <div className="space-y-4">
              <Shield className="w-12 h-12 text-green-500" />
              <h3 className="text-xl font-bold text-white">Learn</h3>
              <p className="text-gray-400">Access cutting-edge security resources and hands-on labs</p>
            </div>
            <div className="space-y-4">
              <Lock className="w-12 h-12 text-green-500" />
              <h3 className="text-xl font-bold text-white">Practice</h3>
              <p className="text-gray-400">Test your skills in real-world scenarios</p>
            </div>
            <div className="space-y-4">
              <Terminal className="w-12 h-12 text-green-500" />
              <h3 className="text-xl font-bold text-white">Connect</h3>
              <p className="text-gray-400">Join a community of passionate security professionals</p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-black/40 border border-green-500/20 rounded-lg p-8 backdrop-blur-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-500 mb-6">Our Vision</h2>
          <div className="space-y-6 text-gray-300">
            <p>
              We envision a world where cybersecurity knowledge is accessible to all, where professionals 
              can learn and grow together, and where the barriers to entry in the security field are 
              lowered through community support and practical education.
            </p>
            <p>
              Through 0daypedia, we're creating a platform that combines:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-400">
              <li>Interactive learning environments</li>
              <li>Real-world security challenges</li>
              <li>Mentorship opportunities</li>
              <li>Community-driven knowledge sharing</li>
              <li>Career development resources</li>
            </ul>
          </div>
        </div>

        {/* Join Section */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-500">Join the Revolution</h2>
          <p className="text-gray-400">
            Be part of the next generation of cybersecurity professionals.
          </p>
          <button className="px-8 py-4 rounded-lg bg-green-500 hover:bg-green-400 text-black font-bold transform hover:scale-105 transition-all duration-300">
            Join the Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;