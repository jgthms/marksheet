---
layout: post
title: "CSS <strong>display</strong>"
subtitle: "Changing the <strong>type</strong> of an HTML element"
section: css
---

We've seen how there are mainly [2 types of HTML elements](/html-block-inline.html): **block-level** elements and **inline** ones. We've also mentioned a few alternatives, like **list-item** or **table-cell**.

The `display` property allows to change the _type_ of HTML element. By default, a paragraph `<p>` (a **block-level** element) will have a default `display` value of `block`, but can be rendered as an **inline** one:

{% highlight css %}
p { display: inline; }
{% endhighlight %}

### Why not use an HTML inline element, like `<span>` then?

Because you choose an HTML element for its **meaning**, not its rendering. If we've decided that a paragraph is what suited our content best, we must not change the tag _only for styling purposes_. CSS is here to take care of the styling.

In short, `display` allows to alter the **type** of an element _without_ changing its **meaning**.

Each `display` options have specific rendering behaviors:

* `block` will take up the whole width available
* `inline` will act as plain text
* `inline-block` is, as its name suggests, a compound of block and inline behavior, a _"best of both worlds"_ option
* `list-item` is similar to `block` as it takes up the whole width available, but shows an additional bullet point
* `table`, `table-row` and `table-cell` all have very specific, albeit unexpected, behavior that allow more interesting layouts

### display: block

This will turn any element into a **block** element.

This technique is often used on **links** in order to increase their clickable zone, which can be easily evaluated by setting a background color.

{% highlight css %}
.menu a { background: red; color: white; }
{% endhighlight %}

{% highlight html %}
<ul class="menu">
  <li>
    <a>Home</a>
  </li>
  <li>
    <a>Features</a>
  </li>
  <li>
    <a>Pricing</a>
  </li>
  <li>
    <a>About</a>
  </li>
</ul>
{% endhighlight %}

<div class="result">
  <ul>
    <li>
      <a style="background: red; color: white;">Home</a>
    </li>
    <li>
      <a style="background: red; color: white;">Features</a>
    </li>
    <li>
      <a style="background: red; color: white;">Pricing</a>
    </li>
    <li>
      <a style="background: red; color: white;">About</a>
    </li>
  </ul>
</div>

If we turn these links into **blocks**, we increase their target area:

{% highlight css %}
.menu a { background: red; color: white; display: block; }
{% endhighlight %}

<div class="result">
  <ul>
    <li>
      <a style="background: red; color: white; display: block;">Home</a>
    </li>
    <li>
      <a style="background: red; color: white; display: block;">Features</a>
    </li>
    <li>
      <a style="background: red; color: white; display: block;">Pricing</a>
    </li>
    <li>
      <a style="background: red; color: white; display: block;">About</a>
    </li>
  </ul>
</div>


### display: inline

This turns any element into **inline** elements, as if they were just simple **text**.

It's often used to create **horizontal navigations**, where **list items** are semantically but not visually useful.

{% highlight html %}
<ul class="menu">
  <li>
    <a>Home</a>
  </li>
  <li>
    <a>Features</a>
  </li>
  <li>
    <a>Pricing</a>
  </li>
  <li>
    <a>About</a>
  </li>
</ul>
{% endhighlight %}

<div class="result">
  <ul>
    <li>
      <a>Home</a>
    </li>
    <li>
      <a>Features</a>
    </li>
    <li>
      <a>Pricing</a>
    </li>
    <li>
      <a>About</a>
    </li>
  </ul>
</div>

{% highlight css %}
.menu li { display: inline; }
{% endhighlight %}

<div class="result">
  <ul>
    <li style="display: inline;">
      <a>Home</a>
    </li>
    <li style="display: inline;">
      <a>Features</a>
    </li>
    <li style="display: inline;">
      <a>Pricing</a>
    </li>
    <li style="display: inline;">
      <a>About</a>
    </li>
  </ul>
</div>

### display: list-item

The only HTML elements displayed as `list-item` are the (unsurprisingly) **list items** `<li>` but also the **definition descriptions** `<dd>`.

A list item is rendered with a bullet point (if in an unordered list `<ul>`) or with a incremental number (if within an ordered list `<ol>`).

Because the rendering of these bullet points and numbers varies across browsers, and is also hard to style in CSS, the `display: list-item` rule is never used. Actually, it is common for `<li>`s to be rendered as `display: block` or `display: inline`, as they are more flexible to style.

### display: none

Applying `display: none;` to an HTML element removes it from your webpage, as if it never existed in your code.

{% highlight css %}
.gone-baby-gone { display: none; }
{% endhighlight %}

{% highlight html %}
<p>Did I hear someone speaking??</p>
<p class="gone-baby-gone">Hahahahahah</p>
<p>I must be dreaming...</p>
{% endhighlight %}

<div class="result">
  <p>Did I hear someone speaking??</p>
  <p style="display: none;">Hahahahahah</p>
  <p>I must be dreaming...</p>
</div>

There are 3 paragraphs in the code, but only 2 appear, as if the 2nd one never existed.

### visibility: hidden

The CSS property `visibility` is slightly similar to `display`. Applying `visibility: hidden;` _hides_ an element from your page, but only turns it **invisible**: it still takes up the space it was supposed to.

{% highlight css %}
.hollow-man { visibility: hidden; }
{% endhighlight %}

{% highlight html %}
<p>So far away from me </p>
<p class="hollow-man">So far i just can't see</p>
<p class="hollow-man">So far away from me</p>
<p class="hollow-man">You're so far away from me</p>
<p>You're so far away...</p>
{% endhighlight %}

<div class="result">
  <p>So far away from me </p>
  <p style="visibility: hidden;">So far i just can't see</p>
  <p style="visibility: hidden;">So far away from me</p>
  <p style="visibility: hidden;">You're so far away from me</p>
  <p>You're so far away...</p>
</div>

There are 5 paragraphs in the code, only 2 appear, but the space that the hidden paragraphs were _supposed_ to take is still _there_, but you can't see them.
