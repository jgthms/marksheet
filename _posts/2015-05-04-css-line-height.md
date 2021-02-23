---
layout: post
title: "CSS <strong>line-height</strong>"
subtitle: "For <strong>readibility</strong> concerns"
section: css
---

El `line-height` La propiedad, cuando se aplica a un elemento a nivel de bloque, define, como su nombre sugiere literalmente, la **altura de cada línea**. **No** debe confundirse con el interlineado (también conocido como "interlineado") que se encuentra en la mayoría de los softwares gráficos (como Photoshop) que determina la cantidad de espacio _entre_ líneas en un párrafo. Aunque ambos tienen el mismo propósito (espaciar líneas de texto), lo hacen de diferentes maneras.

El `line-height` propiedad utiliza las siguientes unidades:

* `px`
* `em`
* `%`
* números sin unidades, como `1.5`

Los valores sin unidades actúan básicamente como porcentajes. Asi que `150%` es igual que `1.5`. Este último es más compacto y legible.

### Por qué es importante la altura de la línea

El propósito de `line-height` es definir un interlineado legible para su texto. Como la legibilidad depende del tamaño del texto, se recomienda utilizar un valor ** dinámico ** que sea relativo al tamaño del texto. Usando `px` por lo tanto, no se recomienda porque define un valor **estático**.

En algunos casos, usar `px` es útil (cuando desea alinear el texto verticalmente según otro elemento y no según el tamaño de fuente).
{: .info}

Porque usando `%` o `em` Los valores pueden tener valores inesperados, el método recomendado es **números sin unidad**:

* para el cuerpo del texto, se recomienda una altura de línea de 1,5 veces el tamaño del texto.
* para los títulos, se recomienda una altura de línea de 1,2

{% highlight css %}
body{ font-size: 16px; line-height: 1.5;}
{% endhighlight %}

La altura de la línea calculada será, por tanto, 16 * 1,5 = `24px`.

### Herencia de altura de línea

Porque `line-height` la propiedad es heredada por los elementos secundarios, permanecerá consistente sin importar lo `font-size` se aplica posteriormente.

{% highlight css %}
body{ font-size: 16px; line-height: 1.5;}
blockquote{ font-size: 18px;}
{% endhighlight %}

Los `blockquote` el elemento tendrá una altura de línea de `27px`.
