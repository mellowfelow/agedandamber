// Legacy path — the A2A spec renamed agent.json to agent-card.json. Serve
// the same document at both so older discovery clients still find it.
export { GET, dynamic } from '../agent-card.json/route';
