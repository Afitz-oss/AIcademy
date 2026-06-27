#!/usr/bin/env zsh
# AIcademy Extension — One-Time Setup Script
# Run from your terminal:
#   cd ~/AIcademy/aicademy-extension && zsh setup.sh

set -e

echo ""
echo "==================================="
echo "  AIcademy Extension Setup"
echo "==================================="
echo ""

# Step 1: Ensure npm is available
if ! command -v npm &>/dev/null; then
  echo "📦 npm not found — installing Node.js via Homebrew..."

  if [ ! -w /opt/homebrew ]; then
    echo "  Fixing Homebrew permissions (requires your password once)..."
    sudo chown -R $(whoami) /opt/homebrew
    sudo chown -R $(whoami) ~/Library/Logs/Homebrew 2>/dev/null || true
  fi

  brew install node
  echo "✅ Node.js + npm installed."
else
  echo "✅ npm found: $(npm --version)"
fi

# Step 2: Install extension dependencies
echo ""
echo "📦 Installing extension dependencies..."
npm install

# Step 3: Build the extension
echo ""
echo "🔨 Building extension..."
npm run compile

# Step 4: Package as .vsix
echo ""
echo "📦 Packaging extension..."
npx vsce package --no-dependencies --allow-missing-repository 2>/dev/null || \
  ./node_modules/.bin/vsce package --no-dependencies --allow-missing-repository

VSIX_FILE=$(ls *.vsix 2>/dev/null | head -1)

echo ""
echo "==================================="
echo "  ✅ Build complete!"
echo "==================================="
echo ""
echo "Install the extension in Cursor:"
echo ""
echo "  1. Press Cmd+Shift+P"
echo "  2. Type: Extensions: Install from VSIX"
echo "  3. Select: aicademy-extension/${VSIX_FILE}"
echo ""
echo "After installing, reopen the AIcademy folder."
echo "A prompt will appear automatically to start onboarding."
echo ""
