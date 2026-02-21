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
import Wizard from './components/Wizard';
import LandingPage from './components/LandingPage';

export default function App() {
  // State to manage the view transition (Landing -> App)
  const [showWizard, setShowWizard] = useState(false);

  // Conditional rendering based on state (Strategy Pattern)
  if (!showWizard) {
    return <LandingPage onStart={() => setShowWizard(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans">
      {/* Global Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
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
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Companies Act No. 07 of 2007
          </div>
        </div>
      </header>
      
      <main className="py-8">
        <Wizard />
      </main>
    </div>
  );
}
