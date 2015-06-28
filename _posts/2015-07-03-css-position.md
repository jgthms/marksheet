---
layout: post
title: "CSS <strong>position</strong>"
subtitle: "Going manual"
section: css
---

The CSS `position` property is versatile and powerful. It allows to _set_ or _alter_ an element's position. It has 4 possible **values**:

* `static` (default value)
* `relative`
* `absolute`
* `fixed`

It's often used alongside the 4 **coordinates** properties:

* `left`
* `right`
* `top`
* `bottom`

### static

This is the **default** `position` value: static elements just follow the [natural flow](css-the-flow.html). They aren't affected by any `left`, `right`, `top` or `bottom` value.

### relative

When the `position` is set to **relative**, an element can move according to its **current position**.

```html
<p>Well, Ja should know his own business, I thought, and so I grasped the spear and clambered up toward the red man as rapidly as I could - being so far removed from my simian ancestors as I am</p>
<p>I imagine the slow-witted sithic, as Ja called him, suddenly realized our intentions and that he was quite likely to lose all his meal instead of having it doubled as he had hoped</p>
<p>When he saw me clambering up that spear he let out a hiss that fairly shook the ground, and came charging after me at a terrific rate</p>
```
{: .css}

```css
p{ border: 1px solid blue;}
```
{: .css}

<div class="result">
  <p style="border: 1px solid blue;">Well, Ja should know his own business, I thought, and so I grasped the spear and clambered up toward the red man as rapidly as I could - being so far removed from my simian ancestors as I am</p>
  <p style="border: 1px solid blue;">I imagine the slow-witted sithic, as Ja called him, suddenly realized our intentions and that he was quite likely to lose all his meal instead of having it doubled as he had hoped</p>
  <p style="border: 1px solid blue;">When he saw me clambering up that spear he let out a hiss that fairly shook the ground, and came charging after me at a terrific rate</p>
</div>

Let's move the **second** paragraph:

```html
<p>Well, Ja should know his own business, I thought, and so I grasped the spear and clambered up toward the red man as rapidly as I could - being so far removed from my simian ancestors as I am</p>
<p class="second">I imagine the slow-witted sithic, as Ja called him, suddenly realized our intentions and that he was quite likely to lose all his meal instead of having it doubled as he had hoped</p>
<p>When he saw me clambering up that spear he let out a hiss that fairly shook the ground, and came charging after me at a terrific rate</p>
```
{: .html}

```css
.second{ position: relative; border-color: red; left: 20px; top: 10px;}
```
{: .css}

<div class="result">
  <p style="border: 1px solid blue;">Well, Ja should know his own business, I thought, and so I grasped the spear and clambered up toward the red man as rapidly as I could - being so far removed from my simian ancestors as I am</p>
  <p style="border: 1px solid red; position: relative; left: 20px; top: 10px;">I imagine the slow-witted sithic, as Ja called him, suddenly realized our intentions and that he was quite likely to lose all his meal instead of having it doubled as he had hoped</p>
  <p style="border: 1px solid blue;">When he saw me clambering up that spear he let out a hiss that fairly shook the ground, and came charging after me at a terrific rate</p>
</div>

The red paragraph has moved 20px **from the left** and 10px **from the top**, relative to its _natural_ position, where it's _supposed_ to be.

Notice how the blue paragraphs haven't moved at all. By using relative positioning, the red paragraph can freely move without disrupting the layout. The only thing out of place is _itself_. All the other elements **don't know that element has moved**.

### absolute

When the `position` is set to **absolute**, an element can move according to the **first positioned ancestor**.

#### "Positioned?? What is a _positioned_ element?"

A **positioned** element is one whose `position` value is either `relative`, `absolute` or `fixed`. So unless the position is not set _or_ static, an element is **positioned**.

The characteristic of a _positioned_ element is that it can act as a **reference point for its child elements**.

Let's imagine a simple **hierarchy**:

```html
<section>
  I'm in position relative.
  <p>
    I'm in position absolute!
  </p>
</section>
```
{: .html}

```css
section {
  background: gold;
  height: 200px;
  padding: 10px;
  position: relative; /* This turns the <section> into a point of reference for the <p> */
}

p {
  background: limegreen;
  color: white;
  padding: 10px;
  position: absolute; /* This makes the <p> freely movable */
  bottom: 10px; /* 10px from the bottom */
  left: 20px; /* 20px from the left */
}
```
{: .css}

<div class="result">
  <section style="background: gold; height: 200px; margin: 1em 0; padding: 10px; position: relative;">
    I'm in position relative.
    <p style="background: limegreen; bottom: 10px; color: white; left: 20px; margin: 0; padding: 10px; position: absolute;">
      I'm in position absolute!
    </p>
  </section>
</div>

The yellow section has a height of `200px` and its position set to `relative`, which turns it into a **point of reference for all my child elements**.

As the green paragraph's position is set to `absolute`, it can freely move _according to_ the yellow section. By setting both `bottom` and `left` values, it will move _from_ the bottom left corner.

#### What happens if we set both left AND right?

If the `width` is not set, applying `left: 0` and `right: 0` will **stretch the element across the whole width**. It's the equivalent of setting `left: 0` and `width: 100%`.

If the `width` is set, then the `right` value is discarded.

### fixed

When the `position` is set to **fixed**, it acts like **absolute**: you can set left/right and top/bottom coordinates.

The only difference is that the **point of reference is the viewport**. It means that a fixed element _won't scroll_ with the page ; it is _fixed_ on the screen.