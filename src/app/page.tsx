'use client'

import { useState, useEffect } from 'react'

export default function HelloWorldPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Main Content */}
        <div className="text-center space-y-8">
          {/* Header Section */}
          <div 
            className={`transition-all duration-1000 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Hello World
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Welcome Message */}
          <div 
            className={`transition-all duration-1000 delay-300 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Welcome to your modern Next.js application. This is a beautifully crafted 
              Hello World page built with <span className="font-semibold text-blue-600">Next.js 15</span>, 
              <span className="font-semibold text-purple-600"> Tailwind CSS</span>, and 
              <span className="font-semibold text-indigo-600"> TypeScript</span>.
            </p>
          </div>

          {/* Feature Cards */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 transition-all duration-1000 delay-500 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {/* React Card */}
            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">React 19</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Built with the latest React features including concurrent rendering and improved performance.
              </p>
            </div>

            {/* Next.js Card */}
            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-600 rounded-xl mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Next.js 15</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Powered by Next.js App Router with server components and optimized performance.
              </p>
            </div>

            {/* Tailwind Card */}
            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Tailwind CSS</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Styled with Tailwind CSS for rapid development and consistent design system.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div 
            className={`mt-16 transition-all duration-1000 delay-700 ease-out transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                This foundation is ready for your next big idea. Start building your dream application today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg">
                  Get Started
                </button>
                <button className="px-8 py-4 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-all duration-300 hover:scale-105 border-2 border-blue-500">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-xl"></div>
      </div>
    </div>
  )
}