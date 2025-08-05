<script>
  let { children } = $props();
  
  let sections = [
    {
      title: 'Getting Started',
      items: [
        { title: 'Introduction', href: '/docs' },
        { title: 'Installation', href: '/docs/installation' },
        { title: 'Quick Start', href: '/docs/quick-start' },
      ]
    },
    {
      title: 'Core Concepts',
      items: [
        { title: 'Starlark Configuration', href: '/docs/starlark' },
        { title: 'Resources', href: '/docs/resources' },
        { title: 'State Management', href: '/docs/state' },
        { title: 'Plugins', href: '/docs/plugins' },
      ]
    },
    {
      title: 'Guides',
      items: [
        { title: 'Multi-Cloud Setup', href: '/docs/guides/multi-cloud' },
        { title: 'GitOps Workflow', href: '/docs/guides/gitops' },
        { title: 'Writing Plugins', href: '/docs/guides/writing-plugins' },
      ]
    }
  ];
</script>

<div class="min-h-screen bg-gradient-to-b from-skycrane-gray-light/20 to-white pt-20">
  <div class="container mx-auto px-6 py-8">
    <div class="grid lg:grid-cols-4 gap-8">
      <!-- Sidebar -->
      <aside class="lg:col-span-1">
        <div class="sticky top-24 bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 class="text-lg font-bold text-gray-900 mb-4">Documentation</h2>
          <nav class="space-y-6">
            {#each sections as section}
              <div>
                <h3 class="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  {section.title}
                </h3>
                <ul class="space-y-2">
                  {#each section.items as item}
                    <li>
                      <a 
                        href={item.href} 
                        class="text-gray-600 hover:text-skycrane-green transition-colors block py-1"
                      >
                        {item.title}
                      </a>
                    </li>
                  {/each}
                </ul>
              </div>
            {/each}
          </nav>
        </div>
      </aside>
      
      <!-- Main content -->
      <main class="lg:col-span-3 bg-white rounded-lg shadow-md border border-gray-200 p-8">
        {@render children()}
      </main>
    </div>
  </div>
</div>