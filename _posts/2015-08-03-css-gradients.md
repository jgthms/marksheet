---
layout: post
title: "CSS <strong>gradients</strong>"
subtitle: "From one color to another"
section: css
---

When we talk about gradients in CSS, we talk about **gradients of colors**.

There are 2 types of gradients in CSS:

* **linear**: colors go from point to another, in a _straight_ line
* **radials**: colors go from the center of a circle to its edges, in _all_ directions

A gradient is considered a **background image** and must be used with the according property.

### linear-gradient

The syntax for linear gradients is [quite complex](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient), but the basic idea is to define:

* which **colors** you want
* where these colors must appear **along the axis** (at the start, middle, end, etc.)
* in which **direction** the gradient must go

Let's start with a simple 2 color gradient:

{% highlight css %}
div{ background-image: linear-gradient(red, blue);}
{% endhighlight %}

{% highlight html %}
<div>A simple vertical background gradient</div>
{% endhighlight %}

<div class="result" style="padding: 1rem;">
  <div style="background-image: linear-gradient(red, blue);">A simple vertical background gradient</div>
</div>

By default:

* the **direction** is **vertical**, from _top_ to _bottom_
* the **first** color is at the **start** (top)
* the **second** color is at the **end** (bottom)

#### Changing the direction

If the top to bottom direction doesn't suit you, you can alter it by either:

* defining the **destination of the gradient**, with keywords like `to left top`
* defining a specific **angle** in degrees like `45 deg`

This direction must be set _before_ the colors:

{% highlight css %}
div{ background-image: linear-gradient(to bottom right, yellow, purple); width: 200px;}
{% endhighlight %}

{% highlight html %}
<div>A diagonal gradient from the top left corner to the bottom right one</div>
{% endhighlight %}

<div class="result" style="padding: 1rem;">
  <div style="background-image: linear-gradient(to bottom right, yellow, purple); width: 200px;">A diagonal gradient from the top left corner to the bottom left one</div>
</div>

If you want a more **specific angle**, you can use a value in **degrees**:

* `0deg` is the default value, from top to bottom
* `20deg` is slightly diagonal, going **clockwise**
* `90deg` is like 3pm, from right to left
* `180deg` is from bottom to top

{% highlight css %}
div{ background-image: linear-gradient(20deg, green, blue); width: 150px;}
{% endhighlight %}

{% highlight html %}
<div>A diagonal gradient with an angle of 20 degrees</div>
{% endhighlight %}

<div class="result" style="padding: 1rem;">
  <div style="background-image: linear-gradient(20deg, green, blue); width: 150px;">A diagonal gradient with an angle of 20 degrees</div>
</div>

#### Adding more colors

You can insert as many colors as you want. They will be **equally distributed** along the axis:

* **2 colors**: 0% and 100%
* **3 colors**: 0%, 50% and 100%
* **4 colors**: 0%, 33%, 67% and 100%

{% highlight css %}
div{ background-image: linear-gradient(orange, grey, yellow); width: 150px;}
{% endhighlight %}

{% highlight html %}
<div>A rather ugly gradient, but you get the idea</div>
{% endhighlight %}

<div class="result" style="padding: 1rem;">
  <div style="background-image: linear-gradient(orange, grey, yellow); width: 150px;">A rather ugly gradient, but you get the idea</div>
</div>

#### Setting specific color stops

If you don't want colors to equally distributed, you can set specific **color stop positions**, using either percentages `%` or pixels `px`:

{% highlight css %}
div{ background-image: linear-gradient(orange, grey 10%, yellow 50%); width: 150px;}
{% endhighlight %}

{% highlight html %}
<div>An even uglier gradient, but you get the idea</div>
{% endhighlight %}

<div class="result" style="padding: 1rem;">
  <div style="background-image: linear-gradient(orange, grey 10%, yellow 50%); width: 150px;">An even uglier gradient, but you get the idea</div>
</div>

In this setup:

* `orange` has no stop position, so it defaults to **zero** `0%`
* `grey` is closer to the top, at `10%` instead of `50%`
* `yellow` takes half of the gradient, from `50%` to the end `100%`

### radial-gradient

While linear gradients follow a single-line axis, **radial gradients** spread out in all directions. Their syntax is fairly similar to linear ones, as they both have **color stops**. But instead of specifying a _direction_ you need to specify:

* a **shape**: either a circle or an ellipse
* a **starting point**: which will be the center of the circle/ellipse
* an **end point**: where the edge of the circle/ellipse will be

{% highlight css %}
div{ background-image: radial-gradient(red, yellow); padding: 1rem; width: 300px;}
{% endhighlight %}

