---
layout: post
title: "CSS <strong>transform</strong>"
subtitle: "Fashioning unique shapes"
section: css
---

We've seen so far how CSS allows us to apply colors, set fonts, tweak the text settings, position elements, space them, decorate them, move them around.

CSS **transforms** are a collection of _functions_ that allow to **shape elements** in particular ways:

* **translate**: moves the element along up to 3 axis (x,y and z)
* **rotate**: moves the element around a central point
* **scale**: resizes the element
* **skew**: distorts the element

### transform properties

There are 3 CSS transform properties available:

* `transform` defines which transform _function_ to use (translate, rotate, scale...)
* `transform-origin` allows to modify the origin point of a transformation (works like [background positions](/css-background.html#background-position))
* `transform-style` is for 3d settings

Note that unlike `background` and `border`, `transform` is **not a shorthand property**.

We'll only use `transform` here.

#### Doesn't break the Flow

To prevent unexpected behavior, transformed elements **do not affect the Flow**. Whether rotated, scaled or translated, they won't affect other elements.

### translate

The `translate()` function allows to move an element **across the plane** (on the x and y axis). It accepts either:

* **1 parameter**: moves the element along the `x` axis
* **2 parameters**: first value is for the `x` axis, second for the `y` one

It's like using [relative positioning](/css-position.html#relative) with `left` and `top` values.

Let's redo our [circuit animation](/css-animations.html#result-2) using translation instead of left/top positioning:

{% highlight css %}
@keyframes translating {
  0%  { transform: translate(0, 0); }
  25% { transform: translate(240px, 0); }
  50% { transform: translate(240px, 140px); }
  75% { transform: translate(0, 140px); }
  100% { transform: translate(0, 0); }
}
p { animation: translating 4s linear infinite; }
{% endhighlight %}

<div class="result" id="translate-animation">
  <p>Hello</p>
</div>

<style type="text/css">
#translate-animation { height: 200px; padding: 0; width: 300px; }
#translate-animation p { animation: translating 4s linear 0s infinite; background: turquoise; color: white; height: 60px; line-height: 60px; margin: 0; position: absolute; text-align: center; width: 60px; }

@keyframes translating {
  0%  { transform: translate(0, 0); }
  25% { transform: translate(240px, 0); }
  50% { transform: translate(240px, 140px); }
  75% { transform: translate(0, 140px); }
  100% { transform: translate(0, 0); }
}
</style>

Remember: `transform` is the CSS **property**, `translate()` is the CSS **value** _attached to_ that property (and also happens to be a function).
{: .focus}

You can use `translateX()` and `translateY()` to only move your element along the **x** and **y** axis respectively.

### rotate

The `rotate()` function allows to make an element **revolve around a fixed point**. By default, it revolves around the element's center. Think of it as vinyl being played on a turntable.

`rotate()` accepts only **1** parameter, which is an **angle** value defined in degrees `deg`, gradians `grad`, radians `rad` or turns `turn` (with 1 turn being equivalent to a full circle).

{% highlight css %}
@keyframes rotating {
  0%  { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
p { animation: rotating 4s linear infinite; }
{% endhighlight %}

<div class="result" id="rotate-animation">
  <p>Vinyl</p>
</div>

<style type="text/css">
#rotate-animation { padding: 2rem; }
#rotate-animation p { animation: rotating 4s linear 0s infinite; background: slateblue; border-radius: 60px; color: white; height: 120px; line-height: 120px; margin: 0; text-align: center; width: 120px; }

@keyframes rotating {
  0%  { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

### scale

The `scale()` function allows to **resize an element**. It can either expand or shrink it. The function accepts either:

* **1 parameter**: the element is resized uniformily in height and width
* **2 parameters**: the first value resizes the element _horizontally_, the second one _vertically_

The **range** of possible value is:

* `1`: the element retains its original size
* `2`: the element doubles in size
* `0.5`: the element is half of its size
* `0`: the element basically disappears (as its height and width are equal to zero)
* `-1`: the element is mirrored

{% highlight css %}
@keyframes scaling {
  0%  { transform: scale(1); }
  20% { transform: scale(2); }
  40% { transform: scale(0.5); }
  60% { transform: scale(0); }
  80% { transform: scale(-1); }
  100% { transform: scale(1); }
}
p { animation: scaling 10s steps(1) 0s infinite; }
{% endhighlight %}

<div class="result" id="scale-animation">
  <p><strong>scale(1)</strong>: normal size</p>
  <p><strong>scale(2)</strong>: double size</p>
  <p><strong>scale(0.5)</strong>: half size</p>
  <p><strong>scale(0)</strong>: zero size (invisible)</p>
  <p><strong>scale(-1)</strong>: mirrored</p>
  <div>Scaling</div>
</div>

<style type="text/css">
#scale-animation { padding: 2rem; }
#scale-animation p { animation: scaling-toggle 10s steps(1) 0s infinite forwards; background: white; color: grey; left: 2rem; margin: 0; opacity: 0; padding: 0 0.5em; position: absolute; top: 2rem; z-index: 1; }
#scale-animation p:first-child { left: 0; position: relative; top: 0; }
#scale-animation p:nth-child(2) { animation-delay: 2s; }
#scale-animation p:nth-child(3) { animation-delay: 4s; }
#scale-animation p:nth-child(4) { animation-delay: 6s; }
#scale-animation p:nth-child(5) { animation-delay: 8s; }
#scale-animation p strong { content: ""; display: inline-block; }
#scale-animation div { animation: scaling 10s linear 0s infinite; background: goldenrod; border-radius: 60px; color: white; height: 120px; line-height: 120px; margin-top: 2rem;; text-align: center; transition: all 100ms linear; width: 120px; }

@keyframes scaling {
  0%  { transform: scale(1); }
  19% { transform: scale(1); }
  20% { transform: scale(2); }
  39% { transform: scale(2); }
  40% { transform: scale(0.5); }
  59% { transform: scale(0.5); }
  60% { transform: scale(0); }
  79% { transform: scale(0); }
  80% { transform: scale(-1); }
  99% { transform: scale(-1); }
  100% { transform: scale(1); }
}

@keyframes scaling-toggle {
  0%  { opacity: 1; }
  20% { opacity: 0; }
  100% { opacity: 0; }
}
</style>

Like `translate()`, the `scale()` function has x and y versions: `scaleX()` and `scaleY()` to resize horizontally and vertically respectively.

### skew

The `skew()` function allows to **distort an element**, by dragging its sides along a line basically.

This transform function is rarely used, as its effects are quite unpredictable, and its results not necessarily appealing. Nevertheless, let's see how it works.

Like `scale()`, the `skew()` functions accepts either:

* **1 parameter**: the element is distorted horizontally
* **2 parameters**: the first value distorts the element _horizontally_, the second one _vertically_

And like `rotate()`, `skew()` only accepts **angle** values like degrees `deg`.

{% highlight css %}
@keyframes skewing {
  0%  { transform: skew(0deg); }
  20% { transform: skew(10deg); }
  40% { transform: skew(45deg); }
  60% { transform: skew(90deg); }
  80% { transform: skew(120deg); }
  100% { transform: skew(0deg); }
}
p { animation: skewing 10s steps(1) 0s infinite; }
{% endhighlight %}

<div class="result" id="skew-animation">
  <p><strong>skew(0deg)</strong>: no distortion</p>
  <p><strong>skew(10deg)</strong>: subtle horizontal distortion</p>
  <p><strong>skew(45deg)</strong>: quarter distortion</p>
  <p><strong>skew(90deg)</strong>: half distortion (invisible)</p>
  <p><strong>skew(120deg)</strong>: same as -60deg</p>
  <div>Skewing</div>
</div>

<style type="text/css">
#skew-animation { padding: 2rem; }
#skew-animation p { animation: scaling-toggle 10s steps(1) 0s infinite forwards; background: white; color: grey; left: 2rem; margin: 0; opacity: 0; padding: 0 0.5em; position: absolute; top: 2rem; z-index: 1; }
#skew-animation p:first-child { left: 0; position: relative; top: 0; }
#skew-animation p:nth-child(2) { animation-delay: 2s; }
#skew-animation p:nth-child(3) { animation-delay: 4s; }
#skew-animation p:nth-child(4) { animation-delay: 6s; }
#skew-animation p:nth-child(5) { animation-delay: 8s; }
#skew-animation div { animation: skewing 10s linear infinite; background: tomato; color: white; height: 60px; line-height: 60px; margin-top: 2rem;; text-align: center; transition: all 100ms linear; width: 120px; }

@keyframes skewing {
  0%  { transform: skew(0deg); }
  19% { transform: skew(0deg); }
  20% { transform: skew(10deg); }
  39% { transform: skew(10deg); }
  40% { transform: skew(45deg); }
  59% { transform: skew(45deg); }
  60% { transform: skew(90deg); }
  79% { transform: skew(90deg); }
  80% { transform: skew(120deg); }
  99% { transform: skew(120deg); }
  100% { transform: skew(180deg); }
}

@keyframes skewing-toggle {
  0%  { opacity: 1; }
  20% { opacity: 0; }
  100% { opacity: 0; }
}
</style>

### 3d functions

We've seen how transform functions operate on a **plane**, along the x and y axis.

For example:

* `translate()` with up to 2 parameters:
  * `translate(x)`
  * `translate(x,y)`
* `translateX()` as x only
* `translateY()` as y only

But all these functions also have a **3d version**.

For example, `translate()` has a `translate3d()` version that performs transformation along **3 dimensions**, which means it includes the **z axis** as well (and as such, a standalone `translateZ()` function exists as well).

The **z** parameter basically make the element move closer and further, whether we increase or decrease its value. It's like zooming in and out.

{% highlight css %}
@keyframes zooming {
  0%  { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(0, 0, 200px); }
}
p { animation: zooming 5s alternate; }
{% endhighlight %}

<div class="result" id="zoom-animation">
  <div>Original</div>
  <p>Transformed</p>
</div>

<style type="text/css">
#zoom-animation { padding: 2rem; perspective: 500; }
#zoom-animation div,
#zoom-animation p { background: midnightblue; color: white; height: 200px; line-height: 200px; margin: 0; position: relative; text-align: center; width: 200px; }
#zoom-animation p { animation: zooming 5s alternate infinite both; background: limegreen; left: 2rem; opacity: 0.7; position: absolute; top: 2rem; }

@keyframes zooming {
  0%  { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(0, 0, 200px); }
}
</style>

The green block rise `200px` _"upwards"_, as if coming closer to us, along the z axis.

`perspective: 500;` needs to be applied to the parent element in order for the 3d space to become active. Alternatively, `transform: perspective(500px);` can be used as well.
{: .info}
