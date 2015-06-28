---
layout: post
title: "CSS <strong>height</strong> and <strong>width</strong>"
subtitle: "Setting <strong>fixed</strong> dimensions to your rectangles"
section: css
---

The dimensions (or height and width) of an element are **dynamic**, as they fluctuate in order to fit the content. It is somehow possible to set **specific** dimensions.

```css
blockquote{ width: 600px;}
```
{: .css}

The blockquote will not take up the whole width available, but will remain 600px wide **in any situation**:

* if the browser window is less wide than 600px, it will show a horizontal scrolling bar
* if the browser window is wider than 600px, the blockquote will stay 600px wide and not take up the whole space

Because we've only set the width, the blockquote remains fluid in **height**: the height becomes the variable dimension to fit the blockquote's content.

### Setting both height and width

By setting the dimensions of an element, it will remain fixed no matter the length of its content.

What happens if the content is longer than the element can contain?
{: .question}

Because we prevent the element to dynamically alter its dimensions, there is a chance the content will be longer than the element accomodates for and will subsequently **overflow**.

The default behavior can be surprising: the content will be displayed anyway!

```css
blockquote{ background: yellow; height: 50px; width: 100px;}
```
{: .css}

```html
<blockquote>The content er... finds a way</blockquote>
```
{: .html}

<div class="result">
  <blockquote style="background: yellow; height: 50px; width: 100px;">The content er... finds a way</blockquote>
</div>

### CSS overflow

The `overflow` CSS property allows us to manage the case of content being longer than its container.

The default value is `visible`: the content will be displayed anyway, because _"Why would you want to prevent content from being read by the user if it's present in the code?"_. You can consider **HTML as prevalent to CSS**.

By applying `overflow: hidden;`, you simply _forbid_ any overflowing content to be seen.

<div class="result">
  <blockquote style="background: yellow; height: 50px; overflow: hidden; width: 100px;">The content er... finds a way</blockquote>
</div>

If you want your content to overflow but still want to make it accessible, you can decide to display scrollbars by applying `overflow: scroll`.

<div class="result">
  <blockquote style="background: yellow; height: 50px; overflow: scroll; width: 100px;">The content er... finds a way</blockquote>
</div>

A better option is use `overflow: auto`, as the scrollbars will only appear _if_ the content is overflowing, but will remain hidden until then.

<div class="result">
  <blockquote style="background: yellow; height: 50px; overflow: auto; width: 100px;">The content er... finds a way</blockquote>
</div>

### Beware of fixed dimensions

Applying specific dimensions are often required for a design to look visually appealing but can have unintended consequences. In that regard:

* make sure your content doesn't overflow
* if it does, use `overflow: hidden` or `overflow: auto` to prevent your design from breaking
