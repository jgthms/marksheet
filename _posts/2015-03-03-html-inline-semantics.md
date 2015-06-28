---
layout: post
title: "<strong>Inline</strong> semantics"
subtitle: "The small parts <em>within</em> a block of text"
section: html
---

While paragraphs and lists are meant to identify whole **blocks** of text, we sometimes want to provide meaning to a word (or a few words) _within_ a text.

### Strong

For **important** words, use the `<strong>` tag:

```html
<p>
  This is <strong>important</strong> but this is not.
</p>
```
{: .html}

<div class="result">
  <p>
    This is <strong>important</strong> but this is not.
  </p>
</div>

By default, `<strong>` elements are displayed in **bold**, but keep in mind that it is only the browser's default behavior. Don't use `<strong>` _only_ to put some text in bold, but rather to give it more **importance**.

### Emphasis

For _emphasized_ words, use the `<em>` tag:

```html
<p>
  This is <em>emphasized</em> but this is not.
</p>
```
{: .html}

<div class="result">
  <p>
    This is <em>emphasized</em> but this is not.
  </p>
</div>

By default, `<em>` elements are displayed in _italic_, but keep in mind that it is only the browser's default behavior. Don't use `<em>` _only_ to put some text in italic, but rather to give it _stress emphasis_.

### Abbreviations

Abbreviations like W3C or CD can use the `<abbr>` element:

```html
<p>
  I just bought a <abbr>CD</abbr>.
</p>
```
{: .html}

You can add a `title` **attribute** to specify the abbreviation's description, which will appear by hovering the element:

```html
<p>
  I just bought a <abbr title="Compact Disc">CD</abbr>.
</p>
```
{: .html}

<div class="result">
  <p>
    I just bought a <abbr title="Compact Disc">CD</abbr>.
  </p>
</div>

### Inline quotes

The `<blockquote>` element is a **block-level** element. It has an **inline** version: `<q>`:

```html
<p>
  He said <q>“Hello World”</q> and just left.
</p>
```
{: .html}

<div class="result">
  <p>
    He said <q>“Hello World”</q> and just left.
  </p>
</div>

### Other inline elements

There are plenty of other [inline semantic elements](https://developer.mozilla.org/en/docs/Web/HTML/Element#Inline_text_semantics) to choose from, but we've covered the most common ones.

*[CD]: Compact Disc
*[W3C]: World Wide Web Consortium
