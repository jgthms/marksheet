---
layout: post
title: "CSS <strong>border</strong>"
subtitle: "The <strong>edges</strong> of the rectangle"
section: css
---

Because an HTML element is rendered as a rectangle, it can have up to **4 borders**: top, bottom, left and right. You can set a border on all sides at once, or on each side individually.

### Border types and location

A CSS border has 3 properties:

* `border-color` defined by using a [color unit](css-color-units.html)
* `border-style` can be solid, dashed, dotted...
* `border-width` defined by using a [size unit](css-size-units.html)

It also has 4 possible sides:

* `border-top`
* `border-bottom`
* `border-left`
* `border-right`

{% highlight css %}
blockquote { border-color: yellow; border-style: solid; border-width: 1px; }
{% endhighlight %}

The shorthand property `border` allows to define all 3 properties at once:

{% highlight css %}
blockquote { border: 1px solid yellow; }
{% endhighlight %}

### Single border

If you want to set a border on only one of the four sides, you need to include the border's **position** in the CSS property. For example, for a bottom border, you can write:

{% highlight css %}
blockquote { border-bottom-color: yellow; border-bottom-style: solid; border-bottom-width: 1px; }
{% endhighlight %}

As for the `border` property, _each_ side has its shorthand version:

{% highlight css %}
blockquote { border-bottom: 1px solid yellow; }
{% endhighlight %}

#### What if I want 3 borders? Do I have to set them individually?

As you would have guessed, the quickest way to have 3 borders is to set all 4 of them and then remove the one you don't want:

{% highlight css %}
blockquote { border: 1px solid yellow; border-left: none; }
{% endhighlight %}

### Shorthand combinations

Because there exist 3 border _properties_ and 4 border _locations_, there are **12** combinations possible:

<div class="table">
  <table>
    <tr>
      <th>border</th>
      <th>border-color</th>
      <th>border-style</th>
      <th>border-width</th>
    </tr>
    <tr>
      <th>border-top</th>
      <td>border-top-color</td>
      <td>border-top-style</td>
      <td>border-top-width</td>
    </tr>
    <tr>
      <th>border-bottom</th>
      <td>border-bottom-color</td>
      <td>border-bottom-style</td>
      <td>border-bottom-width</td>
    </tr>
    <tr>
      <th>border-left</th>
      <td>border-left-color</td>
      <td>border-left-style</td>
      <td>border-left-width</td>
    </tr>
    <tr>
      <th>border-right</th>
      <td>border-right-color</td>
      <td>border-right-style</td>
      <td>border-right-width</td>
    </tr>
  </table>
</div>

That's a lot of CSS properties available. You'll usually end up using the **5 shorthand versions** only:

* `border`
* `border-top`
* `border-bottom`
* `border-left`
* `border-right`
