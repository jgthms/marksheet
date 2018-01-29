---
layout: post
title: "CSS <strong>font properties</strong>"
subtitle: "For <strong>bold</strong> and <em>italic</em> text"
section: css
---

### font-size

We've already covered **[CSS size units](/css-size-units.html)**, which are used to set the font size among other things.

{% highlight css %}
p{ font-size: 16px;}
{% endhighlight %}

Bear in mind that setting a font size of `16px` won't make each letter `16px` high. The _actual_ size of each letter depends on the font-family used.

### font-style

This property can make your text _italic_:

{% highlight css %}
h2{ font-style: italic;}
{% endhighlight %}

Default value: `font-style: normal;`.

Another possible value is `oblique` but is never used.

### font-weight

This property can make your text **bold**:

{% highlight css %}
h2{ font-weight: bold;}
{% endhighlight %}

Default value: `font-weight: normal;`.

Depending on the `font-family` used, there is a range of font weights available, from `100` to `900`:

{% highlight css %}
font-weight: 100; /* Thin */
font-weight: 200; /* Extra Light */
font-weight: 300; /* Light */
font-weight: 400; /* Which is like font-weight: normal; */
font-weight: 500; /* Medium */
font-weight: 600; /* Semi Bold */
font-weight: 700; /* Which is like font-weight: bold; */
font-weight: 800; /* Extra Bold */
font-weight: 900; /* Ultra Bold */
{% endhighlight %}

Very few fonts provide all 9 weights. The [Exo font](https://www.google.com/fonts/specimen/Exo) is one of them.

You'll mostly find 400 (normal) and 700 (bold), and sometimes 300 (light) and 500 (medium).

### font-variant

This property turn your text into small caps:

{% highlight css %}
h2{ font-variant: small-caps;}
{% endhighlight %}

Default value: `font-variant: normal;`.

It's not a widely used property.
