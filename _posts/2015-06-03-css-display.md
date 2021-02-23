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
      <a style="background: red; color: white;">Inicio</a>
    </li>
    <li>
      <a style="background: red; color: white;">Características</a>
    </li>
    <li>
      <a style="background: red; color: white;">Precio</a>
    </li>
    <li>
      <a style="background: red; color: white;">Sobre nosotros</a>
    </li>
  </ul>
</div>

Si convertimos estos enlaces en **bloques**, aumentamos su área objetivo:

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

Esto convierte cualquier elemento en elementos **en línea**, como si fueran simplemente **texto**.

A menudo se usa para crear **navegaciones horizontales**, donde **elementos de lista** son semánticamente pero no visualmente útiles.

{% highlight html %}
<ul class="menu">
  <li>
    <a>Inicio</a>
  </li>
  <li>
    <a>Caracterísiticas</a>
  </li>
  <li>
    <a>Precio</a>
  </li>
  <li>
    <a>Sobre nosotros</a>
  </li>
</ul>
{% endhighlight %}

<div class="resultado">
  <ul>
    <li>
      <a>Inicio</a>
    </li>
    <li>
      <a>Caracterísiticas</a>
    </li>
    <li>
      <a>Precio</a>
    </li>
    <li>
      <a>Sobre nosotros</a>
    </li>
  </ul>
</div>

{% highlight css %}
.menu li{ display: inline;}
{% endhighlight %}

<div class="resultado">
  <ul>
    <li style="display: inline;">
      <a>Inicio</a>
    </li>
    <li style="display: inline;">
      <a>Características</a>
    </li>
    <li style="display: inline;">
      <a>Precio</a>
    </li>
    <li style="display: inline;">
      <a>Sobre nosotros</a>
    </li>
  </ul>
</div>

### display: list-item

Los únicos elementos HTML que se muestran como `elemento de lista` son (como era de esperar) **elementos de lista**` <li> `pero también **descripciones de definición**` <dd> `.

Un elemento de lista se representa con una viñeta (si está en una lista desordenada `<ul>`) o con un número incremental (si está dentro de una lista ordenada `<ol>`).

Debido a que la representación de estas viñetas y números varía de un navegador a otro, y también es difícil de diseñar en CSS, la regla `display: list-item` nunca se usa. En realidad, es común que los `<li>` s se representen como `display: block` o` display: inline`, ya que son más flexibles de estilo.

### display: none

La aplicación de `display: none;` a un elemento HTML lo elimina de su página web, como si nunca hubiera existido en su código.

{% highlight css %}
.gone-baby-gone{ display: none;}
{% endhighlight %}

{% highlight html %}
<p>¿Escuché a alguien hablar?</p>
<p class="gone-baby-gone">Hahahahahah</p>
<p>Debo estar soñando...</p>
{% endhighlight %}

<div class="resultado">
  <p>¿Escuché a alguien hablar?</p>
  <p style="display: none;">Hahahahahah</p>
  <p>Debo estar soñando...</p>
</div>

Hay 3 párrafos en el código, pero solo aparecen 2, como si el segundo nunca hubiera existido.

### visibility: hidden

La propiedad CSS  `visibility` es ligeramente similar a "display". La aplicación de `visibility: hidden;` oculta_ un elemento de su página, pero solo lo vuelve **invisible**: aún ocupa el espacio que se suponía que debía.

{% highlight css %}
.hollow-man{ visibility: hidden;}
{% endhighlight %}

{% highlight html %}
<p>Tan lejos de mi </p>
<p class="hollow-man">Hasta ahora no puedo ver</p>
<p class="hollow-man">Tan lejos de mi</p>
<p class="hollow-man">Estás tan lejos de mí</p>
<p>Estás tan lejos...</p>
{% endhighlight %}

<div class="resultado">
  <p>Tan lejos de mi </p>
  <p style="visibility: hidden;">Hasta ahora no puedo ver</p>
  <p style="visibility: hidden;">Tan lejos de mi</p>
  <p style="visibility: hidden;">Estás tan lejos de mí</p>
  <p>Estás tan lejos...</p>
</div>

Hay 5 párrafos en el código, solo aparecen 2, pero el espacio que se suponía que ocuparían los párrafos ocultos sigue estando _ ahí_, pero no puede verlos.
