---
diseño: poste
título: "CSS <strong> propiedades de fuente </strong>"
subtítulo: "Para texto en <strong> negrita </strong> y <em> cursiva </em>"
sección: css
---

### tamaño de fuente

Ya hemos cubierto ** [unidades de tamaño CSS] (/ css-size-units.html) **, que se utilizan para establecer el tamaño de fuente, entre otras cosas.

{% highlight css%}
p {tamaño de fuente: 16px;}
{% endhighlight%}

Tenga en cuenta que establecer un tamaño de fuente de `16px` no hará que cada letra tenga una altura de` 16px`. El tamaño _actual_ de cada letra depende de la familia de fuentes utilizada.

### Estilo de fuente

Esta propiedad puede hacer que su texto sea _italico_:

{% highlight css%}
h2 {estilo de fuente: cursiva;}
{% endhighlight%}

Valor predeterminado: `font-style: normal;`.

Otro valor posible es "oblicuo", pero nunca se utiliza.

### peso de la fuente
Esta propiedad puede hacer que su texto sea ** negrita **:

{% highlight css%}
h2 {font-weight: bold;}
{% endhighlight%}

Valor predeterminado: `font-weight: normal;`.

Dependiendo de la `familia de fuentes` utilizada, hay un rango de pesos de fuente disponibles, desde` 100` a `900`:

{% highlight css%}
peso de fuente: 100; /* Delgado */
peso de fuente: 200; /* Extra ligero */
peso de fuente: 300; /* Ligero */
peso de fuente: 400; / * Que es como font-weight: normal; * /
peso de fuente: 500; /* Medio */
peso de fuente: 600; / * Semi Negrita * /
peso de fuente: 700; / * Que es como font-weight: bold; * /
peso de fuente: 800; / * Extra Bold * /
peso de fuente: 900; / * Ultra audaz * /
{% endhighlight%}

Muy pocas fuentes proporcionan los 9 pesos. La [fuente Exo] (https://www.google.com/fonts/specimen/Exo) es una de ellas.

En su mayoría, encontrará 400 (normal) y 700 (negrita) y, a veces, 300 (claro) y 500 (medio).

### variante de fuente

Esta propiedad convierte su texto en versalitas:

{% highlight css%}
h2 {variante de fuente: versalitas;}
{% endhighlight%}

Valor predeterminado: `font-variant: normal;`.

No es una propiedad muy utilizada.
