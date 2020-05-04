---
layout: post
title: "HTML: La <strong>Sintaxis</strong>"
subtitle: "Como cualquier lenguaje, HTML tiene <strong>reglas</strong>"
section: html
---

**HTML** significa (en Inglés) **H**yper**T**ext **M**arkup **L**anguage:

* **HyperText** significa que usa la parte HTTP de Internet
* **Markup** significa que el código que escribes tiene palabras clave
* **Language** significa que puede ser leído por ambos: computadoras y seres humanos

Como cualquier lenguaje, HTML viene con un conjunto de **reglas**. Estas reglas son relativamente simples. Todo se resume en definir **límites**, para saber dónde algo _comienza_ y donde _termina_.

Aquí hay un párrafo de muestra en HTML:

{% highlight html %}
<p>Si Tetris me ha enseñado algo, es que los errores se acumulan y los logros desaparecen.
</p>
{% endhighlight %}

<div class="result"><p>Si Tetris me ha enseñado algo, es que los errores se acumulan y los logros desaparecen..</p></div>

Lo que ves entre signos de  **mayor qué** y **menor qué** `<`{:.language-html} y `>`{:.language-html} son **etiquetas** de HTML. Éstas definen donde algo _comienza_ y donde _termina_.

Each of them carry a specific **meaning**. In this case, `p`{:.language-html} stands for **paragraph**.

They usually go in pairs:

* the _opening_ tag `<p>`{:.language-html} defines the **start** of the paragraph
* the _closing_ tag `</p>`{:.language-html} defines its **end**

The only difference between an opening and closing tag is the **slash** `/`{:.language-html} that precedes the name of the tag.

When you combine an opening tag, a closing tag, and everything in between, you obtain an **HTML element**. The whole line is an HTML element that uses the HTML tags `<p>`{:.language-html} and `</p>`{:.language-html}.

If you [view this sample in your browser](/html/sample-paragraph.html), you'll notice that **HTML tags are not displayed** by the browser. They are only _read_ by the browser to know what _type_ of **content** you've written.

### Where to write HTML

You've probably come across simple text files, those that have a `.txt` extension.

For such a text file to become an **HTML document** (instead of a text document), you need to use an `.html` extension.

Open your **text editor**, and copy paste the following:

{% highlight html %}
<p>This is my firstwebpage!</p>
{% endhighlight %}

Save this file as `my-first-webpage.html` and just open it with your browser, and you'll see:

<div class="result"><p>This is my firstwebpage!</p></div>

Remember:

* use a text editor like Notepad++ to **create** HTML documents
* use a browser like Firefox to **open** HTML documents

### Attributes

Attributes act like **extra** information tied to an HTML element. They are written _within_ an HTML _tag_. As such, they are not displayed by the browser either.

For example, the `href` attribute is used to define the target of a **link** (which uses an **a**nchor tag):

{% highlight html %}
<a href="http://www.mozilla.com/firefox">Download Firefox</a>
{% endhighlight %}

<div class="result"><a href="http://www.mozilla.com/firefox">Download Firefox</a></div>

There are [16 HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) that can be used on _any_ HTML element. All of them are **optional**.

You'll mostly use `class` (which is used for CSS), and `title` (which is the tooltip that appears when hovering an item like this one).

Some HTML elements have **obligatory** attributes. For example, when inserting an image, you have to provide the location of the image, using the `src` (source) attribute:

{% highlight html %}
<img src="#" alt="Description of the image">
{% endhighlight %}

Considering that the purpose of the `<img>` element is to display an image, it makes sense for the path to the image to be **required**.

### Comments

If you write something in your code without disrupting how the browser will display your page, you can write **comments**. They will be _ignored_ by the browser, and are only useful for us humans who write the code.

A comment starts with `<!--` and ends with `-->`.

{% highlight html %}
<!-- This sentence will be ignored by the browser -->
<p>Hello World!</p>
{% endhighlight %}

<div class="result"><p>Hello World!</p></div>

### Self-enclosing elements

Some HTML elements only have an opening tag:

{% highlight html %}
<br> <!-- line-break -->
<img src="http://placehold.it/50x50" alt="Description"> <!-- image -->
<input type="text"> <!-- text input -->
{% endhighlight %}

Because they don't have a closing tag and consequently can't contain anything _inside_ them, self-enclosing elements usually carry a few attributes, to provide them with additional information.
