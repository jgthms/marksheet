---
layout: post
title: "CSS <strong>margin</strong>"
subtitle: "To <strong>push away</strong> your neighbours"
section: css
---

If padding adds space _inside_ an element (between its border and its content), margins adds space _outside_ between an element and _other elements_.

{% highlight html %}
<p>Hey, you know what sucks?</p>
<p>vaccuums</p>
<p>Hey, you know what sucks in a metaphorical sense?</p>
<p>black holes</p>
<p>Hey, you know what just isn't cool?</p>
<p>lava?</p>
{% endhighlight %}

<div class="result">
  <p>Hey, you know what sucks?</p>
  <p>vaccuums</p>
  <p>Hey, you know what sucks in a metaphorical sense?</p>
  <p>black holes</p>
  <p>Hey, you know what just isn't cool?</p>
  <p>lava?</p>
</div>

{% highlight css %}
p{ margin: 40px;}
{% endhighlight %}

<div class="result">
  <p style="margin: 40px;">Hey, you know what sucks?</p>
  <p style="margin: 40px;">vaccuums</p>
  <p style="margin: 40px;">Hey, you know what sucks in a metaphorical sense?</p>
  <p style="margin: 40px;">black holes</p>
  <p style="margin: 40px;">Hey, you know what just isn't cool?</p>
  <p style="margin: 40px;">lava?</p>
</div>

### Merging vertical margins

Let's have a title and a subtitle.

{% highlight css %}
.title{ margin-bottom: 30px;}
.subtitle{ margin-top: 15px;}
{% endhighlight %}

{% highlight html %}
<h1 class="title">MarkSheet</h1>
<h2 class="subtitle">A simple HTML/CSS tutorial</h2>
{% endhighlight %}

<div class="result">
  <h1 style="margin: 0 0 30px;">MarkSheet</h1>
  <h2 style="margin: 15px 0 0;">A simple HTML/CSS tutorial</h2>
</div>

As the title of this section may have hinted at the answer, the margin between the two elements will be `30px`, and **not** `45px`. That is because margins that "touch" each other will **merge** with each other.

#### "That's weird!"

You can consider an element's margin as the **minimum space** it want to stay _away_ from other elements.

It's like the element saying: "Ok, I want the next element to be _at least_ 30px away from me. If it's more, why not. But at least 30px please!"

### Choosing between margin and padding

Tricky question. This question comes up when no border nor background is applied. Indeed: if a border or a background is set on _either_ element, the visual rendering will be different. But if none is present, and considering margins and paddings are _transparent_, the result will look the same.

Ask yourself _why_ you're spacing things. Is it to allow the inner content to breathe more? Or is it to allow the whole element to breathe more? It's padding in the first case, margin in the second.

Also, considering how margins can **merge**.
