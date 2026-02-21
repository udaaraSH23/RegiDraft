/**
 * @file LandingPage.tsx
 * @author Udara Shanuka <Axiolon Labs>
 * @copyright 2026 Axiolon Labs
 * @license MIT
 * 
 * @description
 * The Landing Page component serving as the marketing entry point.
 * 
 * Design Patterns:
 * - Presentational Component: Renders static content and accepts a callback `onStart` for interaction.
 * - Hero Pattern: Uses a large hero section to capture user attention.
 */

import React from 'react';
import { motion } from 'motion/react';
import { FileText, Shield, Globe, ArrowRight, CheckCircle } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <header className="flex-1 flex flex-col justify-center items-center text-center px-6 py-12 bg-gradient-to-b from-emerald-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Updated for Companies Act No. 07 of 2007
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Draft your <span className="text-emerald-600">Articles of Association</span> in minutes.
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            The easiest way to generate a compliant "Short Form" Articles of Association for your Sri Lankan Private Limited Company by adopting the standard Model Articles.
          </p>
          
          <button
            onClick={onStart}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-black text-white text-lg font-medium rounded-2xl hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Start Drafting Now
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </header>

      {/* Features Grid */}
      <section className="py-12 px-6 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-emerald-100 transition-colors"
          >
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4 text-emerald-600">
              <Shield size={20} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Legally Compliant</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Based on the Model Articles (First Schedule) of the Companies Act No. 07 of 2007, ensuring your company starts on solid legal ground.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-emerald-100 transition-colors"
          >
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4 text-emerald-600">
              <FileText size={20} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Minimal Path</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Adopts the standard Model Articles by reference. This is the simplest, fastest way to incorporate a Private Limited company without drafting custom rules from scratch.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-emerald-100 transition-colors"
          >
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4 text-emerald-600">
              <Globe size={20} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Plain English Guide</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Don't just copy-paste. Understand what you're signing with our built-in glossary and simple explanations for every legal clause.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 text-xs border-t border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="mb-2">© {new Date().getFullYear()} Udara Shanuka (Axiolon Labs).</p>
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong>Disclaimer:</strong> This application is a software tool for drafting documents based on the Companies Act No. 07 of 2007. 
            It does not constitute legal advice, and no attorney-client relationship is formed. 
            The generated documents are based on standard model articles and may not be suitable for complex business structures. 
            We strongly recommend consulting with a qualified Company Secretary or Attorney-at-Law in Sri Lanka before registering your company.
          </p>
        </div>
      </footer>
    </div>
  );
}
