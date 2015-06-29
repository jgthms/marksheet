---
layout: post
title: "<strong>Why</strong> CSS exists"
subtitle: "<strong>Separating</strong> content and styling"
section: css
---

As the Web grew in popularity in the 90s, the intent to apply a specific design to a website grew as well. Web developers relied upon specific HTML tags to enhance webpages:

* `<basefont>` defined a font for a whole HTML document
* `<font>` defined a typeface, a color, and a size for the text it contains
* `<center>` horizontally centered all its content
* `<big>` increased the size of the text
* `<strike>` rendered text with a strikethrough

Several HTML attributes could also be used:

* `bgcolor` defined a background color on the element
* `text` defined the text color
* several `margin` attributes could be used to add space on any side of the element

### Why avoid tables

But most of all, in order to create columns, visually align elements, and generally position elements relatively to each other, Web developers used the `<table>` element to design their webpages because it naturally provided a visual **grid**:

{% highlight html %}
<table>
  <thead>
    <tr>
      <th>Logo</th>
      <th colspan="2">Tagline</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th colspan="3">Copyright 2015</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>Left menu</td>
      <td>Main content</td>
      <td>Right sidebar</td>
    </tr>
  </tbody>
</table>
{% endhighlight %}

This approach was cumbersome for several reasons:

* HTML tables are **verbose**: they require a lot of boilerplate code
* the markup was **semantically wrong**: tables should be used for multidimensional data
* changing the layout required to change the markup: if we wanted to move the left column to the right, we had to **modify the HTML structure**
* tables were prone to **syntax errors**: rows and cells need to be ordered and nested in a specific way to be valid
* the markup was **unreadable**: tables were nested within tables to provide additional columns _within_ columns

That is why using tables _for layout purposes_ was slowly abandoned, and CSS was used instead.

### What CSS is

**CSS** stands for **C**ascading **S**tyle **S**heets. Its purpose is to _style_ markup languages (like HTML or XML). Therefore, CSS is worthless on its own, unless associated with an HTML document.

CSS brings an HTML document to **life**, by choosing fonts, applying colors, defining margins, positioning elements, animating interactions, and much more.

### How CSS works

How CSS works is by **selecting** an HTML element (like a paragraph), choosing a **property** to alter (like the color), and applying a certain **value** (like red):

{% highlight css %}
p{ color: red;}
{% endhighlight %}

The word _"Style"_ can be deceiving. You might think CSS is only used to change the text's color, size, and font. But CSS is able to define an HTML document's **layout**, by defining heights, widths, inner and outer margins, positions, columns...
{: .info}

### Where do I write CSS?

#### CSS as an attribute

You can write CSS directly on an HTML elements, by using the `style` attribute:

{% highlight html %}
<p style="color: red;">This text is important.</p>
{% endhighlight %}

#### CSS in the <head>

You can use a `<style>` tag in the `<head>` of your HTML document:

{% highlight html %}
<html>
  <head>
    <title>Hello World</title>
    <style type="text/css">
      p{ color: red;}
    </style>
  </head>
  <body>
    <p>This paragraph will be red.</p>
  </body>
</html>
{% endhighlight %}

#### CSS in a separate file

You can write your CSS in a separate file with a `.css` extension, and then link it to your HTML by using the `<link>` HTML tag.

{% highlight css %}
p{ color: red;}
{% endhighlight %}

{% highlight html %}
<html>
  <head>
    <title>Hello World</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <p>This paragraph will be red.</p>
  </body>
</html>
{% endhighlight %}

It is the HTML document who "calls" the CSS file, in this case a file called `style.css` located in the same folder as the HTML file.

This **3rd method** of using a separate CSS file is **preferred**.

### Why not style directly in the HTML?

Because we want to separate the **content** (HTML) from its **presentation** (CSS).

If you want to visualize the purpose of this distinction, head towards the wonderful [CSS Zen Garden](http://www.csszengarden.com/): each design uses the _exact_ same HTML but a _different_ CSS each time.

It makes **maintenance** easier as well: the same CSS file can be used for a whole website. It provides **flexiblity**: focus on the content on one side, the styling on the other. SEO purposes, different concerns.
