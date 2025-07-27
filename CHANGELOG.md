## v2.0.10

# Changes

Improvement and fixes

---

## v2.0.9

# Changes

Improvement and fixes

---

## v2.0.8

# Changes

Improvement and fixes

---

## v2.0.7

# Changes

Improvement and fixes

---

## v2.0.6

# Changes

Improvement and fixes

---

## v2.0.5

# Changes

Improvement and fixes

---

## v2.0.4

# Changes

Improvement and fixes

---

## v2.0.3

# Changes

Improvement and fixes

---

## v2.0.2

# Changes

Improvement and fixes

---

## v2.0.1

# Changes

Improvement and fixes

---

## v2.0.0

# Changes

Improvement and fixes

---

## v1.1.9

# Changes

Improvement and fixes

---

## v1.1.8

# Changes

Improvement and fixes

---

## v1.1.7

# Changes

Improvement and fixes

---

## v1.1.6

# Changes

Improvement and fixes

---

## v1.1.5

# Changes

Improvement and fixes

---

## v1.0.0

# Changes



- # Project Restructuring to Monorepo: ![change](https://img.shields.io/badge/change-1E90FF) ![minor](https://img.shields.io/badge/minor-1E90FF) 


  This major update transforms VideoEngager Widget into a modern monorepo architecture using pnpm workspaces and Turborepo to improve development workflow, deployment, and maintainability.

  ## Core Changes

  - Restructured entire codebase into modular packages with clear responsibilities
  - Enhanced type definitions and public APIs
  - Improved error handling with standardized error types
  - Added comprehensive logging system

  ## Package-specific Updates

  ### @videoengager-widget/browser

  - Created optimized bundles for browser compatibility
  - Added new guest demo implementation with improved user experience
  - Unified exports for easier consumption in web applications

  ### @videoengager-widget/configs

  - Established shared configurations for TypeScript, ESLint, and build tools
  - Created reusable tsup configurations for consistent builds across packages
  - Added standardized Vite configs for development and production

  ### @videoengager-widget/core

  - Added Jest test suite with comprehensive unit tests
  - Implemented core functionality with improved architecture
  - Added mock utilities for easier testing
  - Improved TypeScript type safety and documentation

  ### @videoengager-widget/integrations

  - Fixed issues in Genesys integration implementation
  - Added new WebSocket-based pure SDK implementation for Genesys
  - Enhanced error handling and session management
  - Improved support for customizable attributes and interaction IDs

  ## Documentation

  - Added detailed README with installation and usage instructions
  - Created CONTRIBUTING.md guide for development workflow
  - Added SECURITY.md for vulnerability reporting
  - Added migration guides for upgrading from previous versions
