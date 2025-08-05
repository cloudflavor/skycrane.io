<script>
  export let title = '';
  export let description = '';
  export let date = '';
  export let author = '';
</script>

<svelte:head>
  <title>{title} - Skycrane Documentation</title>
  {#if description}
    <meta name="description" content={description} />
  {/if}
</svelte:head>

<article class="max-w-4xl mx-auto px-6 py-12">
  <header class="mb-12 text-center">
    <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
    {#if description}
      <p class="text-xl text-gray-600 mb-4">{description}</p>
    {/if}
    {#if date || author}
      <div class="text-sm text-gray-500">
        {#if author}
          <span>By {author}</span>
        {/if}
        {#if date && author}
          <span class="mx-2">·</span>
        {/if}
        {#if date}
          <time datetime={date}>{new Date(date).toLocaleDateString()}</time>
        {/if}
      </div>
    {/if}
  </header>

  <div class="prose prose-lg max-w-none
    prose-headings:text-gray-900 
    prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6
    prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4
    prose-p:text-gray-700 prose-p:leading-relaxed
    prose-a:text-skycrane-green prose-a:no-underline hover:prose-a:underline
    prose-strong:text-gray-900 prose-strong:font-semibold
    prose-code:text-skycrane-green prose-code:bg-skycrane-green/10 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-['']
    prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:shadow-lg prose-pre:rounded-lg
    prose-blockquote:border-l-4 prose-blockquote:border-skycrane-green prose-blockquote:bg-skycrane-green/5 prose-blockquote:py-1 prose-blockquote:italic
    prose-ul:list-disc prose-ul:pl-6
    prose-ol:list-decimal prose-ol:pl-6
    prose-li:text-gray-700
    prose-table:border-collapse prose-table:w-full
    prose-th:bg-skycrane-green prose-th:text-white prose-th:font-semibold prose-th:px-4 prose-th:py-2
    prose-td:border prose-td:border-gray-300 prose-td:px-4 prose-td:py-2
    prose-img:rounded-lg prose-img:shadow-md
  ">
    <slot />
  </div>
</article>

<style>
  :global(.prose pre code) {
    background: transparent;
    padding: 0;
  }
  
  :global(.prose pre) {
    margin: 2rem 0;
  }
</style>