---
layout: post
title: "Sass <strong>extend</strong>"
subtitle: "Sharing common properties"
section: sass
---

### The common properties case

Sometimes you find yourself writing the **same set of properties** across different CSS rules.

For example, let's say your design makes use of **small spaced uppercase letters** throughout the page: buttons, navigation bar, sidebar headings, tabs...

Something like this:

<div class="result">
  <p style="color: lightslategrey; font-size: 10px; letter-spacing: 0.1em; line-height: 12px; text-transform: uppercase;">Small spaced uppercase letters</p>
</div>

How would that look like in your CSS? You could:

* use a common CSS **class** like `.small-uppercase`
* **combine** the selectors
* use a Sass **extend**

#### Common CSS Class

{% highlight css %}
.small-uppercase{
  color: lightslategrey;
  font-size: 10px;
  letter-spacing: 0.1em;
  line-height: 12px;
  text-transform: uppercase;
}
{% endhighlight %}

Having a `.small-uppercase` CSS rule is **semantically incorrect** because you'd end up writing your HTML as `<p class="small-uppercase">` which reverts to basically writing styles _within_ your HTML.

#### Combine the selectors

Because a CSS rule can accept any number of _selectors_, you could combine the shared properties under a **list** of selectors:

{% highlight css %}
.button,
.navigation a,
.sidebar h3,
.tabs a{
  color: lightslategrey;
  font-size: 10px;
  letter-spacing: 0.1em;
  line-height: 12px;
  text-transform: uppercase;
}
{% endhighlight %}

This approach remains **semantically valid** because each selector describes the HTML element they're attached to.

However, there are 2 problems:

* this CSS rule can become unmanagable as soon as the list of selectors becomes longer
* because each selector has _specific_ rules of their own, you're separating your set of properties in **two** (the `.button` can have additional rules further down the CSS)

Sass helps solving these problems.

### Sass @extend syntax

A Sass `@extend` allows to **inherit** CSS properties from _another_ **selector**:

{% highlight scss %}
// scss
.small-uppercase{
  color: lightslategrey;
  font-size: 10px;
  letter-spacing: 0.1em;
  line-height: 12px;
  text-transform: uppercase;
}

.modal-background{
  @extend .small-uppercase;
}

.product-link{
  @extend .small-uppercase;
}

.image-pattern{
  @extend .small-uppercase;
}

// generated css
.small-uppercase,
.modal-background,
.product-link,
.image-pattern{
  color: lightslategrey;
  font-size: 10px;
  letter-spacing: 0.1em;
  line-height: 12px;
  text-transform: uppercase;
}
{% endhighlight %}

The `@extend` will **regroup** common properties under a **list** of selectors.

The list is easily **maintainable** because you only add selectors one by one, and directly in the related selector.

Your HTML remains **semantic** because each element keeps its descriptive class name.

### Difference with mixins

Well, you might be thinking _"Wait, isn't it just like mixins then?"_?

There are 2 differences:

* The `@extend` rule **doesn't** have parameters. Mixins do.
* The `@extend` rule **does** combine selectors. Mixins don't.

Let's reuse our [overlay mixin](/sass-mixins.html#syntax), and also write a `.overlay` rule:

{% highlight scss %}
// scss
@mixin small-uppercase() {
  color: lightslategrey;
  font-size: 10px;
  letter-spacing: 0.1em;
  line-height: 12px;
  text-transform: uppercase;
}

.modal-background{
  @include small-uppercase();
}

.product-link{
  @include small-uppercase();
}

.image-pattern{
  @include small-uppercase();
}

// generated css

.modal-background{
  color: lightslategrey;
  font-size: 10px;
  letter-spacing: 0.1em;
  line-height: 12px;
  text-transform: uppercase;
}

.product-link{
  color: lightslategrey;
  font-size: 10px;
  letter-spacing: 0.1em;
  line-height: 12px;
  text-transform: uppercase;
}

.image-pattern{
  color: lightslategrey;
  font-size: 10px;
  letter-spacing: 0.1em;
  line-height: 12px;
  text-transform: uppercase;
}
{% endhighlight %}

The list of properties is simply **repeated** as many times as the `@include overlay()` is called.

A Sass `@extend` is more **efficient**, as it only writes the common properties **once**.

### Placeholders

Well, you might be thinking _"The `.small-uppercase` isn't semantic! I could use it in my HTML!"_?

You're right, and that's why **placeholders** exist in Sass.

If you don't want or need the `.small-uppercase` selector, transform it into a **Sass placeholder** by replacing the dot with a **percentage sign** `%`:

{% highlight scss %}
// scss
%small-uppercase{
  color: lightslategrey;
  font-size: 10px;
  letter-spacing: 0.1em;
  line-height: 12px;
  text-transform: uppercase;
}

.modal-background{
  @extend %small-uppercase;
}

.product-link{
  @extend %small-uppercase;
}

.image-pattern{
  @extend %small-uppercase;
}

// generated css
.modal-background,
.product-link,
.image-pattern{
  color: lightslategrey;
  font-size: 10px;
  letter-spacing: 0.1em;
  line-height: 12px;
  text-transform: uppercase;
}
{% endhighlight %}

Note that the generated CSS **doesn't include the `.small-uppercase` selector anymore**. That's because the `%small-uppercase` rule is only here to provide a **location** for common properties.

### Difference between extend, placeholders and mixins

<div class="table">
  <table>
    <tr>
      <th class="empty"></th>
      <th>Definition</th>
      <th>Referencing</th>
      <th>Combines selectors?</th>
      <th>Allows parameters?</th>
      <th>Can be used on its own?</th>
    </tr>
    <tr>
      <th>Mixins</th>
      <td><code>@mixin name()</code></td>
      <td><code>@include name()</code></td>
      <td class="no">No</td>
      <td class="yes"><span>Yes</span></td>
      <td class="no">No</td>
    </tr>
    <tr>
      <th>Extensions</th>
      <td>Any class</td>
      <td><code>@extend .class</code></td>
      <td class="yes"><span>Yes</span></td>
      <td class="no">No</td>
      <td class="yes"><span>Yes</span></td>
    </tr>
    <tr>
      <th>Placeholders</th>
      <td><code>%placeholder</code></td>
      <td><code>@extend %placeholder</code></td>
      <td class="yes"><span>Yes</span></td>
      <td class="no">No</td>
      <td class="no">No</td>
    </tr>
  </table>
</div>

When in doubt, use **mixins**. They generate more CSS lines and are less elegant than extend/placeholders, but they are straightforward.
