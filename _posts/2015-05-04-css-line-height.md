---
layout: post
title: "CSS <strong>line-height</strong>"
subtitle: "For <strong>readibility</strong> concerns"
section: css
---

The `line-height` property, when applied to block-level element, defines, as its name literally suggests, the **height of each line**. It is **not** to be confused with the line spacing (a.k.a "leading") found in most graphical softwares (like Photoshop) which determines the amount of space _between_ lines in a paragraph. Although they both carry the same purpose (spacing lines of text), they do so in different ways.

The `line-height` property uses the following units:

* `px`
* `em`
* `%`
* unitless numbers, like `1.5`

The unitless values basically act like percentages. So `150%` is equal to `1.5`. The latter is just more compact and readable.

### Why line-height is important

The purpose of the `line-height` is to define a readable line spacing for your text. Because readibility is dependent upon the size of the text, it is recommended to use a **dynamic** value that is relative to the size of the text. Using `px` is therefore not recommended because it defines a **static** value.

In some cases, using `px` does come in handy (when you wish to vertically align text according to another element and not according to the font size).
{: .info}

Because using `%` or `em` values can have unexpected values, the recommended method is **unitless numbers**:

* for body text, a line height of 1.5 times the size of the text is recommended.
* for headings, a line height of 1.2 is recommended

{% highlight css %}
body { font-size: 16px; line-height: 1.5; }
{% endhighlight %}

The computed line height will thus be 16 * 1.5 = `24px`.

### Line-height inheritance

Because the `line-height` property is inherited by the child elements, it will remain consistent no matter what `font-size` is subsequently applied.

{% highlight css %}
body { font-size: 16px; line-height: 1.5; }
blockquote { font-size: 18px; }
{% endhighlight %}

The `blockquote` element will have a line height of `27px`.
