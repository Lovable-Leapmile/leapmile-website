const fs = require('fs');
const path = require('path');

// Function to update a solution page with QikPod theme
function updateSolutionPage(filePath, activeSolution) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Update solution paths
  content = content.replace(
    /{ name: "Retail Click & Collect", path: "\/solutions\/retail-click-collect", active: false }/g,
    '{ name: "Retail Click & Collect", path: "/qikpod/solutions/retail-click-collect", active: false }'
  );
  content = content.replace(
    /{ name: "Last Mile Delivery", path: "\/solutions\/last-mile-delivery", active: false }/g,
    '{ name: "Last Mile Delivery", path: "/qikpod/solutions/last-mile-delivery", active: false }'
  );
  content = content.replace(
    /{ name: "Digital Mailroom", path: "\/solutions\/digital-mailroom", active: false }/g,
    '{ name: "Digital Mailroom", path: "/qikpod/solutions/digital-mailroom", active: false }'
  );
  content = content.replace(
    /{ name: "University Parcel Hub", path: "\/solutions\/university-parcel-hub", active: false }/g,
    '{ name: "University Parcel Hub", path: "/qikpod/solutions/university-parcel-hub", active: false }'
  );
  content = content.replace(
    /{ name: "Late Night Deliveries", path: "\/solutions\/late-night-deliveries", active: false }/g,
    '{ name: "Late Night Deliveries", path: "/qikpod/solutions/late-night-deliveries", active: false }'
  );
  
  // Update the active solution
  const activePattern = new RegExp(`{ name: "${activeSolution}", path: "\\/solutions\\/[^"]+", active: false }`);
  const activeReplacement = `{ name: "${activeSolution}", path: "/qikpod/solutions/${activeSolution.toLowerCase().replace(/\s+/g, '-')}", active: true }`;
  content = content.replace(activePattern, activeReplacement);
  
  // Update hero section
  content = content.replace(
    /backgroundImage: "linear-gradient\(rgba\(0, 0, 0, 0\.6\), rgba\(0, 0, 0, 0\.6\)\), url\('https:\/\/leapmile-website\.blr1\.cdn\.digitaloceanspaces\.com\/qikpod-bg\.png'\)"/g,
    'backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(\'https://leapmile-website.blr1.cdn.digitaloceanspaces.com/qikpod-bg.png\')"'
  );
  
  content = content.replace(
    /text-primary/g,
    'text-qikpod-yellow'
  );
  
  content = content.replace(
    /className="bg-primary hover:bg-primary\/90 text-primary-foreground px-8 py-3 text-lg"/g,
    'className="bg-qikpod-yellow hover:bg-qikpod-yellow/90 text-qikpod-black px-8 py-3 text-lg font-semibold"'
  );
  
  // Update section backgrounds
  content = content.replace(/bg-background/g, 'bg-qikpod-white');
  content = content.replace(/bg-muted\/50/g, 'bg-qikpod-yellow-light');
  content = content.replace(/bg-muted/g, 'bg-qikpod-yellow-light');
  
  // Update text colors
  content = content.replace(/text-foreground/g, 'text-qikpod-black');
  content = content.replace(/text-muted-foreground/g, 'text-qikpod-black/80');
  
  // Update bullet points
  content = content.replace(/bg-primary rounded-full/g, 'bg-qikpod-yellow rounded-full');
  
  // Update timeline steps
  content = content.replace(/bg-primary\/10 rounded-full flex items-center justify-center text-primary/g, 'bg-qikpod-yellow/20 rounded-full flex items-center justify-center text-qikpod-yellow');
  content = content.replace(/bg-primary text-primary-foreground rounded-full/g, 'bg-qikpod-yellow text-qikpod-black rounded-full');
  content = content.replace(/bg-primary\/30/g, 'bg-qikpod-yellow/30');
  
  // Update benefits icons
  content = content.replace(/text-primary"/g, 'text-qikpod-yellow"');
  
  // Update cards
  content = content.replace(/className="text-center p-6 hover:shadow-lg transition-shadow"/g, 'className="text-center p-6 hover:shadow-lg transition-shadow bg-qikpod-white border-qikpod-yellow/20"');
  
  // Update button styles in bottom navigation
  content = content.replace(
    /className="px-6 py-2"/g,
    'className={`px-6 py-2 ${solution.active ? \'bg-qikpod-yellow text-qikpod-black hover:bg-qikpod-yellow/90\' : \'border-qikpod-yellow text-qikpod-black hover:bg-qikpod-yellow/10\'}`}'
  );
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filePath}`);
}

// Update all solution pages
const solutionPages = [
  { file: 'src/pages/solutions/DigitalMailroom.tsx', active: 'Digital Mailroom' },
  { file: 'src/pages/solutions/UniversityParcelHub.tsx', active: 'University Parcel Hub' },
  { file: 'src/pages/solutions/LateNightDeliveries.tsx', active: 'Late Night Deliveries' }
];

solutionPages.forEach(({ file, active }) => {
  updateSolutionPage(file, active);
});

console.log('All solution pages updated with QikPod theme!');
