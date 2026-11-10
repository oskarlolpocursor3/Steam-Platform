const fs = require('fs');
const path = require('path');

const dirs = [
  'C:/Users/govno/Desktop/zadaniy/steam/ui_web/assets/avatars',
  'C:/Users/govno/Desktop/zadaniy/SteamApp/ui_web/assets/avatars'
];
dirs.forEach(d => { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); });

const avatars = {
  'freeman.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" fill="#1b2838"/>
    <circle cx="50" cy="50" r="42" fill="#ff9900" opacity="0.15"/>
    <rect x="28" y="38" width="18" height="12" rx="2" fill="#10141a" stroke="#ff9900" stroke-width="2"/>
    <rect x="54" y="38" width="18" height="12" rx="2" fill="#10141a" stroke="#ff9900" stroke-width="2"/>
    <line x1="46" y1="44" x2="54" y2="44" stroke="#ff9900" stroke-width="2"/>
    <path d="M35 55 Q50 82 65 55 Q58 72 50 72 Q42 72 35 55 Z" fill="#ff9900"/>
    <circle cx="50" cy="22" r="8" fill="#ff9900"/>
    <text x="50" y="26" font-family="sans-serif" font-weight="bold" font-size="11" fill="#10141a" text-anchor="middle">λ</text>
  </svg>`,
  'ct.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" fill="#1b2838"/>
    <path d="M25 45 C25 22 75 22 75 45 L75 60 L25 60 Z" fill="#2a475e"/>
    <rect x="30" y="42" width="40" height="14" rx="3" fill="#00a3ff" opacity="0.85"/>
    <path d="M32 44 L45 44" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
    <rect x="32" y="58" width="36" height="18" rx="4" fill="#171a21"/>
    <circle cx="42" cy="67" r="3" fill="#2a475e"/>
    <circle cx="58" cy="67" r="3" fill="#2a475e"/>
  </svg>`,
  'mario.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" fill="#1b2838"/>
    <ellipse cx="50" cy="40" rx="34" ry="20" fill="#e52521"/>
    <ellipse cx="50" cy="32" rx="14" ry="12" fill="#ffffff"/>
    <text x="50" y="37" font-family="sans-serif" font-weight="900" font-size="14" fill="#e52521" text-anchor="middle">M</text>
    <ellipse cx="50" cy="46" rx="38" ry="8" fill="#b51b18"/>
    <circle cx="50" cy="60" r="18" fill="#ffd5b8"/>
    <ellipse cx="42" cy="56" rx="3" ry="5" fill="#0066cc"/>
    <ellipse cx="58" cy="56" rx="3" ry="5" fill="#0066cc"/>
    <path d="M32 64 Q50 60 68 64 Q50 74 32 64 Z" fill="#3a2010"/>
    <ellipse cx="50" cy="60" rx="7" ry="5" fill="#ffaa80"/>
  </svg>`,
  'portal.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" fill="#171a21"/>
    <ellipse cx="36" cy="50" rx="18" ry="32" fill="none" stroke="#00a3ff" stroke-width="5"/>
    <ellipse cx="36" cy="50" rx="12" ry="26" fill="#00a3ff" opacity="0.25"/>
    <ellipse cx="64" cy="50" rx="18" ry="32" fill="none" stroke="#ff7700" stroke-width="5"/>
    <ellipse cx="64" cy="50" rx="12" ry="26" fill="#ff7700" opacity="0.25"/>
  </svg>`,
  'dnd.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" fill="#1b2838"/>
    <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" fill="#202b3b" stroke="#e5c07b" stroke-width="3"/>
    <line x1="50" y1="15" x2="50" y2="85" stroke="#e5c07b" stroke-width="1.5"/>
    <line x1="20" y1="32" x2="80" y2="68" stroke="#e5c07b" stroke-width="1.5"/>
    <line x1="20" y1="68" x2="80" y2="32" stroke="#e5c07b" stroke-width="1.5"/>
    <circle cx="50" cy="50" r="12" fill="#10141a"/>
    <text x="50" y="55" font-family="sans-serif" font-weight="900" font-size="12" fill="#e5c07b" text-anchor="middle">20</text>
  </svg>`,
  'steam.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" fill="#171a21"/>
    <circle cx="50" cy="50" r="38" fill="#1999ff" opacity="0.2"/>
    <circle cx="68" cy="36" r="14" fill="none" stroke="#ffffff" stroke-width="6"/>
    <circle cx="68" cy="36" r="6" fill="#ffffff"/>
    <line x1="60" y1="44" x2="38" y2="64" stroke="#ffffff" stroke-width="9" stroke-linecap="round"/>
    <circle cx="36" cy="66" r="9" fill="none" stroke="#ffffff" stroke-width="5"/>
    <circle cx="36" cy="66" r="4" fill="#ffffff"/>
  </svg>`
};

for (const [name, svg] of Object.entries(avatars)) {
  dirs.forEach(d => fs.writeFileSync(path.join(d, name), svg, 'utf8'));
}

console.log('Saved 6 SVG avatars in steam and SteamApp!');
