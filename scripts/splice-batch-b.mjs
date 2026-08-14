import fs from 'fs';

const filePath = 'src/data/products.ts';
let content = fs.readFileSync(filePath, 'utf8');

function toCRLF(s) {
  return s.replace(/\r\n/g, '\n').replace(/\n/g, '\r\n');
}
function loadBlock(cat) {
  return toCRLF(fs.readFileSync(`scripts/gen-b-${cat}-blocks.txt`, 'utf8')).replace(/\r\n$/, '');
}

// Insert newBlock as pure addition right before the given section-comment marker
// (i.e. appended at the end of the preceding category's block).
function insertBeforeMarker(marker, newBlock) {
  const idx = content.indexOf(marker);
  if (idx === -1) throw new Error('marker not found: ' + marker);
  content = content.slice(0, idx) + newBlock + '\r\n' + content.slice(idx);
}

insertBeforeMarker('\r\n  // SCOTCH\r\n', loadBlock('bourbon-whiskey'));
insertBeforeMarker('\r\n  // IRISH\r\n', loadBlock('scotch-whisky'));
insertBeforeMarker('\r\n  // JAPANESE\r\n', loadBlock('irish-whiskey'));
insertBeforeMarker('\r\n  // RYE & OTHER WHISKEY\r\n', loadBlock('japanese-whisky'));
insertBeforeMarker('\r\n  // TEQUILA & MEZCAL\r\n', loadBlock('other-whiskey'));
insertBeforeMarker('\r\n  // VODKA\r\n', loadBlock('tequila-mezcal'));
insertBeforeMarker('\r\n  // GIN\r\n', loadBlock('vodka'));
insertBeforeMarker('\r\n  // RTD & LIQUEURS\r\n', loadBlock('cognac-brandy'));

// champagne-sparkling is the last section in the file; append before the closing "];"
const champBlock = loadBlock('champagne-sparkling');
const endIdx = content.lastIndexOf('\r\n];');
if (endIdx === -1) throw new Error('end of PRODUCTS array not found');
content = content.slice(0, endIdx) + '\r\n' + champBlock + content.slice(endIdx);

fs.writeFileSync(filePath, content);
console.log('Splice complete.');
