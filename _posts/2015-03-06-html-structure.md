---
layout: post
title: "HTML <strong>Structure</strong>"
subtitle: "To <strong>organize</strong> the <strong>main</strong> parts of your webpage"
section: html
---

When writing HTML content like paragraphs, lists or links, you provide **meaning** to your _text_. But you might want to **group** some of these elements _together_.

For example, a blog's webpage can be divided in  **4** parts:

* a **header** that is similar on every page, and is the main navigation of the website
* a **main** content, that changes for every page: a list of articles, a single article with comments, an about page...
* a **sidebar** that links to monthly archives and categories
* a **footer** for additional links to less important pages

There are some **structural HTML elements** you can use as **containers** for other elements.

### Header

The `header` is usually the **first** HTML element in the code. It acts as an **introduction** to the webpage, with the logo, a tagline, and navigation links.

{% highlight html %}
<header>
  <p>
    <a>
      <img src="my-logo.jpg" alt="Tibitaco logo">
    </a>
    <em>A cool website</em>
  </p>
  <ul>
    <li>
      <a href="home.html">Home</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </li>
  </ul>
</header>
{% endhighlight %}

### Footer

As opposed to the `header`, the `footer` is usually the **last** element of a page, where the main navigation links are repeated and secondary ones added.

{% highlight html %}
<footer>
  <p>MarkSheet.io | Copyright 2015</p>
  <ul>
    <li>
      <a href="home.html">Home</a>
    </li>
    <li>
      <a href="about.html">About</a>
    </li>
    <li>
      <a href="contact.html">Contact</a>
    </li>
  </ul>
  <ul>
    <li>
      <a href="privacy-policy.html">Privacy Policy</a>
    </li>
    <li>
      <a href="terms-of-use.html">Terms of use</a>
    </li>
  </ul>
</footer>
{% endhighlight %}

### Main

The `main` element contains, as its name suggests, the **most important content of the page**, the one that defines the purpose of the page.

While all webpages of a website contain _common_ elements (like the header, the navigation, the footer...), the `main` element focuses on **unique** content.

For example, the article you are currently reading lies within the `main` element of this webpage, because its content is unique throughout the whole MarkSheet website.

### Aside

The `aside` element usually lives alongside the `main` and contains _additional_ information _related to_ the main content.

### Section

The `section` element allows to **group**

Sections _themselves_ don't carry a specific meaning. It's more about the _relation between its child elements_ rather than its own meaning within the overall page.

The [MarkSheet homepage](http://marksheet.io) displays 3 sections:

* the **heading** (logo, title, subtitle)
* the **introduction** (_"Short"_, _"Simple"_, _"Free"_)
* the **chapters** (_"Web"_, _"HTML"_, _"CSS"_)

They all reside within the homepage `main` element, but are divided logically to group similar content and provide more meaning to the page's structure.



