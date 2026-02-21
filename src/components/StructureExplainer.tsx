/**
 * @file StructureExplainer.tsx
 * @author Udara Shanuka <Axiolon Labs>
 * @copyright 2026 Axiolon Labs
 * @license MIT
 * 
 * @description
 * A Presentational Component that visualizes the structure of the Articles of Association.
 * 
 * Design Patterns:
 * - Presentational Component: Renders static educational content.
 */

import React from 'react';
import { motion } from 'motion/react';

export default function StructureExplainer() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900">Anatomy of the Articles</h2>
        <p className="text-gray-500 mt-2">How the document is structured</p>
      </div>

      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block"></div>

        {/* Root Node */}
        <div className="relative z-10 flex justify-center mb-12">
          <div className="bg-black text-white px-8 py-4 rounded-2xl shadow-xl text-center max-w-xs">
            <h3 className="font-bold text-lg">Articles of Association</h3>
            <p className="text-xs text-gray-300 mt-1">The Constitution of the Company</p>
          </div>
        </div>

        {/* Level 2: Main Schedules/Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative z-10">
          
          {/* Branch 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:text-right"
          >
            <div className="bg-emerald-50 border border-emerald-100 p-5 rounded-xl inline-block w-full md:w-auto relative">
              <div className="hidden md:block absolute top-1/2 -right-8 w-8 h-0.5 bg-gray-200"></div>
              <h4 className="font-bold text-emerald-800">Sections (Schedules)</h4>
              <p className="text-xs text-gray-600 mt-1">Major categories of rules</p>
              <div className="mt-3 space-y-2">
                <span className="block text-xs bg-white px-2 py-1 rounded border border-emerald-100 text-emerald-600">A. Shares</span>
                <span className="block text-xs bg-white px-2 py-1 rounded border border-emerald-100 text-emerald-600">B. Meetings</span>
                <span className="block text-xs bg-white px-2 py-1 rounded border border-emerald-100 text-emerald-600">C. Directors</span>
              </div>
            </div>
          </motion.div>

          {/* Branch 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:text-left"
          >
            <div className="bg-blue-50 border border-blue-100 p-5 rounded-xl inline-block w-full md:w-auto relative">
              <div className="hidden md:block absolute top-1/2 -left-8 w-8 h-0.5 bg-gray-200"></div>
              <h4 className="font-bold text-blue-800">Articles</h4>
              <p className="text-xs text-gray-600 mt-1">Specific topics within a section</p>
              <div className="mt-3 space-y-2">
                <span className="block text-xs bg-white px-2 py-1 rounded border border-blue-100 text-blue-600">Article 1: Issue of Shares</span>
                <span className="block text-xs bg-white px-2 py-1 rounded border border-blue-100 text-blue-600">Article 8: Quorum</span>
              </div>
            </div>
          </motion.div>

           {/* Branch 3 */}
           <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:text-right"
          >
            <div className="bg-purple-50 border border-purple-100 p-5 rounded-xl inline-block w-full md:w-auto relative">
              <div className="hidden md:block absolute top-1/2 -right-8 w-8 h-0.5 bg-gray-200"></div>
              <h4 className="font-bold text-purple-800">Clauses & Sub-clauses</h4>
              <p className="text-xs text-gray-600 mt-1">Detailed rules and conditions</p>
              <div className="mt-3 space-y-2">
                <span className="block text-xs bg-white px-2 py-1 rounded border border-purple-100 text-purple-600">Clause 1(1): Board authority</span>
                <span className="block text-xs bg-white px-2 py-1 rounded border border-purple-100 text-purple-600">Clause 1(2): Consideration</span>
              </div>
            </div>
          </motion.div>

          {/* Branch 4 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:text-left"
          >
            <div className="bg-orange-50 border border-orange-100 p-5 rounded-xl inline-block w-full md:w-auto relative">
              <div className="hidden md:block absolute top-1/2 -left-8 w-8 h-0.5 bg-gray-200"></div>
              <h4 className="font-bold text-orange-800">Interpretation</h4>
              <p className="text-xs text-gray-600 mt-1">Definitions of terms used</p>
              <div className="mt-3 space-y-2">
                <span className="block text-xs bg-white px-2 py-1 rounded border border-orange-100 text-orange-600">"The Act" = Companies Act 07</span>
                <span className="block text-xs bg-white px-2 py-1 rounded border border-orange-100 text-orange-600">"Board" = Directors</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
