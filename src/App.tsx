/**
 * @file App.tsx
 * @author Udara Shanuka <Axiolon Labs>
 * @copyright 2026 Axiolon Labs
 * @license MIT
 * 
 * @description
 * Main Application Entry Point.
 * 
 * Architecture Note:
 * This component serves as the root "Controller" for the high-level view state.
 * It implements a simple State Pattern to toggle between the Landing Page and the main Wizard application.
 */

import React, { useState } from 'react';
import Wizard, { Tab } from './components/Wizard';
import LandingPage from './components/LandingPage';
import { PenTool, BookOpen, Library } from 'lucide-react';

export default function App() {
  // State to manage the view transition (Landing -> App)
  const [showWizard, setShowWizard] = useState(false);
  // State to manage the active tab in the Wizard
  const [activeTab, setActiveTab] = useState<Tab>('draft');

  // Conditional rendering based on state (Strategy Pattern)
  if (!showWizard) {
    return <LandingPage onStart={() => setShowWizard(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans">
      {/* Global Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20 no-print">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 md:py-0 min-h-[64px] flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
          {/* Left: Logo */}
          <div className="w-full md:w-auto flex justify-between items-center">
            <div 
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setShowWizard(false)}
              title="Return to Home"
            >
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl">
                §
              </div>
              <h1 className="font-semibold text-lg tracking-tight">RegiDraft</h1>
            </div>
            {/* Mobile Meta Info */}
            <div className="text-[10px] font-medium text-gray-400 uppercase tracking-wider md:hidden">
              Companies Act No. 07
            </div>
          </div>

          {/* Center: Navigation Tabs */}
          <div className="w-full md:w-auto md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
            <div className="bg-gray-100 p-1 rounded-xl flex gap-1 justify-between md:justify-start overflow-x-auto">
              <button
                onClick={() => setActiveTab('draft')}
                className={`flex-1 md:flex-none px-3 md:px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 whitespace-nowrap ${
                  activeTab === 'draft' || activeTab === 'review'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                }`}
              >
                <PenTool size={14} /> Draft
              </button>
              <button
                onClick={() => setActiveTab('learn')}
                className={`flex-1 md:flex-none px-3 md:px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 whitespace-nowrap ${
                  activeTab === 'learn'
                    ? 'bg-white text-emerald-700 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                }`}
              >
                <BookOpen size={14} /> Learn
              </button>
              <button
                onClick={() => setActiveTab('reference')}
                className={`flex-1 md:flex-none px-3 md:px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 whitespace-nowrap ${
                  activeTab === 'reference'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
                }`}
              >
                <Library size={14} /> Reference
              </button>
            </div>
          </div>

          {/* Right: Meta Info (Desktop) */}
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:block">
            Companies Act No. 07 of 2007
          </div>
        </div>
      </header>
      
      <main className="py-8">
        <Wizard activeTab={activeTab} onTabChange={setActiveTab} />
      </main>
    </div>
  );
}
