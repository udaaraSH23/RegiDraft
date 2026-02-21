import { describe, it, expect } from 'vitest';
import { generateShortFormArticles, CompanyConfig } from './modelArticles';

describe('generateShortFormArticles', () => {
  it('generates basic articles with English name only', () => {
    const config: CompanyConfig = {
      companyName: 'Acme Solutions',
      companyNameSinhala: '',
      companyNameTamil: '',
      isPrivate: true,
      objects: 'Software development',
      directors: [{ name: 'John Doe', address: '123 Main St' }],
      shareholders: [{ name: 'Jane Smith', address: '456 Elm St' }]
    };

    const result = generateShortFormArticles(config);
    
    expect(result).toContain('ARTICLES OF ASSOCIATION');
    expect(result).toContain('ACME SOLUTIONS (PRIVATE) LIMITED');
    expect(result).toContain('Software development');
    expect(result).toContain('Jane Smith');
    expect(result).toContain('456 Elm St');
  });

  it('includes Sinhala and Tamil names when provided', () => {
    const config: CompanyConfig = {
      companyName: 'Acme Solutions',
      companyNameSinhala: 'ඇක්මි සොලියුෂන්ස්',
      companyNameTamil: 'அக்மி சொல்யூஷன்ஸ்',
      isPrivate: true,
      objects: 'Trading',
      directors: [{ name: 'John Doe', address: '123 Main St' }],
      shareholders: [{ name: 'Jane Smith', address: '456 Elm St' }]
    };

    const result = generateShortFormArticles(config);
    
    expect(result).toContain('ඇක්මි සොලියුෂන්ස්');
    expect(result).toContain('(Sinhala)');
    expect(result).toContain('அக்மி சொல்யூஷன்ஸ்');
    expect(result).toContain('(Tamil)');
  });

  it('handles multiple shareholders', () => {
    const config: CompanyConfig = {
      companyName: 'Multi Shareholder Co',
      companyNameSinhala: '',
      companyNameTamil: '',
      isPrivate: true,
      objects: 'General Business',
      directors: [{ name: 'Dir 1', address: 'Addr 1' }],
      shareholders: [
        { name: 'Shareholder One', address: 'Address One' },
        { name: 'Shareholder Two', address: 'Address Two' }
      ]
    };

    const result = generateShortFormArticles(config);
    
    expect(result).toContain('Shareholder One');
    expect(result).toContain('Address One');
    expect(result).toContain('Shareholder Two');
    expect(result).toContain('Address Two');
  });
});
