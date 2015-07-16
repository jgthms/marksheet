---
layout: post
title: "CSS <strong>Inheritance</strong>"
subtitle: "Using the HTML <strong>hierarchy</strong>"
section: css
---

Let's say we want to change the **text color** of a webpage. It would be tedious to specify a color for _every_ HTML element:

{% highlight css %}
p,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6{ color: grey;}
{% endhighlight %}

### Value propagation

The `color` value can be inherited from an **ancestor**. Considering we want to alter the _whole_ webpage, we will choose the ancestor of all HTML elements, the `body` tag:

{% highlight css %}
body{ color: grey;}
{% endhighlight %}

All child and descendant elements will **inherit** the value `grey` from their common ancestor `body`, which naturally encompasses _all_ elements.

We could also use the `html` tag.
{: .info}

### Inherited properties

Only a few CSS properties can be inherited from ancestors. They are mainly **text** properties:

* text color
* font (family, size, style, weight)
* line-height

Some HTML elements don't inherit from their ancestors. Links for example don't inherit the `color` property.
{: .info}
