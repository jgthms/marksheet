---
layout: post
title: "CSS <strong>size</strong> shorthand <strong>wheel</strong>"
subtitle: "A <strong>circle</strong> shorthand method"
section: css
---

### Setting 4 values

When all 4 sides (top, bottom, left and right) are involved in a CSS property, that CSS property also acts as a **shorthand** property.

For example, the `padding` property can be used on its own to apply the _same_ value to all 4 sides, but also comes in 4 variations (`padding-top`, `padding-bottm`, `padding-left` and `padding-right`) to target a specific side.

{% highlight css %}
blockquote{ padding: 20px;}
/* Is equivalent to */
blockquote{ padding-top: 20px; padding-bottom: 20px; padding-left: 20px; padding-right: 20px;}
{% endhighlight %}

But where the `padding` property becomes interesting, is that it can get up to **4** values. You can thus set a _different_ value for _all_ sides at once:

{% highlight css %}
blockquote{ padding: 20px 0 10px 50px;}
{% endhighlight %}

The order is `top`, `right`, `bottom` and `left`.

### Setting 2 or 3 values

By putting 2 values, the first one will be applied for `top` and `bottom`, the second one for `right` and `left`:

{% highlight css %}
blockquote{ padding: 20px 0;}
/*
       top
       20px
left         right
 0             0
      bottom
       20px
*/
{% endhighlight %}

### How to remember the shorthand order

There's an easy way to remember which value will be applied.

Instead of focusing on the values you've entered, think about the values you **havent'**.

* if you enter 2 values (top/right), you omit setting `bottom` and `right`. Because `bottom` is the vertical counterpart of `top`, it will use `top`'s value. And because `left` is the horizontal counterpart of `right`, it will use `right`'s value.
* if you enter 3 values (top/right/bottom), you omit setting `left`. As `right`'s counterpart, it will use its value.

### Other properties that can act as "wheel" shorthands

Any property that applies to all 4 sides:

* `margin`
* `padding`
* `border-width`

#### "So `border` is a shorthand property that includes `border-width` which is another shorthand property?"

Indeed. `border` is (in that order) a shorthand for:

* `border-width`
* `border-style`
* `border-color`

However, you can **not** mix the two:

{% highlight css %}
blockquote{ border: 1px 0 solid green;}
/* Won't work */
{% endhighlight %}

But you can omit the width in `border` and set it separately:

{% highlight css %}
blockquote{ border: solid yellow; border-width: 1px 0;}
{% endhighlight %}
