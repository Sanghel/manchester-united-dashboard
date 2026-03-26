# Code Reviewer Skill

## 📋 Descripción

Valida código contra los estándares del proyecto antes de aprobar PRs, verificando calidad, tests, accesibilidad, y mejores prácticas.

## 🎯 Cuándo Usar Esta Skill

- Revisar PRs antes de merge
- Validar código antes de push
- Code review automatizado en CI
- Mentorship y pair programming

## 🔍 Áreas de Review

```
1. CÓDIGO
   ├─ TypeScript sin errores
   ├─ ESLint sin warnings
   ├─ Prettier formateado
   ├─ No uso de 'any' injustificado
   └─ Nombres descriptivos

2. ARQUITECTURA
   ├─ Estructura de carpetas correcta
   ├─ Separación de responsabilidades
   ├─ No duplicación de código
   └─ Patrones consistentes

3. TESTING
   ├─ Tests unitarios presentes
   ├─ Coverage >80%
   ├─ Tests de edge cases
   └─ Mocking apropiado

4. ACCESIBILIDAD
   ├─ ARIA labels
   ├─ Roles semánticos
   ├─ Navegación por teclado
   └─ Contraste WCAG AA

5. PERFORMANCE
   ├─ No re-renders innecesarios
   ├─ Uso de useMemo/useCallback
   ├─ Lazy loading cuando aplique
   └─ Bundle size razonable

6. DOCUMENTACIÓN
   ├─ JSDoc en funciones públicas
   ├─ README actualizado
   ├─ Storybook stories (componentes)
   └─ Comentarios para lógica compleja

7. SEGURIDAD
   ├─ No secrets en código
   ├─ Sanitización de inputs
   ├─ Validación de datos
   └─ Dependencias actualizadas
```

## ✅ Checklist de Review

### Código Base

```typescript
// ❌ Malo: Type 'any' sin justificar
function processData(data: any) {
  return data.map((item: any) => item.value)
}

// ✅ Bueno: Tipos explícitos
interface DataItem {
  id: string
  value: number
}

function processData(data: DataItem[]): number[] {
  return data.map((item) => item.value)
}
```

```typescript
// ❌ Malo: Nombres no descriptivos
const d = new Date()
const x = d.getTime()
const y = x / 1000

// ✅ Bueno: Nombres descriptivos
const currentDate = new Date()
const currentTimestamp = currentDate.getTime()
const currentTimestampInSeconds = currentTimestamp / 1000
```

### Componentes React

```typescript
// ❌ Malo: No usa forwardRef, no tiene className
export function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

// ✅ Bueno: forwardRef, props tipadas, className
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant }), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

### Hooks

```typescript
// ❌ Malo: No cleanup de side effects
function useInterval(callback: () => void, delay: number) {
  useEffect(() => {
    const id = setInterval(callback, delay)
    // ❌ Falta cleanup
  }, [callback, delay])
}

// ✅ Bueno: Cleanup apropiado
function useInterval(callback: () => void, delay: number) {
  useEffect(() => {
    const id = setInterval(callback, delay)
    return () => clearInterval(id) // ✅ Cleanup
  }, [callback, delay])
}
```

```typescript
// ❌ Malo: Callback no memoizado causa re-renders
function Component() {
  const handleClick = () => console.log('clicked');
  return <Button onClick={handleClick} />;
}

// ✅ Bueno: Callback memoizado
function Component() {
  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []);
  return <Button onClick={handleClick} />;
}
```

### Tests

```typescript
// ❌ Malo: Test vago sin assertions claras
it('works', () => {
  render(<Button />);
  expect(screen.getByRole('button')).toBeTruthy();
});

