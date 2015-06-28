---
layout: post
title: "HTML <strong>Hierarchy</strong>"
subtitle: "It's a big family <strong>tree</strong>"
section: html
---

An HTML document is like a big **family tree**, with parents, siblings, children, ancestors, and descendants.

It comes from the ability to **nest** HTML elements within one another.

### Nesting

Let's write a simple paragraph and enhance it by _differentiating_ parts of the text, by inserting two **inline** elements:

```html
<p>
  Sir <strong>Alex Ferguson</strong> once said about Filipo Inzaghi:<q>"That lad must have been born offside."</q>.
</p>
```
{: .html}

<div class="result"><p>Sir <strong>Alex Ferguson</strong> once said about Filipo Inzaghi: <q>"That lad must have been born offside."</q>.</p></div>

In this setup:

* the `<strong>` element gives the words "Alex Ferguson" more importance
* the `<q>` marks his quote about Inzaghi

The fact that `<strong>` is displayed in **bold** is **only the browser's default behavior**. Remember that you have to choose HTML elements according to their _meaning_, not how they look like.

In this case:

* `<p>` is the **parent** element of `<strong>` and `<q>`
* `<strong>` and `<q>` are **child** elements of `<p>`
* `<strong>` and `<q>` are **sibling** elements

### Order

How **nesting** works depends on the location of _opening_ and _closing_ tags.

Because an HTML element comprises an opening tag, a closing tag, and _everything in between_, a _child_ element must be closed **before** closing the _parent_ element.


```html
<!-- This is INVALID code! :-( -->
<p>
  This HTML code won't work because I the "strong" tag is opened here <strong>but is only closed after the paragraph.
</p></strong>
```
{: .html}

Because the `<strong>` was opened _after_ the `<p>` (and is thus considered a **child** of `<p>`), the `<strong>` element must be closed **before** its parent `<p>`. 

```html
<!-- This is valid code. :-) -->
<p>
  This HTML code will work because I the "strong" tag is opened <strong>and closed</strong> properly.
</p>
```
{: .html}

### Depth

Because child elements can themselves contain _other_ child elements, it's possible to write a **deeper hierarchy** within an HTML document.

Our above paragraph could be part of a blog **article**:

```html
<article>
  <h1>Famous football quotes</h1>
  <p>
    Sir <strong>Alex Ferguson</strong> once said about Filipo Inzaghi:<q>"That lad must have been born offside"</q>.
  </p>
  <p>
    When criticized by John Carew, <strong>Zlatan Ibrahimovic</strong> replied: <q>"What Carew does with a football, I can do with an orange"</q>.
  </p>
  <p>
    <strong>George Best</strong> said <q>"I spent a lot of money on booze, birds and fast cars. The rest I just squandered."</q> when asked about his lifestyle.
  </p>
</article>
```
{: .html}

<div class="result">
  <article>
    <h1>Famous football quotes</h1>
    <p>
      Sir <strong>Alex Ferguson</strong> once said about Filipo Inzaghi:<q>"That lad must have been born offside"</q>.
    </p>
    <p>
      When criticized by John Carew, <strong>Zlatan Ibrahimovic</strong> replied: <q>"What Carew does with a football, I can do with an orange"</q>.
    </p>
    <p>
      <strong>George Best</strong> replied <q>"I spent a lot of money on booze, birds and fast cars. The rest I just squandered"</q> when asked about his lifestyle.
    </p>
  </article>
</div>

In this setup:

* `<article>` is the **ancestor** of _every_ other element
* `<article>` is the **parent** of the `<h1>` and the 3 `<p>`
* `<h1>` and the 3 `<p>` are **siblings**
* each `<p>` is the **parent** of the `<strong>` and `<q>` they contain
* every `<h1>`, `<p>`, `<strong>` and `<q>` are all **descendants** of `<article>`

The family tree analogy still applies when **traversing** several layers of HTML nesting:

* a **descendant** of element X is any element _contained_ within X
* a **child** is just a _direct_ descendant
* an **ancestor** of element Y is any element 
* a **descendant** of element X is any element _contained_ within X
* the **parent** is just the first _direct_ ancestor

### Block and inline nesting

**Block** elements can contain either block or inline elements.

However, **inline** elements can only contain other _inline_ elements [^1].

```html
<!-- This is INVALID code! :-( -->
<strong>
  <p>You can't put a paragraph inside a "strong" tag.
</strong>
```
{: .html}

Just remember ancestor/descendant, parent/child, and siblings. This hierarchy will be useful in CSS.

[^1]: the link element `<a>` is the only exception.
