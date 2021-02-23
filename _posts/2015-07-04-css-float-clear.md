---
diseño: poste
título: "CSS <strong> float </strong>"
subtítulo: "La propiedad más impredecible"
sección: css
---

Detrás de la palabra "flotar", un mar infinito de posibilidades (y malos comportamientos).

`float` es probablemente el concepto CSS más difícil de comprender. Su comportamiento puede ser intrigante, inesperado y mágico. Probablemente porque, de todas las propiedades de _posicionamiento_ que hay, es la que más _influencia_ en su ** entorno **.

En otras palabras, la aplicación de un flotante no solo modifica el elemento sobre el que se aplica **, sino que también altera sus ancestros, hermanos, descendientes y siguientes elementos **.

`float` solo puede tener uno de estos 3 valores:

* `left` y` right` convierten un elemento en uno ** flotante **
* `none` elimina el aspecto flotante

### Cuándo usar float

El propósito de ** flotar ** un elemento es ** empujarlo hacia un lado ** y hacer que el texto ** se envuelva **.

Para explicar el comportamiento, usemos un ejemplo común: hacer flotar una imagen dentro de un párrafo.

{% highlight html%}
<p>
  <img src = "https://placehold.it/150x150">
  Las campanas de la iglesia vecina hicieron un tintineo tintineante, un carro conducido descuidadamente se estrelló, entre gritos y maldiciones, contra el abrevadero de la calle. Las enfermizas luces amarillas iban y venían en las casas, y algunos de los taxis que pasaban lucían lámparas sin apagar. Y en lo alto, el amanecer se hacía más brillante, claro, firme y tranquilo.
</p>
{% endhighlight%}

<div class = "result">
  <p style = "background: gold; padding: 10px; width: 600px;">
    <img src = "https://placehold.it/150x150">
    Fue mientras el coadjutor se había sentado y me hablaba tan salvajemente bajo el seto en los prados planos cerca de Halliford, y mientras mi hermano observaba a los fugitivos cruzar el puente de Westminster, cuando los marcianos reanudaron la ofensiva. Por lo que se desprende de los relatos contradictorios que se han presentado, la mayoría de ellos permanecieron ocupados con los preparativos en el foso de Horsell hasta las nueve de la noche, apurados en alguna operación que desencadenó enormes volúmenes de humo verde.
  </p>
</div>

El problema al insertar una imagen dentro de un texto es que ** una imagen debe caber en una sola línea de texto ** y, por lo tanto, _extenderá_ la altura de la línea en la que se encuentra. En nuestro caso, nuestra imagen tiene 150px de alto.

Lo que queremos es envolver el texto _ alrededor_ de la imagen:

{% highlight css%}
img {flotar: izquierda;}
{% endhighlight%}

<div class = "result">
  <p style = "background: gold; padding: 10px; width: 600px;">
    <img style = "float: left;" src = "https://placehold.it/150x150">
    Fue mientras el coadjutor se había sentado y me hablaba tan salvajemente bajo el seto en los prados planos cerca de Halliford, y mientras mi hermano observaba a los fugitivos cruzar el puente de Westminster, cuando los marcianos reanudaron la ofensiva. Por lo que se desprende de los relatos contradictorios que se han presentado, la mayoría de ellos permanecieron ocupados con los preparativos en el foso de Horsell hasta las nueve de la noche, apurados en alguna operación que desencadenó enormes volúmenes de humo verde.
  </p>
</div>

Como puede ver, la imagen se ** empuja hacia la izquierda ** y el texto que sigue simplemente se ajusta a la imagen:

* primero, el texto se empuja hacia la derecha, _siguiente_ a la imagen
* luego, cuando haya espacio disponible _ debajo_ de la imagen, el texto llenará ese espacio

#### ¿Qué pasa si el texto no es lo suficientemente largo?

<div class = "result">
  <p style = "background: gold; padding: 10px; width: 600px;">
    <img style = "float: left;" src = "https://placehold.it/150x150">
    Escuchó pasos corriendo de un lado a otro en las habitaciones, y escaleras arriba y abajo detrás de él.
  </p>
</div>

La imagen flotante ** se desbordará ** porque es más alta que su contenedor amarillo. Y como puede ver, en realidad, incluso rompe visualmente ** este párrafo que está leyendo **.

Dejé intencionalmente este error de diseño para mostrar _por qué_ los flotadores son impredecibles: ¡incluso pueden romper a los hermanos de sus padres!

Debido a que `float: left` saca la imagen _ del flujo, la altura del párrafo amarillo es solo ** la altura de su texto **. En otras palabras, no se tiene en cuenta la altura de la imagen.

### Float = bloque

Los elementos flotantes tendrán un `display: block` aplicado automáticamente, y se comportarán principalmente como bloques:

* puede establecer una altura y un ancho específicos
* si no se establece una altura, la altura del elemento es la altura de la línea
* si se aplica un `width: 100%`, se verá como un elemento a nivel de bloque

### Limpiando el flotador

La propiedad `clear` permite ** empujar elementos _ después_ del flotador **. Solo se puede aplicar en elementos ** bloque **.

{% highlight html%}
<p>
  <img src = "https://placehold.it/150x150">
  <span> Escuchó pasos corriendo de un lado a otro en las habitaciones, y escaleras arriba y abajo detrás de él </span>
</p>
{% endhighlight%}

{% highlight css%}
img {flotar: izquierda;}
span {clear: left; bloqueo de pantalla;}
{% endhighlight%}

<div class = "result">
  <p style = "background: gold; padding: 10px; width: 600px;">
    <img style = "float: left;" src = "https://placehold.it/150x150">
    <span style = "clear: left; display: block;"> Escuchó pasos corriendo de un lado a otro en las habitaciones, y escaleras arriba y abajo detrás de él </span>
  </p>
</div>

En lugar de tener el texto empujado _siguiente_ a la imagen, el `clear: left` empuja el texto ** debajo ** de la imagen.

Es diferente de no tener nada flotante o claro, ya que la imagen está en su propia línea y _no_ en la misma línea que el texto.
