---
layout: post
title: "CSS <strong>Priority</strong>"
subtitle: "When several rules <strong>collide</strong>"
section: css
---

An HTML element can be targeted by **multiple CSS rules**. Let's use a simple paragraph for example:

{% highlight html %}
<p class="message" id="introduction">
  MarkSheet is a free HTML and CSS tutorial.
</p>
{% endhighlight %}

We can alter this paragraph just by using its **tag name**:

{% highlight css %}
p{ color: blue;}
{% endhighlight %}

Or we can use its **class name**:

{% highlight css %}
.message{ color: green;}
{% endhighlight %}

Or we can use its **id**:

{% highlight css %}
#introduction{ color: red;}
{% endhighlight %}

Because the browser can only pick **one color** to apply on this paragraph, it will have to decide which CSS rule takes **priority** over other ones. This is what CSS priority (or CSS _specificity_ is about).

In our example, the paragraph will be **red** because an `#id` selector is more _specific_ and thus more **important** than other selectors.

### Order of CSS rules

If similar selectors are in your CSS, the last one defined will take priority.

{% highlight css %}
p{ color: green;}
p{ color: red;}
/* Paragraphs will be red */
{% endhighlight %}

### The 100 measure

One quick way to figure out how "powerful" a CSS rule is, is by measuring the specificty of the **selectors**:

* `#id` selectors are worth 100
* `.class` selectors are worth 10
* `tag` selectors are worth 1

The selector with the highest "score" will prevail, _no matter the order in which the CSS rules appear_.

{% highlight css %}
#introduction{ color: red;}
.message{ color: green;}
p{ color: blue;}
{% endhighlight %}

{% highlight html %}
<p class="message" id="introduction">
  MarkSheet is a free HTML and CSS tutorial.
</p>
{% endhighlight %}

<div class="result">
  <p style="color: red;">
    MarkSheet is a free HTML and CSS tutorial.
  </p>
</div>

The `#introduction{ color: red;}` rule is more _specific_ than the others because ids must be **unique** throughout a webpage, and can thus only target **one** element.

`.message{ color: green;}` can target _any_ HTML element with a `class="message"` attribute, and is consequently less specific. Same goes for `p{ color: blue;}` which can target _any_ HTML paragraph.

### How to avoid conflicts

While writing your CSS, it's easy to write **conflicting rules**, where the same _property_ is applied several times.

To avoid that:

* only use **classes**: use `.introduction` instead of `#introduction`, even if that element only appears once in your webpage
* avoid applying **multiple classes** on a single HTML element: don't write `<p class="big red important">` but rather `<p class="title">` which is more semantically descriptive
* don't use **inline styles** like `<div style="background: blue;">`
