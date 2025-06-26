
import React from 'react';
import { Mail, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in">
          Let's Connect
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Ready to collaborate on innovative projects? Let's discuss how we can build something amazing together.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-700 p-12 hover:shadow-blue-500/20 transition-all duration-700 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
              <Mail className="text-white" size={40} />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
              <p className="text-gray-300 text-lg">
                I'm always open to discussing new opportunities, innovative projects, or just having a chat about technology.
              </p>
            </div>
            
            <a 
              href="mailto:aishwaryab1804@gmail.com"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 transform-gpu"
            >
              <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              <span>Send me an email</span>
            </a>
            
            <div className="flex items-center gap-2 text-gray-400">
              <MessageCircle size={16} />
              <span className="text-sm">Usually responds within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
