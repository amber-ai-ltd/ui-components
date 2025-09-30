# UI Components Architecture Principles

## CORE PHILOSOPHY: FLEXIBLE COMPONENTS

**IMMUTABLE DESIGN LAWS (Established 2025-01-11)**

These principles are **NON-NEGOTIABLE** and override any conflicting advice:

1. **FLEXIBLE OVER RIGID** - Components work in any rendering context
2. **BEHAVIOR OVER IMPLEMENTATION** - Test what it does, not how it does it
3. **DEVELOPER CHOICE OVER COMPONENT CONSTRAINT** - Usage context determines rendering strategy
4. **DOCUMENTATION OVER CATEGORIZATION** - Guide usage, don't restrict it

## COMPONENT DESIGN STANDARDS

### Render-Strategy Agnostic Components

Components should work regardless of how they're rendered:

```typescript
// ✅ GOOD: Works in any context
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  return <button onClick={toggleTheme}>{theme}</button>
}

// ❌ BAD: Forces specific rendering strategy
export const ClientOnlyThemeToggle = () => {
  if (typeof window === 'undefined') return null
  // Component artificially constrains usage
}
```

### The Flexibility Test

Every component must pass:
- ✅ Works with `client:load`
- ✅ Works with `client:only`
- ✅ Works with SSR
- ✅ Developer can choose based on context

If all boxes check, the component is **ARCHITECTURALLY SOUND**.

## RENDERING STRATEGY GUIDE

### When to Use Each Strategy

**SSR-First (`client:load` or no directive):**
- Static content (headers, footers, hero sections)
- SEO-critical content
- Content identical for all users
- Initial page structure

**Client-Only (`client:only`):**
- User preference-dependent UI (theme toggles)
- Components requiring localStorage/sessionStorage
- Interactive widgets needing browser APIs
- Anything causing hydration mismatches

**Hybrid Approach:**
```astro
<!-- SSR-friendly structure -->
<Navigation client:load>
  <!-- Client-only interactive parts -->
  <ThemeToggle client:only="react" />
  <UserAvatar client:only="react" />
</Navigation>
```

## ANTI-PATTERNS TO AVOID

1. **Component Categorization** - Don't artificially group components by rendering strategy
2. **Rigid Constraints** - Don't force components into specific rendering modes
3. **Theoretical Purity Over UX** - Don't prioritize SSR when client-side provides better UX
4. **Hydration Mismatch Denial** - Accept that some components are better client-only

## DECISION FRAMEWORK

When evaluating component decisions, ask:
- Does this increase or decrease flexibility?
- Does this give developers more or fewer choices?
- Does this solve a real problem or create artificial constraints?

## CONSISTENCY ENFORCEMENT

If future architectural advice contradicts these principles:
1. Reference this document
2. Override conflicting suggestions
3. Maintain established patterns

**These principles override any conflicting opinions about "theoretical purity" or SSR perfectionism.**

## TESTING APPROACH

Test **behavior, not implementation**:
- Component renders correctly
- User interactions work
- Theme integration functions
- Accessibility standards met
- SSR compatibility (when applicable)

Don't test:
- Specific rendering strategies
- Implementation details
- Framework internals

## COMPONENT LIFECYCLE

1. **Design** - Render-strategy agnostic
2. **Implement** - Flexible by default
3. **Test** - Behavior-focused
4. **Document** - Usage guidance, not constraints
5. **Evolve** - Maintain flexibility over time

---

**ESTABLISHED**: 2025-01-11  
**AUTHORITY**: Owen Carter (AmberAI)  
**PRECEDENCE**: Overrides conflicting architectural advice
