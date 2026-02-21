/**
 * @file Glossary.tsx
 * @author Udara Shanuka <Axiolon Labs>
 * @copyright 2026 Axiolon Labs
 * @license MIT
 * 
 * @description
 * A Presentational Component that renders a searchable glossary of legal terms.
 * 
 * Design Patterns:
 * - Presentational Component: Renders a list of terms based on internal static data.
 * - Filter Pattern: Implements a simple client-side search filter.
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';

export interface Term {
  term: string;
  definition: string;
}

export const glossaryTerms: Term[] = [
  { term: 'Articles of Association (AoA)', definition: 'The main rulebook for the company. It sets out how the company is run, governed, and owned.' },
  { term: 'Article', definition: 'A specific rule or section within the Articles of Association (e.g., "Article 1: Issue of Shares").' },
  { term: 'Clause', definition: 'A specific paragraph or sub-point within an Article (e.g., "Clause 1(a)").' },
  { term: 'Resolution', definition: 'A formal decision made by the company. It usually requires a vote.' },
  { term: 'Ordinary Resolution', definition: 'A decision that requires more than 50% of the votes to pass.' },
  { term: 'Special Resolution', definition: 'A major decision (like changing the company name) that requires at least 75% of the votes to pass.' },
  { term: 'Director', definition: 'A person appointed to manage the day-to-day business and strategy of the company.' },
  { term: 'Shareholder', definition: 'An owner of the company. They own "shares" (units of ownership) and vote on major decisions.' },
  { term: 'Board', definition: 'The group of Directors acting together.' },
  { term: 'Quorum', definition: 'The minimum number of people who must be present at a meeting for it to officially start and make decisions.' },
  { term: 'Proxy', definition: 'A person authorized to attend and vote at a meeting on behalf of a shareholder who cannot attend.' },
  { term: 'Dividend', definition: 'A portion of the company\'s profits paid out to shareholders.' },
  { term: 'Solvency Test', definition: 'A financial check the company must pass before paying dividends. It ensures the company can still pay its debts after paying the shareholders.' },
  { term: 'Pre-emptive Rights', definition: 'The right of existing shareholders to be offered new shares first, before they are sold to outsiders.' },
  { term: 'Lien', definition: 'The right of the company to hold onto a shareholder\'s shares (and sell them) if the shareholder owes the company money.' },
  { term: 'Indemnity', definition: 'Protection given by the company to its directors or officers against financial loss or legal liability incurred while doing their job.' },
  { term: 'Liquidation', definition: 'The process of closing down a company, selling its assets, paying off debts, and distributing any remaining money to shareholders.' },
  { term: 'Company Secretary', definition: 'An officer responsible for ensuring the company follows legal rules, maintains records, and files necessary documents.' },
  { term: 'Registered Office', definition: 'The official legal address of the company where all official notices and letters are sent.' },
  { term: 'Share Register', definition: 'A mandatory list of all current and past shareholders, showing how many shares they own.' },
];

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTerms = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search for a legal term..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTerms.length > 0 ? (
          filteredTerms.map((item, index) => (
            <motion.div
              key={item.term}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-emerald-800 mb-2">{item.term}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.definition}</p>
            </motion.div>
          ))
        ) : (
          <div className="col-span-2 text-center py-8 text-gray-400">
            No terms found matching "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
}
