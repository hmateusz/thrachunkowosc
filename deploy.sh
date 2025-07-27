#!/bin/bash

# Tax Advisor Website Deployment Script
echo "🚀 Starting deployment..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .svelte-kit
rm -rf node_modules/.vite

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🌐 Ready for deployment to Vercel"
else
    echo "❌ Build failed!"
    exit 1
fi 