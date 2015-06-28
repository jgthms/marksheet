---
layout: post
title: "HTML <strong>Semantics</strong>"
subtitle: "HTML is about <strong>meaning</strong>"
section: html
---

The purpose of HTML tags is to deliver **meaning** to a document. Don't be concerned about how your webpage looks like. Focus on the significance of each tag you'll use.

Depending on the content you're writing, you can choose the appropriate element that matches the meaning of your text.

This **range** of elements is wide enough to both accomodate for **general** purpose matter (like paragraphs or lists), and more **specific** content like `<output>` (to display the result of a calculation) or `<progress>` (to display the progress of a task).

### Structure elements: organizing your page

Structure elements allow you to organize the **main parts** of your page. They usually contain other HTML elements.

Here's what a typical webpage could include:

* `<header>` as the **first** element of the page, that can include the logo and the tagline.
* `<nav>` as a list of **links** that go to the different pages of the website.
* `<h1>` as the title of the page.
* `<article>` as the main content of the page, like a blog post.
* `<footer>` as the **last** element of the page, located at the bottom.

### Text elements: defining your content

Inside these structure elements, you usually find **text** elements meant to define the **purpose** of your content.

You'll mainly use:

* `<p>` for paragraphs
* `<ul>` for (unordered) lists
* `<ol>` for (unordered) lists
* `<li>` for individual list items
* `<blockquote>` for quotes

### Inline elements: distinguishing your text

Because text elements can be long but with varied content, **inline** elements allow to **distinguish** parts of your text.

There are a lot of inline elements available, but you'll usually come across the following:

<ul>
  <li><code>&lt;strong&gt;</code> for <strong>important</strong> words</li>
  <li><code>&lt;em&gt;</code> for <em>emphasized</em> words</li>
  <li><code>&lt;a&gt;</code> for <a href="#">links</a></li>
  <li><code>&lt;small&gt;</code> for <small>less important</small> words</li>
  <li><code>&lt;abbr&gt;</code> for abbreviations like W3C</li>
</ul>

<aside class="comments">
  Just by reading this HTML code, you can easily understand what each <strong>HTML element</strong> means.
</aside>

```html
<article>
  <h1>Main title of the page</h1>
  <h2>A subtitle</h2>
  <p>
    Something something an other stuff and some <em>emphasis</em> and even <strong>important</strong> words.
  </p>
  <p>
    Another paragraph.
  </p>
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
  <blockquote>
    Once said
  </blockquote>
</article>
<aside>
  <h3>My latest posts</h3>
  <ul>
    <li><a href="#">One</a></li>
    <li><a href="#">One</a></li>
    <li><a href="#">One</a></li>
  </ul>
</aside>
```
{: .html}


### Generic elements

When apparently no _semantic_ element seems suited for your content but you still want to insert an HTML element (either for grouping or styling purposes), you can settle for one of the two **generic** elements:

* `<div>` for block-level elements
* `<span>` for inline elements

Although these HTML elements don't actually _mean_ anything, they will come in handy when we'll start using CSS.

### Don't overthink semantics

There are about [100 semantic HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) to choose from. That's a _lot_. It can be overwhelming to go through that list and choose the _appropriate_ element for your content.

But don't spend too much time worrying about that. If you stick to the following list for now, you'll be well enough:

<div class="table">
  <table>
    <tr>
      <th>Structure</th>
      <th>Text</th>
      <th>Inline</th>
    </tr>
    <tr>
      <td>
        <code>header</code><br>
        <code>h1</code><br>
        <code>h2</code><br>
        <code>h3</code><br>
        <code>nav</code><br>
        <code>footer</code><br>
        <code>article</code><br>
        <code>section</code>
      </td>
      <td>
        <code>p</code><br>
        <code>ul</code><br>
        <code>ol</code><br>
        <code>li</code><br>
        <code>blockquote</code>
      </td>
      <td>
        <code>a</code><br>
        <code>strong</code><br>
        <code>em</code><br>
        <code>q</code><br>
        <code>abbr</code><br>
        <code>small</code>
      </td>
    </tr>
  </table>
</div>

*[W3C]: World Wide Web Consortium