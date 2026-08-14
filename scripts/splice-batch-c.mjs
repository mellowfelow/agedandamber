import fs from 'fs';

const filePath = 'src/data/products.ts';
let content = fs.readFileSync(filePath, 'utf8');

function toCRLF(s) {
  return s.replace(/\r\n/g, '\n').replace(/\n/g, '\r\n');
}
function loadBlock(cat) {
  return toCRLF(fs.readFileSync(`scripts/gen-c-${cat}-blocks.txt`, 'utf8')).replace(/\r\n$/, '');
}

function insertBeforeMarker(marker, newBlock) {
  const idx = content.indexOf(marker);
  if (idx === -1) throw new Error('marker not found: ' + marker);
  content = content.slice(0, idx) + newBlock + '\r\n' + content.slice(idx);
}

// 1. rtd-liqueurs: append 44 Craft Cocktails products before "// NON-ALCOHOLIC WINE"
insertBeforeMarker('\r\n  // NON-ALCOHOLIC WINE\r\n', loadBlock('rtd-liqueurs'));

// 2. na-rtd-cocktails: append 2 new products before "// NON-ALCOHOLIC BEER & CIDER"
insertBeforeMarker('\r\n  // NON-ALCOHOLIC BEER & CIDER\r\n', loadBlock('na-rtd-cocktails'));

// 3. Append brand-new BEER, CIDER, BAR ESSENTIALS sections at the very end of PRODUCTS array
const endIdx = content.lastIndexOf('\r\n];');
if (endIdx === -1) throw new Error('end of PRODUCTS array not found');
const newSections =
  '\r\n\r\n  // BEER\r\n' + loadBlock('beer') +
  '\r\n\r\n  // CIDER\r\n' + loadBlock('cider') +
  '\r\n\r\n  // BAR ESSENTIALS\r\n' + loadBlock('bar-essentials');
content = content.slice(0, endIdx) + newSections + content.slice(endIdx);

fs.writeFileSync(filePath, content);
console.log('Splice complete.');
