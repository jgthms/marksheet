---
layout: post
title: "CSS <strong>animations</strong>"
subtitle: "A set sequence of CSS rules"
section: css
---

We've just seen how CSS **transitions** are just a way to **animate** CSS properties between a _starting_ state, and an _end_ state.

So CSS transitions are _specific_ kind of animations, where:

* there's only 2 states: start and end
* the animation doesn't loop
* the intermediate states are only controlled by the timing function

Well what if you want:

* to have control over the **intermediate** states?
* to make an animation **loop**?
* different animations on the _same_ element?
* to animate a specific property only **halfway** through the animation?
* to simulate **different timing functions** for different properties?

CSS animations allow all of this, and more.

**CSS animations are like mini movies where you are the director giving out instructions (CSS rules) to your actors (HTML elements) for different scenes (keyframes).**

### Animation properties

Like the `transition` property, `animation` is a **shorthand** property for several others:

* **name**: the animation's name
* **duration**: how long the transition lasts
* **timing-function**: how the intermediate states are calculated
* **delay**: to start the animation after a certain amount of time
* **iteration-count**: how many times the animation should be performed
* **direction**: if the animation should be reversed or not
* **fill-mode**: what styles are applied before the animation starts and after it ends

### Quick example

To animate a loading button, you could write a **bouncing** animation:

{% highlight css %}
@keyframes bouncing{
  0%  { bottom: 0; box-shadow: 0 0 5px rgba(0,0,0,0.5);}
  100%{ bottom: 50px; box-shadow: 0 50px 50px rgba(0,0,0,0.1);}
}

.loading-button{ animation: bouncing 0.5s cubic-bezier(0.1,0.25,0.1,1) 0s infinite alternate both;}
{% endhighlight %}

<div class="result" id="result-1">
  <a>Loading</a>
</div>

You first need to write the actual bouncing animation using **keyframes** and name it `bouncing`. _Then_ you can use that animation by applying it to `.loading-button`.

I used the **shorthand** `animation` property, and included all options:

