import React, { useState } from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500">
              Get in Touch
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-black/40 border border-green-500/20 rounded-lg p-8 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-green-500">Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-black/60 border border-green-500/30 rounded-lg px-4 py-3 text-white
                         focus:outline-none focus:border-green-500 transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-green-500">Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-black/60 border border-green-500/30 rounded-lg px-4 py-3 text-white
                         focus:outline-none focus:border-green-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-green-500">Message</label>
              <textarea
                id="message"
                required
                rows={6}
                className="w-full bg-black/60 border border-green-500/30 rounded-lg px-4 py-3 text-white
                         focus:outline-none focus:border-green-500 transition-colors"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={formStatus !== 'idle'}
              className={`w-full px-8 py-4 rounded-lg bg-green-500 hover:bg-green-400 text-black font-bold
                       transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2
                       ${formStatus !== 'idle' ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {formStatus === 'idle' && (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
              {formStatus === 'sending' && (
                <>
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              )}
              {formStatus === 'sent' && (
                <>
                  <div className="w-5 h-5 text-black">✓</div>
                  Sent!
                </>
              )}
            </button>
          </form>
        </div>

        {/* Alternative Contact Methods */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-black/40 border border-green-500/20 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-green-500" />
              <h2 className="text-xl font-bold">Email Us</h2>
            </div>
            <p className="text-gray-400">
              For general inquiries:<br />
              <a href="mailto:contact@pentesterpedia.com" className="text-green-500 hover:text-green-400 transition-colors">
                contact@pentesterpedia.com
              </a>
            </p>
          </div>

          <div className="bg-black/40 border border-green-500/20 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-6 h-6 text-green-500" />
              <h2 className="text-xl font-bold">Community Support</h2>
            </div>
            <p className="text-gray-400">
              Join our Discord community for real-time support and discussions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;