import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Wizard from './Wizard';

describe('Wizard Component Integration', () => {
  it('renders the initial draft step', async () => {
    const mockOnTabChange = vi.fn();
    render(<Wizard activeTab="draft" onTabChange={mockOnTabChange} />);
    
    // Check if step 0 (Company Details) is rendered
    expect(await screen.findByText('Company Details')).toBeInTheDocument();
    expect(await screen.findByText('Company Name (English)')).toBeInTheDocument();
  });

  it('navigates to the next step when clicking Next', async () => {
    const mockOnTabChange = vi.fn();
    render(<Wizard activeTab="draft" onTabChange={mockOnTabChange} />);
    
    // Click Next Step
    const nextButton = await screen.findByText(/Next Step/i);
    fireEvent.click(nextButton);
    
    // Check if step 1 (Company Objects) is rendered
    expect(await screen.findByText('Company Objects (Purpose)')).toBeInTheDocument();
  });

  it('navigates back to the previous step when clicking Back', async () => {
    const mockOnTabChange = vi.fn();
    render(<Wizard activeTab="draft" onTabChange={mockOnTabChange} />);
    
    // Click Next Step
    fireEvent.click(await screen.findByText(/Next Step/i));
    expect(await screen.findByText('Company Objects (Purpose)')).toBeInTheDocument();
    
    // Click Back
    fireEvent.click(await screen.findByText(/Back/i));
    expect(await screen.findByText('Company Details')).toBeInTheDocument();
  });

  it('calls onTabChange with "review" on the final step', async () => {
    const mockOnTabChange = vi.fn();
    render(<Wizard activeTab="draft" onTabChange={mockOnTabChange} />);
    
    // Go through all 4 steps
    fireEvent.click(await screen.findByText(/Next Step/i)); // Step 1
    fireEvent.click(await screen.findByText(/Next Step/i)); // Step 2
    fireEvent.click(await screen.findByText(/Next Step/i)); // Step 3
    
    // Now we should be on the final step
    const finishButton = await screen.findByText(/Finish & Review/i);
    fireEvent.click(finishButton);
    
    expect(mockOnTabChange).toHaveBeenCalledWith('review');
  });

  it('renders the Learn tab correctly', async () => {
    const mockOnTabChange = vi.fn();
    render(<Wizard activeTab="learn" onTabChange={mockOnTabChange} />);
    
    expect(await screen.findByText('Anatomy of the Articles')).toBeInTheDocument();
    expect(await screen.findByText('Legal Glossary')).toBeInTheDocument();
  });
});
