---
layout: post
title: "HTML <strong>Links</strong>"
subtitle: "The <strong>core</strong> of the Web"
section: html
---

**Links** are essential in HTML, as the Web was initially designed to be an information network of documents **linked** between each other.

The _"HyperText"_ part of HTML defines what kind of links we use: _hypertext_ links, a.k.a **hyperlinks**.

In HTML, links are **inline elements** written with the `<a>` tag.

The `href` attribute (hypertext reference) is used to define the **target** of the link (where you navigate to when you click).

{% highlight html %}
<p>
  To search for something, visit <a href="https://www.google.com">Google</a>.
</p>
{% endhighlight %}

<div class="result">
  <p>
    To search for something, visit <a href="https://www.google.com">Google</a>.
  </p>
</div>

Links are the **primary** interaction of a webpage: you navigate from one document to another by clicking on links.

There are **3** types of target you can define.

* **anchor** targets, to navigate within the _same page_
* **relative** URLs, usually to navigate within the _same website_
* **absolute** URLs, usually to navigate to _another_ website

### Anchor targets

**Anchor** target to navigate _within_ the **same** page. By prepending your href with `#`, you can target an HTML element with a specific `id` attribute.

For example, `<a href="#footer">` will navigate to the `<div id="footer">` within the same HTML document. This type of href is often used to navigate back to the top of the page.

### Relative URLs

If you want to define a link to another page of the _same_ website, you can use **relative** URLs.

But relative to what? Well, relative to the **current page**.

Let's use a simple example where the folder `my-first-website` contains 2 HTML files:

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
        <i class="fa fa-file-code-o"></i>
        contact.html
      </li>
    </ul>
  </li>
</ul>

In `home.html`, you want to define a link to `contact.html`.

As the two files are **in the same folder**, you can simply write in `home.html`:

{% highlight html %}
<p>
  Go to the <a href="contact.html">contact page</a>.
</p>
{% endhighlight %}

<div class="result">
  <p>
    Go to the <a href="contact.html">contact page</a>.
  </p>
</div>

On an actual website, the process is similar.

Let's say you have a website called `https://ireallylovecats.com` on which you have 2 webpages: `index.html` and `gallery.html`:

<ul class="files">
  <li>
    <i class="fa fa-folder-o"></i>
    ireallylovecats.com
    <ul>
      <li>
        <i class="fa fa-file-code-o"></i>
        index.html
      </li>
      <li>
        <i class="fa fa-file-code-o"></i>
        gallery.html
      </li>
    </ul>
  </li>
</ul>

In `index.html` you could write the following link:

{% highlight html %}
<p>
  Visit the <a href="gallery.html">Gallery</a>!
</p>
{% endhighlight %}

Remember: websites are hosted on **computers** just like the one you're currently using. They are simply called **"servers"** because their sole purpose is to host websites. But they still have **files** and **folders** like "regular" computers.
{: .info}

### Absolute URLs

If you wanted to share your cats gallery with a friend, you wouldn't be able to just send `gallery.html`, as this **relative** URL only works for HTML documents that are on the same **computer** or same **domain**.

You need the _complete_ URL to your HTML document: `https://ireallylovecats.com/gallery.html`.

This URL can be segmented in 3 parts:

* **protocol** `https://`
* **domain** `ireallylovecats.com`
* **file path** `gallery.html`

This **absolute URL** is **self-sufficient**: no matter where you use the link form, it contains _all_ the information required to find the correct file, on the correct domain, with the correct protocol.

You usually use absolute URLs defining a link from _your_ website to _another_ website.

In your `https://ireallylovecats.com/gallery.html` file, you could write:

{% highlight html %}
<p>
  Find more images of my cats on my <a href="https://twitter.com/ireallylovecats">Twitter account</a>!
</p>
{% endhighlight %}

### Relative or absolute links?

Let's say you want to link from the first to the second. The most direct approach is to use the absolute URL. So you add `<a href="https://ireallylovecats.com/gallery.html">Go the second page</a>` in your `index.html` file.

Because the two files are in the same directory, you could use the **relative** URL by using `<a href="first-blog-post.html">`. This is useful if you decide to move your directory: your links won't be broken because the link targets are relative to each other, as long as you move both files simultaneously and keep them in the same directory. This relative approach is particularly useful when switching domains.
