# helpr-css

## What is this?

It's a set of helpful css classes for layout, spacing, colors, etc.

## How do I use it?

<div class="v100 w100 flex center">
    <h1>Hello World</h1>
</div>

## Setup (fast)

```
<link rel="stylesheet" href="https://unpkg.com/helpr-css@2/dist/default.min.css">
```

## Setup (advanced)

```
<link rel="stylesheet" href="https://unpkg.com/helpr-css@2/dist/color.min.css">
<link rel="stylesheet" href="https://unpkg.com/helpr-css@2/dist/flex.min.css">
<link rel="stylesheet" href="https://unpkg.com/helpr-css@2/dist/grid.min.css">
```

## Docs

### Borders

```css
--border-size: 1px
--border-style: solid
--border-color: var(--color--grey--lighten-2)
--border: var(--border-size) var(--border-style) var(--border-color)
```

```html
<div class="border" />
<div class="border-top" />
<div class="border-right" />
<div class="border-bottom" />
<div class="border-left" />
```

### Colors

There ~ 100 color variables, see all (link to colors/README.md).

```css
--color--primary: dodgerblue;
--color--primary--contrast: var(--color--white);
--color--primary--darken-1: #0282ff;
--color--primary--darken-2: #0074e4;
--color--primary--darken-3: #0065c8;
--color--primary--darken-4: #0057ab;
--color--primary--darken-5: #00488f;
--color--primary--lighten-1: #359bff;
--color--primary--lighten-2: #4ba6ff;
--color--primary--lighten-3: #62b1ff;
--color--primary--lighten-4: #78bcff;
--color--primary--lighten-5: #8fc8ff;

--color--text: var(--color--black--lighten-1)
--color--text--secondary: var(--color--black--lighten-4)
--color--links: var(--color--primary)

--bg--main: var(--color--white)
--bg--alt: var(--color--white--darken-1)
--bg--backdrop: var(--color--black--alpha-3)
```

Below are templates for all background-color and text color classes. Color names are `primary, secondary, success, warning, error, grey, white, black`.

```html
<div class="{bg|color}--{name}" />
<div class="{bg|color}--{name}--lighten-1" />
<div class="{bg|color}--{name}--lighten-2" />
<div class="{bg|color}--{name}--lighten-3" />
<div class="{bg|color}--{name}--lighten-4" />
<div class="{bg|color}--{name}--lighten-5" />
<div class="{bg|color}--{name}--darken-1" />
<div class="{bg|color}--{name}--darken-2" />
<div class="{bg|color}--{name}--darken-3" />
<div class="{bg|color}--{name}--darken-4" />
<div class="{bg|color}--{name}--darken-5" />
<div class="{bg|color}--{name}--alpha-1" />
<div class="{bg|color}--{name}--alpha-2" />
<div class="{bg|color}--{name}--alpha-3" />
<div class="{bg|color}--{name}--alpha-4" />
<div class="{bg|color}--{name}--alpha-5" />
```

### Flex

```html
<div class="flex" />
<div class="flex row" />
<div class="flex col" />
<div class="flex column" />

<div class="flex center">
  <!--
        display: flex;
        align-items: center;
        justify-content: center;
    -->
</div>

<div class="flex space-around" />
<div class="flex space-between" />
<div class="flex space-evenly" />
```

### Grid

Here's a simple row of cells with some grid-gap.

```html
<div class="grid row grid-gap-2">
  <div class="border"></div>
  <div class="border"></div>
  <div class="border"></div>
</div>
```

A quick column is just as easy.

```html
<div class="grid column grid-gap-2">
  <div class="border"></div>
  <div class="border"></div>
  <div class="border"></div>
</div>
```

### Flexbox

```html
<div class="flex center vh100 vw100">
  <div>It feels good to be centered.</div>
</div>
```
