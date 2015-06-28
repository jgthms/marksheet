---
layout: post
title: "Sass <strong>variables</strong>"
subtitle: "Change once, update everywhere"
section: sass
---

One of the first reasons people turn to Sass is the existence of **CSS variables**.

Have you ever had to search and replace many occurrences of the same CSS _value_? If so, variables will help you out.

### Syntax

You need to prepend a variable with a `$` dollar sign:

```scss
$yellow: #fce473;
```
{: .scss}

This line doesn't do anything apart from **defining** a variable, in our case a shade of yellow:

<div style="background: #fce473; display: inline-block; padding: 10px; vertical-align: top;">#fce473</div>

We can then use it throughout our CSS, whenever a [color unit](/css-color-units.html) is required:

```scss
.quote{ border-left: 5px solid $yellow;}
```
{: .scss}

This `.scss` file will be **compiled** into a `.css` file, where all variables will be _replaced_ with their actual _value_:

```css
.quote{ border-left: 5px solid #fce473;}
```
{: .css}

_Why is it called a variable?_{:.question}
Well here, the **value** `#fce473` is variable. Meaning the name `$yellow` remains _fixed_ but the value can _change_.
{: .answer}

### Set your variable only once

To illustrate the purpose of using variables, you need to use it more than once, like this **pink** shade:

<div style="background: #ff1493; color: white; display: inline-block; padding: 10px; vertical-align: top;">#ff1493</div>

```scss
$pink: #ff1493;
.quote{ border-left: 5px solid $pink;}
.button{ background: $pink;}
.sidebar a:hover{ border-bottom-color: $pink;}
.footer a{ color: $pink;}
```
{: .scss}

This will be compiled into:

```css
.quote{ border-left: 5px solid #ff1493;}
.button{ background: #ff1493;}
.sidebar a:hover{ border-bottom-color: #ff1493;}
.footer a{ color: #ff1493;}
```
{: .css}

If you decided to go for a _different_ shade of pink:

<div style="background: #ff1493; color: white; display: inline-block; padding: 10px; vertical-align: top;">Old pink</div>
<div style="background: #c71585; color: white; display: inline-block; padding: 10px; vertical-align: top;">New pink</div>

You'd only have to change the color value **once**:

```scss
$pink: #c71585;
```
{: .scss}

And the resulting CSS would be **automatically** updated:

```css
.quote{ border-left: 5px solid #c71585;}
.button{ background: #c71585;}
.sidebar a:hover{ border-bottom-color: #c71585;}
.footer a{ color: #c71585;}
```
{: .css}

### Even more abstraction

Now let's say you actually don't want to use pink as your **primary** color, but **green**!

<div style="background: #32cd32; color: white; display: inline-block; padding: 10px; vertical-align: top;">#32cd32</div>

You'd have to define a `$green: #32cd32;` variable **and** replace all the instances of `$pink` with `$green` in your SCSS.

There is a better way:

```scss
// Defining color values
$yellow: #fce473;
$pink: #c71585;
$green: #32cd32;
$blue: #1d90ff;

// Defining color types
$primary-color: $green;

.quote{ border-left: 5px solid $primary-color;}
.button{ background: $primary-color;}
.sidebar a:hover{ border-bottom-color: $primary-color;}
.footer a{ color: $primary-color;}
```
{: .scss}

Instead of _directly_ referencing the variable `$green`, you define a **primary color** variable that is _set_ to `$green`.

When you think about it, you don't _really_ want to use `$green` throughout your CSS. What you _actually_ want is use your **primary color**, which happens to be green.

If you decided to use `$blue` as your primary color, you'd only have to modify a **single line**.

### For any type of value

We've used variables to define colors, but you can set **any type of content**:

```scss
// Colors
$yellow:              #fce473;
$pink:                #c71585;
$green:               #32cd32;
$blue:                #1d90ff;

$primary-color:       $blue;
$secondary-color:     $yellow;

// Fonts
$serif:               "Lora", "Playfair Display", Georgia, serif;
$sans-serif:          "Roboto", "Source Sans Pro", "Open Sans", Arial, sans-serif;
$monospace:           "Inconsolata", monospace;

$primary-font:        $sans-serif;
$secondary-font:      $serif;

// Spacing
$mobile-space:        10px;
$desktop-space:       35px;
```
{: .scss}
