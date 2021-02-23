---
diseño: post
título: "CSS <strong> abreviatura de fuente </strong>"
subtítulo: "Un <strong> atajo </strong> para varias propiedades de fuente"
sección: css
---

En CSS, algunas propiedades se pueden ** agrupar ** juntas bajo otra propiedad, para ahorrar tiempo y espacio. La propiedad `font` se reagrupa (en este orden en particular):

* `estilo de fuente`
* `variante de fuente`
* `font-weight`
* `tamaño de fuente`
* `altura de línea`
* `familia de fuentes`

De esta forma, puede definir 6 propiedades a través de una sola:

{% highlight css%}
cuerpo {fuente: cursiva minúscula negrita 16px / 1.5 Arial, sans-serif;}
{% endhighlight%}

Deben escribirse en este orden en particular y debe haber una barra inclinada `/` entre el `tamaño de fuente` y la `altura de línea`.

Aunque he definido las 6 propiedades, solo el `font-size` y`font-family` son obligatorios. Por lo tanto, puede omitir la definición de las otras propiedades si tiene la intención de mantener sus valores **predeterminados**:

{% highlight css%}
cuerpo {fuente: negrita 16px / 1.5 Arial, sans-serif;}
{% endhighlight%}

Debido a que no se han definido `font-style` y `font-variant`, usarán su valor predeterminado `normal`.
{: .info}

¡Tener cuidado! Si ha definido previamente una de las propiedades de la fuente y usa la abreviatura `font` después, **anulará** los valores definidos previamente.

{% highlight css%}
cuerpo {tamaño de fuente: 16px; altura de línea: 1,5;}
ul {fuente: 14px Georgia, serif;}
{% endhighlight%}

En la abreviatura de `font`, la`line-height` no se ha definido, y perderá el valor de su ancestro de `1.5` y volverá a su valor predeterminado `medium` (que normalmente es `1.2`).
{: .info}

Existen otras propiedades abreviadas, como `background`, `border` y `margin`.
