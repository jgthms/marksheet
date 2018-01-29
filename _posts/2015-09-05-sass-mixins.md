---
layout: post
title: "Sass <strong>mixins</strong>"
subtitle: "CSS programming"
section: sass
---

When you find yourself writing the same code over and over again, it feels like Sass mixins might help you out.

Sass mixins are **CSS functions** that you can **include** whenever you want.

### Syntax

Remember how we wrote `@keyframes` when creating **[CSS animations](/css-animations.html)**? The Sass mixin syntax is fairly similar:

{% highlight scss %}
@mixin overlay() {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
{% endhighlight %}

The **name** of this mixin is `overlay`. You can reference this mixin in any CSS rule by using `@include`:

{% highlight scss %}
.modal-background{
  @include overlay();
  background: black;
  opacity: 0.9;
}
{% endhighlight %}

As usual, this `.scss` will be compiled into `.css`:

{% highlight css %}
.modal-background{
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background: black;
  opacity: 0.9;
}
{% endhighlight %}

### Reusability

The main purpose of a mixin is to make a **set of properties reusable**.

Like Sass variables (where you define your **values** on a single location), Sass mixins allow you to define **properties** on a single location.

The previous mixin can be reused in other rules:

{% highlight scss %}
.modal-background{
  @include overlay();
}

.product-link{
  @include overlay();
}

.image-pattern{
  @include overlay();
}
{% endhighlight %}

{% highlight css %}
.modal-background{
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.product-link{
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.image-pattern{
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
{% endhighlight %}

### Parameters

Because mixins are **functions** and because you might want to **alter** the _output_, mixins can accept **parameters**.

For example, this [border-radius mixin](https://sass-lang.com/guide#topic-6-SCSS) prevents rewriting **vendor prefixes** and takes the actual _radius_ value as a parameter:

{% highlight scss %}
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box{
  @include border-radius(3px);
}
{% endhighlight %}

{% highlight css %}
.box{
  -webkit-border-radius: 3px;
     -moz-border-radius: 3px;
      -ms-border-radius: 3px;
          border-radius: 3px;
}
{% endhighlight %}

The mixin circumvents the hassle of having to write all vendor prefixes, and uses the `$radius` to allow defining the same radius value for every vendor property.

### Optional parameters

If you want a parameter to have a **default** value while providing the possibility to _set_ one occasionally, you can create **optional paramaters**:

{% highlight scss %}
@mixin label($text: "Code", $background: $yellow, $color: rgba(black, 0.5)) {
  position: relative;
  &:before{
    background: $background;
    color: $color;
    content: $text;
    display: inline-block;
    font-size: 0.6rem;
    font-weight: 700;
    height: 1rem;
    left: 0;
    letter-spacing: 0.1em;
    line-height: 1rem;
    padding: 0 0.5em;
    position: absolute;
    text-transform: uppercase;
    top: 0;
  }
}
{% endhighlight %}

This mixin is the one used by this website to add **labels** in the top left corner of code snippets. It has 3 optional parameters, each of them with their own default value set with a colon `:`.

This mixin is used several times throughout the code:

{% highlight scss %}
div.highlighter-rouge{
  @include label();
  &.css{
    @include label("CSS", $blue, white);
  }
  &.scss{
    @include label("SCSS", #c69, white);
  }
}
{% endhighlight %}

The `div.highlighter-rouge` will use the mixin's default values:

* text `"Code"`
* background: `$yellow`
* color: `rgba(black, 0.5)`

The `.css` and `.scss` versions, because their parameters are _set_, will use different labels and colors.

### Mixin libraries

If you don't want to spend time writing your own Sass mixins, you can use any of the following **mixin libraries**:

* **Bourbon**: [bourbon.io](https://bourbon.io/)
* **Compass**: [compass-style.org](https://compass-style.org/)
* **Susy**: [susy.oddbird.net](https://susy.oddbird.net/)
