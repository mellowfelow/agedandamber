import fs from 'fs';

const filePath = 'src/data/products.ts';
let content = fs.readFileSync(filePath, 'utf8');

function toCRLF(s) {
  return s.replace(/\r\n/g, '\n').replace(/\n/g, '\r\n');
}

const champagneBlock = toCRLF(fs.readFileSync('scripts/gen-champagne-blocks.txt', 'utf8')).replace(/\r\n$/, '');
const fineWineBlock = toCRLF(fs.readFileSync('scripts/gen-finewine-blocks.txt', 'utf8')).replace(/\r\n$/, '');
const naBlock = toCRLF(fs.readFileSync('scripts/gen-na-blocks.txt', 'utf8')).replace(/\r\n$/, '');

// 1. Replace the 4 fictional prod-champ-01..04 products with the 53 real champagne-sparkling products.
const champStart = content.indexOf("  {\r\n    id: 'prod-champ-01',");
const champEnd = content.indexOf("\r\n];", champStart);
if (champStart === -1 || champEnd === -1) throw new Error('champ block not found');
content = content.slice(0, champStart) + champagneBlock + content.slice(champEnd);

// 2. Insert the 63 new fine-wine products right before the "// CHAMPAGNE & SPARKLING" marker.
const marker = '\r\n  // CHAMPAGNE & SPARKLING\r\n';
const markerIdx = content.indexOf(marker);
if (markerIdx === -1) throw new Error('marker not found');
content = content.slice(0, markerIdx) + '\r\n' + fineWineBlock + content.slice(markerIdx);

// 3. Replace the single fictional prod-na-04 product with the real Noughty product.
const naStart = content.indexOf("  {\r\n    id: 'prod-na-04',");
if (naStart === -1) throw new Error('na-04 block not found');
// find the matching closing "\r\n  },\r\n" for this object (next occurrence of "\r\n  },\r\n" after naStart)
const naEnd = content.indexOf('\r\n  },\r\n', naStart) + '\r\n  },\r\n'.length;
content = content.slice(0, naStart) + naBlock + '\r\n' + content.slice(naEnd);

fs.writeFileSync(filePath, content);
console.log('Splice complete.');
