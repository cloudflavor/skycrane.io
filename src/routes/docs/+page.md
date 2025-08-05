---
title: Welcome to Skycrane Documentation
description: Learn how to use Skycrane for modern infrastructure management
layout: article
---

# Welcome to Skycrane

Skycrane is a modern infrastructure as code tool that brings software engineering best practices to infrastructure management.

## Key Features

- **Starlark Configuration**: Write infrastructure using a Python-like language that's deterministic and type-safe
- **OCI-Based State**: Store your infrastructure state in any OCI registry (Docker Hub, GitHub, etc.)
- **Plugin Architecture**: Every cloud provider is a WebAssembly plugin running in a secure sandbox
- **True Multi-Cloud**: Mix and match providers in a single configuration without abstractions
- **GitOps Native**: Built for CI/CD with no state file locking issues

## Quick Example

```python
# infrastructure.star
load("@skycrane/providers", "hetzner", "cloudflare")

# Create a server
server = hetzner.server(
  name = "web-01",
  server_type = "cx21",
  image = "ubuntu-22.04",
  location = "fsn1"
)

# Point DNS to the server
dns = cloudflare.record(
  zone_id = config.get("cloudflare_zone_id"),
  name = "app",
  type = "A",
  value = server.ipv4_address
)
```

## Getting Started

1. [Install Skycrane](/docs/installation) on your system
2. Follow the [Quick Start](/docs/quick-start) guide
3. Learn about [Starlark configuration](/docs/starlark)
4. Explore [multi-cloud setups](/docs/guides/multi-cloud)

## Why Skycrane?

Traditional infrastructure tools have several pain points:

- **State conflicts**: Corrupted state files, locking issues in CI/CD
- **Vendor lock-in**: Difficult to use multiple clouds together
- **Poor security**: Plugins run with full system access
- **Complex abstractions**: Lowest-common-denominator APIs

Skycrane solves these problems with a modern architecture:

- **Immutable state**: Stored in OCI registries with full version history
- **Native multi-cloud**: Reference resources across providers naturally
- **Secure plugins**: WebAssembly sandbox with capability-based security
- **Direct APIs**: Use each provider's full capabilities

## Next Steps

- Read the [core concepts](/docs/resources) to understand how Skycrane works
- Try the [GitOps workflow guide](/docs/guides/gitops)
- Learn how to [write your own plugins](/docs/guides/writing-plugins)