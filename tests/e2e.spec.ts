import { test, expect } from '@playwright/test';

test.describe('RegiDraft E2E Flow', () => {
  test('should complete the wizard and generate articles', async ({ page }) => {
    // 1. Go to landing page
    await page.goto('/');
    
    // 2. Click "Start Drafting Now"
    await page.click('text=Start Drafting Now');
    
    // 3. Step 0: Company Details
    await expect(page.locator('text=Company Details')).toBeVisible();
    await page.fill('label:has-text("Company Name (English)") + input', 'Test Company');
    await page.fill('label:has-text("Company Name (Sinhala)") + input', 'ටෙස්ට් කොම්පැනි');
    await page.fill('label:has-text("Company Name (Tamil)") + input', 'டெஸ்ட் கம்பெனி');
    await page.click('text=Next Step');
    
    // 4. Step 1: Company Objects
    await expect(page.locator('text=Company Objects (Purpose)')).toBeVisible();
    await page.fill('textarea', 'Software Testing Services');
    await page.click('text=Next Step');
    
    // 5. Step 2: Initial Directors
    await expect(page.locator('text=Initial Directors')).toBeVisible();
    await page.fill('input[placeholder="Full Name"]', 'John Doe');
    await page.fill('input[placeholder="Residential Address"]', '123 Test St, Colombo');
    await page.click('text=Next Step');
    
    // 6. Step 3: Initial Shareholders
    await expect(page.locator('text=Initial Shareholders')).toBeVisible();
    await page.fill('input[placeholder="Full Name"]', 'Jane Smith');
    await page.fill('input[placeholder="Address"]', '456 Test Ave, Kandy');
    await page.click('text=Finish & Review');
    
    // 7. Review Step
    await expect(page.locator('text=Final Review')).toBeVisible();
    
    // Check if the generated text contains our inputs
    const generatedText = await page.locator('.print-content').innerText();
    expect(generatedText.toUpperCase()).toContain('TEST COMPANY (PRIVATE) LIMITED');
    expect(generatedText).toContain('Software Testing Services');
    expect(generatedText).toContain('Jane Smith');
    expect(generatedText).toContain('456 Test Ave, Kandy');
    expect(generatedText).toContain('ටෙස්ට් කොම්පැනි');
    expect(generatedText).toContain('டெஸ்ட் கம்பெனி');
  });
});
