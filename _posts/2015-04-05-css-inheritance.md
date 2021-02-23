---
diseño: post
título: "CSS <strong> Herencia </strong>"
subtítulo: "Uso de la <strong> jerarquía </strong> HTML"
sección: css
---

Digamos que queremos cambiar el **color del texto** de una página web. Sería tedioso especificar un color para _ cada_ elemento HTML:

{% highlight css%}
pag,
ul,
ol
li,
h1,
h2,
h3,
h4,
h5,
h6 {color: gris;}
{% endhighlight%}

### Propagación de valor

El valor de `color` se puede heredar de un **ancestro**. Teniendo en cuenta que queremos alterar la página web _completa_, elegiremos el ancestro de todos los elementos HTML, la etiqueta `body`:

{% highlight css%}
cuerpo {color: gris;}
{% endhighlight%}

Todos los elementos secundarios y descendientes **heredarán** el valor `grey` de su ancestro común` body`, que naturalmente abarca _todos_ los_ elementos.

También podríamos usar la etiqueta `html`.
{: .info}

### Propiedades heredadas

Solo unas pocas propiedades CSS pueden heredarse de los antepasados. Son principalmente propiedades de ** texto **:

* color de texto
* fuente (familia, tamaño, estilo, peso)
* altura de la línea

Algunos elementos HTML no heredan de sus antepasados. Los enlaces, por ejemplo, no heredan la propiedad `color`.
{: .info}
