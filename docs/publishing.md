# Publishing Workflow

## Package Registry

This package uses **GitHub Package Registry**, not npm public registry.

## Publishing Steps

1. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add white-label theme system"
   ```

2. **Update Version**
   ```bash
   # Edit package.json version manually
   # OR use npm version (if git is clean)
   npm version patch  # 1.7.0 -> 1.7.1
   npm version minor  # 1.7.0 -> 1.8.0
   npm version major  # 1.7.0 -> 2.0.0
   ```

3. **Build Package**
   ```bash
   pnpm build
   ```

4. **Publish to GitHub**
   ```bash
   pnpm publish
   ```

## Authentication

Ensure GitHub package registry authentication is configured:

```bash
npm config set @amber-ai-ltd:registry https://npm.pkg.github.com
```

## Version Strategy

- **Patch** (1.7.1): Bug fixes, minor updates
- **Minor** (1.8.0): New features, theme additions
- **Major** (2.0.0): Breaking changes, API changes

## Consuming Projects

Projects automatically get updates when they install:

```bash
pnpm install @amber-ai-ltd/ui-components@latest
```
