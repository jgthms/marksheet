---
layout: post
title: "HTML <strong>Formatting</strong>"
subtitle: "When <strong>whitespace</strong> doesn't matter"
section: html
---

There is a difference between what is **written** in your HTML code, and what is **displayed** in the browser.

As we've already seen, HTML **tags** like `<p>` are only _read_ by the browser (to know what _kind_ of content is written), but are **not displayed** by the browser.

We've also seen how it's possible to write HTML **comments** in your code, to help the human reading the code, without having these comments being displayed by the browser.

Another kind of written code _ignored_ by the browser is **whitespace**, which includes:

* line-breaks
* empty lines
* tabulations (or indentation)

### Line-breaks

Line-breaks and empty lines (which are a succession of line-breaks) in HTML code are **ignored** by the browser. They only account for a **single** space.

{% highlight html %}
<blockquote>
The original idea of the web was that it should be a collaborative


space


where you can communicate through sharing information.
</blockquote>
{% endhighlight %}

<div class="result">
  <blockquote>
  The original idea of the web was that it should be a collaborative space where you can communicate through sharing information.
  </blockquote>
</div>

In order to actually **force** a line-break, you need to use the `<br>` HTML element:

{% highlight html %}
<p>At its best, life is completely<br>unpredictable.</p>
{% endhighlight %}

<div class="result">
  <p>At its best, life is completely<br>unpredictable.</p>
</div>

### Tabulations

A **tabulation** is a special character obtained by pressing the _"Tab"_ key. It usually moves the cursor to the next tab stop, but sometimes is converted to 2 spaces.

Anyway, like a regular space, a tabulation is **invisible**. It's also ignored by the browser:

{% highlight html %}
<p>
  Let's push      this text
  with tabulations.
</p>
{% endhighlight %}

<div class="result">
  <p>
    Let's push      this text
    with tabulations.
  </p>
</div>

If you want to add space _before_ a word, you'll have to use CSS, which we'll cover in the next chapter.

If you want to **close** an HTML element, you first have to close all its _children_ elements.
{: .info}

### Tree format

As HTML elements can be nested within each other, you have to keep track of the **order** in which they have been opened, as it will affect the order in which they are closed.

{% highlight html %}
<article><p>This code is writing on a <strong>single</strong> line.</p></article>
{% endhighlight %}

<div class="result">
  <article><p>This code is writing on a <strong>single</strong> line.</p></article>
</div>

As it can be hard to keep track of the order in which HTML elements have been opened, it is recommended to write HTML in a **tree format**:

{% highlight html %}
<article>
  <p>
    This code is written on
    <strong>multiple</strong>
    lines but will be nevertheless
    be displayed on a
    <em>single</em>
    one.
  </p>
</article>
{% endhighlight %}

<div class="result">
  <article>
    <p>
      This code is written on
      <strong>multiple</strong>
      lines but will be nevertheless
      be displayed on a
      <em>single</em>
      one.
    </p>
  </article>
</div>

The tree format allows to _visually_ replicate the **nesting levels** of your HTML code. It's thus easy to see that:

* `<article>` is the **ancestor**
* `<p>` is the **parent** of `<strong>` and `<em>`
* `<strong>` and `<em>` are **siblings**

### Write HTML for you to read

Tabulations, empty lines, successive spaces, and line-breaks, are dismissed by the computer, and are all converted into a **single space**.

An HTML document is both written and read by a human, but only _read_ by a computer. Considering tabulations, spaces and line-breaks don't affect the way a browser will read and subsequently _display_ your webpage, you may as well format your document in the most readable way for **you**.

There aren't specific rules concerning HTML formatting, but there are implicit **conventions**, specifically:

* use **tabulations** to help visualize how HTML elements are **nested**
* put opening and closing tags of block-level elements on their **own line**
* write inline elements on one line (including opening and closing tags)
