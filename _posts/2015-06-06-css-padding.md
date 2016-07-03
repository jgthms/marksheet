---
layout: post
title: "CSS <strong>padding</strong>"
subtitle: "To give <strong>space</strong> to your inner content"
section: css
---

The **padding** is the space between an element's _border_ and its _content_.

The amount of space can be defined using any of the [size units](css-size-units.html).

{% highlight css %}
blockquote { padding: 20px; }
{% endhighlight %}

As for borders, the padding can be set _individually_ for any of the 4 sides.

{% highlight css %}
blockquote { padding-bottom: 20px; }
{% endhighlight %}

Because the padding lies **between** the _border_ and the _content_, it's easier to visualize the inner space with a border applied:

{% highlight css %}
blockquote { background: yellow; border: 1px solid blue; }
{% endhighlight %}

<div class="result">
  <blockquote style="background: yellow; border: 1px solid blue;">
    Good night, good night! Parting is such sweet sorrow, that I shall say good night till it be morrow.
  </blockquote>
</div>

Adding a padding will provide space between the textual content and the borders:

{% highlight css %}
blockquote { background: yellow; border: 1px solid blue; padding: 20px; }
{% endhighlight %}

<div class="result">
  <blockquote style="background: yellow; border: 1px solid blue; padding: 20px;">
    Good night, good night! Parting is such sweet sorrow, that I shall say good night till it be morrow.
  </blockquote>
</div>

Notice how the element's background stretches until its borders. Applying padding allows to extend that background.
