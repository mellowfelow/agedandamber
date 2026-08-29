import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

// Usage: node scripts/blog/append-posts.mjs <data-file.mjs>
// The data file must default-export an array of post objects:
// { slug, title, excerpt, content, author?, category, date, isoDate, readTime, image, tags, faqs? }

const dataFile = process.argv[2];
if (!dataFile) { console.error('Usage: node append-posts.mjs <data-file.mjs>'); process.exit(1); }

const mod = await import(pathToFileURL(path.resolve(dataFile)).href);
const posts = mod.default;

function ts(post) {
  const lines = [];
  lines.push('  {');
  lines.push(`    slug: ${JSON.stringify(post.slug)},`);
  lines.push(`    title: ${JSON.stringify(post.title)},`);
  lines.push(`    excerpt: ${JSON.stringify(post.excerpt)},`);
  lines.push(`    content: ${JSON.stringify(post.content)},`);
  lines.push(`    author: ${JSON.stringify(post.author || 'The Aged And Amber Spirits Team')},`);
  lines.push(`    category: ${JSON.stringify(post.category)},`);
  lines.push(`    date: ${JSON.stringify(post.date)},`);
  lines.push(`    isoDate: ${JSON.stringify(post.isoDate)},`);
  lines.push(`    readTime: ${JSON.stringify(post.readTime)},`);
  lines.push(`    image: ${JSON.stringify(post.image)},`);
  lines.push(`    tags: ${JSON.stringify(post.tags)},`);
  if (post.faqs && post.faqs.length) {
    lines.push('    faqs: [');
    for (const f of post.faqs) {
      lines.push(`      { question: ${JSON.stringify(f.question)}, answer: ${JSON.stringify(f.answer)} },`);
    }
    lines.push('    ],');
  }
  lines.push('  },');
  return lines.join('\n');
}

const filePath = 'src/data/blog.ts';
let fileContent = fs.readFileSync(filePath, 'utf8');
const marker = '\n];';
const idx = fileContent.lastIndexOf(marker);
if (idx === -1) throw new Error('marker not found');

const newBlock = posts.map(ts).join('\n');
fileContent = fileContent.slice(0, idx) + '\n' + newBlock + marker + fileContent.slice(idx + marker.length);
fs.writeFileSync(filePath, fileContent);
console.log('Appended', posts.length, 'posts from', dataFile);
