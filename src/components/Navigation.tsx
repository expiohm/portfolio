'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="p-4 bg-gray-800 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Dheeraj Tarachandani
          </h1>
          
          <div className="flex items-center gap-4">
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex items-center gap-4`}>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 absolute sm:relative top-16 sm:top-0 right-0 sm:right-auto bg-gray-800 sm:bg-transparent p-4 sm:p-0">
                <Link href="/" className="hover:text-gray-300">Home</Link>
                <Link href="/contact" className="hover:text-gray-300">Contact</Link>
              </div>
            </div>
            
            <a 
              href="/Dheeraj_Tarachandani_portfolio.pdf" 
              download
              className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors sm:w-auto justify-center text-sm"
            >
              <svg 
                className="w-4 h-4 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              Resume
            </a>
            
            <button 
              className="sm:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}