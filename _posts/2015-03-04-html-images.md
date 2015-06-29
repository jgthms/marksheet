---
layout: post
title: "HTML <strong>Images</strong>"
subtitle: "The major <strong>media</strong> on the Web"
section: html
---

**Images** are the first non-textual content to have appeared on the Web. Most image formats you can find on your computer can also be displayed in your browser: `.jpg`, `.gif` (animated or not), `.png` (transparent or not), `.bmp`...

### Syntax

**Images** use the `<img>` element, which is a **self-closing** element (it only has an opening tag).

The `src` attribute defines the **location** of the image. As with links, you can either use _relative_ or _absolute_ URLs.

<ul class="files">
  <li>
    <i class="fa fa-folder-o"></i>
    my-first-website
    <ul>
      <li>
        <i class="fa fa-file-code-o"></i>
        home.html
      </li>
      <li>
        <i class="fa fa-image"></i>
        soyuz-spacecraft.jpg
      </li>
    </ul>
  </li>
</ul>

{% highlight html %}
<p>
  Look at this spacecraft landing!
  <br>
  <img src="soyuz-spacecraft.jpg">
</p>
{% endhighlight %}

<div class="result">
  <p>
    Look at this spacecraft landing!
    <br>
    <img src="/images/soyuz-spacecraft.jpg">
  </p>
</div>

### Dimensions

Every image has **2 dimensions**: a **width** and a **height**. The previously shown spacecraft image is 394 pixels wide and 284 high.

When inserting an image in HTML, you **don't need to specify its dimensions**: the browser will automatically display it in **full size**.

If you want to alter the dimensions of an image, although it is possible in HTML, it's recommended to use CSS, as we'll see in later chapters.
{: .info}

### Block or inline?

Although an image has a width and a height, and is visually a big rectangle, an image is **not an HTML block element** but actually an **inline element**.

This is due to the `<img>` element being a **self-closing** element: it can't technically contain any other HTML element, and is thus considered an inline element, like `<a>`, `<strong>` or `<em>`.

This inline behavior can have unexpected results:

{% highlight html %}
<p>
  There is a frog
  <img src="frog.jpg">
  in the middle of the paragraph!
</p>
{% endhighlight %}

<div class="result">
  <p>
    There is a frog
    <img src="/images/frog.jpg">
    in the middle of the paragraph!
  </p>
</div>

Because in HTML the **content is king**, images will be displayed regardless of the quirky layout it might induce, and thoughtfully so.