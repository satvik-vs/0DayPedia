import React, { useState, useEffect } from 'react';
import { Terminal, Shield } from 'lucide-react';

function Home() {
  const [time, setTime] = useState({
    days: 10,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [cursorVisible, setCursorVisible] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);

    const loadingInterval = setInterval(() => {
      setLoadingProgress(prev => (prev < 100 ? prev + 1 : 0));
    }, 100);

    const timer = setInterval(() => {
      setTime(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => {
      clearInterval(cursorInterval);
      clearInterval(loadingInterval);
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight px-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500 animate-gradient">
            The Future of Cybersecurity ✨
          </span>
          <span className="inline-block ml-1 text-green-500 animate-blink">{cursorVisible ? '_' : ''}</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed tracking-wide px-4">
          A revolutionary platform where hackers, security researchers, and cybersecurity enthusiasts unite.
          <br className="hidden sm:block" />
          <span className="text-green-500">Coming to redefine digital security.</span>
        </p>

        {/* Terminal Window */}
        <div className="bg-black/60 rounded-lg border border-green-500/30 p-4 mb-8 mx-auto max-w-2xl backdrop-blur-sm">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="font-mono text-sm md:text-base space-y-2">
            <p className="text-green-400">$ initializing_secure_environment</p>
            <p className="text-gray-400">&gt; Establishing secure connection...</p>
            <p className="text-gray-400">&gt; Loading encryption protocols...</p>
            <div className="flex items-center space-x-2">
              <span className="text-green-400">$</span>
              <div className="h-1 bg-green-900 rounded-full w-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 transition-all duration-300"
                  style={{ width: `${loadingProgress}%` }}
                ></div>
              </div>
              <span className="text-green-400">{loadingProgress}%</span>
            </div>
          </div>
        </div>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12 px-4">
          {Object.entries(time).map(([label, value]) => (
            <div key={label} className="bg-black/40 p-4 sm:p-6 rounded-lg border border-green-500/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-bold text-green-500 mb-2">
                {String(value).padStart(2, '0')}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 px-4">
          <button className="w-full sm:w-auto px-8 py-4 rounded-lg bg-green-500 hover:bg-green-400 text-black font-bold transform hover:scale-105 transition-all duration-300 min-w-[200px]">
            Join the Waitlist
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-lg border-2 border-green-500 text-green-500 hover:bg-green-500/10 transform hover:scale-105 transition-all duration-300 min-w-[200px]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;