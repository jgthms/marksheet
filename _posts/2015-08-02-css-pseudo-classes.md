---
layout: post
title: "CSS <strong>pseudo-classes</strong>"
subtitle: "Enhancing the CSS <strong>selectors</strong>"
section: css
---

We've seen how there are mainly [3 types of CSS selectors](/css-selectors.html):

* **generic** where `p` in CSS targets `<p>` HTML elements
* **classes** where `.intro` in CSS targets HTML elements with a `class="intro"` attribute
* **ids** where `#logo` in CSS targets HTML elements with a `id="logo"` attribute

All of these selectors can have **pseudo-classes** attached to them. A pseudo-class:

* defines a particular **state** of the element
* is a keyword that starts with a **colon** `:`

### Syntax

A pseudo-class **can't exist on its own**. It must be **attached to a selector**. The pseudo-class will only define a particular _state_ of _that_ selector.

The syntax looks like this:

```css
.selector:pseudo-class{ }
```
{: .css}

There is **no space** between the selector and the pseudo-class, to signify that they are **linked together**.

### :hover

For example, a common pseudo-class used is `:hover`, which will apply a CSS style when the targeted element is **hovered**. Let's test it on **links**.

```css
a{ color: blue;}
a:hover{ color: red;}
```
{: .css}

<div class="result" id="result-821">
  <p>Hover <a>this link</a> and see how it turns red.</p>
</div>

The first line defines how all `<a>` HTML elements should look like (blue).  
The second line defines how `<a>` should look like **when hovered** (red).

The second line targets the **same HTML elements** but _only_ when something specific happens (in this case, being hovered).

### :visited

This pseudo-class targets **links that have been visited**. By default, links are **blue** and turn **purple** when you've visited them. Google results work like that.

```css
a{ color: dodgerblue;}
a:visited{ color: rebeccapurple;}
```
{: .css}

```html
<a href="https://www.google.com">Google</a>
<a href="https://twitter.com">Twitter</a>
<a href="https://www.facebook.com">Facebook</a>
<a href="https://www.mozilla.org">Mozilla</a>
<a href="http://marksheet.io/visited.html">MarkSheet</a>
```
{: .html}

<div class="result" id="result-8211">
  <a href="https://www.google.com">Google</a>
  <a href="https://twitter.com">Twitter</a>
  <a href="https://www.facebook.com">Facebook</a>
  <a href="https://www.mozilla.org">Mozilla</a>
  <a href="/html/visited.html">MarkSheet</a>
</div>

Applying a different for visited links is often overlooked but comes in handy for users browsing a list of results. It easily helps them visualize where they have already been.

### :focus

This pseudo-class happens when an HTML element is **in focus**. This is particularly useful for HTML **inputs**.

```css
.form-input{ border: 2px solid grey; padding: 5px;}
.form-input:focus{ background: lightyellow; border-color: blue; outline: none;}
```
{: .css}

<div class="result" id="result-822">
  <input class="form-input" placeholder="First name">
</div>

The `outline: none;` rule removes the glow from the input.
{: .info}

### :first-child and :last-child

These pseudo-classes are related to the **[HTML hierarchy](/html-hierarchy.html)**. They target HTML elements depending on the **order** in which they appear in the code.

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ul>
```
{: .html}

```css
li:first-child{ background: greenyellow;}
li:last-child{ background: lightsalmon;}
```
{: .css}

<div class="result" id="result-823">
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
  </ul>
</div>

As you can see, **no CSS class** is applied to the first and last `<li>`. Their **position in the hierachy** defines whether the CSS rule is applied.

If we were to add a 5th list item, and using _the same CSS_, the styling would automatically change:

<div class="result" id="result-824">
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
    <li>Five</li>
  </ul>
</div>

### :nth-child

This pseudo-class is a more **global** version of `:first-child` and `:last-child`. With `:nth-child`, you can **calculate** which child element you want to target.

For example, if you want to target the **second** child, you would use `:nth-child(2)`:

```css
li:nth-child(2){ background: violet;}
```
{: .css}

<div class="result" id="result-825">
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
  </ul>
</div>

#### odd and even

While using a number is straightforward, the `:nth-child` comes with 2 keywords:

* `:nth-child(odd)` will target every odd element
* `:nth-child(even)` will target every even element

```css
li:nth-child(odd){ background: gold;}
```
{: .css}

<div class="result" id="result-826">
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
  </ul>
</div>

#### The n iterator

The most powerful aspect of `:nth-child` is how it can target elements based upon **calculations** by using the `n` keyword.

The `n` value increments from **zero** `0` to the **number** of child elements present.

What if you want to target every **third** element?

```css
li:nth-child(3n){ background: hotpink;}
```
{: .css}

<div class="result" id="result-827">
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
    <li>Five</li>
    <li>Six</li>
    <li>Seven</li>
  </ul>
</div>

In our case, `n` starts at **zero** and ends at **six**.

Computers start counting at **zero**. And because there are seven elements in our list, we will go up until six, because 0-1-2-3-4-5-6 represents **seven** items.
{: .info}

You can read `:nth-child(3n)` as _"Target each element whose position is dividable by 3"_. In our case, it targeted both the 3rd and 6th list items:

* `3 times 0` is zero
* `3 times 1` is the 3rd element
* `3 times 2` is the 6th element

#### n + 1

What if you want to target the 1st item and _every third item after that_?

```css
li:nth-child(3n+1){ background: limegreen;}
```
{: .css}

<div class="result" id="result-828">
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
    <li>Five</li>
    <li>Six</li>
    <li>Seven</li>
  </ul>
</div>

The `3n+1` has two parts:

* `3n` selects every **3rd** item
* `+1` **offsets** the start by 1

This is how the calculations were processed:

* `3 times 0 plus 1` is **1**
* `3 times 1 plus 1` is **4**
* `3 times 2 plus 1` is **7**

The `n` iterator is very versatile. It's hard to find the right calculation, so just test it out to find the right selection.

### Other pseudo-classes

There are [dozens of pseudo-classes available](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes), some of them for very specific states. The most used ones are the ones we've covered.

<style type="text/css">
#result-821 a{ color: blue;}
#result-821 a:hover{ color: red;}
#result-8211 a{ color: dodgerblue;}
#result-8211 a:visited{ color: rebeccapurple;}
#result-822{ padding: 1rem;}
#result-822 input{ border: 2px solid lightgrey; padding: 5px;}
#result-822 input:focus{ background: lightyellow; border-color: blue; outline: none;}
#result-823 li:first-child{ background: greenyellow;}
#result-823 li:last-child{ background: lightsalmon;}
#result-824 li:first-child{ background: greenyellow;}
#result-824 li:last-child{ background: lightsalmon;}
#result-825 li:nth-child(2){ background: violet;}
#result-826 li:nth-child(odd){ background: gold;}
#result-827 li:nth-child(3n){ background: hotpink;}
#result-828 li:nth-child(3n+1){ background: limegreen;}
</style>