* **name**: bouncing _(matches the keyframes name)_
* **duration**: 0.5s _(half a second)_
* **timing-function**: [cubic-bezier(0.1,0.25,0.1,1)](https://cubic-bezier.com/#.1,.25,.1,1)
* **delay**: 0s _(no delay)_
* **iteration-count**: infinite _(plays indefinitely)_
* **direction**: alternate _(goes back and forth)_
* **fill-mode**: both

### @keyframes

Before applying animations to HTML elements, you need to **write animations using keyframes**. Basically, keyframes are each **intermediate step** in an animation. They are defined using **percentages**:

* `0%` is the first step of the animation
* `50%` is the step halfway through the animation
* `100%` is the last step

You can also use the keywords `from` and `to` instead of `0%` and `100%` respectively.
{: .info}

You can define _as many keyframes as you want_, like `33%`, `4%` or even `29.86%`. In practice, you'll only write a few.

Each keyframe is **CSS rule**, meaning that you can write CSS properties just like usual.

To define an animation, just write the keyword `@keyframes` followed by its **name**:

{% highlight css %}
@keyframes around {
  0%  { left: 0; top: 0;}
  25% { left: 240px; top: 0;}
  50% { left: 240px; top: 140px;}
  75% { left: 0; top: 140px;}
  100%{ left: 0; top: 0;}
}
p{ animation: around 4s linear infinite;}
{% endhighlight %}

<div class="result" id="result-2">
  <p>Hello</p>
</div>

Notice how the start `0%` and the end `100%` have the **same CSS rules**. This ensures that the animation loops perfectly. Because the iteration count is set to `infinite`, the animation will go from `0%` to `100%`, and then _back to_ `0%` instantly and indefinitely.

### animation-name

The animation's **name** is used at least **twice**:

* when **writing** the animation using `@keyframes`
* when **using** the animation using the `animation-name` property (or with the `animation` shorthand)

{% highlight css %}
@keyframes whatever{
  /* ... */
}

.selector{ animation-name: whatever;}
{% endhighlight %}

Like CSS class names, animation names can only include:

* letters (a-z)
* numbers (0-9)
* underscores (_)
* dashes (-)

It can not start with a number or two dashes.

### animation-duration

Just like [transition durations](/css-transitions.html#transition-duration), animation durations can be set in **seconds** `1s` or **milliseconds** `200ms`.

{% highlight css %}
.selector{ animation-duration: 0.5s;}
{% endhighlight %}

It defaults to `0s`, which means no animation at all.

### animation-timing-function

Just like [transition timing functions](/css-transitions.html#transition-timing-function), animation timing functions can use **keywords** like `linear`, `ease-out`, or be defined using custom **cubic bezier** functions.

{% highlight css %}
.selector{ animation-timing-function: ease-in-out;}
{% endhighlight %}

It defaults to `ease`.

Because CSS animations use keyframes, you can set a **linear** timing function and **simulate** a specific cubic bezier curve by defining a _lot_ of _very specific_ keyframes. Check out [Bounce.js](https://bouncejs.com/) to generate advanced animations.
{: .info}

### animation-delay

Just like [transition delays](/css-transitions.html#transition-delay), animation delays can be set in **seconds** `1s` or **milliseconds** `200ms`.

It defaults to `0s`, which means no delay at all.

It's useful when triggering multiple animations **in sequence**.

{% highlight css %}
.a,.b,.c{ animation: bouncing 1s;}
.b{ animation-delay: 0.25s;}
.c{ animation-delay: 0.5s;}
{% endhighlight %}

### animation-iteration-count

By default, animations are only played **once** (value of `1`). You can set 3 types of values:

* **integers** like `2` or `3`
* **non-integers** like `0.5` which will play only half the animation
* the **keyword** `infinite` which will repeat the animation indefinitely

{% highlight css %}
.selector{ animation-iteration-count: infinite;}
{% endhighlight %}

### animation-direction

The animation's **direction** defines _in which order_ the keyframes are read.

* **normal**: starts at `0%`, ends at `100%`, starts at `0%` again
* **reverse**: starts at `100%`, ends at `0%`, starts at `100%` again
* **alternate**: starts at `0%`, goes to `100%`, goes to `0%`
* **alternate-reverse**: starts at `100%`, goes to `0%`, goes to `100%`

It's easier to visualise if the animation's iteration count is set to `infinite`.

<div class="result" id="result-3">
  <p><strong>Normal</strong>: 0% --> 100%</p>
  <div class="normal"><div></div></div>
  <p><strong>Reverse</strong>: 100% --> 0%</p>
  <div class="reverse"><div></div></div>
  <p><strong>Alternate</strong>: 0% <--> 100%</p>
  <div class="alternate"><div></div></div>
  <p><strong>Alternate reverse</strong>: 100% <--> 0%</p>
  <div class="alternate-reverse"><div></div></div>
</div>

### animation-fill-mode

An animation's **fill mode** defines what happens _before_ the animation starts and _after_ it ends.

When you define **keyframes** you define **CSS rules** to be applied at different steps of the animation. Now, these CSS rules can _clash_ with the ones _already applied_ on the elements being animated.

The fill mode allows to tell the browser if the _animation's styles_ should **also** be applied **outside of the animation**.

Let's imagine a **button** that is:

* **red** by default
* turns **blue** at the start of the animation
* ends up **green** when the animation is over

<div class="table">
  <table>
    <tr>
      <th><code>animation-fill-mode</code></th>
      <th>Before the animation</th>
      <th>Start of the animation</th>
      <th>End of the animation</th>
      <th>After the animation</th>
    </tr>
    <tr>
      <td><code>none</code></td>
      <td><a class="fill-mode fill-mode-red">Default</a></td>
      <td><a class="fill-mode fill-mode-blue">Start</a></td>
      <td><a class="fill-mode fill-mode-green">End</a></td>
      <td><a class="fill-mode fill-mode-red">Default</a></td>
    </tr>
    <tr>
      <td><code>forwards</code></td>
      <td><a class="fill-mode fill-mode-red">Default</a></td>
      <td><a class="fill-mode fill-mode-blue">Start</a></td>
      <td><a class="fill-mode fill-mode-green">End</a></td>
      <td><a class="fill-mode fill-mode-green">End</a></td>
    </tr>
    <tr>
      <td><code>backwards</code></td>
      <td><a class="fill-mode fill-mode-blue">Start</a></td>
      <td><a class="fill-mode fill-mode-blue">Start</a></td>
      <td><a class="fill-mode fill-mode-green">End</a></td>
      <td><a class="fill-mode fill-mode-red">Default</a></td>
    </tr>
    <tr>
      <td><code>both</code></td>
      <td><a class="fill-mode fill-mode-blue">Start</a></td>
      <td><a class="fill-mode fill-mode-blue">Start</a></td>
      <td><a class="fill-mode fill-mode-green">End</a></td>
      <td><a class="fill-mode fill-mode-green">End</a></td>
    </tr>
  </table>
</div>

<div class="result" id="result-4">
  <p>
    <span><strong>1.</strong> Before the animation</span>
    <span><strong>2.</strong> During the animation</span>
    <span><strong>3.</strong> After the animation</span>
  </p>
  <p><strong>None</strong>: the animation styles do not affect the default style</p>
  <p>
    <span>Default red</span>
    <span>From blue to green</span>
    <span>Back to red again</span>
  </p>
  <div class="none"><div></div></div>
  <p><strong>Forwards</strong>: the last styles applied at the end of the animation are retained afterwards</p>
  <p>
    <span>Default red</span>
    <span>From blue to green</span>
    <span>Remains green</span>
  </p>
  <div class="forwards"><div></div></div>
  <p><strong>Backwards</strong>: the animation's styles will already be applied before the animation actually starts</p>
  <p>
    <span>Already blue</span>
    <span>From blue to green</span>
    <span>Back to red again</span>
  </p>
  <div class="backwards"><div></div></div>
  <p><strong>Both</strong>: the styles are applied before and after the animation plays</p>
  <p>
    <span>Already blue</span>
    <span>From blue to green</span>
    <span>Remains green</span>
  </p>
  <div class="both"><div></div></div>
</div>

<style type="text/css">
#result-1{ padding: 1rem;}
#result-1 a{ animation: bouncing 0.5s cubic-bezier(.1,.25,.1,1) 0s infinite alternate both; background: lightslategrey; border-radius: 2px; display: inline-block; color: white; cursor: pointer; font-size: 0.75rem; font-weight: 300; letter-spacing: 0.2em; padding: 1em 2em 1.1em; position: relative; text-decoration: none; text-transform: uppercase; vertical-align: top;}

@keyframes bouncing{
  0%  { bottom: 0; box-shadow: 0 0 5px rgba(0,0,0,0.5);}
  100%{ bottom: 50px; box-shadow: 0 50px 50px rgba(0,0,0,0.1);}
}

#result-2{ height: 300px; padding: 0; width: 300px;}
#result-2 p{ animation: around 4s linear 0s infinite; background: turquoise; color: white; height: 60px; line-height: 60px; margin: 0; position: absolute; text-align: center; width: 60px;}

@keyframes around {
  0%  { left: 0; top: 0;}
  25% { left: 240px; top: 0;}
  50% { left: 240px; top: 240px;}
  75% { left: 0; top: 240px;}
  100%{ left: 0; top: 0;}
}

#result-3{ padding-bottom: 1rem;}
#result-3 p{ color: grey;}
#result-3 p strong{ font-weight: bold;}
#result-3 div{ background: hsl(217,4%,96%); height: 20px; width: 220px;}
#result-3 div div{ animation: swipe 2s linear infinite; background: crimson; height: 20px; left: 0; margin-top: -1rem; position: relative; transition: 1s; width: 20px;}
#result-3 .normal div{ animation-direction: normal;}
#result-3 .reverse div{ animation-direction: reverse;}
#result-3 .alternate div{ animation-direction: alternate;}
#result-3 .alternate-reverse div{ animation-direction: alternate-reverse;}
#result-3 p:nth-child(1) strong{ color: crimson;}
#result-3 div:nth-child(2) div{ background: crimson;}
#result-3 p:nth-child(3) strong{ color: midnightblue;}
#result-3 div:nth-child(4) div{ background: midnightblue;}
#result-3 p:nth-child(5) strong{ color: mediumseagreen;}
#result-3 div:nth-child(6) div{ background: mediumseagreen;}
#result-3 p:nth-child(7) strong{ color: goldenrod;}
#result-3 div:nth-child(8) div{ background: goldenrod;}

@keyframes swipe {
  0%  { left: 0;}
  100%{ left: 200px;}
}

#result-4{ padding: 1rem 1rem 0;}
#result-4 p{ color: grey; margin: 0; position: relative;}
#result-4 p:first-child{ margin-bottom: 1rem;}
#result-4 p span{ animation: toggle 6s infinite both; left: 0; position: absolute;}
#result-4 p:first-child span{ animation-name: tabs; margin-right: 1rem; position: static;}
#result-4 p span:nth-child(1){ animation-delay: 0; position: static;}
#result-4 p span:nth-child(2){ animation-delay: 2s;}
#result-4 p span:nth-child(3){ animation-delay: 4s;}
#result-4 div{ background: hsl(217,4%,96%); height: 20px; margin-bottom: 1rem; width: 220px;}
#result-4 div div{ animation: race-none 6s linear infinite; background: crimson; height: 20px; margin-bottom: 0; position: relative; width: 20px;}
#result-4 div:nth-child(7) div{ animation-name: race-forwards;}
#result-4 div:nth-child(10) div{ animation-name: race-backwards;}
#result-4 div:nth-child(13) div{ animation-name: race-both;}

a.fill-mode,
a.fill-mode:hover{ background: crimson; border-radius: 2px; display: inline-block; color: white !important; cursor: pointer; font-size: 0.75rem; font-weight: 300; letter-spacing: 0.2em; padding: 1em 2em 1.1em; position: relative; text-decoration: none !important; text-transform: uppercase; vertical-align: top;}
a.fill-mode-blue,
a.fill-mode-blue:hover{ background: midnightblue;}
a.fill-mode-green,
a.fill-mode-green:hover{ background: mediumseagreen;}

@keyframes tabs {
  0%  { opacity: 0.2;}
  1%  { opacity: 1;}
  33% { opacity: 1;}
  34% { opacity: 0.2;}
  100%{ opacity: 0.2;}
}

@keyframes toggle {
  0%  { opacity: 0;}
  1%  { opacity: 1;}
  33% { opacity: 1;}
  34% { opacity: 0;}
  100%{ opacity: 0;}
}

@keyframes race-none {
  0%  { background: crimson; left: 0;}
  33%  { background: crimson; left: 0;}
  34%  { background: midnightblue; left: 100px;}
  66%  { background: mediumseagreen; left: 200px}
  67%  { background: crimson; left: 0;}
  100%{ background: crimson; left: 0;}
}

@keyframes race-forwards {
  0%  { background: crimson; left: 0;}
  33%  { background: crimson; left: 0;}
  34%  { background: midnightblue; left: 100px;}
  66%  { background: mediumseagreen; left: 200px}
  67%  { background: mediumseagreen; left: 200px;}
  100%{ background: mediumseagreen; left: 200px;}
}

@keyframes race-backwards {
  0%  { background: midnightblue; left: 100px;}
  33%  { background: midnightblue; left: 100px;}
  34%  { background: midnightblue; left: 100px;}
  66%  { background: mediumseagreen; left: 200px}
  67%  { background: crimson; left: 0;}
  100%{ background: crimson; left: 0;}
}

@keyframes race-both {
  0%  { background: midnightblue; left: 100px;}
  33%  { background: midnightblue; left: 100px;}
  34%  { background: midnightblue; left: 100px;}
  66%  { background: mediumseagreen; left: 200px}
  67%  { background: mediumseagreen; left: 200px;}
  100%{ background: mediumseagreen; left: 200px;}
}
</style>

