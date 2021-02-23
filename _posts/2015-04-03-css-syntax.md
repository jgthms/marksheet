---
layout: post
title: "CSS <strong>Syntax</strong>"
subtitle: "who{ what: how;}"
section: css
---

El propósito de CSS es definir el diseño _y_ estilo de sus elementos HTML. La sintaxis es muy simple:

{% highlight css %}
/* A CSS rule */
selector{ property: value;}
{% endhighlight %}

Puedes leer eso como:

{% highlight css %}
who{ what: how;}
{% endhighlight %}

CSS es un proceso de 3 partes:

* el **selector** define a _quién_ está dirigido, qué elemento (s) HTML
* la **propiedad** define _qué_ característica para alterar
* el **valor** define _cómo_ alterar esa característica

Todo este bloque (selector / propiedad / valor) es una **regla CSS**.

### Ejemplo rápido

Digamos que quieres cambiar el color de todas tus **citas en bloque**.

{% highlight html %}
<blockquote>Something something<blockquote>
{% endhighlight %}

Concéntrese en el **nombre de la etiqueta**(y olvídese de los corchetes angulares <> y el texto). En nuestro caso, todo lo que queda es _ "blockquote" _. Existe una relación directa entre el nombre de la etiqueta y el selector.

Usemos eso en nuestro CSS como un **selector**, y apliquemos algo de estilo:

{% highlight css %}
blockquote{ background: lightgreen;}
{% endhighlight %}

Interesante. Pero ahora, el color del texto realmente no coincide con el color de fondo. Mejoremos eso:

{% highlight css %}
blockquote{
  background: lightgreen;
  color: darkgreen;
}
{% endhighlight %}

Entonces sucedieron 2 cosas:

* agregamos un par _second_ propiedad / valor, manteniendo solo _un_ selector: puede establecer tantas propiedades como desee para cualquier conjunto de selectores
* colocamos cada par de propiedad / valor en su _ propia línea_: como en HTML, el **espacio en blanco** no es importante. Son los caracteres especiales `{}` `:` y `;` lo que importa. Como resultado, puede formatear su CSS como desee, para hacerlo más legible, siempre que su sintaxis siga siendo válida.

La etiqueta HTML `<blockquote>` es un elemento **bloque**. Tiene una contraparte **en línea**: `<q>`. Como ambos tienen el mismo propósito (pero en contextos diferentes), nos gustaría diseñarlos de manera idéntica. Podríamos copiar y pegar la regla CSS y simplemente cambiar el selector, pero hay, como habrás adivinado, una forma más rápida:

{% highlight css %}
q,
blockquote{
  background: lightgreen;
  color: darkgreen;
}
{% endhighlight %}

Ahora tenemos 2 selectores y 2 propiedades. En consecuencia, tenemos un _conjunto_ de selectores y un _conjunto_ de propiedades (con sus respectivos valores).

Podemos tener múltiples selectores, múltiples propiedades y, a veces (pero rara vez) múltiples valores.
{: .info}

### Comentarios

Como en HTML, puede ser útil escribir comentarios CSS:

{% highlight css%}
/ * Este es un comentario CSS * /
q,
blockquote{
  background: lightgreen;
  color: darkgreen;
}
/ *
Los comentarios solo deben ser leídos por humanos
y no será analizado por la computadora
* /
{% endhighlight%}