---
layout: post
title: "A <strong>valid</strong> HTML document"
subtitle: "Some boilerplate"
section: html
---

Up until now, we've been looking at _isolated_ snippets of HTML code. But an **HTML document** (or webpage, it means the same thing) requires a specific structure in order to be **valid**.

Why do we care about _validating_ an HTML document?

* **correct**: a valid document is _correctly displayed_ by the browser
* **debugging**: invalid HTML code can trigger bugs hard to target
* **maintenance**: a valid document is easier to _update_ later, even by someone else

### Doctype

The first information to provide is the _type_ of HTML document we're writing: the **Doctype**.

Think of the doctype as the version of a car throughout the years: a Ford Fiesta bought in 1986 was a Fiesta 2. If you buy one today, it's a Fiesta 7.

There used to be multiple versions of HTML coexisting (XHTML and HTML 4.01 have been competing standards). Nowadays, **HTML 5** is the norm.

To tell the browser that the HTML document is an HTML 5, just start your document with the following line:

```html
<!DOCTYPE html>
```
{: .html}

That's it. Just set it and forget it.

You may wonder why this HTML 5 doctype doesn't mention the number "5". The W3C thought the previous doctype definitions were too confusing and took the opportunity to simplify it by removing any mention of the HTML version.
{: .info}

### The <html> element

Apart from the doctype line, **all** your HTML document must be wrapped inside an `<html>` element:

```html
<!DOCTYPE html>
<html>
  <!-- The rest of your HTML code is here -->
</html>
```
{: .html}

The `<html>` is technically the **ancestor** of all HTML elements.

### <head>

The same way attributes carry additional information for an HTML element, the `<head>` element carries additional information for the _whole_ webpage.

For example, the **title** of the page (displayed on the tab) is located in the `<head>`:

```html
<head>
  <title>My fabulous blog</title>
</head>
```
{: .html}

Other HTML elements can appear in the `<head>`, and _only_ in the `<head>`:

* `<link>`
* `<meta>`
* `<style>`

### <body>

While the `<head>` only contains metadata not meant to be displayed anywhere (apart from the `<title>`), the `<body>` element is where we write all our content. Everything _inside_ the `<body>` will be **displayed** in the browser window.

### A complete valid HTML document

Combining all these requirements, we can write a simple and valid HTML document:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>MarkSheet</title>
    <meta name="description" content="A simple HTML and CSS tutorial">
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>
```
{: .html}

If you view this example in your browser, you'll see that:

* _"MarkSheet"_ is written on the browser tab
* _"Hello World!"_ is the only text displayed in the window, because it's the only content _within_ the `<body>`

<p>The <abbr title="World Wide Web Consortium">W3C</abbr> provides a <a href="http://validator.w3.org/#validate_by_input">Markup Validation Service</a> to check any HTML document for errors and warnings.</p>