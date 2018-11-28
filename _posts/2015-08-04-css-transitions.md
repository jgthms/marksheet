---
layout: post
title: "CSS <strong>transitions</strong>"
subtitle: "From one rule to another"
section: css
---

CSS <strong>transitions</strong> allow to smoothly go from one element's state to another. How it works is that individual **properties** are animated from an **initial** to a **final** state.

You can define:

* `transition-property`: which **properties** to animate
* `transition-duration`: **how long** the animation lasts
* `transition-timing-function`: how the **intermediate states** are calculated
* `transition-delay`: to start the animation **after** a certain amount of time

You can set each CSS property individually, or use the shorthand version: `transition`. In that case, only the **duration is mandatory**.

Keep in mind that a **transition is a specific kind of _animation_, where there's only a start and an end state**.

### Quick example

Transitions are often used on **hover states**.

{% highlight css %}
a{ background: lightgrey; color: grey;}
a:hover{ background: yellow; color: red;}
a.with-transition{ transition: 1s;}
{% endhighlight %}

<div class="result" id="result-841">
  <a>Without transition</a>
  <a class="with-transition">With transition</a>
</div>

Instead of the hover CSS rules being **instantaneous**, both the background _and_ the text colors are slowly animated.

### transition-duration

A transition's duration is the only CSS property needed to create a transition. It can either be set in **seconds** `2s` or **milliseconds** `100ms`.

If you want your transition to last **half a second**, you can either write `0.5s` or `500ms`. Depending on how fast you want your transitions to be, one unit might be easier and/or quicker to write.

{% highlight css %}
a{ background: lightgrey; color: grey;}
a:hover{ background: yellow; color: green;}
a.with-fast-transition{ transition-duration: 0.5s;}
a.with-slow-transition{ transition: 3s;}
{% endhighlight %}

<div class="result" id="result-842">
  <a>Without transition</a>
  <a class="with-fast-transition">A 0.5s transition</a>
  <a class="with-slow-transition">A 3s transition</a>
</div>

### transition-property

Only **1/3** of CSS properties can be animated. Mozilla has a [complete list](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties).

By default, the `transition-property` property has a value of `all`, which simply means it will animate all possible properties.

You can decide to only animate 1 or several properties.

{% highlight css %}
a{ background: lightgrey; color: grey;}
a:hover{ background: yellow; border: 5px solid blue; color: green;}
a.with-background-transition{ transition-duration: 2s; transition-property: background;}
a.with-all-transition{ transition-duration: 2s;}
{% endhighlight %}

<div class="result" id="result-843">
  <a>Without transition</a>
  <a class="with-background-transition">With only background transition</a>
  <a class="with-all-transition">With all transitions</a>
</div>

The `border` property is fully animatable and allows to easily visualize the slow (2 seconds) transition.

### transition-timing-function

The timing function determines how each property's **value** is calculated **during the transition**.

By default, the transition is **eased**: it accelerates at the start and slows down at the end.

You can ensure that the transition will happen at a **constant speed**. Timing functions can make the transition **accelerate** and/or **slow down**.

The easiest way to visualize timing functions is by altering **position properties**, like `left`.

{% highlight css %}
div{ left: 0; position: relative; transition: 1s;}
main:hover div{ left: 200px;}
.ease{ transition-timing-function: ease;} /* Default behavior */
.linear{ transition-timing-function: linear;} /* Constant speed */
.ease-in{ transition-timing-function: ease-in;}
.ease-out{ transition-timing-function: ease-out;}
.ease-in-out{ transition-timing-function: ease-out;}
{% endhighlight %}

{% highlight html %}
<main>
  <p><strong>Ease</strong>: slow start, fast middle, slow end</p>
  <div class="ease"></div>
  <p><strong>Linear</strong>: constant speed</p>
  <div class="linear"></div>
  <p><strong>Ease In</strong>: slow start, fast end</p>
  <div class="ease-in"></div>
  <p><strong>Ease Out</strong>: fast start, slow end</p>
  <div class="ease-out"></div>
  <p><strong>Ease In Out</strong>: like ease, but with more pronounced acceleration/deceleration curves</p>
  <div class="ease-in-out"></div>
</main>
{% endhighlight %}

