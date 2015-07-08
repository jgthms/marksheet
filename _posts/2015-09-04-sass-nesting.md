---
layout: post
title: "Sass <strong>nesting</strong>"
subtitle: "Reusing the same parent selector"
section: sass
---

### Syntax

In Sass, **nesting CSS rules** allows to define **hierarchy selectors**:

{% highlight scss %}
.title{
  strong{}
  em{}
}
{% endhighlight %}

This will be compiled into:

{% highlight css %}
.title{}
.title strong{}
.title em{}
{% endhighlight %}

Because `strong` and `em` appear _within_ the `.title` rule (between the 2 curly braces `{` `}`), both will be **prepended** with the parent selector `.title`.

### Nesting purpose

Because [CSS priority](/css-priority.html) can be tricky, it's common to use be **specific** when writing selectors, by combining multiple classes/tags to prevent CSS rules to cancel each other out.

{% highlight css %}
.description{}
.description p{}
.description p a{}
.description p a:hover{}
.description p strong{}
.description table{}
.description table tr{}
.description table tr:nth-child(2n){}
.description table th,
.description table td{}
.description table td.empty,
.description table th.empty{}
.description table th{}
{% endhighlight %}

To prevent rewriting `.description`, let's use the ampersand `&`:

{% highlight scss %}
.description{}
  p{}
  p a{}
  p a:hover{}
  p strong{}
  table{}
  table tr{}
  table tr:nth-child(2n){}
  table th,
  table td{}
  table th{}
  table td.empty,
  table th.empty{}
}
{% endhighlight %}

You can go even further by replacing `& p` and `& table` with `&` to create **nested** selectors:

{% highlight scss %}
.description{}
  p{
    a{
      &:hover{}
    }
    strong{}
  }
  table{
    tr{
      &:nth-child(2n){}
    }
    th,
    td{
      &.empty{}
    }
    th{}
  }
}
{% endhighlight %}

Remember **[HTML nesting](/html-hierarchy.html)**? The indentation in Sass allows to _replicate_ how HTML elements are nested.

Notice how we only wrote `table` and `.empty` **once** for example.

It will generate exactly the CSS we started with:

{% highlight css %}
.description{}
.description p{}
.description p a{}
.description p a:hover{}
.description p strong{}
.description table{}
.description table tr{}
.description table tr:nth-child(2n){}
.description table th,
.description table td{}
.description table td.empty,
.description table th.empty{}
.description table th{}
{% endhighlight %}

### The ampersand parent selector

When you nest selectors in Sass, it basically adds a **space** between the _parent_ selector and the _child_ one. So:

{% highlight scss %}
//scss
.parent{
  .child{}
}

// becomes in css
.parent .child{}
{% endhighlight %}

The **space** between `.parent` and `.child` defines a **hierarchy**: this selector targets HTML elements with `class="child"` nested _within_ `class="parent"`.

Now, what if you want to use **pseudo-selectors** like `:hover`? Or you want to have a selector with **joined classes**? You can use the **ampersand** which is shortcut for the parent selector:

{% highlight scss %}
//scss
.parent{
  &:hover{}
  &.other-class{}
}

// becomes in css
.parent:hover{}
.parent.other-class{}
{% endhighlight %}

Notice how there is **no space** between `.parent` and either `:hover` or `.other-class`.

The `.parent.other-class` will target HTML elements that have `class="parent other-class"`.

### Full example

{% highlight css %}
.post-content{}
.post-content a{}
.post-content a:hover{}
.post-content aside{}
.post-content blockquote{}
.post-content code{}
.post-content h3{}
.post-content h3 a{}
.post-content h4{}
.post-content h4:before{}
.post-content h4:after{}
.post-content p{}
.post-content p:first-child{}
.post-content p:last-child{}
.post-content ul{}
.post-content ul ul{}
.post-content ul ul ul{}
.post-content dl{}
.post-content dl:before{}
.post-content dl dt{}
.post-content dl dd{}
.post-content pre{}
.post-content pre code{}
.post-content table{}
.post-content table tr{}
.post-content table tr:nth-child(2n){}
.post-content table th,
.post-content table td{}
.post-content table th{}
.post-content table td.empty,
.post-content table th.empty{}
.post-content table code{}
.post-content table pre{}
.post-content table pre:before{}
{% endhighlight %}

{% highlight scss %}
.post-content{
  a{
    &:hover{}
  }
  aside{}
  blockquote{}
  code{}
  h3{
    a{}
  }
  h4{
    &:before{}
    &:after{}
  }
  p{
    &:first-child{}
    &:last-child{}
  }
  ul{
    ul{
      ul{}
    }
  }
  dl{
    &:before{}
    dt{}
    dd{}
  }
  pre{
    code{}
  }
  table{
    tr{
      &:nth-child(2n){}
    }
    th,
    td{
      &.empty{}
    }
    th{}
    code{}
    pre{
      &:before{}
    }
  }
}
{% endhighlight %}

