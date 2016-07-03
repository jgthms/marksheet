---
layout: post
title: "CSS <strong>Syntax</strong>"
subtitle: "who { what: how; }"
section: css
---

The purpose of CSS is to define the layout _and_ styling of your HTML elements. The syntax is very simple:

{% highlight css %}
/* A CSS rule */
selector { property: value; }
{% endhighlight %}

You can read that as:

{% highlight css %}
who { what: how; }
{% endhighlight %}

CSS is a 3-part process:

* the **selector** defines _who_ is targeted, which HTML element(s)
* the **property** defines _what_ charateristic to alter
* the **value** defines _how_ to alter that charateristic

This whole block (selector/property/value) is a **CSS rule**.

### Quick example

Let's say you want to change the color of all your **blockquotes**.

{% highlight html %}
<blockquote>Something something</blockquote>
{% endhighlight %}

Focus on the **tag name** (and forget about the angle brackets <> and the text). In our case, all that remains is _"blockquote"_. There's a direct relation between the tag name and the selector.

Let's use that in our CSS as a **selector**, and let's apply some styling:

{% highlight css %}
blockquote { background: lightgreen; }
{% endhighlight %}

Interesting. But now, the text color doesn't really match the background color. Let's improve that:

{% highlight css %}
blockquote {
  background: lightgreen;
  color: darkgreen;
}
{% endhighlight %}

So 2 things happened:

* we added a _second_ property/value pair, while keeping only _one_ selector: you can set as many properties as you want for any set of selectors
* we put each property/value pair on its _own line_: like in HTML, the **whitespace** isn't important. It's the special characters `{}` `:` and `;` that matter. As a result, you can format your CSS as you wish, to make it more readable, as long as its syntax remains valid.

The `<blockquote>` HTML tag is a **block** element. It has an **inline** counterpart: `<q>`. As they both serve the same purpose (but in different contexts), we'd like to style them identically. We could copy-paste the CSS rule and just change the selector, but there is as you would have guessed, a quicker way:

{% highlight css %}
q,
blockquote {
  background: lightgreen;
  color: darkgreen;
}
{% endhighlight %}

Now we have 2 selectors and 2 properties. We consequently have a _set_ of selectors and a _set_ of properties (with their respective values).

We can have multiple selectors, multiple properties, and sometimes (but rarely) multiple values.
{: .info}

### Comments

As in HTML, it can be handy to write CSS comments:

{% highlight css %}
/* This is a CSS comment */
q,
blockquote {
  background: lightgreen;
  color: darkgreen;
}
/*
Comments are only meant to be read by humans
and won't be parsed by the computer
*/
{% endhighlight %}
