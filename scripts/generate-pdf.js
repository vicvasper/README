const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function generatePdf(inputHtml, outputPdf) {
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('file://' + path.resolve(inputHtml), { waitUntil: 'networkidle0' });
  await page.pdf({ path: outputPdf, format: 'A4', printBackground: true, margin: { top: '12mm', bottom: '12mm', left: '12mm', right: '12mm' } });
  await browser.close();
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error('Usage: node generate-pdf.js <input.html> <output.pdf>');
    process.exit(1);
  }
  generatePdf(args[0], args[1]).catch(err => { console.error(err); process.exit(1); });
}
