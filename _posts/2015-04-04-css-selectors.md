---
layout: post
title: "CSS <strong>Selectors</strong>"
subtitle: "How to <strong>target</strong> HTML elements"
section: css
---

Because we don't want to style all our HTML elements at once, we need to be able to **target** a subset of these HTML elements.

CSS selectors define _which_ elements we want our styling to be applied to.

### Generic tag selectors

Targeting generic HTML tags is easy: just use the tag name.

{% highlight css %}
a{ /* Links */ }
p{ /* Paragraphs */ }
ul{ /* Unordered lists */ }
li{ /* List items */ }
{% endhighlight %}

There's a direct connection between the _name_ of the HTML tag and the CSS _selector_ used.

### Classes

Considering we probably don't want to style all paragraphs or all titles identically, we need to _differentiate_ them.

Of all HTML attributes, the `class` attribute is the most important for CSS. It allows us to define a **group** of HTML elements that we can _target specifically_. Just put a dot `.` in front of the class name you want to use:

{% highlight css %}
.date {
  color: red;
}
{% endhighlight %}

On one side, there is the HTML `class` attribute with the value `date`. It must match the name of the CSS class.

You can use any name for your CSS class, as long as it doesn't start with a number.
{: .info}

The `.date` class selector will target all HTML elements that have the `class="date"` attribute. So, the following HTML elements will **all** be styled:

{% highlight html %}
<p class="date">
  Saturday Feb 21
</p>
<p>
  The event will be on <em class="date">Saturday</em>.
</p>
{% endhighlight %}

<div class="result">
  <p style="color:red;">Saturday Feb 21</p>
  <p>The event will be on <em style="color:red;">Saturday</em>.</p>
</div>

Bear in mind that the tag name is **irrelevant**. Only the `class` HTML attribute is.

### IDs

You can also use the `id` attribute in your HTML, and target it with a hash `#` in your CSS:

{% highlight css %}
#tagline{ color: orange;}
{% endhighlight %}

{% highlight html %}
<h1 id="tagline">This heading will be orange.</h1>
{% endhighlight %}

ID are similar to Classes, as they rely upon an HTML attribute.

### Example

<div class="table">
  <table>
    <thead>
      <tr>
        <th>HTML</th>
        <th>Possible CSS selectors</th>
        <th>What it means</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><pre><code>&lt;p&gt;&lt;/p&gt;</code></pre></td>
        <td><code>p</code></td>
        <td><code>Every &lt;p&gt;</code></td>
      </tr>
      <tr>
        <td><pre><code>&lt;div class="global"&gt;&lt;/div&gt;</code></pre></td>
        <td>
          <code>div</code><br>
          <code>.global</code><br>
          <code>div.global</code></td>
          <td>Every <code>&lt;div&gt;</code><br>
          Every elements with <code>class=”global”</code><br>
          Every <code>&lt;div&gt;</code> with <code>class=”global”</code>
        </td>
      </tr>
      <tr>
        <td><pre><code>&lt;ul id="menu"&gt;</code></pre></td>
        <td>
          <code>#menu</code><br>
          <code>ul#menu</code>
        </td>
        <td>
          The only element with <code>id=”menu”</code><br>
          The only <code>&lt;ul&gt;</code> with <code>id=”menu”</code>
        </td>
      </tr>
      <tr>
        <td>
          <pre><code>&lt;ol class="dico"&gt;
  &lt;li&gt;Un cobaye&lt;/li&gt;
  &lt;li&gt;Des cobaux&lt;/li&gt;
&lt;/ol&gt;</code></pre>
        </td>
        <td>
          <code>li</code><br>
          <code>ol li</code><br>
          <code>.dico li</code>
        </td>
        <td>
          Every <code>&lt;li&gt;</code><br>
          Every <code>&lt;li&gt;</code> with an <code>&lt;ol&gt;</code> as ancestor <br>
          Every <code>&lt;li&gt;</code> with a <code>class="dico"</code> element as ancestor
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Combining selectors

Let's reuse our previous example where we want our dates to be red:

{% highlight css %}
.date {
  color: red;
}
{% endhighlight %}

{% highlight html %}
<p class="date">
  Saturday Feb 21
</p>
<p>
  The event will be on <em class="date">Saturday</em>.
</p>
{% endhighlight %}

<div class="result">
  <p style="color:red;">Saturday Feb 21</p>
  <p>The event will be on <em style="color:red;">Saturday</em>.</p>
</div>

What if we want our dates that are in `em` elements to blue instead? We can **add** the following CSS rule:

{% highlight css %}
em.date {
  color: blue;
}
{% endhighlight %}

The `em.date` combines:

* a tag selector `em`
* a class selector `.date`

It will only apply to `<em class="date"></em>` HTML elements. It **won't** affect other `.date` or `em`.

### Hierarchy selectors

A **space** in a selector defines a ancestor/descendant relationship. Let's say we want the links in our header to be in red:

{% highlight css %}
header a {
  color: red;
}
{% endhighlight %}

This can be read from right to left as: _"Select all `a` elements that are within a `header` element"_. This will prevent all other links (that aren't in the header) to remain unaffected.

### Pseudo-class selectors

HTML elements can have different **states**. The most common case is when you hover over a link. It's possible in CSS to apply a different style when such an event occurs.

Pseudo-class selectors are attached to usual selectors and start with a **colon** `:`:

{% highlight css %}
a {
  color: blue;
}

a:hover {
  color: red;
}
{% endhighlight %}
