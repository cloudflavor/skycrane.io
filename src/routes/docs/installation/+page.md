---
title: Installation
description: How to install Skycrane on your system
layout: article
---

# Installation

Skycrane provides multiple installation methods depending on your platform and preferences.

## System Requirements

- **Operating System**: Linux, macOS, or Windows
- **Architecture**: x86_64 or arm64
- **Dependencies**: None (single binary)

## Installation Methods

### macOS

#### Homebrew (Recommended)

```bash
brew tap skycrane-io/tap
brew install skycrane
```

#### Direct Download

```bash
# For Intel Macs
curl -L https://github.com/skycrane-io/skycrane/releases/latest/download/skycrane-darwin-amd64 -o skycrane
chmod +x skycrane
sudo mv skycrane /usr/local/bin/

# For Apple Silicon
curl -L https://github.com/skycrane-io/skycrane/releases/latest/download/skycrane-darwin-arm64 -o skycrane
chmod +x skycrane
sudo mv skycrane /usr/local/bin/
```

### Linux

#### Package Managers

```bash
# Debian/Ubuntu
curl -L https://github.com/skycrane-io/skycrane/releases/latest/download/skycrane-linux-amd64.deb -o skycrane.deb
sudo dpkg -i skycrane.deb

# Fedora/RHEL
curl -L https://github.com/skycrane-io/skycrane/releases/latest/download/skycrane-linux-amd64.rpm -o skycrane.rpm
sudo rpm -i skycrane.rpm

# Arch Linux (AUR)
yay -S skycrane
```

#### Direct Download

```bash
# For x86_64
curl -L https://github.com/skycrane-io/skycrane/releases/latest/download/skycrane-linux-amd64 -o skycrane
chmod +x skycrane
sudo mv skycrane /usr/local/bin/

# For ARM64
curl -L https://github.com/skycrane-io/skycrane/releases/latest/download/skycrane-linux-arm64 -o skycrane
chmod +x skycrane
sudo mv skycrane /usr/local/bin/
```

### Windows

#### Scoop

```powershell
scoop bucket add skycrane https://github.com/skycrane-io/scoop-bucket
scoop install skycrane
```

#### Direct Download

1. Download the latest release from [GitHub Releases](https://github.com/skycrane-io/skycrane/releases)
2. Extract the ZIP file
3. Add the directory to your PATH

### Docker

```bash
docker pull ghcr.io/skycrane-io/skycrane:latest
docker run --rm -it ghcr.io/skycrane-io/skycrane:latest --version
```

## Verify Installation

After installation, verify Skycrane is working:

```bash
skycrane --version
```

You should see output like:

```
Skycrane v0.1.0
Built with Rust 1.75.0
WASI Runtime: wasmtime 15.0.0
```

## Shell Completions

Skycrane can generate shell completions for better CLI experience:

```bash
# Bash
skycrane completions bash > /etc/bash_completion.d/skycrane

# Zsh
skycrane completions zsh > /usr/share/zsh/site-functions/_skycrane

# Fish
skycrane completions fish > ~/.config/fish/completions/skycrane.fish

# PowerShell
skycrane completions powershell > $PROFILE
```

## Configuration

Create the Skycrane configuration directory:

```bash
mkdir -p ~/.config/skycrane
```

Initialize a new project:

```bash
skycrane init
```

This creates:
- `skycrane.yaml` - Project configuration
- `infrastructure/` - Directory for your Starlark files
- `.gitignore` - Configured for Skycrane projects

## Installing Plugins

Skycrane uses a plugin system for cloud providers. Install the providers you need:

```bash
# Official plugins
skycrane plugin install hetzner
skycrane plugin install cloudflare
skycrane plugin install aws

# Verify installed plugins
skycrane plugin list
```

## Next Steps

- Follow the [Quick Start Guide](/docs/quick-start)
- Learn about [Starlark configuration](/docs/starlark)
- Set up [state management](/docs/state)