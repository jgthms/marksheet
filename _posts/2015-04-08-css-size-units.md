---
layout: post
title: "CSS <strong>Size</strong> units"
subtitle: "Sizing for <strong>content</strong> and <strong>space</strong>"
section: css
---

There many CSS properties that require **size units**:

* `font-size` defines the size of the text
* `border-width` defines the weight of element borders
* `margin` defines the spacing between elements
* `left/right/top/bottom` allows to position and move elements

The most used units are:

* `px` for pixels
* `%` for percentage
* `em` for sizing relative to the parent's `font-size` value.

### Pixels

Because computer screens use pixels to display the content, it is the **most common size unit in CSS**.

It can be used to fix the **width** of an element:

{% highlight css %}
body{ width: 400px;}
{% endhighlight %}

Or set the **text size**:

{% highlight css %}
body{ font-size: 20px;}
{% endhighlight %}

Pixels in CSS are straightforward because they define **absolute values**: they are not affected by other inherited CSS properties.

They are also widely used for **positioning** and **spacing** purposes.

### Percentages

Percentages are **relative units**: they rely upon the element's parent and/or ancestor.

For example, block-level elements like paragraphs naturally take up the **whole width available**. The following CSS rule will resize them to **half** of the width available.

{% highlight css %}
p{ width: 50%;}
{% endhighlight %}

Percentages can help set other CSS properties, like text size:

{% highlight css %}
strong{ font-size: 150%;}
{% endhighlight %}

{% highlight html %}
<p>There are <strong>important</strong> challenges ahead of us.</p>
{% endhighlight %}

<div class="result">
  <p>There are <strong style="font-size: 150%;">important</strong> challenges ahead of us.</p>
</div>

### Em

`em` is a **relative** unit: it depends upon the value of the element's `font-size`.

For example, if the parent has a font-size of `20px` and you apply `font-size: 0.8em` to a child element, this child element will render a font-size of `16px`.

Don't confuse the `em` CSS size unit and the `em` CSS selector, which targets `<em>` HTML elements
{: .info}

The `em` unit is interesting as you define font sizes of HTML elements _relative_ to one another. To design a pleasing and easy to read webpage, you need consistent visual depth. For example, you want your `<h1>` to be twice as big as your body text, your `<h2>` only 1.5 times as big, and your sidebar slightly smaller. This could easily be achieved in CSS:

{% highlight css %}
body{ font-size: 16px;}
h1{ font-size: 2em;}        /* = 32px */
h2{ font-size: 1.5em;}      /* = 24px */
aside{ font-size: 0.75em;}  /* = 12px */
{% endhighlight %}

If you decide to change the size of your body text, the relative sizes of your headings and sidebar will **change accordingly**, and your webpage will remain **visually balanced**.

By just changing one value, all other values are altered:

{% highlight css %}
body{ font-size: 20px;}
h1{ font-size: 2em;}        /* = 40px */
h2{ font-size: 1.5em;}      /* = 30px */
aside{ font-size: 0.75em;}  /* = 16px */
{% endhighlight %}

### Rem

The `rem` unit is similar to `em`, but instead of depending upon the _parent's_ value, it relies upon the **root element's** value, which is the `<html>` element.

{% highlight css %}
html{ font-size: 18px;}
body{ font-size: 1rem;}     /* = 18px */
h1{ font-size: 2rem;}       /* = 36px */
h2{ font-size: 1.5rem;}     /* = 27px */
{% endhighlight %}

The difference between `rem` and `em` is that `rem` values are **fixed** while `em` values can _multiply_ between each other.

If you set your `html{ font-size: 18px;}`:

* `2rem` will always be equal to `36px`, no matter where you use in your CSS
* `2em` will always be equal to **double** the parent's `font-size`, so not necessarily `36px`

Quick example where `2em` is different from `2rem`:

{% highlight css %}
html{ font-size: 20px;}
p{ font-size: 0.8rem;}        /* = 16px */
p span{ font-size: 2em;}      /* = 16px * 2 = 32px */
p strong{ font-size: 2rem;}   /* = 20px * 2 = 40px */
{% endhighlight %}

The `span` rely upon the `p` font-size value while the `strong` rely upon the `html` font-size value.

### Which unit to use?

I'd recommend **pixels** to start with: as they're absolute values, they aren't affected by the element's context. They are straightforward, allow to set the text size, image dimensions, border width, position coordinates...

**Percentage** and **em** values can be used alongside pixels, for relative text sizes especially.
