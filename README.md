# Stormy

A mixin-based utility toolkit built with SCSS. You can think of it as TailwindCSS without utility classes. 

## ⚠ THIS LIBRARY IS A WORK-IN-PROGRESS - THERE WILL BE BREAKING CHANGES ⚠

## Motive

I felt like Tailwind and other utility-based CSS frameworks had a nice idea. 
They gave you some default good looking utilities like `shadow`, `rounded`, `gradients`, etc. But they didn't integrate well into existing systems and they don't work well in large, enterprise design systems (In my opinion).

The benefit of using mixins is you can put them in other mixins, you can use them to create your own utility classes. However, the most important thing is that nothing is included unless you use it, unlike the others mentioned above where everything is included and purged when building.

## Usage

### Requirements

- Dart-Sass
- Appropriate build setup (Vite is guaranteed to work, others might break)

### Installation

1. Install with `npm i -D stormy-scss`, `yarn add -D stromy-scss`, or `pnpm i -D stormy-scss`
2. Use it in you SCSS files with `@use "stormy-scss" as stormy;`
3. `@include` the mixins in your CSS classes

### Example

```scss
@use "stormy-scss" as stormy;
.flex-col {
  @include stormy.flex-col();
}
```
