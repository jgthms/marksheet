---
layout: post
title: "CSS <strong>float</strong>"
subtitle: "The most unpredictable property"
section: css
---

Behind the word `float`, an endless sea of possibilities (and misbehaviors).

`float` is probably the most difficult CSS concept to grasp. Its behavior can be intriguing, unexpected, and magical. Probably because, of all _positioning_ properties there are, it is the one that most _influences_ its **surroundings**.

In other words, applying a float not only modifies the element it's applied upon **but also alters its ancestors, siblings, descendants, and following elements**.

`float` can only have one of these 3 values:

* `left` and `right` turns an element into a **floating** one
* `none` removes the floating aspect

### When to use float

The purpose of **floating** an element is to **push it to one side** and make the text **wrap around it**.

To explain the behaviour, let's use a common example: floating an image within a paragraph.

{% highlight html %}
<p>
  <img src="http://placehold.it/150x150">
  The bells of the neighbouring church made a jangling tumult, a cart carelessly driven smashed, amid shrieks and curses, against the water trough up the street.  Sickly yellow lights went to and fro in the houses, and some of the passing cabs flaunted unextinguished lamps. And overhead the dawn was growing brighter, clear and steady and calm.
</p>
{% endhighlight %}

<div class="result">
  <p style="background: gold; padding: 10px; width: 600px;">
    <img src="http://placehold.it/150x150">
    It was while the curate had sat and talked so wildly to me under the hedge in the flat meadows near Halliford, and while my brother was watching the fugitives stream over Westminster Bridge, that the Martians had resumed the offensive. So far as one can ascertain from the conflicting accounts that have been put forth, the majority of them remained busied with preparations in the Horsell pit until nine that night, hurrying on some operation that disengaged huge volumes of green smoke.
  </p>
</div>

The problem when inserting an image within a text is that **an image must fit on a single line of text**, and will therefore _extend_ the height of the line it's on. In our case, our image is 150px high.

What we want is to wrap the text _around_ the image:

{% highlight css %}
img { float: left; }
{% endhighlight %}

<div class="result">
  <p style="background: gold; padding: 10px; width: 600px;">
    <img style="float: left;" src="http://placehold.it/150x150">
    It was while the curate had sat and talked so wildly to me under the hedge in the flat meadows near Halliford, and while my brother was watching the fugitives stream over Westminster Bridge, that the Martians had resumed the offensive. So far as one can ascertain from the conflicting accounts that have been put forth, the majority of them remained busied with preparations in the Horsell pit until nine that night, hurrying on some operation that disengaged huge volumes of green smoke.
  </p>
</div>

As you can see, the image is **pushed to the left**, and the text that follows just wraps around the image:

* first, the text is pushed to the right, _next_ to the image
* then, when there's space available _below_ the image, the text will fill that space

#### What if the text isn't long enough?

<div class="result">
  <p style="background: gold; padding: 10px; width: 600px;">
    <img style="float: left;" src="http://placehold.it/150x150">
    He heard footsteps running to and fro in the rooms, and up and down stairs behind him
  </p>
</div>

The floating image will **overflow** because it's higher than its yellow container. And as you can _actually_ see, it even visually breaks **this paragraph you're reading**.

I've intentionally left this layout error to showcase _why_ floats are unpredictable: they can even break their parent's siblings!

Because `float: left` takes the image _out of_ the flow, the yellow paragraph's height is only **the height of its text**. In other words, the height of the image _isn't taken into account_.

### Float = block

Floating elements will have a `display: block` applied to them automatically, and will mostly behave like blocks:

* you can set a specific height and width
* if no height is set, the element's height is that of the line-height
* if a `width: 100%` is applied, it will look like a block-level element

### Clearing the float

The `clear` property allows to **push elements _after_ the float**. It can only be applied on **block** elements.

{% highlight html %}
<p>
  <img src="http://placehold.it/150x150">
  <span>He heard footsteps running to and fro in the rooms, and up and down stairs behind him</span>
</p>
{% endhighlight %}

{% highlight css %}
img { float: left; }
span { clear: left; display: block; }
{% endhighlight %}

<div class="result">
  <p style="background: gold; padding: 10px; width: 600px;">
    <img style="float: left;" src="http://placehold.it/150x150">
    <span style="clear: left; display: block;">He heard footsteps running to and fro in the rooms, and up and down stairs behind him</span>
  </p>
</div>

Instead of having the text pushed _next_ to the image, the `clear: left` pushes the text **below** the image.

It's different from having no float or clear at all, as the image is on its own line and _not_ on the same line as the text.

