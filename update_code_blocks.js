const fs = require('fs');

// Read the file
let content = fs.readFileSync('src/routes/+page.svelte', 'utf8');

// Replace all code blocks with inline styles to use Prism language classes
content = content.replace(/<pre class="text-xs text-gray-300"><code><span style="color:[^>]+>/g, '<pre class="text-xs"><code class="language-python">');

// Remove all span style tags within code blocks
content = content.replace(/<span style="color:[^"]*">/g, '');
content = content.replace(/<\/span>/g, '');

// Fix the f-string curly braces
content = content.replace(/\{'{'}/g, '{');
content = content.replace(/\{'}'}/g, '}');

// Fix HTML entities
content = content.replace(/&amp;/g, '&');
content = content.replace(/&lt;/g, '<');
content = content.replace(/&gt;/g, '>');

// Write the updated content
fs.writeFileSync('src/routes/+page.svelte', content);

console.log('Code blocks updated successfully!');