import fs from 'fs';

console.log('[crosscheck] Running pre-ship crosscheck...');

const checks = [
  { name: 'llms.txt exists', pass: fs.existsSync('public/llms.txt') },
  { name: 'auth.md exists', pass: fs.existsSync('public/auth.md') },
  { name: 'api-catalog exists', pass: fs.existsSync('public/.well-known/api-catalog') },
  { name: 'agent-skills index exists', pass: fs.existsSync('public/.well-known/agent-skills/index.json') },
  { name: 'server-card.json exists', pass: fs.existsSync('public/.well-known/mcp/server-card.json') },
  { name: 'acp.json exists', pass: fs.existsSync('public/.well-known/acp.json') },
  { name: 'ucp exists', pass: fs.existsSync('public/.well-known/ucp') },
];

let failed = false;
for (const check of checks) {
  if (check.pass) {
    console.log(`  ✅ ${check.name}`);
  } else {
    console.log(`  ❌ ${check.name}`);
    failed = true;
  }
}

if (failed) {
  console.error('[crosscheck] Crosscheck FAILED.');
  process.exit(1);
} else {
  console.log('[crosscheck] All pre-ship crosscheck assertions PASSED!');
}
