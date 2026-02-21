/**
 * @file Wizard.tsx
 * @author Udara Shanuka <Axiolon Labs>
 * @copyright 2026 Axiolon Labs
 * @license MIT
 * 
 * @description
 * The core "Container" component of the application.
 * 
 * Design Patterns:
 * - Container Component: Manages state (config, step, tab) and passes data to children.
 * - State Pattern: Controls the workflow (Draft -> Review) and UI modes.
 * - Strategy Pattern: `renderContent` dynamically selects the UI strategy based on `activeTab`.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { generateShortFormArticles, CompanyConfig, Director, Shareholder } from '../data/modelArticles';
import { ChevronRight, ChevronLeft, Printer, Info, CheckCircle, FileText, Copy, BookOpen, PenTool, Plus, Trash2, Library } from 'lucide-react';
import Glossary from './Glossary';
import StructureExplainer from './StructureExplainer';
import ModelArticlesReference from './ModelArticlesReference';

// Define the available views (Strategies)
export type Tab = 'learn' | 'draft' | 'review' | 'reference';

interface WizardProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function Wizard({ activeTab, onTabChange }: WizardProps) {
  // State Management (Observer Pattern via React Hooks)
  const [currentStep, setCurrentStep] = useState(0);
  
  // Centralized Configuration State
  const [config, setConfig] = useState<CompanyConfig>({
    companyName: '',
    companyNameSinhala: '',
    companyNameTamil: '',
    isPrivate: true,
    objects: '',
    directors: [{ name: '', address: '' }],
    shareholders: [{ name: '', address: '' }]
  });

  const totalSteps = 4; // 1: Details, 2: Objects, 3: Directors, 4: Shareholders

  // --- Action Handlers (Controller Logic) ---

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onTabChange('review');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const printDocument = () => {
    window.print();
  };

  const copyToClipboard = () => {
    const printContent = document.querySelector('.print-content');
    if (printContent) {
      const text = (printContent as HTMLElement).innerText;
      navigator.clipboard.writeText(text).then(() => {
        alert('Document copied to clipboard!');
      });
    }
  };

  // --- Data Mutation Helpers ---

  const addDirector = () => {
    setConfig({ ...config, directors: [...config.directors, { name: '', address: '' }] });
  };

  const removeDirector = (index: number) => {
    const newDirectors = config.directors.filter((_, i) => i !== index);
    setConfig({ ...config, directors: newDirectors });
  };

  const updateDirector = (index: number, field: keyof Director, value: string) => {
    const newDirectors = [...config.directors];
    newDirectors[index][field] = value;
    setConfig({ ...config, directors: newDirectors });
  };

  const addShareholder = () => {
    setConfig({ ...config, shareholders: [...config.shareholders, { name: '', address: '' }] });
  };

  const removeShareholder = (index: number) => {
    const newShareholders = config.shareholders.filter((_, i) => i !== index);
    setConfig({ ...config, shareholders: newShareholders });
  };

  const updateShareholder = (index: number, field: keyof Shareholder, value: string) => {
    const newShareholders = [...config.shareholders];
    // @ts-ignore
    newShareholders[index][field] = value;
    setConfig({ ...config, shareholders: newShareholders });
  };

  // --- View Strategy Dispatcher ---
  // Renders different content based on the active tab state
  const renderContent = () => {
    if (activeTab === 'learn') {
      return (
        <div className="max-w-5xl mx-auto p-6 space-y-12">
          <section>
            <StructureExplainer />
          </section>
          <section>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-emerald-600" size={28} />
              <h2 className="text-2xl font-bold text-gray-900">Legal Glossary</h2>
            </div>
            <Glossary />
          </section>
        </div>
      );
    }

    if (activeTab === 'reference') {
      return (
        <div className="max-w-6xl mx-auto p-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Library className="text-blue-600" /> Model Articles Reference
            </h2>
            <p className="text-gray-600 mt-2">
              Browse the full text of the Model Articles (First Schedule) with plain English explanations.
            </p>
          </div>
          <ModelArticlesReference />
        </div>
      );
    }

    if (activeTab === 'review') {
      return (
        <div className="max-w-4xl mx-auto p-8 bg-white min-h-screen">
          <div className="no-print flex justify-between items-center mb-8 border-b pb-4 sticky top-0 bg-white z-10 pt-4">
            <h2 className="text-2xl font-bold text-gray-900">Final Review</h2>
            <div className="flex gap-4">
              <button
                onClick={() => onTabChange('draft')}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg flex items-center gap-2 transition-colors"
              >
                <PenTool size={20} /> Edit Answers
              </button>
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-colors"
              >
                <Copy size={20} /> Copy Text
              </button>
              <button
                onClick={printDocument}
                className="px-4 py-2 bg-black text-white rounded-lg flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-md"
              >
                <Printer size={20} /> Print / Save PDF
              </button>
            </div>
          </div>

          {/* Document Generation Output */}
          <div className="print-content font-serif leading-relaxed text-justify max-w-3xl mx-auto whitespace-pre-wrap">
            {generateShortFormArticles(config)}
          </div>

          <div className="no-print mt-12 p-4 bg-yellow-50 border border-yellow-100 rounded-xl text-xs text-yellow-800 text-center">
            <strong>Important Legal Notice:</strong> This document is a draft based on the Model Articles. 
            Before signing or submitting to the Registrar of Companies (EROC), please verify its suitability for your specific business needs with a qualified professional.
          </div>
        </div>
      );
    }

    // Default Strategy: Draft Mode (Wizard)
    return (
      <div className="max-w-3xl mx-auto p-6 min-h-screen flex flex-col">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium text-gray-500 mb-2">
            <span>Drafting Progress</span>
            <span>{Math.round(((currentStep + 1) / totalSteps) * 100)}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-black"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <div className="flex-1">
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div
                key="step-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6 text-emerald-600">
                  <Info size={28} />
                  <h3 className="text-xl font-bold">Company Details</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold uppercase text-gray-500 mb-2">Company Name (English)</label>
                    <input
                      type="text"
                      value={config.companyName}
                      onChange={(e) => setConfig({...config, companyName: e.target.value})}
                      placeholder="e.g. Acme Solutions"
                      className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:outline-none transition-all text-lg"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold uppercase text-gray-500 mb-2">Company Name (Sinhala) <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        value={config.companyNameSinhala}
                        onChange={(e) => setConfig({...config, companyNameSinhala: e.target.value})}
                        placeholder="Required"
                        className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold uppercase text-gray-500 mb-2">Company Name (Tamil) <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        value={config.companyNameTamil}
                        onChange={(e) => setConfig({...config, companyNameTamil: e.target.value})}
                        placeholder="Required"
                        className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold uppercase text-gray-500 mb-2">Company Type</label>
                    <div className="flex gap-4">
                      <div className="flex-1 py-4 px-6 rounded-xl font-medium transition-all flex flex-col items-center gap-2 border bg-black text-white border-black shadow-lg">
                        <span className="text-lg">Private Limited (Pvt Ltd)</span>
                        <CheckCircle size={18} className="text-emerald-400" />
                      </div>
                      <div className="flex-1 py-4 px-6 rounded-xl font-medium transition-all flex flex-col items-center gap-2 border bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed opacity-60">
                        <span className="text-lg">Public (PLC)</span>
                        <span className="text-xs">Not supported in this version</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      * This tool is currently optimized for Private Limited Companies adopting Model Articles.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6 text-emerald-600">
                  <FileText size={28} />
                  <h3 className="text-xl font-bold">Company Objects (Purpose)</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-blue-800 mb-4">
                    <strong>Tip:</strong> Ensure your objects clause is broad enough to allow for future expansion. You don't want to restrict yourself too much.
                  </div>
                  
                  <label className="block text-sm font-bold uppercase text-gray-500 mb-2">What will the company do?</label>
                  <textarea
                    value={config.objects}
                    onChange={(e) => setConfig({...config, objects: e.target.value})}
                    placeholder="e.g. Software development, Tourism, Trading, Consultancy..."
                    className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:outline-none transition-all min-h-[200px] font-serif"
                  />
                  <p className="text-xs text-gray-400">
                    This will be inserted into Clause 5(a). Clauses 5(b) and 5(c) are standard and cover general activities.
                  </p>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6 text-emerald-600">
                  <Info size={28} />
                  <h3 className="text-xl font-bold">Initial Directors</h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-sm text-gray-600">Note: Directors are not explicitly listed in this minimal Articles template, but it's good practice to have this information ready for other forms (Form 1, Form 18).</p>
                  {config.directors.map((director, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-xl border border-gray-200 relative">
                      <div className="absolute top-4 right-4">
                        {config.directors.length > 1 && (
                          <button onClick={() => removeDirector(index)} className="text-red-400 hover:text-red-600">
                            <Trash2 size={18} />
                          </button>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase mb-3">Director {index + 1}</h4>
                      <div className="space-y-3">
                        <input
                          type="text"
                          value={director.name}
                          onChange={(e) => updateDirector(index, 'name', e.target.value)}
                          placeholder="Full Name"
                          className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:outline-none"
                        />
                        <input
                          type="text"
                          value={director.address}
                          onChange={(e) => updateDirector(index, 'address', e.target.value)}
                          placeholder="Residential Address"
                          className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:outline-none"
                        />
                      </div>
                    </div>
                  ))}
                  
                  <button
                    onClick={addDirector}
                    className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 font-medium hover:border-black hover:text-black transition-all flex items-center justify-center gap-2"
                  >
                    <Plus size={20} /> Add Another Director
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-6 text-emerald-600">
                  <Info size={28} />
                  <h3 className="text-xl font-bold">Initial Shareholders</h3>
                </div>
                
                <p className="text-gray-600 mb-6 text-sm">
                  These are the people who will sign the Articles of Association.
                </p>
                
                <div className="space-y-6">
                  {config.shareholders.map((shareholder, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-xl border border-gray-200 relative">
                      <div className="absolute top-4 right-4">
                        {config.shareholders.length > 1 && (
                          <button onClick={() => removeShareholder(index)} className="text-red-400 hover:text-red-600">
                            <Trash2 size={18} />
                          </button>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase mb-3">Shareholder {index + 1}</h4>
                      <div className="space-y-3">
                        <input
                          type="text"
                          value={shareholder.name}
                          onChange={(e) => updateShareholder(index, 'name', e.target.value)}
                          placeholder="Full Name"
                          className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:outline-none"
                        />
                        <input
                          type="text"
                          value={shareholder.address}
                          onChange={(e) => updateShareholder(index, 'address', e.target.value)}
                          placeholder="Address"
                          className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:outline-none"
                        />
                      </div>
                    </div>
                  ))}
                  
                  <button
                    onClick={addShareholder}
                    className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 font-medium hover:border-black hover:text-black transition-all flex items-center justify-center gap-2"
                  >
                    <Plus size={20} /> Add Another Shareholder
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Footer - Sticky Bottom */}
        <div className="sticky bottom-0 bg-white/80 backdrop-blur-md border-t border-gray-200 p-6 -mx-6 mt-auto z-10">
          <div className="flex justify-between items-center max-w-3xl mx-auto">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                currentStep === 0
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <ChevronLeft size={20} /> Back
            </button>

            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              {currentStep === totalSteps - 1 ? 'Finish & Review' : 'Next Step'} <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
      {/* Main Content */}
      <div className="flex-1">
        {renderContent()}
      </div>
    </div>
  );
}
