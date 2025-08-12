# Animation Components Guide

This guide explains how to use the enhanced animation components for smooth fade-in from bottom effects.

## Components Overview

### 1. FadeInSection
The main component for scroll-triggered animations on any section.

```tsx
import FadeInSection from "@/components/FadeInSection";

<FadeInSection 
  delay={200}           // Delay before animation starts (ms)
  distance={30}         // Distance to translate (px)
  duration={800}        // Animation duration (ms)
  threshold={0.1}       // Intersection threshold
  rootMargin="-50px"    // Root margin for trigger
>
  <YourContent />
</FadeInSection>
```

### 2. HeroFadeIn
Specialized component for above-the-fold hero sections with staggered animations.

```tsx
import HeroFadeIn from "@/components/HeroFadeIn";

<HeroFadeIn staggerDelay={200}>
  <h1>Title</h1>           {/* Animates first */}
  <p>Subtitle</p>          {/* Animates after 200ms */}
  <Button>CTA</Button>      {/* Animates after 400ms */}
</HeroFadeIn>
```

### 3. ScrollReveal (Enhanced)
The original component, now with enhanced options.

```tsx
import ScrollReveal from "@/components/ScrollReveal";

<ScrollReveal 
  delay={150}
  distance={25}
  duration={600}
  aboveTheFold={false}
>
  <YourContent />
</ScrollReveal>
```

## Usage Examples

### Hero Section with Staggered Animation
```tsx
<HeroFadeIn staggerDelay={200}>
  <div className="text-center">
    <h1 className="text-5xl font-bold mb-4">Welcome</h1>
    <p className="text-xl mb-6">Discover our solutions</p>
    <Button>Get Started</Button>
  </div>
</HeroFadeIn>
```

### Content Sections with Scroll Animation
```tsx
<FadeInSection delay={100} distance={40} duration={900}>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <Card>Feature 1</Card>
    <Card>Feature 2</Card>
    <Card>Feature 3</Card>
  </div>
</FadeInSection>
```

### Staggered Card Animations
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {cards.map((card, index) => (
    <FadeInSection 
      key={index}
      delay={index * 150}  // Stagger each card
      distance={30}
      duration={800}
    >
      <Card>{card.content}</Card>
    </FadeInSection>
  ))}
</div>
```

## Animation Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `delay` | number | 0 | Delay before animation starts (ms) |
| `distance` | number | 30 | Initial translateY distance (px) |
| `duration` | number | 800 | Animation duration (ms) |
| `aboveTheFold` | boolean | false | Whether element is above the fold |
| `threshold` | number | 0.1 | Intersection observer threshold |
| `rootMargin` | string | "-50px" | Root margin for trigger |

## Performance Features

- **GPU Accelerated**: Uses `transform` and `opacity` for smooth animations
- **Intersection Observer**: Efficient scroll detection without performance impact
- **One-time Animation**: Each element animates only once per session
- **Will-change**: Optimizes GPU rendering with `will-change: opacity, transform`
- **No Layout Shifts**: Maintains space allocation during animations

## Best Practices

1. **Use HeroFadeIn** for above-the-fold content (hero sections, main headlines)
2. **Use FadeInSection** for scroll-triggered content (cards, sections, images)
3. **Stagger animations** by using different delays for related elements
4. **Keep distances reasonable** (20-40px) for subtle, professional feel
5. **Use consistent durations** (600-900ms) across similar elements
6. **Avoid over-animating** - let content breathe naturally

## Browser Support

- Modern browsers with Intersection Observer support
- Graceful fallback for older browsers (elements appear without animation)
- Mobile-optimized with touch-friendly scroll detection
