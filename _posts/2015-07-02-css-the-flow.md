---
layout: post
title: "The <strong>Flow</strong>"
subtitle: "The <strong>default</strong> behavior of a webpage"
section: css
---

An HTML document is a **living** document

Even without any CSS applied, an HTML document already has its own rules:

* **fluidity**: how the content adapts to browser dimensions
* **ordering**: in which order elements appear
* **stacking**: how elements appear on top of each other

This natural behavior is **logical**.

### Fluidity

In HTML, the **content** is King.

All `block` elements are **fluid**. They will naturally adapt their layout to accommodate their inner content:

* **width: 100%**  
a block will take up the whole width available
* **word wrap**  
if a block's inline content doesn't fit on a single line, it will continue on a new line
* **height: auto**  
a block's height varies automatically to match its content's size

<div class="result" id="result-fluidity">
  <div>
    A block element will fill up the whole <strong>width</strong> available, while its <strong>height</strong> will vary automatically according to the size of its content.
  </div>
  <div>
    This element will be pushed downwards depending on the height of its predecessors.
  </div>
</div>

<style type="text/css">
#result-fluidity{ height: 450px; max-width: 800px;}
#result-fluidity div{ background: coral; padding: 20px;}
#result-fluidity div:first-child{ background: mediumaquamarine; animation: expand 3s alternate infinite both;}

@keyframes expand{
  0%  { width: 100%;}
  100%{ min-width: 100px; width: 50%;}
}
</style>

* A `block` is by default in **full width**
* Its **height** is the height of its content

### Ordering

HTML elements are displayed in the **order** in which they are written **in the code**.
First in the code -> first in the browser.

Each <code>block</code> appears in the order in which they appear in the HTML code, from <strong>top</strong> to <strong>bottom</strong>.

```html
<p>First</p>
<p>Second</p>
<p>Third</p>
<p>Fourth</p>
<p>Fifth</p>
```
{: .html}

<div class="result">
  <p>First</p>
  <p>Second</p>
  <p>Third</p>
  <p>Fourth</p>
  <p>Fifth</p>
</div>

### Stacking

A browser has **3 dimensions**.

Each HTML element belongs to an imaginary **layer**.

The **stack order** depends on how elements are **nested**: child elements appear **on top** of their respective parents.

* Each **nested** element appears _on top_ of its parent.
* The **deeper** in the hierarchy, the _higher_ in the stack.

```html
<div>
  This parent is behind
  <p>
    This nested child appears <strong>on top</strong> of its parent
  </p>
</div>
```
{: .html}

<div class="result">
  <div style="background: midnightblue; color: white; padding: 20px;">
    This parent is behind
    <p style="background: mediumseagreen; padding: 20px;">
      This nested child appears <span style="background: crimson; color: white; padding: 2px 5px;">on top</span> of its parent
    </p>
  </div>
</div>

### Breaking the flow

While the browser's default behavior is _efficient_, it may not be _sufficient_ for your design needs.

Several CSS properties allow to **disrupt** the Flow:

* `height` and `width` can alter an element's **fluidity**
* `float` **disrupts** an element's behavior as well as its surroundings
* `position` `absolute` and `fixed` **remove** an element from the Flow
* `z-index` can alter the order in which elements are **stacked**
