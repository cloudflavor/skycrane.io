import { readFileSync, writeFileSync } from 'fs';

// Read the file
let content = readFileSync('src/routes/+page.svelte', 'utf8');

// Replace all code blocks with inline styles to use Prism language classes
// For Python/Starlark code
content = content.replace(/<pre class="text-xs text-gray-300"><code><span style="color:[^"]*"># /g, '<pre class="text-xs"><code class="language-python"># ');

// For Rust code
content = content.replace(/<pre class="bg-skycrane-navy p-3 rounded text-xs text-gray-300 overflow-x-auto"><code>use skyforge_sdk/g, '<pre class="bg-skycrane-navy p-3 rounded text-xs overflow-x-auto"><code class="language-rust">use skyforge_sdk');
content = content.replace(/<pre class="bg-skycrane-navy p-3 rounded text-xs text-gray-300 overflow-x-auto"><code>#\[derive/g, '<pre class="bg-skycrane-navy p-3 rounded text-xs overflow-x-auto"><code class="language-rust">#[derive');

// For Bash code
content = content.replace(/<pre class="bg-skycrane-navy p-3 rounded text-xs text-gray-300 overflow-x-auto"><code><span style="color:[^"]*"># /g, '<pre class="bg-skycrane-navy p-3 rounded text-xs overflow-x-auto"><code class="language-bash"># ');

// For YAML code
content = content.replace(/<pre class="bg-skycrane-navy-dark p-3 rounded text-xs text-gray-300 overflow-x-auto"><code><span style="color:[^"]*"># /g, '<pre class="bg-skycrane-navy-dark p-3 rounded text-xs overflow-x-auto"><code class="language-yaml"># ');

// For WIT code
content = content.replace(/<pre class="bg-skycrane-navy-dark p-3 rounded text-xs text-gray-300 overflow-x-auto"><code><span style="color:[^"]*">interface/g, '<pre class="bg-skycrane-navy-dark p-3 rounded text-xs overflow-x-auto"><code class="language-wit">interface');

// For TOML code
content = content.replace(/<pre class="bg-skycrane-navy-dark p-3 rounded text-xs text-gray-300 overflow-x-auto"><code><span style="color:[^"]*">\[capabilities\]/g, '<pre class="bg-skycrane-navy-dark p-3 rounded text-xs overflow-x-auto"><code class="language-toml">[capabilities]');

// For Starlark code
content = content.replace(/<pre class="bg-skycrane-navy p-3 rounded text-xs text-gray-300 overflow-x-auto"><code><span style="color:[^"]*">module\(/g, '<pre class="bg-skycrane-navy p-3 rounded text-xs overflow-x-auto"><code class="language-python">module(');

// For file structure
content = content.replace(/<pre class="bg-skycrane-navy p-3 rounded text-xs text-gray-300 overflow-x-auto"><code><span style="color:[^"]*">my-plugin\//g, '<pre class="bg-skycrane-navy p-3 rounded text-xs overflow-x-auto"><code class="language-text">my-plugin/');

// Remove all span style tags within code blocks - doing this in multiple passes to be safe
for (let i = 0; i < 10; i++) {
  content = content.replace(/<span style="color:[^"]*">/g, '');
  content = content.replace(/<\/span>/g, '');
}

// Fix the f-string curly braces
content = content.replace(/\{'{'}/g, '{');
content = content.replace(/\{'}'}/g, '}');

// Fix HTML entities
content = content.replace(/&amp;/g, '&');
content = content.replace(/&lt;/g, '<');
content = content.replace(/&gt;/g, '>');

// Write the updated content
writeFileSync('src/routes/+page.svelte', content);

console.log('Code blocks updated successfully!');