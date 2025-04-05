# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `pnpm dev` - Run development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Code Style Guidelines
- **TypeScript**: Use strict typing. Define interfaces for props and state.
- **Imports**: Use absolute imports with `@/` prefix (e.g., `@/components/ui/button`).
- **Components**: Use functional components with React.forwardRef when appropriate.
- **Naming**: PascalCase for components, camelCase for functions and variables.
- **CSS**: Use Tailwind with the `cn` utility for class merging.
- **State Management**: Use React hooks (useState, useEffect, custom hooks).
- **Error Handling**: Use try/catch for async operations.
- **UI Components**: Follow shadcn/ui patterns for component structure.