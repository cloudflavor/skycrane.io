<script>
  import { onMount } from 'svelte';
  import Prism from 'prismjs';
  import '$lib/prism-one-dark.css';
  import 'prismjs/components/prism-python';
  import 'prismjs/components/prism-rust';
  import 'prismjs/components/prism-bash';
  import 'prismjs/components/prism-yaml';
  import 'prismjs/components/prism-toml';
  
  // Custom language definition for WIT
  Prism.languages.wit = {
    'comment': /\/\/.*/,
    'keyword': /\b(?:interface|func|record|enum|variant|result|resource|import|export|world|package|use)\b/,
    'builtin': /\b(?:string|u8|u16|u32|u64|s8|s16|s32|s64|float32|float64|bool|unit|list|option)\b/,
    'function': /\b[a-z][\w-]*(?=\s*:)/,
    'class-name': /\b[A-Z][\w-]*/,
    'punctuation': /[{}()[\];:,<>]/,
    'operator': /->|=/
  };
  
  let scrollY = 0;
  
  onMount(() => {
    const handleScroll = () => scrollY = window.scrollY;
    window.addEventListener('scroll', handleScroll);
    
    // Highlight all code blocks
    Prism.highlightAll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<svelte:window bind:scrollY />

<div class="min-h-screen bg-skycrane-navy-darker">
  <!-- Navigation -->
  <nav class="fixed top-0 w-full z-50 bg-skycrane-navy-darker border-b border-skycrane-green-dark">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="/images/skycrane.svg" alt="Skycrane" class="w-10 h-10">
          <div>
            <h1 class="text-xl font-bold text-white">Skycrane</h1>
            <p class="text-xs text-skycrane-green">Infrastructure as Code, Reimagined</p>
          </div>
        </div>
        
        <div class="hidden lg:flex items-center gap-8">
          <a href="#features" class="text-sm font-medium text-white hover:text-skycrane-green transition-colors">Features</a>
          <a href="#examples" class="text-sm font-medium text-white hover:text-skycrane-green transition-colors">Examples</a>
          <a href="#queries" class="text-sm font-medium text-white hover:text-skycrane-green transition-colors">Queries</a>
          <a href="#plugins" class="text-sm font-medium text-white hover:text-skycrane-green transition-colors">Plugins</a>
          <a href="#architecture" class="text-sm font-medium text-white hover:text-skycrane-green transition-colors">Architecture</a>
          <a href="#security" class="text-sm font-medium text-white hover:text-skycrane-green transition-colors">Security</a>
          <a href="https://github.com/skycraft/skycrane" 
             class="px-4 py-1.5 bg-skycrane-green text-skycrane-navy-darker font-medium text-sm rounded hover:bg-skycrane-green-light transition-colors">
            Get Started
          </a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="min-h-screen flex items-center justify-center px-6 pt-20 bg-skycrane-navy-darker">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center">
        <img src="/images/skycrane.svg" alt="Skycrane" class="w-28 h-28 mx-auto mb-8">
        
        <h1 class="text-6xl lg:text-7xl font-black mb-6 text-white">
          Infrastructure as Code
          <br />
          <span class="text-skycrane-green">Reimagined
        </h1>
        
        <p class="text-xl text-white mb-4">
          Declarative. Secure. Python-like syntax.
        </p>
        
        <p class="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
          Built with Starlark, powered by WebAssembly, designed for modern cloud infrastructure.
          Say goodbye to HCL limitations and state file nightmares.
        </p>
        
        <div class="flex gap-4 justify-center">
          <a href="https://github.com/skycraft/skycrane" 
             class="px-6 py-2.5 bg-skycrane-green text-skycrane-navy-darker font-medium text-sm rounded hover:bg-skycrane-green-light transition-colors">
            Start Building
          </a>
          
          <a href="#examples" 
             class="px-6 py-2.5 border border-skycrane-green text-white font-medium text-sm rounded hover:bg-skycrane-green hover:text-skycrane-navy-darker transition-all">
            See Examples
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Key Features Section -->
  <section id="features" class="py-24 px-6 bg-skycrane-navy">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-black mb-4 text-white">
          Why <span class="text-skycrane-green">Skycrane?
        </h2>
        <p class="text-lg text-gray-400">
          Every feature designed to solve real infrastructure pain points.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-skycrane-navy-dark border border-skycrane-green-dark rounded-lg p-6">
          <h3 class="text-xl font-bold text-skycrane-green mb-3">Starlark Language</h3>
          <p class="text-gray-300 text-sm mb-3">
            Python-like syntax with real loops, conditionals, and functions. 
            No more HCL limitations or string interpolation nightmares.
          </p>
          <ul class="space-y-1 text-sm text-gray-400">
            <li>• Real programming constructs</li>
            <li>• Standard library support</li>
            <li>• Type checking</li>
          </ul>
        </div>
        
        <div class="bg-skycrane-navy-dark border border-skycrane-green-dark rounded-lg p-6">
          <h3 class="text-xl font-bold text-skycrane-green mb-3">WASI Security</h3>
          <p class="text-gray-300 text-sm mb-3">
            Every plugin runs in a WebAssembly sandbox with explicit capabilities.
            No more trusting random providers with full system access.
          </p>
          <ul class="space-y-1 text-sm text-gray-400">
            <li>• Capability-based permissions</li>
            <li>• Resource isolation</li>
            <li>• Supply chain protection</li>
          </ul>
        </div>
        
        <div class="bg-skycrane-navy-dark border border-skycrane-green-dark rounded-lg p-6">
          <h3 class="text-xl font-bold text-skycrane-green mb-3">GitOps-Native State</h3>
          <p class="text-gray-300 text-sm mb-3">
            State stored as OCI artifacts or encrypted S3 objects. No corruption, 
            full history, instant rollbacks. GitOps workflows built-in.
          </p>
          <ul class="space-y-1 text-sm text-gray-400">
            <li>• OCI registry & S3 backends</li>
            <li>• Client-side encryption</li>
            <li>• Version controlled state</li>
            <li>• Atomic operations</li>
          </ul>
        </div>
        
        <div class="bg-skycrane-navy-dark border border-skycrane-green-dark rounded-lg p-6">
          <h3 class="text-xl font-bold text-skycrane-green mb-3">Type Safety</h3>
          <p class="text-gray-300 text-sm mb-3">
            WIT interfaces ensure type safety across plugin boundaries.
            Catch errors at compile time, not in production.
          </p>
          <ul class="space-y-1 text-sm text-gray-400">
            <li>• Compile-time validation</li>
            <li>• Auto-generated bindings</li>
            <li>• IDE autocomplete</li>
          </ul>
        </div>
        
        <div class="bg-skycrane-navy-dark border border-skycrane-green-dark rounded-lg p-6">
          <h3 class="text-xl font-bold text-skycrane-green mb-3">Real Debugging</h3>
          <p class="text-gray-300 text-sm mb-3">
            Set breakpoints, step through code, inspect variables.
            Debug infrastructure like any other code.
          </p>
          <ul class="space-y-1 text-sm text-gray-400">
            <li>• Interactive debugger</li>
            <li>• Stack traces that help</li>
            <li>• Variable inspection</li>
          </ul>
        </div>
        
        <div class="bg-skycrane-navy-dark border border-skycrane-green-dark rounded-lg p-6">
          <h3 class="text-xl font-bold text-skycrane-green mb-3">Multi-Provider</h3>
          <p class="text-gray-300 text-sm mb-3">
            Support for Hetzner, Cloudflare, Exoscale, Scaleway, DigitalOcean
            and more. Mix providers in a single configuration.
          </p>
          <ul class="space-y-1 text-sm text-gray-400">
            <li>• Best-of-breed approach</li>
            <li>• Unified interface</li>
            <li>• Cross-provider deps</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Code Examples Section -->
  <section id="examples" class="py-24 px-6 bg-skycrane-navy-darker">
    <div class="container mx-auto max-w-7xl">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-black mb-4 text-white">
          Real <span class="text-skycrane-green">Code Examples
        </h2>
        <p class="text-lg text-gray-400">
          See how Skycrane makes infrastructure declaration intuitive and powerful.
        </p>
      </div>
      
      <!-- Example 1: Hetzner Web App -->
      <div class="mb-12">
        <div class="grid lg:grid-cols-2 gap-6 items-start">
          <!-- Code Window -->
          <div class="macos-window">
            <div class="macos-titlebar">
              <div class="macos-buttons">
                <div class="macos-button macos-button-red"></div>
                <div class="macos-button macos-button-yellow"></div>
                <div class="macos-button macos-button-green"></div>
              </div>
              <span class="ml-4 text-xs text-gray-400">web-app.star
            </div>
            <div class="macos-content">
              <pre class="text-xs"><code class="language-python"># Create network infrastructure
network = hetzner.network(
    name = "app-network",
    ip_range = "10.0.0.0/16"
)

# Separate subnets for different tiers
web_subnet = hetzner.subnet(
    network_id = network.id,
    type = "cloud",
    ip_range = "10.0.1.0/24"
)

db_subnet = hetzner.subnet(
    network_id = network.id,
    type = "cloud", 
    ip_range = "10.0.2.0/24"
)

# Database with persistent storage
db_volume = hetzner.volume(
    name = "postgres-data",
    size = 100,  # GB
    location = "fsn1"
)

db_server = hetzner.server(
    name = "postgres-primary",
    server_type = "cx31",
    image = "ubuntu-22.04",
    location = "fsn1",
    networks = [db_subnet.id],
    volumes = [db_volume.id],
    user_data = file("scripts/install-postgres.sh")
)

# Web servers - Python loops!
web_servers = []
for i in range(1, 4):
    server = hetzner.server(
        name = f"web-{'{'}i{'}'}",
        server_type = "cx21",
        image = "ubuntu-22.04",
        location = "fsn1",
        networks = [web_subnet.id],
        user_data = template("scripts/deploy-app.sh", {'{'}
            "db_host": db_server.private_ip
        {'}'})
    )
    web_servers.append(server)

# Load balancer with health checks
lb = hetzner.load_balancer(
    name = "web-lb",
    type = "lb11",
    location = "fsn1",
    network = network.id,
    targets = [s.id for s in web_servers],
    health_check = {'{'}
        "protocol": "http",
        "port": 80,
        "path": "/health"
    {'}'}
)

# Output the load balancer IP
output("app_url", f"https://{'{'}lb.ipv4{'}'}")</code></pre>
            </div>
          </div>
          
          <!-- Documentation -->
          <div class="bg-skycrane-navy border border-skycrane-green-dark rounded-lg p-6">
            <h3 class="text-xl font-bold text-white mb-3">Complete Web Application</h3>
            <p class="text-gray-300 text-sm mb-4">
              Deploy a production-ready web application on Hetzner Cloud with load balancing,
              persistent storage, and network isolation.
            </p>
            
            <h4 class="text-sm font-semibold text-skycrane-green mb-2">Key Features:</h4>
            <ul class="space-y-1 text-sm text-gray-400 mb-4">
              <li>✓ Network isolation with separate subnets</li>
              <li>✓ Persistent volume for database</li>
              <li>✓ Multiple web servers created with a loop</li>
              <li>✓ Load balancer with health checks</li>
              <li>✓ Template-based configuration</li>
            </ul>
            
            <h4 class="text-sm font-semibold text-skycrane-green mb-2">Resource Graph:</h4>
            <p class="text-gray-400 text-sm mb-3">
              Skycrane automatically determines dependencies and creates resources
              in the correct order:
            </p>
            <pre class="bg-skycrane-navy-dark p-3 rounded text-xs text-gray-300">
Network → Subnets → Volume
    ↓        ↓        ↓
    └──→ Servers ←───┘
            ↓
      Load Balancer</pre>
          </div>
        </div>
      </div>
      
      <!-- Example 2: Import Existing Resources -->
      <div class="mb-12">
        <div class="grid lg:grid-cols-2 gap-6 items-start">
          <!-- Code Window -->
          <div class="macos-window">
            <div class="macos-titlebar">
              <div class="macos-buttons">
                <div class="macos-button macos-button-red"></div>
                <div class="macos-button macos-button-yellow"></div>
                <div class="macos-button macos-button-green"></div>
              </div>
              <span class="ml-4 text-xs text-gray-400">import-existing.star
            </div>
            <div class="macos-content">
              <pre class="text-xs"><code class="language-python"># Import existing Hetzner infrastructure
existing_servers = hetzner.import_servers(
    labels = {'{'}"environment": "production"{'}'}
)

# Import by specific IDs
db_server = hetzner.import_server(id = "12345678")
db_volume = hetzner.import_volume(id = "87654321")

# Import Cloudflare DNS zone
zone = cloudflare.import_zone(name = "example.com")

# Import all DNS records from zone
dns_records = cloudflare.import_dns_records(
    zone_id = zone.id
)

# Import Exoscale instances by tag
compute_pool = exoscale.import_instances(
    zone = "ch-gva-2",
    tags = ["web", "api"]
)

# Import DigitalOcean droplets and volumes
do_resources = digitalocean.import_all(
    resource_types = ["droplet", "volume", "load_balancer"],
    region = "nyc3"
)

# Build on imported resources
new_server = hetzner.server(
    name = "web-new",
    server_type = "cx21",
    image = "ubuntu-22.04",
    networks = [existing_servers[0].network_id],
    user_data = template("scripts/setup.sh", {'{'}
        "db_host": db_server.private_ip
    {'}'})
)

# Manage imported resources like native ones
for server in existing_servers:
    hetzner.firewall_rule(
        server_id = server.id,
        direction = "in",
        protocol = "tcp",
        port = "443",
        source_ips = ["0.0.0.0/0"]
    )</code></pre>
            </div>
          </div>
          
          <!-- Documentation -->
          <div class="bg-skycrane-navy border border-skycrane-green-dark rounded-lg p-6">
            <h3 class="text-xl font-bold text-white mb-3">Import Existing Infrastructure</h3>
            <p class="text-gray-300 text-sm mb-4">
              Seamlessly import and manage existing resources from any supported provider.
              No need to recreate - just import and continue building.
            </p>
            
            <h4 class="text-sm font-semibold text-skycrane-green mb-2">Import Methods:</h4>
            <ul class="space-y-1 text-sm text-gray-400 mb-4">
              <li>✓ Import by resource ID</li>
              <li>✓ Import by tags or labels</li>
              <li>✓ Import entire resource groups</li>
              <li>✓ Selective import with filters</li>
              <li>✓ Bulk import operations</li>
            </ul>
            
            <h4 class="text-sm font-semibold text-skycrane-green mb-2">Supported Providers:</h4>
            <p class="text-gray-400 text-sm mb-3">
              Import from all our supported cloud providers:
            </p>
            <ul class="space-y-1 text-sm text-gray-400">
              <li>• <span class="text-skycrane-green">Hetzner: Servers, volumes, networks, load balancers</li>
              <li>• <span class="text-skycrane-green">Cloudflare: Zones, DNS records, workers, rules</li>
              <li>• <span class="text-skycrane-green">Exoscale: Instances, storage, security groups</li>
              <li>• <span class="text-skycrane-green">Scaleway: Instances, volumes, databases</li>
              <li>• <span class="text-skycrane-green">DigitalOcean: Droplets, volumes, load balancers</li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Example 3: Multi-Provider Architecture -->
      <div class="mb-12">
        <div class="grid lg:grid-cols-2 gap-6 items-start">
          <!-- Code Window -->
          <div class="macos-window">
            <div class="macos-titlebar">
              <div class="macos-buttons">
                <div class="macos-button macos-button-red"></div>
                <div class="macos-button macos-button-yellow"></div>
                <div class="macos-button macos-button-green"></div>
              </div>
              <span class="ml-4 text-xs text-gray-400">multi-provider.star
            </div>
            <div class="macos-content">
              <pre class="text-xs"><code class="language-python"># Compute on Hetzner (best price/performance)
app_servers = []
for i in range(3):
    server = hetzner.server(
        name = f"app-{'{'}i + 1{'}'}",
        server_type = "cx31",
        location = "fsn1"
    )
    app_servers.append(server)

# CDN and DDoS protection on Cloudflare
zone = cloudflare.zone(name = "myapp.com")

for idx, server in enumerate(app_servers):
    cloudflare.dns_record(
        zone_id = zone.id,
        name = f"app{'{'}idx + 1{'}'}",
        type = "A",
        value = server.ipv4,
        proxied = true
    )

# Object storage on Scaleway (S3-compatible)
bucket = scaleway.object_bucket(
    name = "myapp-assets",
    region = "fr-par",
    acl = "public-read"
)

# Database on Exoscale (managed PostgreSQL)
database = exoscale.database(
    name = "myapp-db",
    type = "postgresql",
    version = "15",
    plan = "business-4",
    zone = "ch-gva-2"
)

# Monitoring on DigitalOcean
monitor = digitalocean.droplet(
    name = "monitoring",
    size = "s-2vcpu-4gb",
    image = "ubuntu-22-04-x64",
    region = "nyc3",
    user_data = file("scripts/setup-monitoring.sh")
)

# Cross-provider configuration
for server in app_servers:
    server.set_env({'{'}
        "DATABASE_URL": database.connection_string,
        "S3_BUCKET": bucket.endpoint,
        "MONITOR_HOST": monitor.ipv4
    {'}'})</code></pre>
            </div>
          </div>
          
          <!-- Documentation -->
          <div class="bg-skycrane-navy border border-skycrane-green-dark rounded-lg p-6">
            <h3 class="text-xl font-bold text-white mb-3">Best-of-Breed Multi-Cloud</h3>
            <p class="text-gray-300 text-sm mb-4">
              Use each provider for what they do best. Mix and match services
              across providers with unified configuration.
            </p>
            
            <h4 class="text-sm font-semibold text-skycrane-green mb-2">Provider Strengths:</h4>
            <ul class="space-y-1 text-sm text-gray-400 mb-4">
              <li>✓ <span class="text-skycrane-green">Hetzner: Unbeatable compute price/performance</li>
              <li>✓ <span class="text-skycrane-green">Cloudflare: Global CDN and DDoS protection</li>
              <li>✓ <span class="text-skycrane-green">Scaleway: Cost-effective object storage</li>
              <li>✓ <span class="text-skycrane-green">Exoscale: Reliable managed databases</li>
              <li>✓ <span class="text-skycrane-green">DigitalOcean: Simple, developer-friendly services</li>
            </ul>
            
            <h4 class="text-sm font-semibold text-skycrane-green mb-2">Cross-Provider Features:</h4>
            <p class="text-gray-400 text-sm mb-3">
              Skycrane handles the complexity of multi-cloud:
            </p>
            <ul class="space-y-1 text-sm text-gray-400">
              <li>• Automatic dependency resolution across providers</li>
              <li>• Unified credential management</li>
              <li>• Cross-provider resource references</li>
              <li>• Consistent error handling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Queries and Actions Section -->
  <section id="queries" class="py-24 px-6 bg-skycrane-navy-darker">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-black mb-4 text-white">
          Powerful <span class="text-skycrane-green">Queries & Actions</span>
        </h2>
        <p class="text-lg text-gray-400">
          Query existing infrastructure and perform imperative operations with ease.
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Queries Example -->
        <div class="bg-skycrane-navy border border-skycrane-green-dark rounded-lg overflow-hidden">
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-3">Read-Only Queries</h3>
            <p class="text-gray-300 text-sm mb-4">
              Query existing resources and metadata without modifying state. Use queries to discover, 
              filter, and reference existing infrastructure.
            </p>
          </div>
          
          <!-- Code Example -->
          <div class="macos-window">
            <div class="macos-header">
              <div class="macos-buttons">
                <div class="macos-button macos-button-red"></div>
                <div class="macos-button macos-button-yellow"></div>
                <div class="macos-button macos-button-green"></div>
              </div>
              <span class="ml-4 text-xs text-gray-400">queries.star</span>
            </div>
            <div class="macos-content">
              <pre class="text-xs"><code class="language-python"># Query existing resources
existing_servers = query.servers(
    by_label = {"{'"}environment": "production"{'}'}
)

# Query single resource by name
db_server = query.server(by_name = "database-primary")

# Query available metadata
available_types = query.server_types()
datacenters = query.datacenters()
images = query.available_images(by_type = "system")

# Use queries to inform resource creation
for dc in datacenters:
    if dc.network_zones > 2:
        # Create redundant setup in this datacenter
        for zone in dc.network_zones[:2]:
            server(
                name = f"web-{'{'}dc.name{'}'}-{'{'}zone{'}'}",
                datacenter = dc.name,
                server_type = available_types[0].name,
                network_zone = zone
            )

# Reference existing infrastructure
existing_network = query.network(by_name = "production")
existing_lb = query.load_balancer(by_name = "api-lb")

# Create new resources that integrate with existing ones
api_server = server(
    name = "api-new",
    networks = [existing_network.id],
    labels = {"{'"}lb-target": existing_lb.name{'}'}
)</code></pre>
            </div>
          </div>
          
          <div class="p-6 border-t border-gray-800">
            <h4 class="text-sm font-semibold text-skycrane-green mb-2">Query Features:</h4>
            <ul class="space-y-1 text-sm text-gray-400">
              <li>• Filter by ID, name, labels, or custom attributes</li>
              <li>• Query provider metadata (types, regions, images)</li>
              <li>• Results are strongly typed and validated</li>
              <li>• Cached during planning for performance</li>
              <li>• Never modifies infrastructure state</li>
            </ul>
          </div>
        </div>
        
        <!-- Actions Example -->
        <div class="bg-skycrane-navy border border-skycrane-green-dark rounded-lg overflow-hidden">
          <div class="p-6">
            <h3 class="text-xl font-bold text-white mb-3">Imperative Actions</h3>
            <p class="text-gray-300 text-sm mb-4">
              Execute one-time operations on resources that go beyond declarative state management.
              Perfect for maintenance, emergency operations, and lifecycle management.
            </p>
          </div>
          
          <!-- Code Example -->
          <div class="macos-window">
            <div class="macos-header">
              <div class="macos-buttons">
                <div class="macos-button macos-button-red"></div>
                <div class="macos-button macos-button-yellow"></div>
                <div class="macos-button macos-button-green"></div>
              </div>
              <span class="ml-4 text-xs text-gray-400">actions.star</span>
            </div>
            <div class="macos-content">
              <pre class="text-xs"><code class="language-python"># Lifecycle operations
action.server.reboot(
    server = "web-1",
    type = "soft"  # or "hard"
)

# Create snapshots for backup
snapshot = action.server.create_snapshot(
    server = db_server,
    description = f"Pre-upgrade backup {'{'}datetime.now(){'}'}",
    labels = {"{'"}type": "backup", "retention": "30d"{'}'}
)

# Volume operations
action.volume.resize(
    volume = data_volume,
    size = 500  # GB
)

# Attach volume with specific device
action.server.attach_volume(
    server = db_server,
    volume = backup_volume,
    device = "/dev/sdb",
    automount = True
)

# Emergency operations
if monitoring.alert_triggered:
    # Get console access for debugging
    console = action.server.request_console(
        server = problematic_server
    )
    print(f"Console URL: {'{'}console.url{'}'}")
    print(f"Password: {'{'}console.password{'}'}")
    
    # Reset root password if locked out
    new_creds = action.server.reset_password(
        server = problematic_server
    )

# Load balancer management
for server in new_servers:
    action.load_balancer.add_target(
        load_balancer = api_lb,
        type = "server",
        server = server,
        use_private_ip = True
    )</code></pre>
            </div>
          </div>
          
          <div class="p-6 border-t border-gray-800">
            <h4 class="text-sm font-semibold text-skycrane-green mb-2">Action Capabilities:</h4>
            <ul class="space-y-1 text-sm text-gray-400">
              <li>• Execute immediately when invoked</li>
              <li>• Support for async operations with task tracking</li>
              <li>• One-time operations (not idempotent)</li>
              <li>• Emergency and maintenance procedures</li>
              <li>• Create derived resources (snapshots, backups)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Combined Example -->
      <div class="mt-8 bg-skycrane-navy border border-skycrane-green-dark rounded-lg p-6">
        <h3 class="text-xl font-bold text-white mb-4">Combining Queries and Actions</h3>
        <div class="grid lg:grid-cols-2 gap-6">
          <div>
            <p class="text-gray-400 text-sm mb-3">Maintenance Automation:</p>
            <pre class="bg-skycrane-navy-dark p-3 rounded text-xs overflow-x-auto"><code class="language-python"># Find servers that need updates
servers_to_update = query.servers(
    by_label = {"{'"}needs_update": "true"{'}'}
)

# Perform rolling update
for server in servers_to_update:
    # Create snapshot before update
    snapshot = action.server.create_snapshot(
        server = server,
        description = "Pre-update backup"
    )
    
    # Remove from load balancer
    action.load_balancer.remove_target(
        load_balancer = lb,
        server = server
    )
    
    # Perform update
    action.server.reboot(server = server, type = "hard")
    
    # Wait and re-add to load balancer
    wait_for_healthy(server)
    action.load_balancer.add_target(
        load_balancer = lb,
        server = server
    )</code></pre>
          </div>
          
          <div>
            <p class="text-gray-400 text-sm mb-3">Disaster Recovery:</p>
            <pre class="bg-skycrane-navy-dark p-3 rounded text-xs overflow-x-auto"><code class="language-python"># Query all production resources
prod_servers = query.servers(
    by_label = {"{'"}env": "production"{'}'}
)
prod_volumes = query.volumes(
    by_label = {"{'"}env": "production"{'}'}
)

# Create disaster recovery snapshots
dr_snapshots = []
for server in prod_servers:
    snapshot = action.server.create_snapshot(
        server = server,
        description = f"DR-{'{'}datetime.now(){'}'}",
        labels = {"{'"}type": "disaster-recovery"{'}'}
    )
    dr_snapshots.append(snapshot)

# Export snapshot list for DR procedures
export("dr_snapshots", dr_snapshots)
export("dr_timestamp", datetime.now())

# In another region, restore from snapshots
if disaster_recovery_triggered:
    for snapshot in dr_snapshots:
        server(
            name = snapshot.source_name + "-dr",
            image = snapshot.id,
            datacenter = dr_datacenter
        )</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Plugin Development Section -->
  <section id="plugins" class="py-24 px-6 bg-skycrane-navy">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-black mb-4 text-white">
          Build Your Own <span class="text-skycrane-green">Plugins
        </h2>
        <p class="text-lg text-gray-400">
          Extend Skycrane with custom providers using our secure plugin architecture.
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Plugin Structure -->
        <div class="bg-skycrane-navy-dark border border-skycrane-green-dark rounded-lg p-6">
          <h3 class="text-xl font-bold text-white mb-4">Plugin Architecture</h3>
          
          <div class="space-y-4">
            <div>
              <h4 class="text-sm font-semibold text-skycrane-green mb-2">Plugin Structure</h4>
              <pre class="bg-skycrane-navy p-3 rounded text-xs overflow-x-auto"><code class="language-text">my-plugin/
├── src/
│   ├── lib.rs         # Plugin implementation
│   └── wit/           # WIT interface definitions
├── spec/
│   ├── base.star      # Capabilities & metadata
│   ├── resources.star # Resource definitions
│   └── actions.star   # Actions & workflows
├── Cargo.toml         # Rust dependencies
└── wit.toml           # WIT dependencies</code></pre>
            </div>
            
            <div>
              <h4 class="text-sm font-semibold text-skycrane-green mb-2">Capability Declaration</h4>
              <pre class="bg-skycrane-navy p-3 rounded text-xs overflow-x-auto"><code class="language-python">module(
    name = "my-provider",
    version = "v0.1.0",
    capabilities = capabilities(
        inherits = [
            INHERIT_ENV,      # API keys
            INHERIT_NETWORK,  # API calls
        ],
        mounts = [
            mount(
                host_path = "/var/lib/my-provider",
                guest_path = "/data",
                dir_perms = {'{'}"read": true, "write": true{'}'},
            ),
        ],
    ),
)</code></pre>
            </div>
          </div>
        </div>
        
        <!-- SDK and Development -->
        <div class="bg-skycrane-navy-dark border border-skycrane-green-dark rounded-lg p-6">
          <h3 class="text-xl font-bold text-white mb-4">Development with SDK</h3>
          
          <div class="space-y-4">
            <div>
              <h4 class="text-sm font-semibold text-skycrane-green mb-2">Using Skyforge SDK</h4>
              <pre class="bg-skycrane-navy p-3 rounded text-xs overflow-x-auto"><code class="language-rust">{`use skyforge_sdk::prelude::*;

#[skyforge_plugin]
impl Provider for MyProvider {
    async fn create_instance(
        &self, 
        config: InstanceConfig
    ) -> Result<Instance> {
        // Your implementation
        let instance = self.api_client
            .create_instance(&config)
            .await?;
            
        Ok(Instance {
            id: instance.id,
            ip: instance.public_ip,
            state: InstanceState::Running,
        })
    }
}`}</code></pre>
            </div>
            
            <div>
              <h4 class="text-sm font-semibold text-skycrane-green mb-2">Using Macros</h4>
              <pre class="bg-skycrane-navy p-3 rounded text-xs overflow-x-auto"><code class="language-rust">{`#[derive(SkycranResource)]
#[resource(provider = "my-provider")]
struct Server {
    #[resource(id)]
    name: String,
    
    #[resource(required)]
    size: String,
    
    #[resource(computed)]
    ip_address: String,
    
    #[resource(mutable)]
    tags: HashMap<String, String>,
}`}</code></pre>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Plugin Security -->
      <div class="mt-8 bg-skycrane-navy-dark border border-skycrane-green-dark rounded-lg p-6">
        <h3 class="text-xl font-bold text-white mb-4">Zero-Trust Plugin Security Model</h3>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="text-sm font-semibold text-skycrane-green mb-3">No Default Trust</h4>
            <p class="text-gray-300 text-sm mb-3">
              Skycrane ships with NO trusted keys. Every plugin must be explicitly trusted by YOU:
            </p>
            <pre class="bg-skycrane-navy p-3 rounded text-xs overflow-x-auto"><code class="language-bash"># First time installing any plugin
$ skycrane plugin install github:hetzner/skycrane-hetzner@v1.0.0

Downloading plugin bundle...
✓ plugin.wasm (2.3 MB)
✓ plugin.wasm.sig (455 bytes)
✓ public.key (3.2 KB)
✓ metadata.json (1.2 KB)

Verifying plugin...
Plugin signed by:
  Fingerprint: ABC123DEF456...
  Identity: Hetzner Cloud GmbH &lt;plugins@hetzner.com&gt;

❌ This key is NOT in your trust store.

To use this plugin, you must explicitly trust this key:
  skycrane trust add-key ABC123DEF456...</code></pre>
          </div>
          
          <div>
            <h4 class="text-sm font-semibold text-skycrane-green mb-3">Your Trust Store</h4>
            <p class="text-gray-300 text-sm mb-3">
              You control exactly which plugin authors you trust. No central authority:
            </p>
            <pre class="bg-skycrane-navy p-3 rounded text-xs overflow-x-auto"><code class="language-bash"># Add a trusted key
$ skycrane trust add-key ABC123DEF456... --name "Hetzner"
✓ Key added to trust store

# List your trusted keys
$ skycrane trust list
YOUR TRUSTED KEYS:
- ABC123DEF456... "Hetzner"
- DEF456789GHI... "My Company"

# Remove compromised key
$ skycrane trust remove-key ABC123DEF456...</code></pre>
          </div>
        </div>
        
        <div class="mt-6">
          <h4 class="text-sm font-semibold text-skycrane-green mb-3">Complete Security Architecture</h4>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-skycrane-navy p-4 rounded">
              <h5 class="text-sm font-semibold text-skycrane-green mb-2">Plugin Bundle</h5>
              <p class="text-gray-400 text-xs mb-2">Every release includes:</p>
              <ul class="space-y-1 text-xs text-gray-400">
                <li>• plugin.wasm (the code)</li>
                <li>• plugin.wasm.sig (signature)</li>
                <li>• public.key (signing key)</li>
                <li>• metadata.json (checksums)</li>
              </ul>
            </div>
            
            <div class="bg-skycrane-navy p-4 rounded">
              <h5 class="text-sm font-semibold text-skycrane-green mb-2">Verification Flow</h5>
              <p class="text-gray-400 text-xs mb-2">Automatic checks:</p>
              <ul class="space-y-1 text-xs text-gray-400">
                <li>• Signature validation</li>
                <li>• Checksum verification</li>
                <li>• Trust store lookup</li>
                <li>• Capability review</li>
              </ul>
            </div>
            
            <div class="bg-skycrane-navy p-4 rounded">
              <h5 class="text-sm font-semibold text-skycrane-green mb-2">Runtime Isolation</h5>
              <p class="text-gray-400 text-xs mb-2">WASI sandboxing:</p>
              <ul class="space-y-1 text-xs text-gray-400">
                <li>• No filesystem access</li>
                <li>• No network by default</li>
                <li>• Explicit capabilities</li>
                <li>• Resource limits</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="mt-6 bg-skycrane-navy p-4 rounded">
          <h4 class="text-sm font-semibold text-skycrane-green mb-3">Publishing Your Own Plugins</h4>
          <div class="grid lg:grid-cols-2 gap-4">
            <pre class="bg-skycrane-navy-dark p-3 rounded text-xs overflow-x-auto"><code class="language-yaml"># Sign and publish your plugin
#!/bin/bash
VERSION=$1

# Build plugin
cargo component build --release

# Sign with your GPG key
gpg --detach-sign --armor plugin.wasm
gpg --export --armor YOUR_KEY > public.key</code></pre>
            <pre class="bg-skycrane-navy-dark p-3 rounded text-xs overflow-x-auto"><code class="language-yaml"># GitHub Actions automated signing
name: Release Plugin
on:
  push:
    tags: ['v*']

jobs:
  release:
    steps:
      - name: Sign and publish
        env:
          GPG_KEY: ${'$'}{'{'} secrets.GPG_KEY {'}'}</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Architecture Section -->
  <section id="architecture" class="py-24 px-6 bg-skycrane-navy-darker">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-black mb-4 text-white">
          Built for <span class="text-skycrane-green">Scale
        </h2>
        <p class="text-lg text-gray-400">
          Every architectural decision optimizes for security, performance, and developer experience.
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Core Architecture -->
        <div class="bg-skycrane-navy border border-skycrane-green-dark rounded-lg p-6">
          <h3 class="text-xl font-bold text-white mb-4">Core Architecture</h3>
          
          <div class="space-y-4">
            <div>
              <h4 class="text-sm font-semibold text-skycrane-green mb-2">Starlark Runtime</h4>
              <p class="text-gray-400 text-sm">
                Deterministic Python-like language for configuration. Sandboxed execution
                with controlled imports and no I/O operations.
              </p>
            </div>
            
            <div>
              <h4 class="text-sm font-semibold text-skycrane-green mb-2">Resource Graph Engine</h4>
              <p class="text-gray-400 text-sm">
                Automatically builds DAG from resource dependencies. Parallel execution
                where possible, automatic rollback on failures.
              </p>
            </div>
            
            <div>
              <h4 class="text-sm font-semibold text-skycrane-green mb-2">WASI Plugin Host</h4>
              <p class="text-gray-400 text-sm">
                WebAssembly runtime for secure plugin execution. Each plugin runs in
                isolation with explicit capability grants.
              </p>
            </div>
            
            <div>
              <h4 class="text-sm font-semibold text-skycrane-green mb-2">OCI State Store</h4>
              <p class="text-gray-400 text-sm">
                Immutable state artifacts pushed to OCI registries. Full history,
                cryptographic signatures, atomic operations.
              </p>
            </div>
            
            <div>
              <h4 class="text-sm font-semibold text-skycrane-green mb-2">Encrypted State</h4>
              <p class="text-gray-400 text-sm">
                State can be encrypted before pushing to S3 or OCI registries. 
                Password-based encryption with secure key derivation.
              </p>
            </div>
          </div>
        </div>
        
        <!-- Plugin System -->
        <div class="bg-skycrane-navy border border-skycrane-green-dark rounded-lg p-6">
          <h3 class="text-xl font-bold text-white mb-4">Plugin System</h3>
          
          <div class="space-y-4">
            <div>
              <h4 class="text-sm font-semibold text-skycrane-green mb-2">WIT Interfaces</h4>
              <p class="text-gray-400 text-sm mb-2">
                Type-safe plugin interfaces using WebAssembly Interface Types:
              </p>
              <pre class="bg-skycrane-navy-dark p-3 rounded text-xs overflow-x-auto"><code class="language-wit">{`interface provider {
  create-instance: func(config: instance-config) 
    -> result<instance, error>
  delete-instance: func(id: string) 
    -> result<unit, error>
  get-instance: func(id: string) 
    -> result<instance, error>
}`}</code></pre>
            </div>
            
            <div>
              <h4 class="text-sm font-semibold text-skycrane-green mb-2">Capability Model</h4>
              <p class="text-gray-400 text-sm mb-2">
                Fine-grained permissions for plugin operations:
              </p>
              <pre class="bg-skycrane-navy-dark p-3 rounded text-xs overflow-x-auto"><code class="language-toml">[capabilities]
hetzner:read = ["server:list", "network:list"]
hetzner:write = ["server:create", "server:delete"]
network = ["api.hetzner.cloud"]
filesystem = []</code></pre>
            </div>
            
            <div>
              <h4 class="text-sm font-semibold text-skycrane-green mb-2">Language Support</h4>
              <p class="text-gray-400 text-sm">
                Write plugins in any language that compiles to WASM: Rust, Go,
                AssemblyScript, C/C++, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- GitOps and State Management -->
      <div class="mt-8">
        <h3 class="text-2xl font-bold text-white mb-6 text-center">GitOps-Ready State Management</h3>
        
        <div class="grid lg:grid-cols-3 gap-6">
          <!-- OCI Registry -->
          <div class="bg-skycrane-navy border border-skycrane-green-dark rounded-lg p-6">
            <h4 class="text-lg font-semibold text-skycrane-green mb-3">OCI Registry Storage</h4>
            <p class="text-gray-400 text-sm mb-4">
              Push state as immutable OCI artifacts to any container registry:
            </p>
            <pre class="bg-skycrane-navy-dark p-3 rounded text-xs overflow-x-auto mb-3"><code class="language-bash"># Push state to registry
$ skycrane state push registry.io/myorg/state:v1.2.3

# Pull specific state version
$ skycrane state pull registry.io/myorg/state:v1.2.3

# List all state versions
$ skycrane state list registry.io/myorg/state</code></pre>
            <ul class="space-y-1 text-xs text-gray-400">
              <li>• Versioned with tags</li>
              <li>• Content-addressable</li>
              <li>• Works with any OCI registry</li>
              <li>• GitOps workflow compatible</li>
            </ul>
          </div>
          
          <!-- S3 Storage -->
          <div class="bg-skycrane-navy border border-skycrane-green-dark rounded-lg p-6">
            <h4 class="text-lg font-semibold text-skycrane-green mb-3">S3-Compatible Storage</h4>
            <p class="text-gray-400 text-sm mb-4">
              Traditional state backend with modern features:
            </p>
            <pre class="bg-skycrane-navy-dark p-3 rounded text-xs overflow-x-auto mb-3"><code class="language-bash"># Configure S3 backend
$ skycrane init --backend s3 \
  --bucket my-state-bucket \
  --region eu-central-1

# Enable encryption
$ skycrane state encrypt --enable
Enter encryption password: ****
State encryption enabled.</code></pre>
            <ul class="space-y-1 text-xs text-gray-400">
              <li>• Works with S3, MinIO, R2</li>
              <li>• Automatic versioning</li>
              <li>• State locking via DynamoDB</li>
              <li>• Optional client-side encryption</li>
            </ul>
          </div>
          
          <!-- Encryption -->
          <div class="bg-skycrane-navy border border-skycrane-green-dark rounded-lg p-6">
            <h4 class="text-lg font-semibold text-skycrane-green mb-3">State Encryption</h4>
            <p class="text-gray-400 text-sm mb-4">
              Encrypt sensitive state data before storage:
            </p>
            <pre class="bg-skycrane-navy-dark p-3 rounded text-xs overflow-x-auto mb-3"><code class="language-python"># Configure encryption in .skycrane.star
config(
    backend = "oci",
    registry = "registry.io/myorg/state",
    encryption = {'{'}
        "enabled": true,
        "algorithm": "aes-256-gcm",
        "kdf": "argon2id"
    {'}'}
)</code></pre>
            <ul class="space-y-1 text-xs text-gray-400">
              <li>• AES-256-GCM encryption</li>
              <li>• Argon2id key derivation</li>
              <li>• Password prompts on pull</li>
              <li>• Zero-knowledge architecture</li>
            </ul>
          </div>
        </div>
        
        <!-- GitOps Example -->
        <div class="mt-6 bg-skycrane-navy border border-skycrane-green-dark rounded-lg p-6">
          <h4 class="text-lg font-semibold text-skycrane-green mb-3">GitOps Workflow Example</h4>
          <div class="grid lg:grid-cols-2 gap-6">
            <div>
              <p class="text-gray-400 text-sm mb-3">CI/CD Pipeline:</p>
              <pre class="bg-skycrane-navy-dark p-3 rounded text-xs overflow-x-auto"><code class="language-yaml">name: Deploy Infrastructure
on:
  push:
    branches: [main]

jobs:
  deploy:
    steps:
      - uses: actions/checkout@v3
      
      - name: Apply changes
        run: |
          skycrane apply --auto-approve
          
      - name: Push state to registry
        run: |
          VERSION="${'$'}{'{'}GITHUB_SHA::7{'}'}"
          skycrane state push \
            ghcr.io/${'$'}{'{'}GITHUB_REPOSITORY{'}'}/state:${'$'}{'{'}VERSION{'}'}
            
      - name: Tag as latest
        run: |
          skycrane state tag \
            ghcr.io/${'$'}{'{'}GITHUB_REPOSITORY{'}'}/state:latest</code></pre>
            </div>
            
            <div>
              <p class="text-gray-400 text-sm mb-3">Benefits:</p>
              <ul class="space-y-2 text-sm text-gray-400">
                <li class="flex items-start gap-2">
                  <span class="text-skycrane-green mt-0.5">✓</span>
                  <span><strong>Version Control:</strong> Every state change is versioned and traceable</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-skycrane-green mt-0.5">✓</span>
                  <span><strong>Rollback:</strong> Revert to any previous state version instantly</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-skycrane-green mt-0.5">✓</span>
                  <span><strong>Audit Trail:</strong> Complete history of who changed what and when</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-skycrane-green mt-0.5">✓</span>
                  <span><strong>Multi-Environment:</strong> Separate state per environment using tags</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-skycrane-green mt-0.5">✓</span>
                  <span><strong>Disaster Recovery:</strong> State replicated across registry mirrors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Security Section -->
  <section id="security" class="py-24 px-6 bg-skycrane-navy">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-black mb-4 text-white">
          Security is <span class="text-skycrane-green">Non-Negotiable
        </h2>
        <p class="text-lg text-gray-400">
          Every line of code, every architectural decision, every feature is designed with security first.
        </p>
      </div>
      
      <div class="grid lg:grid-cols-3 gap-6 mb-8">
        <div class="bg-skycrane-navy-dark border border-skycrane-green-dark rounded-lg p-6">
          <h3 class="text-lg font-bold text-skycrane-green mb-3">Zero Trust Architecture</h3>
          <p class="text-gray-300 text-sm mb-3">
            No embedded trust. No default keys. You decide who to trust.
          </p>
          <ul class="space-y-1 text-gray-400 text-xs">
            <li>✓ User-controlled trust store</li>
            <li>✓ Explicit capability grants</li>
            <li>✓ No ambient authority</li>
            <li>✓ Decentralized trust model</li>
          </ul>
        </div>
        
        <div class="bg-skycrane-navy-dark border border-skycrane-green-dark rounded-lg p-6">
          <h3 class="text-lg font-bold text-skycrane-green mb-3">Supply Chain Security</h3>
          <p class="text-gray-300 text-sm mb-3">
            Every plugin verified. Every change tracked. No surprises.
          </p>
          <ul class="space-y-1 text-gray-400 text-xs">
            <li>✓ Mandatory signatures</li>
            <li>✓ Self-contained bundles</li>
            <li>✓ Checksum verification</li>
            <li>✓ Git-based distribution</li>
          </ul>
        </div>
        
        <div class="bg-skycrane-navy-dark border border-skycrane-green-dark rounded-lg p-6">
          <h3 class="text-lg font-bold text-skycrane-green mb-3">Runtime Isolation</h3>
          <p class="text-gray-300 text-sm mb-3">
            WebAssembly sandbox. Capability-based security. Defense in depth.
          </p>
          <ul class="space-y-1 text-gray-400 text-xs">
            <li>✓ WASI sandboxing</li>
            <li>✓ Resource limits</li>
            <li>✓ Network isolation</li>
            <li>✓ Filesystem boundaries</li>
          </ul>
        </div>
      </div>
      
      <!-- Security Deep Dive -->
      <div class="bg-skycrane-navy-dark border border-skycrane-green-dark rounded-lg p-6">
        <h3 class="text-xl font-bold text-white mb-4">Security Deep Dive</h3>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="text-sm font-semibold text-skycrane-green mb-3">What Our Security Prevents</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              <li><span class="text-skycrane-green">✓ <strong>Supply chain attacks:</strong> Can't inject code without private key</li>
              <li><span class="text-skycrane-green">✓ <strong>Impersonation:</strong> Can't pretend to be another publisher</li>
              <li><span class="text-skycrane-green">✓ <strong>Tampering:</strong> Can't modify plugins after signing</li>
              <li><span class="text-skycrane-green">✓ <strong>Accidental trust:</strong> Must explicitly trust each key</li>
              <li><span class="text-skycrane-green">✓ <strong>Privilege escalation:</strong> Plugins can't exceed granted capabilities</li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-sm font-semibold text-skycrane-green mb-3">Legal & Compliance</h4>
            <div class="bg-skycrane-navy p-4 rounded text-xs text-gray-400">
              <p class="font-semibold text-skycrane-green mb-2">PLUGIN SECURITY NOTICE:</p>
              <ul class="space-y-1">
                <li>• Skycrane does not embed or endorse any plugin signing keys</li>
                <li>• Users are responsible for their own trust decisions</li>
                <li>• CloudFlavor provides the verification mechanism only</li>
                <li>• We make no warranties about third-party plugins</li>
                <li>• Always verify key fingerprints through independent channels</li>
                <li>• By trusting a key, you accept responsibility for plugins signed with it</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="mt-6">
          <h4 class="text-sm font-semibold text-skycrane-green mb-3">Comparison to Other Systems</h4>
          <div class="overflow-x-auto">
            <table class="w-full text-xs">
              <thead>
                <tr class="border-b border-skycrane-green-dark">
                  <th class="text-left py-2 text-gray-400">System</th>
                  <th class="text-left py-2 text-gray-400">Trust Model</th>
                  <th class="text-left py-2 text-gray-400">Our Approach</th>
                </tr>
              </thead>
              <tbody class="text-gray-300">
                <tr class="border-b border-gray-700">
                  <td class="py-2">npm/yarn</td>
                  <td class="py-2">Central registry + optional signing</td>
                  <td class="py-2 text-skycrane-green">Decentralized, mandatory signing</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2">Docker Hub</td>
                  <td class="py-2">Notary (optional)</td>
                  <td class="py-2 text-skycrane-green">Mandatory signing, bundled keys</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2">APT/YUM</td>
                  <td class="py-2">Distro manages keys</td>
                  <td class="py-2 text-skycrane-green">User manages keys</td>
                </tr>
                <tr class="border-b border-gray-700">
                  <td class="py-2">App Store</td>
                  <td class="py-2">Platform gatekeepers</td>
                  <td class="py-2 text-skycrane-green">No gatekeeper, user decides</td>
                </tr>
                <tr>
                  <td class="py-2">Homebrew</td>
                  <td class="py-2">Git repo, no signing</td>
                  <td class="py-2 text-skycrane-green">Git + mandatory signing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-24 px-6 bg-skycrane-green">
    <div class="container mx-auto max-w-4xl text-center">
      <h2 class="text-4xl lg:text-5xl font-black mb-6 text-skycrane-navy-darker">
        Ready to Transform Your Infrastructure?
      </h2>
      
      <p class="text-lg text-skycrane-navy mb-8">
        Join the growing community of teams who've said goodbye to state file nightmares
        and hello to infrastructure that just works.
      </p>
      
      <div class="flex gap-4 justify-center mb-12">
        <a href="https://github.com/skycraft/skycrane" 
           class="px-6 py-2.5 bg-skycrane-navy-darker text-white font-medium text-sm rounded hover:bg-skycrane-navy transition-colors">
          Get Started Now
        </a>
        
        <a href="https://docs.skycrane.io" 
           class="px-6 py-2.5 border border-skycrane-navy-darker text-skycrane-navy-darker font-medium text-sm rounded hover:bg-skycrane-navy-darker hover:text-white transition-all">
          Read the Docs
        </a>
      </div>
      
      <!-- Quick Start -->
      <div class="bg-skycrane-navy-darker rounded-lg p-6 max-w-2xl mx-auto">
        <h3 class="text-lg font-bold text-white mb-3">Get Started in 60 Seconds</h3>
        
        <pre class="bg-black p-3 rounded text-left text-xs overflow-x-auto"><code class="language-bash"># Install Skycrane
$ curl -sSL https://skycrane.io/install | sh

# Initialize your project
$ skycrane init my-infrastructure

# Write your first resource
$ echo 'server = hetzner.server(name="web-1", type="cx21")' > main.star

# Deploy!
$ skycrane apply</code></pre>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-12 px-6 border-t border-skycrane-green-dark bg-skycrane-navy-darker">
    <div class="container mx-auto max-w-6xl">
      <div class="grid md:grid-cols-4 gap-6 mb-8">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <img src="/images/skycrane.svg" alt="Skycrane" class="w-6 h-6">
            <span class="text-lg font-bold text-white">Skycrane
          </div>
          <p class="text-gray-400 text-xs">
            Infrastructure as Code, reimagined for the modern cloud.
          </p>
        </div>
        
        <div>
          <h4 class="text-white font-semibold mb-3 text-sm">Resources</h4>
          <ul class="space-y-1">
            <li><a href="https://docs.skycrane.io" class="text-gray-400 hover:text-skycrane-green text-xs">Documentation</a></li>
            <li><a href="https://github.com/skycraft/skycrane" class="text-gray-400 hover:text-skycrane-green text-xs">GitHub</a></li>
            <li><a href="#examples" class="text-gray-400 hover:text-skycrane-green text-xs">Examples</a></li>
            <li><a href="#plugins" class="text-gray-400 hover:text-skycrane-green text-xs">Plugins</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-white font-semibold mb-3 text-sm">Community</h4>
          <ul class="space-y-1">
            <li><a href="https://discord.gg/skycrane" class="text-gray-400 hover:text-skycrane-green text-xs">Discord</a></li>
            <li><a href="https://twitter.com/skycrane" class="text-gray-400 hover:text-skycrane-green text-xs">Twitter</a></li>
            <li><a href="https://blog.skycrane.io" class="text-gray-400 hover:text-skycrane-green text-xs">Blog</a></li>
            <li><a href="https://github.com/skycraft/skycrane/contributing" class="text-gray-400 hover:text-skycrane-green text-xs">Contributing</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-white font-semibold mb-3 text-sm">Company</h4>
          <ul class="space-y-1">
            <li><a href="https://skycrane.io/about" class="text-gray-400 hover:text-skycrane-green text-xs">About</a></li>
            <li><a href="https://skycrane.io/security" class="text-gray-400 hover:text-skycrane-green text-xs">Security</a></li>
            <li><a href="https://skycrane.io/privacy" class="text-gray-400 hover:text-skycrane-green text-xs">Privacy</a></li>
            <li><a href="https://skycrane.io/terms" class="text-gray-400 hover:text-skycrane-green text-xs">Terms</a></li>
          </ul>
        </div>
      </div>
      
      <div class="pt-6 border-t border-skycrane-green-dark text-center">
        <p class="text-gray-400 text-xs">
          © 2024 Skycrane. Built with love by the cloud infrastructure community.
        </p>
      </div>
    </div>
  </footer>
</div>