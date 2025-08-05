<script>
  import { onMount } from 'svelte';
  import hljs from 'highlight.js/lib/core';
  import python from 'highlight.js/lib/languages/python';
  import rust from 'highlight.js/lib/languages/rust';
  import bash from 'highlight.js/lib/languages/bash';
  import 'highlight.js/styles/vs2015.css';
  
  // Register languages
  hljs.registerLanguage('python', python);
  hljs.registerLanguage('rust', rust);
  hljs.registerLanguage('bash', bash);
  
  export let code = '';
  export let language = 'python';
  
  let codeElement;
  
  onMount(() => {
    if (codeElement) {
      hljs.highlightElement(codeElement);
    }
  });
</script>

<pre class="overflow-x-auto"><code bind:this={codeElement} class="language-{language}">{code}</code></pre>