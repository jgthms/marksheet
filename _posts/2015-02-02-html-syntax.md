---
layout: post
title: "HTML <strong>Syntax</strong>"
subtitle: "Como cualquier lenguaje, HTML tiene <strong>reglas</strong>"
section: html
---

**HTML** representa **H**yper**T**ext **M**arkup **L**anguage (Lenguaje de Marcado de Hipertexto):

* **HyperText** significa que utiliza la parte HTTP de Internet
* **Markup** significa que el código que escribe está anotado con palabras clave
* **Language** significa que puede ser leído tanto por humanos como por computadora

Como cualquier lenguaje, HTML viene con un conjunto de ** reglas **. Estas reglas son relativamente simples. Se trata de definir ** límites **, saber dónde algo _ comienza_ y dónde algo _ termina.

Aquí hay un párrafo de muestra en HTML:

{% highlight html %}
<p>Si algo me ha enseñado el Tetris es que los errores se acumulan y los logros desaparecen.</p>
{% endhighlight %}

<div class="result"><p>Si algo me ha enseñado el Tetris es que los errores se acumulan y los logros desaparecen.</p></div>

Lo que ves entre ** corchetes angulares ** `<`{:.language-html} y `>`{:.language-html} son **etiquetas** HTML. Definen dónde _comienza_ algo y dónde _termina.

Cada uno de ellos tiene un **significado** específico. En este caso, `p`{:.language-html} representa **párrafo**.

Suelen ir en parejas:

* la etiqueta _opening_ `<p>`{:.language-html} define el **inicio** del párrafo.
* la etiqueta _closing_ `</p>`{:.language-html} define su **final**.

La única diferencia entre una etiqueta de apertura y cierre es la **barra** `/`{:.language-html} que precede al nombre de la etiqueta.

Cuando combinas una etiqueta de apertura, una etiqueta de cierre y todo lo que hay entre ellas, obtienes un **elemento HTML**. Toda la línea es un elemento HTML que usa las etiquetas HTML `<p>`{:.language-html} y `</p>`{:.language-html}.

Si tu [ves esta muestra en tu navegador](/html/sample-paragraph.html), notarás que **el navegador no muestra** etiquetas HTML. Solo el navegador los _lee_ para saber qué _tipo_ de **contenido** has escrito.

### Dónde escribir HTML

Probablemente te hayas encontrado con archivos de texto simples, aquellos que tienen una extensión `.txt`.

Para que un archivo de texto de este tipo se convierta en un **documento HTML** (en lugar de un documento de texto), debes utilizar una extensión `.html`.

Abre tu **editor de texto**, y copia y pega lo siguiente:

{% highlight html %}
<p>¡Esta es mi primera página web!</p>
{% endhighlight %}

Guarda este archivo como `my-first-webpage.html` y simplemente ábrelo con tu navegador, y verás:

<div class="result"><p>¡Esta es mi primera página web!</p></div>

Recuerda:

* usa un editor de texto como Notepad++ para **crear** documentos HTML.
* usa un navegador como Firefox para ** abrir ** documentos HTML.

### Atributos

Los atributos actúan como información ** extra ** vinculada a un elemento HTML. Están escritos _dentro de_ una _etiqueta_ HTML. Como tal, el navegador tampoco los muestra.

Por ejemplo, el atributo `href` se usa para definir el objetivo de un **enlace** (que usa una etiqueta de **a**nclaje):

{% highlight html %}
<a href="https://www.mozilla.com/firefox">Descarga Firefox</a>
{% endhighlight %}

<div class="result"><a href="https://www.mozilla.com/firefox">Descarga Firefox</a></div>

Hay [16 atributos HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) que se puede utilizar en _cualquier_ elemento HTML. Todos ellos son **opcionales**.

Usarás principalmente `class` (que es usado por CSS), y `title` (que es la información sobre herramientas que aparece al colocar el cursor sobre un elemento como este).

Algunos elementos HTML tienen atributos **obligatorios**. Por ejemplo, cuando insertas una imagen, tienes que proporcionar la ubicación de la imagen, usando el atributo `src` (source):

{% highlight html %}
<img src="#" alt="Descripción de la imagen">
{% endhighlight %}

Teniendo en cuenta que el propósito del elemento `<img>` es mostrar una imagen, tiene sentido que la ruta a la imagen sea **obligatoria**.

### Comentarios

Si escribes algo en tu código sin interrumpir la forma en la que el navegador mostrará tu página, puedes escribir **comentarios**. Estos pueden ser _ignorados_ por el navegador, y solo son útiles para nosotros, los humanos que escribimos el código.

Un comentario comienza con `<! -` y termina con `->`.

{% highlight html %}
<!-- Esta frase será ignorada por el navegador. -->
<p>Hola Mundo!</p>
{% endhighlight %}

<div class="result"><p>Hola Mundo!</p></div>

### Elementos autocerrantes

Algunos elementos HTML solo tienen una etiqueta de apertura:

{% highlight html %}
<br> <!-- salto de linea -->
<img src="https://placehold.it/50x50" alt="Descripcion"> <!-- imagen -->
<input type="text"> <!-- input de tipo texto -->
{% endhighlight %}

Debido a que no tienen una etiqueta de cierre y, por lo tanto, no pueden contener nada _dentro_ de ellos, los elementos auto-adjuntos suelen llevar algunos atributos, para proporcionarles información adicional.
