---
layout: post
title: "CSS <strong>font</strong> shorthand"
subtitle: "A <strong>shortcut</strong> for several font properties"
section: css
---

In CSS, some properties can be **grouped** together under another property, to save time and space. The `font` property regroups (in this particular order):

* `font-style`
* `font-variant`
* `font-weight`
* `font-size`
* `line-height`
* `font-family`

You can thus define 6 properties through a single one:

{% highlight css %}
body{ font: italic small-caps bold 16px/1.5 Arial, sans-serif;}
{% endhighlight %}

They have to be written in this particular order and there must be a slash `/` between the `font-size` and the `line-height`.

Although I've defined all 6 properties, only the `font-size` and `font-family` are mandatory. You can thus omit to define the other properties if you intend to keep their **default** values:

{% highlight css %}
body{ font: bold 16px/1.5 Arial, sans-serif;}
{% endhighlight %}

Because `font-style` and `font-variant` have not been defined, they'll use their default value `normal`.
{: .info}

Beware! If you've previously defined one of the font properties and use the `font` shorthand afterwards, it will **override** the previously defined values.

{% highlight css %}
body{ font-size: 16px; line-height: 1.5;}
ul{ font: 14px Georgia, serif;}
{% endhighlight %}

In the `font` shorthand, the `line-height` has not been defined, and will lose its ancestor's value of `1.5` and will revert to its default value `medium` (which is usually `1.2`).
{: .info}

Other shorthand properties exist, like `background`, `border` and `margin`.
