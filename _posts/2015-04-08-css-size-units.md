---
Composición: Capítulo
Título: "CSS <strong>unidades de tamaño</strong>"
Subtítulo: "Dimensionamiento para <strong> contenido </strong> y <strong> espacio </strong>"
Sección: css
---


Hay muchas propiedades CSS que requieren **unidades de tamaño**:

* `font-size` define el tamaño del texto
* `border-width` define el ancho de los bordes de los elementos
* `margin` define el espacio entre elementos
* `left/right/top/bottom` permite posicionar y mover elementos

Las unidades más usadas son:

* `px` pixeles
* `%` porcentaje
* `em` para el tamaño relativo al valor de `tamaño de fuente` del padre.

### Píxeles

Debido a que las pantallas de computadora usan píxeles para mostrar el contenido, es la **unidad de tamaño más común en CSS**.

Puede usarse para fijar el **ancho** de un elemento:

{% highlight css %}
body{ width: 400px;}
{% endhighlight %}

O configure el **tamaño del texto**:

{% highlight css %}
body{ font-size: 20px;}
{% endhighlight %}

Los píxeles en CSS son sencillos porque definen **valores absolutos**: no se ven afectados por otras propiedades CSS heredadas.

También se utilizan ampliamente con fines de **posicionamiento** y **espaciado**.

### Porcentajes

Los porcentajes son **unidades relativas**: se basan en el padre y / o antepasado del elemento.

Por ejemplo, los elementos a nivel de bloque, como los párrafos, ocupan naturalmente el **ancho completo disponible**. La siguiente regla CSS los redimensionará a **la mitad** del ancho disponible.

{% highlight css %}
p{ width: 50%;}
{% endhighlight %}

Los porcentajes pueden ayudar a establecer otras propiedades CSS, como el tamaño del texto:

{% highlight css %}
strong{ font-size: 150%;}
{% endhighlight %}

{% highlight html %}
<p>Hay <strong>importantes</strong> retos.</p>
{% endhighlight %}

<div class="result">
  <p>Hay <strong style="font-size: 150%;">importantes</strong> retos.</p>
</div>

### Em

`em` es una unidad **relativa**: depende del valor del` font-size` del elemento.

Por ejemplo, si el padre tiene un tamaño de fuente de `20px` y usted aplica` font-size: 0.8em` a un elemento secundario, este elemento secundario representará un tamaño de fuente de `16px`.

No confunda la unidad de tamaño CSS `em` y el selector CSS` em`, que apunta a elementos HTML `<em>`
{: .info}

La unidad `em` es interesante ya que define los tamaños de fuente de los elementos HTML _relativos_ entre sí. Para diseñar una página web agradable y fácil de leer, necesita una profundidad visual constante. Por ejemplo, desea que su `<h1>` sea dos veces más grande que el texto de su cuerpo, su `<h2>` solo 1.5 veces más grande y su barra lateral un poco más pequeña. Esto podría lograrse fácilmente en CSS:

{% highlight css %}
body{ font-size: 16px;}
h1{ font-size: 2em;}        /* = 32px */
h2{ font-size: 1.5em;}      /* = 24px */
aside{ font-size: 0.75em;}  /* = 12px */
{% endhighlight %}

Si decide cambiar el tamaño de su cuerpo de texto, los tamaños relativos de sus encabezados y barra lateral **cambiarán en consecuencia**, y su página web permanecerá **visualmente equilibrada**.

Con solo cambiar un valor, todos los demás valores se modifican:

{% highlight css %}
body{ font-size: 20px;}
h1{ font-size: 2em;}        /* = 40px */
h2{ font-size: 1.5em;}      /* = 30px */
aside{ font-size: 0.75em;}  /* = 16px */
{% endhighlight %}

### Rem

La unidad `rem` es similar a` em`, pero en lugar de depender del valor de _parent_, se basa en el valor del ** elemento raíz **, que es el elemento `<html>`.

{% highlight css %}
html{ font-size: 18px;}
body{ font-size: 1rem;}     /* = 18px */
h1{ font-size: 2rem;}       /* = 36px */
h2{ font-size: 1.5rem;}     /* = 27px */
{% endhighlight %}

La diferencia entre `rem` y` em` es que los valores de `rem` son **fijos** mientras que los valores de` em` pueden _multiplicarse_ entre sí.


Si pones `html{ font-size: 18px;}`:

* `2rem` siempre será igual a` 36px`, sin importar dónde lo uses en tu CSS
* `2em` siempre será igual al **doble** del` font-size` del padre, por lo que no necesariamente `36px`

Ejemplo rápido donde `2em` es diferente de` 2rem`:

{% highlight css %}
html{ font-size: 20px;}
p{ font-size: 0.8rem;}        /* = 16px */
p span{ font-size: 2em;}      /* = 16px * 2 = 32px */
p strong{ font-size: 2rem;}   /* = 20px * 2 = 40px */
{% endhighlight %}

El `intervalo` se basa en el valor de tamaño de fuente` p` mientras que el `fuerte` se basa en el valor de tamaño de fuente` html`.

### ¿Qué unidad usar?

Recomendaría **píxeles** para empezar: como son valores absolutos, no se ven afectados por el contexto del elemento. Son sencillos, permiten establecer el tamaño del texto, las dimensiones de la imagen, el ancho del borde, las coordenadas de posición ...

Los valores de **porcentaje** y **em** se pueden usar junto con píxeles, especialmente para tamaños de texto relativos.
