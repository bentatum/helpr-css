# helpr-css

## What is this?
It's a set of helpful css classes for layout, spacing, colors, etc.

## How do I use it?
<div class="p2 mb2 align-center justify-center shadow--4 color--primary">
    Hey!
</div>

## Setup (fast)
```
<link rel="stylesheet" href="https://unpkg.com/helpr-css@0.0.9/kitchen-sink.css">
```

## Import individual components
```
<link rel="stylesheet" href="https://unpkg.com/helpr-css@0.0.9/color.css">
<link rel="stylesheet" href="https://unpkg.com/helpr-css@0.0.9/flexbox.css">
<link rel="stylesheet" href="https://unpkg.com/helpr-css@0.0.9/grid.css">
```

## Docs

### Borders
Put a border on it.
```html
<div class="border p1">
    Borders can be nice sometimes.
</div>
```

### Colors
```html
<h1 class="color--primary">
    Greetings!
</h1>
<p class="color--secondary">
    We're here to help you style your things.
</p>

<div class="color--success">
    Do that.
</div>
<div class="color--warning">
    Maybe don't do that.
</div>
<div class="color--error">
    Definetly don't do that.
</div>
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
