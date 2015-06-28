---
layout: post
title: "HTML <strong>Block</strong> and <strong>Inline</strong>"
subtitle: "HTML has 2 main <strong>types</strong> of elements"
section: html
---

In HTML, you'll mainly come across 2 types of HTML elements:

* **block** elements like:

    * paragraphs `<p>`
    * lists: unordered (with bullet points) `<ul>` or ordered lists (with numbers) `<ol>`
    * headings: from 1st level `<h1>` to 6th level headings `<h6>`
    * articles `<article>`
    * sections `<section>`
    * long quotes `<blockquote>`

* **inline** elements like:

    * links `<a>`
    * emphasised words `<em>`
    * important words `<strong>`
    * short quotes `<q>`
    * abbreviations `<abbr>`

**Block** elements are meant to **structure** the main parts of your page, by dividing your content in _coherent_ blocks.

**Inline** elements are meant to differentiate _part_ of a text, to give it a particular function or meaning. Inline elements usually comprise a single or few words.


```html
<p>Have you seen this <a href="http://www.youtube.com">amazing video</a> on YouTube?</p>
```
{: .html}

### Opening and closing tags

**All** block-level elements have an opening and closing tags.

As a result, self-enclosing elements are **inline** elements, simply because their syntax don't allow them to contain any other HTML element.

<div class="table">
  <table>
    <tr>
      <th class="empty"></th>
      <th>Have opening and closing tags</th>
      <th>Self-enclosing</th>
    </tr>
    <tr>
      <th>Block elements</th>
      <td>
        <code>&lt;p&gt;</code>
        <code>&lt;/p&gt;</code>
        <br>
        <code>&lt;ul&gt;</code>
        <code>&lt;/ul&gt;</code>
        <br>
        <code>&lt;ol&gt;</code>
        <code>&lt;/ol&gt;</code>
      </td>
      <td>
        <strong>Impossible</strong>
      </td>
    </tr>
    <tr>
      <th>Inline elements</th>
      <td>
        <code>&lt;a&gt;</code>
        <code>&lt;/a&gt;</code>
        <br>
        <code>&lt;strong&gt;</code>
        <code>&lt;/strong&gt;</code>
        <br>
        <code>&lt;em&gt;</code>
        <code>&lt;/em&gt;</code>
      </td>
      <td>
        <code>&lt;input&gt;</code>
        <br>
        <code>&lt;br&gt;</code>
        <br>
        <code>&lt;img&gt;</code>
      </td>
    </tr>
  </table>
</div>

### Other types of HTML elements

There are several exceptions to the block/inline elements, but the ones you will most often encounter are:

* **list items** for the `<li>`
* **table**, **table rows**, **table cells** for `<table>`, `<tr>` and `<td>` respectively
