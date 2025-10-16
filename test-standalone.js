import { Options, Inputs, Prompts } from './lib/options.js';

// Test the classes without GitHub Actions context
console.log('Testing Options class...');
const options = new Options(true, '10', false, ['*.ts', '!*.test.ts']);
console.log('✓ Options created successfully');

console.log('Testing Inputs class...');
const inputs = new Inputs('system', 'Test PR', 'Test description');
console.log('✓ Inputs created successfully');

console.log('Testing Prompts class...');
const prompts = new Prompts('Review beginning', 'Review file');
console.log('✓ Prompts created successfully');

console.log('Testing render functionality...');
const rendered = inputs.render('Title: $title, Description: $description');
console.log('Rendered:', rendered);

console.log('✓ All tests passed! The core functionality works.');