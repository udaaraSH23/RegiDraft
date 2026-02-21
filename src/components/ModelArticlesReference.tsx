/**
 * @file ModelArticlesReference.tsx
 * @author Udara Shanuka <Axiolon Labs>
 * @copyright 2026 Axiolon Labs
 * @license MIT
 * 
 * @description
 * A Presentational Component that renders the full text of the Model Articles.
 * 
 * Design Patterns:
 * - Master-Detail Pattern: Sidebar list (Master) selects the content to display (Detail).
 * - Presentational Component: Receives data from `fullModelArticles` and renders it without complex logic.
 */

import React, { useState } from 'react';
import { fullModelArticles } from '../data/fullModelArticles';
import { motion, AnimatePresence } from 'motion/react';
import { Book, ChevronDown, ChevronRight, FileText, Scale } from 'lucide-react';

export default function ModelArticlesReference() {
  // State for the currently selected section (Master-Detail selection)
  const [selectedId, setSelectedId] = useState<string>(fullModelArticles[0].id);

  return (
    <div className="flex flex-col md:flex-row gap-6 h-[calc(100vh-200px)]">
      {/* Sidebar Navigation (Master View) */}
      <div className="w-full md:w-1/4 bg-white rounded-xl border border-gray-200 overflow-y-auto">
        <div className="p-4 border-b border-gray-100 bg-gray-50">
          <h3 className="font-bold text-gray-700 flex items-center gap-2">
            <Book size={18} /> Sections
          </h3>
        </div>
        <div className="p-2">
          {fullModelArticles.map((section) => (
            <button
              key={section.id}
              onClick={() => setSelectedId(section.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center justify-between mb-1 ${
                selectedId === section.id
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="truncate">{section.title}</span>
              {selectedId === section.id && <ChevronRight size={16} />}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area (Detail View) */}
      <div className="flex-1 bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col">
        {fullModelArticles.map((section) => (
          selectedId === section.id && (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col h-full"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                  <div className="mt-1 flex flex-col gap-1">
                    <span className="text-xs font-mono text-gray-400">First Schedule, Companies Act No. 07 of 2007</span>
                    <a 
                      href="https://www.drc.gov.lk/en/regulations/acts/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[10px] text-blue-500 hover:underline flex items-center gap-1"
                    >
                      View Official Act <ChevronRight size={10} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-gray-50/50">
                {section.articles.map((article, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    {/* Article Header */}
                    <div className="bg-gray-50 px-6 py-3 border-b border-gray-100 flex items-center gap-3">
                      <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded">
                        Article {article.number}
                      </span>
                      <h3 className="font-bold text-gray-800 text-sm">{article.title}</h3>
                    </div>

                    <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                      {/* Plain English Column */}
                      <div className="p-6 bg-emerald-50/30">
                        <h4 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <FileText size={14} /> Plain English
                        </h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {article.plainEnglish}
                        </p>
                      </div>

                      {/* Legal Text Column */}
                      <div className="p-6">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Scale size={14} /> Legal Text
                        </h4>
                        <div className="font-serif text-xs text-gray-500 leading-relaxed whitespace-pre-wrap">
                          {article.legalText}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        ))}
      </div>
    </div>
  );
}
