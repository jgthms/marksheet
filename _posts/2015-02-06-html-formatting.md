---
layout: post
title: "<strong>Formateo</strong> HTML"
subtitle: "Cuando el <strong>espacio en blanco</strong> no importa"
section: html
---

Existe una diferencia entre lo **escrito** en su código HTML y lo **mostrado** en el navegador.

Como ya hemos visto, las etiquetas **HTML** como `<p>` solo son _leídas_ por el navegador (para saber qué _ tipo_ de contenido está escrito), pero **no las muestra** el navegador.

También hemos visto cómo es posible escribir **comentarios** HTML en su código, para ayudar al ser humano a leer el código, sin que el navegador muestre estos comentarios.

Otro tipo de código escrito _ ignorado_ por el navegador es **espacio en blanco**, que incluye:

* saltos de linea
* lineas vacías
* tabulaciones (o indentación)

### Saltos de línea

Los saltos de línea y las líneas vacías (que son una sucesión de saltos de línea) en el código HTML son **ignorados** por el navegador. Solo representan un espacio **único**.

{% highlight html %}
<blockquote>
La idea original de la web era que debería ser una colaboración


espacio


donde puede comunicarse compartiendo información.
</blockquote>
{% endhighlight %}

<div class="result">
  <blockquote>
  La idea original de la web era que debería ser un espacio colaborativo donde poder comunicarse compartiendo información.
  </blockquote>
</div>

Para realmente **forzar** un salto de línea, necesita usar el elemento HTML `<br>`:

{% highlight html %}
<p>En el mejor de los casos, la vida es completamente <br> impredecible.</p>
{% endhighlight %}

<div class="result">
  <p>En el mejor de los casos, la vida es completamente <br> impredecible.</p>
</div>

### Tabulaciones

Una ** tabulación ** es un carácter especial que se obtiene presionando la tecla _ "Tab" _. Por lo general, mueve el cursor a la siguiente tabulación, pero a veces se convierte en 2 espacios.

De todos modos, como un espacio normal, una tabulación es ** invisible **. También es ignorado por el navegador:

{% highlight html %}
<p>
  Empujemos      este texto
  con tabulaciones.
</p>
{% endhighlight %}

<div class="result">
  <p>
    Empujemos      este texto
    con tabulaciones.
  </p>
</div>

Si desea agregar espacio _antes_ de una palabra, tendrá que usar CSS, que cubriremos en el próximo capítulo.

Si desea ** cerrar ** un elemento HTML, primero debe cerrar todos sus elementos _children_.
{: .info}

### Format de árbol

Como los elementos HTML se pueden anidar entre sí, debes realizar un seguimiento del ** orden ** en el que se han abierto, ya que afectará el orden en el que se cierran.

{% highlight html %}
<article><p>Este código está escrito en una <strong> única </strong> línea.</p></article>
{% endhighlight %}

<div class="result">
  <article><pEste código está escrito en una <strong> única </strong> línea.</p></article>
</div>

Como puede ser difícil realizar un seguimiento del orden en que se han abierto los elementos HTML, se recomienda escribir HTML en un **formato de árbol**:

{% highlight html %}
<article>
  <p>
    Este código está escrito en
    <strong>multiples</strong>
    líneas pero sin embargo
    será mostrado en una
    <em>única</em>
    linea.
  </p>
</article>
{% endhighlight %}

<div class="result">
  <article>
    <p>
    Este código está escrito en
    <strong>multiples</strong>
    líneas pero sin embargo
    será mostrado en una
    <em>única</em>
    linea.
    </p>
  </article>
</div>

El formato de árbol permite _visualmente_ replicar los ** niveles de anidamiento ** de su código HTML. Por tanto, es fácil ver que:

* `<article>` es el antepasado
* `<p>` es el **padre** de `<strong>` y `<em>`
* `<strong>` y `<em>` son **hermanos**

### Escribe HTML para que lo leas

Las tabulaciones, las líneas vacías, los espacios sucesivos y los saltos de línea son descartados por la computadora y todos se convierten en un **espacio único**.

Un documento HTML es escrito y leído por un humano, pero solo _leído_ por una computadora. Teniendo en cuenta que las tabulaciones, los espacios y los saltos de línea no afectan la forma en que un navegador leerá y posteriormente _mostrará_ su página web, también puede formatear su documento de la manera más legible para **usted**.

No hay reglas específicas sobre el formato HTML, pero hay **convenciones** implícitas, específicamente:

* usar **tabulaciones** para ayudar a visualizar cómo los elementos HTML están **anidados**.
* poner etiquetas de apertura y cierre de elementos a nivel de bloque en su **propia línea**.
* escribir elementos en línea en una línea (incluidas las etiquetas de apertura y cierre).
