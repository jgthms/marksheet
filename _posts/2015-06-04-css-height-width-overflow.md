---
diseño: poste
título: "CSS <strong> alto </strong> y <strong> ancho </strong>"
subtítulo: "Establecer dimensiones <strong> fijas </strong> para sus rectángulos"
sección: css
---

Las dimensiones (o altura y ancho) de un elemento son ** dinámicas **, ya que fluctúan para adaptarse al contenido. De alguna manera es posible establecer dimensiones ** específicas **.

{% highlight css%}
blockquote {ancho: 600px;}
{% endhighlight%}

El blockquote no ocupará todo el ancho disponible, pero seguirá siendo de 600px de ancho **en cualquier situación**:

* si la ventana del navegador tiene menos de 600 px de ancho, mostrará una barra de desplazamiento horizontal
* si la ventana del navegador es más ancha que 600px, la cita en bloque permanecerá 600px de ancho y no ocupará todo el espacio

Debido a que solo hemos establecido el ancho, la cita en bloque permanece fluida en **altura**: la altura se convierte en la dimensión variable para ajustarse al contenido de la cita en bloque.

### Configuración de altura y ancho

Al establecer las dimensiones de un elemento, permanecerá fijo sin importar la longitud de su contenido.

¿Qué sucede si el contenido es más largo de lo que puede contener el elemento?
{: .pregunta}

Debido a que evitamos que el elemento altere dinámicamente sus dimensiones, existe la posibilidad de que el contenido sea más largo de lo que el elemento admite y posteriormente **se desborde**.

El comportamiento predeterminado puede ser sorprendente: ¡el contenido se mostrará de todos modos!

{% highlight css%}
blockquote {fondo: amarillo; altura: 50px; ancho: 100px;}
{% endhighlight%}

{% highlight html%}
<blockquote> El contenido er ... encuentra un camino </blockquote>
{% endhighlight%}

<div class = "resultado">
  <blockquote style = "background: yellow; height: 50px; width: 100px;"> El contenido er ... encuentra un camino </blockquote>
</div>

### Desbordamiento de CSS

La propiedad CSS `overflow` nos permite gestionar el caso de que el contenido sea más largo que su contenedor.

El valor predeterminado es `visible`: el contenido se mostrará de todos modos, porque _" ¿Por qué querría evitar que el usuario lea el contenido si está presente en el código? "_. Puede considerar ** HTML como predominante en CSS **.

Al aplicar `overflow: hidden;`, simplemente _prohíbe_ que se vea cualquier contenido desbordado.

<div class = "resultado">
  <blockquote style = "background: yellow; height: 50px; overflow: hidden; width: 100px;"> El contenido er ... encuentra un camino </blockquote>
</div>

Si desea que su contenido se desborde pero aún desea que sea accesible, puede decidir mostrar las barras de desplazamiento aplicando `overflow: scroll`.

<div class = "resultado">
  <blockquote style = "background: yellow; height: 50px; overflow: scroll; width: 100px;"> El contenido er ... encuentra un camino </blockquote>
</div>

Una mejor opción es usar `overflow: auto`, ya que las barras de desplazamiento solo aparecerán _si_ el contenido se desborda, pero permanecerán ocultas hasta entonces.

<div class = "resultado">
  <blockquote style = "background: yellow; height: 50px; overflow: auto; width: 100px;"> El contenido er ... encuentra un camino </blockquote>
</div>

### Cuidado con las dimensiones fijas

A menudo se requiere aplicar dimensiones específicas para que un diseño se vea visualmente atractivo, pero puede tener consecuencias no deseadas. En ese sentido:

* asegúrese de que su contenido no se desborde
* si lo hace, use `overflow: hidden` o `overflow: auto` para evitar que su diseño se rompa
