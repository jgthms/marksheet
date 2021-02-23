---
Diseño: post
Título: "CSS <strong>mostrar</strong>"
Subtítulo: "Cambiando el <strong>tipo</strong> de un elemento HTML"
sección: css
---

Hemos visto que hay principalmente [2 tipos de elementos HTML] (/ html-block-inline.html): elementos **a nivel de bloque** y **en línea**. También hemos mencionado algunas alternativas, como **elemento de lista** o **celda de tabla**.

La propiedad `display` permite cambiar el _tipo_ del elemento HTML. Por defecto, un párrafo `<p>` (un elemento de **nivel de bloque**) tendrá un valor de `display` predeterminado de` block`, pero se puede representar como un **en línea** uno:

{% Destacar css %}
p{ display: inline;}
{% resaltar %}

### ¿Por qué no utilizar un elemento HTML en línea, como `<span>` entonces?

Porque elige un elemento HTML por su **significado**, no por su representación. Si hemos decidido que un párrafo es lo que mejor se adapta a nuestro contenido, no debemos cambiar la etiqueta _sólo con fines de estilo_. CSS está aquí para encargarse del estilo.

En resumen, `display` permite alterar el **tipo** de un elemento _sin_ cambiar su **significado**.

Cada opción de `display` tiene comportamientos de representación específicos:

* `block` ocupará todo el ancho disponible
* `inline` actuará como texto sin formato
* `inline-block` es, como su nombre indica, un compuesto de comportamiento en bloque y en línea, una opción _ "lo mejor de ambos mundos" _
* `list-item` es similar a `block` ya que ocupa todo el ancho disponible, pero muestra un punto adicional
* `table`, `table-row` y `table-cell` tienen un comportamiento muy específico, aunque inesperado, que permite diseños más interesantes

### display: block

Esto convertirá cualquier elemento en un elemento **bloque**.

Esta técnica se usa a menudo en **enlaces** para aumentar su zona en la que se puede hacer clic, que se puede evaluar fácilmente estableciendo un color de fondo.

{% highlight css %}
.menu a{ background: red; color: white;}
{% endhighlight %}

{% highlight html %}
<ul class="menu">
  <li>
    <a>Home</a>
  </li>
  <li>
    <a>Features</a>
  </li>
  <li>
    <a>Pricing</a>
  </li>
  <li>
    <a>About</a>
  </li>
</ul>
{% endhighlight %}

<div class="result">
  <ul>
    <li>
      <a style="background: red; color: white;">Home</a>
    </li>
    <li>
      <a style="background: red; color: white;">Features</a>
    </li>
    <li>
      <a style="background: red; color: white;">Pricing</a>
    </li>
    <li>
      <a style="background: red; color: white;">About</a>
    </li>
  </ul>
</div>

If we turn these links into **blocks**, we increase their target area:

{% highlight css %}
.menu a{ background: red; color: white; display: block;}
{% endhighlight %}

<div class="result">
  <ul>
    <li>
      <a style="background: red; color: white; display: block;">Home</a>
    </li>
    <li>
      <a style="background: red; color: white; display: block;">Features</a>
    </li>
    <li>
      <a style="background: red; color: white; display: block;">Pricing</a>
    </li>
    <li>
      <a style="background: red; color: white; display: block;">About</a>
    </li>
  </ul>
</div>


### display: inline

This turns any element into **inline** elements, as if they were just simple **text**.

It's often used to create **horizontal navigations**, where **list items** are semantically but not visually useful.

{% highlight html %}
<ul class="menu">
  <li>
    <a>Home</a>
  </li>
  <li>
    <a>Features</a>
  </li>
  <li>
    <a>Pricing</a>
  </li>
  <li>
    <a>About</a>
  </li>
</ul>
{% endhighlight %}

<div class="result">
  <ul>
    <li>
      <a>Home</a>
    </li>
    <li>
      <a>Features</a>
    </li>
    <li>
      <a>Pricing</a>
    </li>
    <li>
      <a>About</a>
    </li>
  </ul>
</div>

{% highlight css %}
.menu li{ display: inline;}
{% endhighlight %}

<div class="result">
  <ul>
    <li style="display: inline;">
      <a>Home</a>
    </li>
    <li style="display: inline;">
      <a>Features</a>
    </li>
    <li style="display: inline;">
      <a>Pricing</a>
    </li>
    <li style="display: inline;">
      <a>About</a>
    </li>
  </ul>
</div>

### display: list-item

The only HTML elements displayed as `list-item` are the (unsurprisingly) **list items** `<li>` but also the **definition descriptions** `<dd>`.

A list item is rendered with a bullet point (if in an unordered list `<ul>`) or with a incremental number (if within an ordered list `<ol>`).

Because the rendering of these bullet points and numbers varies across browsers, and is also hard to style in CSS, the `display: list-item` rule is never used. Actually, it is common for `<li>`s to be rendered as `display: block` or `display: inline`, as they are more flexible to style.

### display: none

Applying `display: none;` to an HTML element removes it from your webpage, as if it never existed in your code.

{% highlight css %}
.gone-baby-gone{ display: none;}
{% endhighlight %}

{% highlight html %}
<p>Did I hear someone speaking??</p>
<p class="gone-baby-gone">Hahahahahah</p>
<p>I must be dreaming...</p>
{% endhighlight %}

<div class="result">
  <p>Did I hear someone speaking??</p>
  <p style="display: none;">Hahahahahah</p>
  <p>I must be dreaming...</p>
</div>

There are 3 paragraphs in the code, but only 2 appear, as if the 2nd one never existed.

### visibility: hidden

The CSS property `visibility` is slightly similar to `display`. Applying `visibility: hidden;` _hides_ an element from your page, but only turns it **invisible**: it still takes up the space it was supposed to.

{% highlight css %}
.hollow-man{ visibility: hidden;}
{% endhighlight %}

{% highlight html %}
<p>So far away from me </p>
<p class="hollow-man">So far i just can't see</p>
<p class="hollow-man">So far away from me</p>
<p class="hollow-man">You're so far away from me</p>
<p>You're so far away...</p>
{% endhighlight %}

<div class="result">
  <p>So far away from me </p>
  <p style="visibility: hidden;">So far i just can't see</p>
  <p style="visibility: hidden;">So far away from me</p>
  <p style="visibility: hidden;">You're so far away from me</p>
  <p>You're so far away...</p>
</div>

There are 5 paragraphs in the code, only 2 appear, but the space that the hidden paragraphs were _supposed_ to take is still _there_, but you can't see them.
