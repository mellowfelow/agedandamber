import fs from 'fs';

const filePath = 'src/data/products.ts';
let content = fs.readFileSync(filePath, 'utf8');

function toCRLF(s) {
  return s.replace(/\r\n/g, '\n').replace(/\n/g, '\r\n');
}
function loadBlock(cat) {
  return toCRLF(fs.readFileSync(`scripts/gen-na-${cat}-blocks.txt`, 'utf8')).replace(/\r\n$/, '');
}

function idStart(id) {
  const marker = `  {\r\n    id: '${id}',`;
  const i = content.indexOf(marker);
  if (i === -1) throw new Error('not found: ' + id);
  return i;
}

// Replace a contiguous run of product objects [firstId..lastId] with newBlock.
// endBoundaryMarker: string that marks where the run ends (start of next kept content).
function replaceRun(firstId, endBoundaryMarker, newBlock) {
  const start = idStart(firstId);
  const end = content.indexOf(endBoundaryMarker, start);
  if (end === -1) throw new Error('end boundary not found for ' + firstId);
  content = content.slice(0, start) + newBlock + '\r\n' + content.slice(end);
}

// 1. na-01..03 (na-wine) -> ends right before the "// NON-ALCOHOLIC CHAMPAGNE & SPARKLING" comment
replaceRun('prod-na-01', '\r\n  // NON-ALCOHOLIC CHAMPAGNE & SPARKLING', loadBlock('na-wine'));

// 2. na-05..06 (na-champagne-sparkling remainder) -> ends right before "// NON-ALCOHOLIC SPIRITS"
replaceRun('prod-na-05', '\r\n  // NON-ALCOHOLIC SPIRITS', loadBlock('na-champagne-sparkling'));

// 3. na-07..09 (na-spirits) -> ends right before "// READY-TO-DRINK NON-ALCOHOLIC COCKTAILS"
replaceRun('prod-na-07', '\r\n  // READY-TO-DRINK NON-ALCOHOLIC COCKTAILS', loadBlock('na-spirits'));

// 4. na-10..12 (na-rtd-cocktails) -> ends right before "// NON-ALCOHOLIC BEER & CIDER"
replaceRun('prod-na-10', '\r\n  // NON-ALCOHOLIC BEER & CIDER', loadBlock('na-rtd-cocktails'));

// 5. na-13 only (na-beer-cider Beer placeholder) -> ends right before na-14 (cider, kept as-is)
replaceRun('prod-na-13', "  {\r\n    id: 'prod-na-14',", loadBlock('na-beer-cider'));

fs.writeFileSync(filePath, content);
console.log('Splice complete.');
