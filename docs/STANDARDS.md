# Development Standards

## Commits

Follow [Conventional Commits](https://www.conventionalcommits.org/). Enforced by commitlint + Husky.

```
<type>(<scope>): <description>
```

Allowed types: `feat`, `fix`, `chore`, `test`, `docs`, `refactor`, `perf`, `ci`

Allowed scopes: `ui`, `hooks`, `api`, `config`, `deps`, `types`, `test`, `docs`, `router`, `store`, `scores`, `standings`, `stats`, `leagues`, `layout`

Header max length: 100 characters. Body lines max length: 100 characters.

## Branching

```
main          ← production, merges from develop at phase end
develop       ← integration, merges from feature branches
feature/*     ← one branch per task (feature/TASK-NNN-slug)
```

## Code style

- TypeScript strict mode (`strict: true` in tsconfig)
- ESLint + Prettier enforced via lint-staged on pre-commit
- No `any` types without a comment explaining why
- Prefer `type` over `interface` for unions; use `interface` for object shapes that may be extended

## Component conventions

- Use `forwardRef` for all leaf UI components
- Use CVA for variant styles
- All interactive elements must have an accessible label
- Export both the component and its props type from the barrel `index.ts`

## File layout (example)

```
src/components/ui/buttons/Button/
  Button.tsx         ← component
  Button.test.tsx    ← unit tests
  Button.stories.tsx ← Storybook
  index.ts           ← barrel export
```

## Pull requests

- One PR per task
- PR must pass all CI checks (Lint, TypeScript, Tests, Build)
- PR base branch is `develop`
- Use the PR template

## Accessibility

- All images must have `alt` text
- All form inputs must have associated labels
- Interactive elements that are not `<button>` or `<a>` must have `role` + `tabIndex`
- Use semantic HTML (`<main>`, `<nav>`, `<header>`, `<section>` with `aria-label`)