<div class="result" id="result-844">
  <p><strong>Ease</strong>: slow start, fast middle, slow end</p>
  <div class="ease"></div>
  <p><strong>Linear</strong>: constant speed</p>
  <div class="linear"></div>
  <p><strong>Ease In</strong>: slow start, fast end</p>
  <div class="ease-in"></div>
  <p><strong>Ease Out</strong>: fast start, slow end</p>
  <div class="ease-out"></div>
  <p><strong>Ease In Out</strong>: like ease, but with more pronounced acceleration/deceleration curves</p>
  <div class="ease-in-out"></div>
</div>

Keep in mind that all transitions take the **same amount of time** (1 second).

If you want to visualize how other timing functions work, check out this [Easing Functions Cheat Sheet](https://easings.net/).

#### cubic-bezier

If all these **pre-defined** timing functions don't suit you, you can write your own using **cubic bezier** functions.

The website [cubic-bezier.com](https://cubic-bezier.com/) is a simple tool to visually write your own curves.

### transition-delay

A **delay** will define how long the transitions has to **wait** _before_ actually starting.

Like `transition-duration`, you can either use seconds `s` or milliseconds `ms`.

{% highlight css %}
a{ background: blue; color: white; transition: all 1s;}
div:hover a{ background: red;}
a.with-delay{ transition-delay: 1s;}
{% endhighlight %}

{% highlight html %}
<div>
  <p>Hover the grey area</p>
  <a>Without any delay</a>
  <a class="with-delay">With a second delay</a>
</div>
{% endhighlight %}

<div class="result" id="result-845">
  <div>
    <p>Hover the grey area</p>
    <a>Without any delay</a>
    <a class="with-delay">With a second delay</a>
  </div>
</div>

<style type="text/css">
#result-841{ padding: 1rem;}
#result-841 a{ background: lightgrey; color: grey; margin-right: 10px; padding: 5px 10px; transition: none;}
#result-841 a:hover{ background: yellow; color: red;}
#result-841 .with-transition{ transition: 1s}
#result-842{ padding: 1rem;}
#result-842 a{ background: lightgrey; color: grey; margin-right: 10px; padding: 5px 10px; transition: none;}
#result-842 a:hover{ background: yellow; color: green;}
#result-842 .with-fast-transition{ transition: 0.5s;}
#result-842 .with-slow-transition{ transition: 3s;}
#result-843{ padding: 1rem;}
#result-843 a{ background: lightgrey; color: grey; margin-right: 10px; padding: 5px 10px; transition: none;}
#result-843 a:hover{ background: yellow; border: 5px solid blue; color: green;}
#result-843 .with-background-transition{ transition: 2s; transition-property: background;}
#result-843 .with-all-transition{ transition: 2s;}
#result-844{ padding-bottom: 1rem;}
#result-844 div{ background: crimson; height: 20px; left: 0; margin-top: -1rem; position: relative; transition: 1s; width: 20px;}
#result-844:hover div{ left: 200px;}
#result-844 p{ color: grey;}
#result-844 p strong{ font-weight: bold;}
#result-844 .ease{ transition-timing-function: ease;} /* Default behavior */
#result-844 .linear{ transition-timing-function: linear;} /* Constant speed */
#result-844 .ease-in{ transition-timing-function: ease-in;}
#result-844 .ease-out{ transition-timing-function: ease-out;}
#result-844 .ease-in-out{ transition-timing-function: ease-out;}
#result-844 p:nth-child(1) strong{ color: crimson;}
#result-844 div:nth-child(2){ background: crimson;}
#result-844 p:nth-child(3) strong{ color: midnightblue;}
#result-844 div:nth-child(4){ background: midnightblue;}
#result-844 p:nth-child(5) strong{ color: mediumseagreen;}
#result-844 div:nth-child(6){ background: mediumseagreen;}
#result-844 p:nth-child(7) strong{ color: orangered;}
#result-844 div:nth-child(8){ background: orangered;}
#result-844 p:nth-child(9) strong{ color: darkviolet;}
#result-844 div:nth-child(10){ background: darkviolet;}
#result-845{ padding: 1rem;}
#result-845 div{ background: lightgrey; padding: 1rem; width: 400px;}
#result-845 div p{ color: grey; margin-top: 0;}
#result-845 a{ background: blue; color: white; padding: 5px 10px; text-decoration: none; transition: all 1s;}
#result-845 div:hover a{ background: red;}
#result-845 a.with-delay{ transition-delay: 1s;}
</style>