{% highlight html %}
<div>This looks like the sun, doesn't it?</div>
{% endhighlight %}

<div class="result" style="padding: 1rem;">
  <div style="background-image: radial-gradient(red, yellow); padding: 1rem; width: 300px;">This looks like the sun, doesn't it?</div>
</div>

By default:

* the gradient is an **ellipse**
* the first color starts at the **center**
* the last color ends at the **farthest corner**

#### start position

The **start position** works like **[background positions](/css-background.html#background-position)**. You set it with the `at` keyword.

{% highlight css %}
div{ background-image: radial-gradient(at top right, black, lightgrey); padding: 1rem; width: 300px;}
{% endhighlight %}

{% highlight html %}
<div>A gloomy day.</div>
{% endhighlight %}

<div class="result" style="padding: 1rem;">
  <div style="background-image: radial-gradient(at top right, black, lightgrey); padding: 1rem; width: 300px;">A gloomy day.</div>
</div>

#### end position

By default, the shape will end at the **farthest corner**. You can either choose:

* `closest-side`
* `closest-corner`
* `farthest-side`
* `farthest-corner`

The difference is both hard to grasp and to visualize, so I won't go into details. Mozilla has a [good description of the different values](https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient#Values).

{% highlight css %}
div{ background-image: radial-gradient(closest-corner at 20px 20px, green, blue); padding: 1rem; width: 300px;}
div:hover{ background-image: radial-gradient(farthest-side at 20px 20px, green, blue)}
{% endhighlight %}

{% highlight html %}
<div>Hover this green star in the sky to see it expand.</div>
{% endhighlight %}

<div class="result" id="result-831">
  <div>Hover this green star in the sky to see it expand.</div>
</div>

#### fixed size

Instead of setting both start _and_ end positions, you can just set **specific dimensions**:

{% highlight css %}
div{ background-image: radial-gradient(20px 10px at 75% 50%, darkviolet, pink); padding: 1rem; width: 300px;}
{% endhighlight %}

{% highlight html %}
<div>A small violet disc in a sea of pink.</div>
{% endhighlight %}

<div class="result">
  <div style="background-image: radial-gradient(20px 10px at 75% 50%, darkviolet, pink); padding: 1rem; width: 300px;">A small violet disc in a sea of pink.</div>
</div>

CSS gradients are powerful, considering how endless the options are.

The examples of this page are voluntarily "ugly", with pronounced color differences, to better explain what how each property works.

But it's quite easy to write more **subtle** gradients, especially for buttons:

{% highlight css %}
.button-grey  { background-image: linear-gradient(#f2f2f2, #f2f2f2);}
.button-yellow{ background-image: linear-gradient(#fce374, #fcdf5b);}
.button-orange{ background-image: linear-gradient(#f58a38, #f57c20);}
.button-red   { background-image: linear-gradient(#ed6d64, #ed574c);}
.button-purple{ background-image: linear-gradient(#847bba, #7568ba);}
.button-blue  { background-image: linear-gradient(#42b0e3, #2ba9e3);}
.button-green { background-image: linear-gradient(#97cc76, #8bcc62);}
{% endhighlight %}

<div class="result" id="result-832">
  <a class="button-grey">Button</a>
  <a class="button-yellow">Button</a>
  <a class="button-orange">Button</a>
  <a class="button-red">Button</a>
  <a class="button-purple">Button</a>
  <a class="button-blue">Button</a>
  <a class="button-green">Button</a>
</div>

<style type="text/css">
#result-831{ padding: 1rem;}
#result-831 div{ background-image: radial-gradient(closest-corner at 20px 20px, green, blue); padding: 1rem; width: 300px;}
#result-831 div:hover{ background-image: radial-gradient(farthest-side at 20px 20px, green, blue)}
#result-832{ padding: 1rem;}
#result-832 a{ background-image: linear-gradient(lightblue, skyblue); border: 1px solid #eee; border-radius: 3px; color: grey; display: inline-block; line-height: 32px; padding: 0 15px; text-decoration: none; transition: none; vertical-align: top;}
#result-832 .button-grey {
  background-color: #f2f2f2;
  background-image: linear-gradient(to bottom, #f2f2f2, #f2f2f2);
  border: 1px solid #bfbfbf;
  box-shadow: inset 0 1px 0 white, inset 0 -1px 0 #d9d9d9, inset 0 0 0 1px #f2f2f2, 0 2px 4px rgba(0, 0, 0, 0.2);
  color: #8c8c8c;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
}
#result-832 .button-grey:hover, #result-832 .button-grey:focus {
  background: #f2f2f2;
  border-color: #8c8c8c;
  box-shadow: inset 0 1px 0 white, inset 0 -1px 0 #d9d9d9, inset 0 0 0 1px #f2f2f2;
}
#result-832 .button-grey:active {
  background: #f2f2f2;
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2);
}

#result-832 .button-blue {
  background-color: #42b0e3;
  background-image: linear-gradient(to bottom, #42b0e3, #2ba9e3);
  border: 1px solid #107db0;
  box-shadow: inset 0 1px 0 #7cd4fc, inset 0 -1px 0 #2696c9, inset 0 0 0 1px #59b7e3, 0 2px 4px rgba(0, 0, 0, 0.2);
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
#result-832 .button-blue:hover, #result-832 .button-blue:focus {
  background: #2ba9e3;
  border-color: #004c6f;
  box-shadow: inset 0 1px 0 #7cd4fc, inset 0 -1px 0 #2696c9, inset 0 0 0 1px #59b7e3;
}
#result-832 .button-blue:active {
  background: #2ba9e3;
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2);
}

#result-832 .button-green {
  background-color: #97cc76;
  background-image: linear-gradient(to bottom, #97cc76, #8bcc62);
  border: 1px solid #5f993a;
  box-shadow: inset 0 1px 0 #c6e5b3, inset 0 -1px 0 #79b356, inset 0 0 0 1px #a4cc8b, 0 2px 4px rgba(0, 0, 0, 0.2);
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
#result-832 .button-green:hover, #result-832 .button-green:focus {
  background: #8bcc62;
  border-color: #326612;
  box-shadow: inset 0 1px 0 #c6e5b3, inset 0 -1px 0 #79b356, inset 0 0 0 1px #a4cc8b;
}
#result-832 .button-green:active {
  background: #8bcc62;
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2);
}

#result-832 .button-purple {
  background-color: #847bba;
  background-image: linear-gradient(to bottom, #847bba, #7568ba);
  border: 1px solid #493e87;
  box-shadow: inset 0 1px 0 #bab6d4, inset 0 -1px 0 #655aa1, inset 0 0 0 1px #948dba, 0 2px 4px rgba(0, 0, 0, 0.2);
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
#result-832 .button-purple:hover, #result-832 .button-purple:focus {
  background: #7568ba;
  border-color: #1f1654;
  box-shadow: inset 0 1px 0 #bab6d4, inset 0 -1px 0 #655aa1, inset 0 0 0 1px #948dba;
}
#result-832 .button-purple:active {
  background: #7568ba;
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2);
}

#result-832 .button-orange {
  background-color: #f58a38;
  background-image: linear-gradient(to bottom, #f58a38, #f57c20);
  border: 1px solid #c25706;
  box-shadow: inset 0 1px 0 #ffb984, inset 0 -1px 0 #db6f1d, inset 0 0 0 1px #f59851, 0 2px 4px rgba(0, 0, 0, 0.2);
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
#result-832 .button-orange:hover, #result-832 .button-orange:focus {
  background: #f57c20;
  border-color: #773300;
  box-shadow: inset 0 1px 0 #ffb984, inset 0 -1px 0 #db6f1d, inset 0 0 0 1px #f59851;
}
#result-832 .button-orange:active {
  background: #f57c20;
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2);
}

#result-832 .button-red {
  background-color: #ed6d64;
  background-image: linear-gradient(to bottom, #ed6d64, #ed574c);
  border: 1px solid #ba3329;
  box-shadow: inset 0 1px 0 #ffb0aa, inset 0 -1px 0 #d44d44, inset 0 0 0 1px #ed837b, 0 2px 4px rgba(0, 0, 0, 0.2);
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
#result-832 .button-red:hover, #result-832 .button-red:focus {
  background: #ed574c;
  border-color: #870c03;
  box-shadow: inset 0 1px 0 #ffb0aa, inset 0 -1px 0 #d44d44, inset 0 0 0 1px #ed837b;
}
#result-832 .button-red:active {
  background: #ed574c;
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2);
}

#result-832 .button-yellow {
  background-color: #fce374;
  background-image: linear-gradient(to bottom, #fce374, #fcdf5b);
  border: 1px solid #c9ae34;
  box-shadow: inset 0 1px 0 #fff6ce, inset 0 -1px 0 #e3c852, inset 0 0 0 1px #fce88d, 0 2px 4px rgba(0, 0, 0, 0.2);
  color: #967d09;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
}
#result-832 .button-yellow:hover, #result-832 .button-yellow:focus {
  background: #fcdf5b;
  border-color: #967d09;
  box-shadow: inset 0 1px 0 #fff6ce, inset 0 -1px 0 #e3c852, inset 0 0 0 1px #fce88d;
}
#result-832 .button-yellow:active {
  background: #fcdf5b;
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2);
}
</style>