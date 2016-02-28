---
layout: post
title: "CSS <strong>font-family</strong>"
subtitle: "Choosing a <strong>font</strong>"
section: css
---

CSS provides several **font** properties, that directly affect text rendering. The `font-family` property defines _which_ font to use.

### Generic font families

Fonts are grouped in 5 **generic** families:

* `serif` fonts have small lines attached to the end of each character
* `sans-serif`
* `monospace`
* `cursive`
* `fantasy`

`cursive` and `fantasy` are never used.
{: .info}

Because the `font-family` property is inherited by all HTML children elements, you can apply a font for the whole HTML document by applying it on the ancestor of all HTML elements: the `<body>` element.

{% highlight css %}
body { font-family: sans-serif; }
{% endhighlight %}

With this CSS rule, the webpage will use the **sans-serif** font defined by the user in his preferences.

### Web-safe fonts

The problem with using generic font names is that the design of your webpage will rely upon the font set by the user in his settings.

As you probably want your webpage to look the same on anyone's computer, you'll want to define a **specific** font to be used. To do so, just use the **name** of the font.

{% highlight css %}
body { font-family: Arial; }
{% endhighlight %}

Your webpage will use Arial **provided it is installed on the user's computer**. If the Arial font is not available on the user's computer, it will use the browser's default serif font (which is usually Times).

Arial is a safe choice though, because it is installed on all Windows and Mac computers, and on most Linux systems. That is why Arial is considered a **web-safe** font: you can safely use it in your CSS and be almost sure that the user's computer will have it installed.

There are **9** web-safe fonts:

* Arial
* Arial Black
* Comic Sans MS
* Courier New
* Georgia
* Impact
* Times New Roman
* Trebuchet MS
* Verdana

### Applying a list of fonts

Although using _any_ of these values for the `font-family` property is a safe bet, you can define **fallback** values by writing a **list of font families**:

{% highlight css %}
body { font-family: Arial, Verdana, sans-serif; }
{% endhighlight %}

By defining **multiple values** for `font-family`, the browser will look for the first value `Arial` and use it. If it's not available, it will use the following one `Verdana`. Finally, if that one isn't available either, it will use the browser's default sans-serif font.

It is good practice to use a **generic family** as the last value. If you can't define the specific font to use, you can at least define the _type_ of font you want.

Because designers want to use more original fonts but still want their webpage to look exactly the same on anyone's computer, it is possible to **include a font** in a webpage. That way, they make sure the font is available even if it's not present on the user's computer, simply because the website provides the font.

We'll look into this method called `@font-face`, and see how services like Google Fonts or Typekit can help you.
