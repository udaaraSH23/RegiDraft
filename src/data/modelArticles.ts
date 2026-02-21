/**
 * @file modelArticles.ts
 * @author Udara Shanuka <Axiolon Labs>
 * @copyright 2026 Axiolon Labs
 * @license MIT
 * 
 * @description
 * Data module for generating the "Short Form" Articles of Association.
 * 
 * Design Patterns:
 * - Template Method Pattern: `generateShortFormArticles` acts as a template that fills in variable data (config) into a fixed legal structure.
 * - Data Transfer Object (DTO): `CompanyConfig`, `Director`, `Shareholder` interfaces define the shape of data passed between components.
 */

export interface Director {
  name: string;
  address: string;
}

export interface Shareholder {
  name: string;
  address?: string; // Added address for the signature section
}

export interface CompanyConfig {
  companyName: string;
  companyNameSinhala?: string;
  companyNameTamil?: string;
  isPrivate: boolean;
  objects: string;
  directors: Director[];
  shareholders: Shareholder[];
}

/**
 * Generates the complete Articles of Association document string based on the provided configuration.
 * This function encapsulates the business logic for document assembly.
 * 
 * @param config - The company configuration object containing user inputs.
 * @returns A formatted string representing the full legal document.
 */
export const generateShortFormArticles = (config: CompanyConfig): string => {
  const shareholdersList = config.shareholders.map((s, i) => `Shareholder ${i + 1}
Name: ${s.name}
Address: ${s.address || '____________________________'}
Signature: __________________________
Date: ______________________________`).join('\n________________________________________\n');

  return `ARTICLES OF ASSOCIATION
OF
${config.companyName.toUpperCase()} ${config.isPrivate ? '(PRIVATE) LIMITED' : 'PLC'}
(English)
${config.companyNameSinhala || '[COMPANY NAME IN SINHALA]'} ${config.isPrivate ? '(ප්රයිවට්) ලිමිටඩ්' : '(පීඑල්සී)'}
(Sinhala)
${config.companyNameTamil || '[COMPANY NAME IN TAMIL]'} ${config.isPrivate ? '(பிரைவேட்) லிமிடெட்' : '(பிஎல்சி)'}
(Tamil)

1. Adoption of Model Articles
The regulations contained in the First Schedule of the Companies Act No. 7 of 2007 shall apply to this Company and be deemed to be incorporated herein and form part of these Articles of Association, except in so far as they are herein expressly excluded, modified, varied, or are inconsistent with the provisions contained herein.

2. Interpretation
In these Articles:
“The Act” means the Companies Act No. 7 of 2007 and includes any statutory modification or re-enactment thereof.
Unless the context otherwise requires, words and expressions defined in the Act shall have the same meanings in these Articles.

3. Private Company
The Company is a Private Company within the meaning of Section 27 of the Act and accordingly:
a) The Company shall not offer its shares or securities to the public.
b) The number of shareholders shall not exceed fifty (50), excluding employees and former employees who are shareholders.
c) The Company shall comply with all provisions applicable to Private Companies under the Act.

4. Registered Office
The Registered Office of the Company shall be situated in Sri Lanka at such place as the Directors may determine from time to time.

5. Company Objects
The objects for which the Company is established are:
a) To carry on the business of ${config.objects || '[INSERT MAIN BUSINESS ACTIVITY]'}
b) To carry on any other business incidental or conducive to the attainment of the above object.
c) To engage in any other lawful business whatsoever.

6. Governance under Model Articles
Save as expressly provided in these Articles, the Company shall be governed by the Model Articles contained in the First Schedule of the Act in relation to all matters including but not limited to:
a) Shares and shareholders
b) Transfer and transmission of shares
c) Meetings of shareholders
d) Directors and Company Secretary
e) Accounts and audit
f) Notices and records
g) Indemnity
h) Liquidation and winding up

SIGNATURE OF INITIAL SHAREHOLDERS
We, the undersigned, being the initial shareholders of the Company, hereby adopt the above Articles of Association.

${shareholdersList}`;
};