// ✅ Bueno: Test específico con assertions claras
it('calls onClick handler when clicked', async () => {
  const user = userEvent.setup();
  const handleClick = vi.fn();

  render(<Button onClick={handleClick}>Click me</Button>);

  await user.click(screen.getByRole('button', { name: /click me/i }));

  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### Accesibilidad

```typescript
// ❌ Malo: Sin ARIA labels
function IconButton({ icon, onClick }) {
  return <button onClick={onClick}>{icon}</button>;
}

// ✅ Bueno: Con ARIA label
interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  ariaLabel: string;
}

function IconButton({ icon, onClick, ariaLabel }: IconButtonProps) {
  return (
    <button onClick={onClick} aria-label={ariaLabel}>
      {icon}
    </button>
  );
}
```

## 🤖 Review Automatizado

### Script de Pre-Review

```bash
#!/bin/bash
# pre-review.sh

echo "🔍 Running code review checks..."

# 1. TypeScript
echo "📘 Checking TypeScript..."
npm run typecheck
if [ $? -ne 0 ]; then
  echo "❌ TypeScript errors found"
  exit 1
fi

# 2. Linter
echo "🔧 Running ESLint..."
npm run lint
if [ $? -ne 0 ]; then
  echo "❌ ESLint errors found"
  exit 1
fi

# 3. Tests
echo "🧪 Running tests..."
npm run test:run
if [ $? -ne 0 ]; then
  echo "❌ Tests failing"
  exit 1
fi

# 4. Coverage
echo "📊 Checking coverage..."
COVERAGE=$(npm run test:coverage --silent | grep "All files" | awk '{print $4}')
THRESHOLD=80

if (( $(echo "$COVERAGE < $THRESHOLD" | bc -l) )); then
  echo "❌ Coverage below $THRESHOLD% (got $COVERAGE%)"
  exit 1
fi

echo "✅ All checks passed!"
```

## 📝 Template de Comentarios de Review

### Solicitar Cambios

````markdown
## 🔍 Code Review

### ❌ Issues Found

#### 1. Missing Type Safety

**File:** `src/components/Button.tsx:15`

```typescript
// Current
function handleClick(data: any) { ... }

// Suggested
function handleClick(data: ButtonClickData) { ... }
```
````

#### 2. Accessibility Issue

**File:** `src/components/IconButton.tsx:8`

```typescript
// Missing aria-label for icon-only button
<button onClick={onClick} aria-label="Close dialog">
  <XIcon />
</button>
```

#### 3. Missing Tests

**File:** `src/hooks/useDebounce.test.ts`

- [ ] Test cleanup on unmount
- [ ] Test with rapidly changing values
- [ ] Test custom delay parameter

### 📊 Metrics

- TypeScript Errors: 2
- ESLint Warnings: 5
- Test Coverage: 72% (target: 80%)
- Missing Stories: Button, TextInput

### 🎯 Action Items

Please address the issues above and update coverage to meet the 80% threshold.

````

### Aprobar

```markdown
## ✅ Code Review - APPROVED

### 👍 Highlights
- Clean TypeScript implementation
- Comprehensive test coverage (94%)
- Excellent accessibility support
- Well-documented with JSDoc

### 📊 Metrics
- TypeScript Errors: 0
- ESLint Warnings: 0
- Test Coverage: 94%
- Storybook Stories: ✅

### 💡 Minor Suggestions (non-blocking)
- Consider extracting magic numbers to constants
- Could memoize `calculateValue` function

Great work! 🎉
````

## 🔧 Comandos de Review

```bash
# Ver cambios del PR
gh pr diff

# Ver archivos modificados
gh pr view --json files --jq '.files[].path'

# Comentar en línea específica
gh pr review --comment --body "Consider extracting this to a constant"

# Solicitar cambios
gh pr review --request-changes --body "Please address TypeScript errors"

# Aprobar
gh pr review --approve --body "LGTM! Great work."

# Ver estado del review
gh pr checks
```

## 📊 Criterios de Aprobación

| Criterio          | Obligatorio        | Target |
| ----------------- | ------------------ | ------ |
| TypeScript Errors | ✅                 | 0      |
| ESLint Warnings   | ✅                 | 0      |
| Test Coverage     | ✅                 | >80%   |
| Tests Passing     | ✅                 | 100%   |
| Storybook Stories | Si es componente   | ≥1     |
| JSDoc             | Funciones públicas | 100%   |
| WCAG AA           | Componentes UI     | 100%   |

## 🎯 Red Flags

⛔ **Bloquean el merge:**

- TypeScript errors
- ESLint errors
- Tests failing
- Coverage <80%
- Security vulnerabilities
- Missing tests para nueva funcionalidad

⚠️ **Requieren discusión:**

- Patrones no convencionales
- Performance concerns
- Architectural changes
- Breaking changes sin documentar

## 📚 Recursos de Referencia

Durante el review, consultar:

- `/docs/STANDARDS.md` - Convenciones del proyecto
- `/docs/ARCHITECTURE.md` - Decisiones arquitectónicas
- `/docs/COMPONENTS.md` - Guías de componentes
- WCAG 2.1 Guidelines - Accesibilidad

## 🔗 Skills Relacionadas

- `test-coverage-validator` - Verificar cobertura
- `accessibility-checker` - Validar a11y
- `github-flow-executor` - Aprobar y mergear
