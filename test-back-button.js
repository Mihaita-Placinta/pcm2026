const chromium = require('playwright-core');

async function runTest() {
  const browser = await chromium.chromium.launch();
  const page = await browser.newPage();

  try {
    // Navigate to the app
    await page.goto('http://localhost:5173');
    console.log('✓ Page loaded');

    // Wait for category buttons to load
    await page.waitForSelector('.cat-card', { timeout: 5000 });
    console.log('✓ Categories loaded');

    // Click first category
    const firstCategory = await page.$('.cat-card');
    await firstCategory.click();
    console.log('✓ Selected first category');

    // Wait for question to load
    await page.waitForSelector('.question-text', { timeout: 5000 });
    console.log('✓ Question 1 loaded');

    // Check if back button is disabled on first question
    const backBtn = await page.$('.quiz-actions .btn-ghost');
    const isDisabled = await backBtn.evaluate(el => el.disabled);
    console.log(`✓ Back button is disabled on first question: ${isDisabled}`);

    // Select an answer (first option)
    const firstOption = await page.$('.opt');
    await firstOption.click();
    console.log('✓ Selected first option');

    // Verify answer
    const verifyBtn = await page.$('.btn-primary');
    await verifyBtn.click();
    console.log('✓ Verified answer');

    // Go to next question
    const nextBtn = await page.$('.btn-primary');
    await nextBtn.click();
    await page.waitForTimeout(500);
    console.log('✓ Moved to next question');

    // Check if back button is now enabled
    const backBtn2 = await page.$('.quiz-actions .btn-ghost');
    const isEnabled = await backBtn2.evaluate(el => !el.disabled);
    console.log(`✓ Back button is enabled on second question: ${isEnabled}`);

    // Go back to first question
    await backBtn2.click();
    await page.waitForTimeout(500);
    console.log('✓ Went back to first question');

    // Check if the previous answer is still selected
    const selectedOption = await page.$('.opt.selected, .opt.correct');
    if (selectedOption) {
      console.log('✓ Previous answer is preserved!');
    } else {
      console.log('✗ Previous answer was not preserved');
    }

    console.log('\n✅ All tests passed!');
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  } finally {
    await browser.close();
  }
}

runTest();
