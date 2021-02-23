---
layout: post
title: "HTML <strong>Hierarchy</strong>"
subtitle: "It's a big family <strong>tree</strong>"
section: html
---

Un documento HTML es como un gran ** árbol genealógico **, con padres, hermanos, hijos, antepasados ​​y descendientes.

Viene de la capacidad de ** anidar ** elementos HTML entre sí.

### Anidamiento

Vamos a escribir un párrafo simple y mejorarlo _diferenciando_ partes del texto, insertando dos elementos ** en línea **:

{% highlight html%}
<p>
  Sir <strong> Alex Ferguson </strong> dijo una vez sobre Filipo Inzaghi: <q> "Ese muchacho debe haber nacido fuera de juego" </q>.
</p>
{% endhighlight%}

<div class = "result"> <p> Sir <strong> Alex Ferguson </strong> dijo una vez sobre Filipo Inzaghi: <q> "Ese muchacho debe haber nacido fuera de juego". </q>. </p> < / div>

En esta configuración:

* el elemento `<strong>` da más importancia a las palabras "Alex Ferguson"
* el `<q>` marca su cita sobre Inzaghi

El hecho de que "<strong>" se muestre en ** negrita ** es ** solo el comportamiento predeterminado del navegador **. Recuerde que debe elegir los elementos HTML según su _significado_, no cómo se ven.

En este caso:

* `<p>` es el ** elemento principal ** de `<strong>` y `<q>`
* `<strong>` y `<q>` son elementos ** secundarios ** de `<p>`
* `<strong>` y `<q>` son elementos ** hermanos **

### Orden

El funcionamiento del ** anidamiento ** depende de la ubicación de las etiquetas _opening_ y _closing_.

Debido a que un elemento HTML comprende una etiqueta de apertura, una etiqueta de cierre y _todo en el medio_, un elemento _child_ debe cerrarse ** antes ** de cerrar el elemento _parent_.


{% highlight html%}
<! - ¡Este es un código NO VÁLIDO! :-( ->
<p>
  Este código HTML no funcionará porque la etiqueta "fuerte" se abre aquí <strong> pero solo se cierra después del párrafo.
</p> </strong>
{% endhighlight%}

Debido a que el `<strong>` se abrió _ después_ el `<p>` (y por lo tanto se considera un ** hijo ** de `<p>`), el elemento `<strong>` debe cerrarse ** antes ** su padre `<p>`. 

{% highlight html%}
<! - Este es un código válido. :-) ->
<p>
  Este código HTML funcionará porque la etiqueta "fuerte" se abre <strong> y se cierra </strong> correctamente.
</p>
{% endhighlight%}

### Profundidad

Debido a que los elementos secundarios pueden contener por sí mismos _otros_ elementos secundarios, es posible escribir una ** jerarquía más profunda ** dentro de un documento HTML.

Nuestro párrafo anterior podría ser parte de un ** artículo ** de blog:

{% highlight html%}
<artículo>
  <h1> Frases de fútbol famosas </h1>
  <p>
    Sir <strong> Alex Ferguson </strong> dijo una vez sobre Filipo Inzaghi: <q> "Ese muchacho debe haber nacido fuera de juego" </q>.
  </p>
  <p>
    Cuando fue criticado por John Carew, <strong> Zlatan Ibrahimovic </strong> respondió: <q> "Lo que Carew hace con una pelota de fútbol, ​​yo puedo hacerlo con una naranja" </q>.
  </p>
  <p>
    <strong> George Best </strong> dijo <q> "Gasté mucho dinero en alcohol, pájaros y autos rápidos. El resto lo desperdicié" </q> cuando se le preguntó sobre su estilo de vida.
  </p>
</artículo>
{% endhighlight%}

<div class = "resultado">
  <artículo>
    <h1> Frases de fútbol famosas </h1>
    <p>
      Sir <strong> Alex Ferguson </strong> dijo una vez sobre Filipo Inzaghi: <q> "Ese muchacho debe haber nacido fuera de juego" </q>.
    </p>
    <p>
      Cuando fue criticado por John Carew, <strong> Zlatan Ibrahimovic </strong> respondió: <q> "Lo que Carew hace con una pelota de fútbol, ​​yo puedo hacerlo con una naranja" </q>.
    </p>
    <p>
      <strong> George Best </strong> respondió <q> "Gasté mucho dinero en alcohol, pájaros y autos rápidos. El resto lo desperdicié" </q> cuando se le preguntó sobre su estilo de vida.
    </p>
  </artículo>
</div>

En esta configuración:

* `<article>` es el ** ancestro ** de _todos_ los demás elementos
* `<article>` es el ** padre ** de `<h1>` y 3 `<p>`
* `<h1>` y los 3 `<p>` son ** hermanos **
* cada `<p>` es el ** padre ** del `<strong>` y `<q>` que contienen
* cada `<h1>`, `<p>`, `<strong>` y `<q>` son todos ** descendientes ** de `<article>`

La analogía del árbol genealógico todavía se aplica al ** atravesar ** varias capas de anidación HTML:

* un ** descendiente ** del elemento X es cualquier elemento _contenido_ dentro de X
* un ** hijo ** es solo un descendiente _directo_
* un ** ancestro ** del elemento Y es cualquier elemento que _contiene_ Y
* el ** padre ** es solo el primer antepasado _directo_
* un ** hermano ** del elemento X es cualquier elemento que tenga el mismo padre

### Anidamiento en bloque y en línea

Los elementos ** Bloque ** pueden contener elementos de bloque o en línea.

Sin embargo, los elementos ** en línea ** solo pueden contener otros elementos _en línea_ [^ 1].

{% highlight html%}
<! - ¡Este es un código NO VÁLIDO! :-( ->
<strong>
  <p> No puede poner un párrafo dentro de una etiqueta "fuerte".
</strong>
{% endhighlight%}

Solo recuerde antepasado / descendiente, padre / hijo y hermanos. Esta jerarquía será útil en CSS.

[^ 1]: el elemento de enlace `<a>` es la única excepción.