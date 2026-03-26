# Testing

## Stack

| Layer              | Tool                                |
| ------------------ | ----------------------------------- |
| Unit / integration | Vitest 1 + React Testing Library 14 |
| API mocking        | MSW 2 (Node adapter in tests)       |
| DOM                | happy-dom                           |
| Coverage           | `@vitest/coverage-v8`               |
| E2E                | Playwright (Chromium)               |

## Running tests

```bash
# Unit tests (watch mode)
npm test

# Unit tests (single run)
npm run test:run

# Coverage report
npm run test:coverage

# E2E tests (requires dev server on :5173)
npm run test:e2e

# E2E with UI
npm run test:e2e:ui
```

## Unit test conventions

- Test files live next to the source file: `Foo.test.tsx`
- Use `describe` + `it` (not `test`) for grouping
- Prefer `screen.getByRole` over `getByTestId`
- Never mock internal modules — only mock at the network boundary (MSW)

### MSW setup

The test server (`src/tests/mocks/server.ts`) is started globally in `src/tests/setup.ts`:

```ts
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
```

Add per-test overrides with `server.use(http.get(...))`.

### React Query in tests

Each test that renders a hook or component using React Query must provide a fresh `QueryClient` with `retry: false`:

```ts
function createWrapper() {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } })
  return ({ children }) => (
    <QueryClientProvider client={client}>{children}</QueryClientProvider>
  )
}
```

### Zustand in tests

Call `useStore.setState(...)` in `beforeEach` to reset state between tests — no need to mock the module.

## E2E test conventions

- Specs live in `e2e/`
- Use `page.route()` to intercept API calls (`e2e/fixtures/api.ts`)
- Register wildcard routes BEFORE specific routes (Playwright LIFO)
- Prefer `getByRole` + `getByLabel` over CSS selectors

## Coverage targets

- Overall: >80% line coverage
- All public component props and variants covered
- All service functions covered (success + error paths)
