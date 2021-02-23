---
layout: post
title: "Propiedades de <strong>texto</strong> CSS"
subtitle: "Otras alteraciones de <strong>texto</strong>"
section: css
---

Junto a las diversas propiedades de `font- *`, CSS proporciona muchas propiedades de `text- *`.

### text-align

La propiedad `text-align` debe ser aplicada en un elemento de nivel de bloque y define cómo se alinean horizontalmente su texto y los elementos en línea secundarios.

{% highlight css %}
body{ text-align: left;}
{% endhighlight %}

Los valores más usados:

* **left**
* **right**
* **center**
* **justify**

Estos valores corresponden a los mismos botones de alineación que se encuentran en Microsoft Word o Photoshop:

<i class="fa fa-align-left"></i> <i class="fa fa-align-right"></i> <i class="fa fa-align-center"></i> <i class="fa fa-align-justify"></i>

El valor `justify` es **no** recomendado. Aunque puede parecer visualmente atractivo porque forma un rectángulo de texto, es muy difícil de leer.
{: .info}

El valor por defecto de `text-align` es `start`. Basicamente, `start` puede ser `left` o `right`, dependiendo de la ** dirección ** establecida en el documento HTML.

`direction` es una propiedad CSS que puede ser `ltr` (de izquierda a derecha) o `rtl` (de derecha a izquierda):

* si `ltr` está elegido, `start` es igual a `left`
* if `rtl` está elegido, `start` es igual a `right`

### text-decoration

La propiedad `text-decoration` se utiliza para agregar una línea en su texto.

Valor por defecto: `none`

{% highlight css %}
.deleted{ text-decoration: line-through;}
{% endhighlight %}

<div class="result">
  <p style="text-decoration: line-through;">Borrado</p>
</div>

Posibles valores:

* `overline`
* `underline`
* `line-through`

Por defecto, los links HTML (`<a>`) tienen una `text-decoration: underline;` aplicado a ellos. Una de las primeras cosas que suelen hacer los programadores es eliminar este estilo predeterminado:

{% highlight css %}
a{ text-decoration: none;}
{% endhighlight %}

### text-indent

La propiedad `text-indent` permite agregar espacio antes de la primera letra de la primera línea de un elemento a nivel de bloque.

Valor por defecto: `0` (cero)

{% highlight css %}
blockquote{ text-indent: 30px;}
{% endhighlight %}

<div class="result" style="max-width: 400px;">
  <blockquote style="text-indent: 30px;">La gente siempre comete el error de pensar que el arte fue creado para ellos. Pero en realidad, el arte es un lenguaje privado para que los sofisticados se feliciten por su superioridad sobre el resto del mundo. Como explica la declaración de mi artista, mi trabajo es absolutamente incomprensible y, por lo tanto, está lleno de un significado profundo.</blockquote>
</div>

Observa cómo solo la ** primera línea ** tiene sangría. Si deseas compensar todo el bloque de texto, usa [paddings](/css-padding.html).

En cuanto a la propiedad `font-size`, puedes usar valores` px`, `em` o incluso`% `.
{: .info}


### text-shadow

Si alguna vez usó Photoshop, probablemente haya usado la herramienta de sombra paralela. En CSS, puede agregar sombras a un texto, para hacerlo más elegante o más legible.

Tú defines:

* `x` el desplazamiento horizontal
* `y` el desplazamiento vertical
* el `blur`
* el `color`

{% highlight css %}
h1{ text-shadow: 0 2px 5px rgba(0,0,0,0.5);}
{% endhighlight %}

<div class="result">
  <h1 style="text-shadow: 0 2px 5px rgba(0,0,0,0.5);">Hola Mundo</h1>
</div>

Solo se requieren los valores `x` e` y`. El "blur" predeterminado es "0" (cero), mientras que el "color" predeterminado es el color del texto.

Esta propiedad es complicada, ¡así que úsala con parsimonia y no te vuelvas loco!
{: .info}
