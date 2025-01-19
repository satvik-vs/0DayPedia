import React from 'react';
import { Users, ExternalLink } from 'lucide-react';

const teamMembers = [
  {
    name: "Satvik Vemulapalli",
    role: "Penetration Tester",
    avatar: "data:image/jpeg;base64,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",
    specialty: "CS Student at GITAM UNIVERSITY - Hyderabad"
  },
];

const communities = [
  {
    name: "HackerOne",
    description: "The world's leading bug bounty and vulnerability coordination platform.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&fit=crop&q=80",
    link: "https://hackerone.com"
  },
  {
    name: "OWASP",
    description: "The Open Web Application Security Project® is a nonprofit foundation improving software security.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&fit=crop&q=80",
    link: "https://owasp.org"
  },
  {
    name: "Hack The Box",
    description: "An online platform to test and advance your skills in penetration testing and cybersecurity.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&fit=crop&q=80",
    link: "https://www.hackthebox.com"
  }
];

function Community() {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500">
              Our Community
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
            Meet our growing network of security professionals and partner communities
          </p>
        </div>

        {/* Team Members Section */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-500 flex items-center gap-3">
            <Users className="w-8 h-8" />
            Core Members
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-black/40 border border-green-500/20 rounded-lg p-6 backdrop-blur-sm
                         transform hover:scale-105 transition-all duration-300"
              >
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-green-500/50"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-green-500 mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Communities Section */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-500 flex items-center gap-3">
            <ExternalLink className="w-8 h-8" />
            Partner Communities
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map((community, index) => (
              <div 
                key={index}
                className="bg-black/40 border border-green-500/20 rounded-lg overflow-hidden
                         transform hover:scale-105 transition-all duration-300"
              >
                <img 
                  src={community.image} 
                  alt={community.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{community.name}</h3>
                  <p className="text-gray-400 mb-4">{community.description}</p>
                  <a 
                    href={community.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors"
                  >
                    Visit Community
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;