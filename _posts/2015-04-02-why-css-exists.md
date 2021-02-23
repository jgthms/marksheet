---
composición: capítulo
título: Por qué existe <strong>CSS</strong>?
subtítulo: "Separando contenidos y estilos"
sección: css
---

A medida que la Web creció en popularidad en los años 90, también creció la intención de aplicar un diseño específico a un sitio web. Los desarrolladores web confiaban en etiquetas HTML específicas para mejorar las páginas web:

* `<fuente base>` define una fuente para un documento HTML completo
* `<fuente>` define un tipo de letra, un color y un tamaño para el texto que contiene
* `<centro>` centrado horizontalmente todo su contenido
* `<grande>` aumenta el tamaño del texto
* `<strike>` texto renderizado tachado

También se pueden utilizar varios atributos HTML:

* `bgcolor` define un color de fondo en el elemento
* `text` define the text color
* Se pueden usar varios atributos de `margen` para agregar espacio en cualquier lado del elemento.

### Por que evitar las mesas

Pero sobre todo, para crear columnas, alinear elementos visualmente y, en general, colocar elementos entre sí, los desarrolladores web utilizaron el elemento `<table>` para diseñar sus páginas web porque, naturalmente, proporcionaba una **cuadrícula** visual:

{% highlight html %}
<table>
  <thead>
    <tr>
      <th>Logo</th>
      <th colspan="2">linea de tag</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th colspan="3">Copyright 2015</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>menu izquierdo</td>
      <td>contenido principal</td>
      <td>barra derecha</td>
    </tr>
  </tbody>
</table>
{% endhighlight %}

Este enfoque fue engorroso por varias razones:

* Las tablas HTML son **detalladas**: requieren una gran cantidad de código estándar
* el marcado era **semánticamente incorrecto**: las tablas deben usarse para datos multidimensionales
* cambiar el diseño requerido para cambiar el marcado: si queríamos mover la columna izquierda a la derecha, teníamos que **modificar la estructura HTML**
* las tablas eran propensas a **errores de sintaxis**: las filas y celdas deben ordenarse y anidarse de una manera específica para que sean válidas
* el marcado era **ilegible**: las tablas estaban anidadas dentro de las tablas para proporcionar columnas adicionales _dentro_ de las columnas

Es por eso que el uso de tablas con _fines de diseño_ se abandonó lentamente y se utilizó CSS ​​en su lugar.

### Que es CSS

**CSS** significa **C** ascading **S** tyle **S** heets. Su propósito es _estilar_ lenguajes de marcado (como HTML o XML). Por lo tanto, CSS no tiene valor por sí solo, a menos que esté asociado con un documento HTML.

CSS le da **vida** a un documento HTML, eligiendo fuentes, aplicando colores, definiendo márgenes, colocando elementos, animando interacciones y mucho más.

### Como funciona CSS

El funcionamiento de CSS es **seleccionando** un elemento HTML (como un párrafo), eligiendo una **propiedad** para modificar (como el color) y aplicando un determinado **valor** (como el rojo):

{% highlight css %}
p{ color: red;}
{% endhighlight %}

La palabra _"Estilo"_ puede engañar. Puede pensar que CSS solo se usa para cambiar el color, el tamaño y la fuente del texto. Pero CSS es capaz de definir el **diseño** de un documento HTML, definiendo alturas, anchos, márgenes internos y externos, posiciones, columnas ...
{: .info}

### Dónde escribo CSS?

#### CSS como atributo

Puede escribir CSS directamente en un elemento HTML, utilizando el atributo `style`:

{% highlight html %}
<p style="color: red;">Este texto es importante</p>
{% endhighlight %}

#### CSS en el <head>

Puede usar una etiqueta `<style>` en el `<head>` de su documento HTML:

{% highlight html %}
<html>
  <head>
    <title>Hola Mundo</title>
    <style type="text/css">
      p{ color: red;}
    </style>
  </head>
  <body>
    <p>Este párrafo es rojo</p>
  </body>
</html>
{% endhighlight %}

#### CSS en archivo separado

Puede escribir su CSS en un archivo separado con una extensión `.css`, y luego vincularlo a su HTML usando la etiqueta HTML` <link> `.

{% highlight css %}
p{ color: red;}
{% endhighlight %}

{% highlight html %}
<html>
  <head>
    <title>Hola Mundo</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <p>Este párrafo es rojo</p>
  </body>
</html>
{% endhighlight %}

Es el documento HTML el que "llama" al archivo CSS, en este caso un archivo llamado `style.css` ubicado en la misma carpeta que el archivo HTML.

Este **tercer método** de usar un archivo CSS separado es **preferido**.

### ¿Por qué no diseñar directamente en HTML?

Porque queremos separar el **contenido** (HTML) de su **presentación** (CSS).

Si desea visualizar el propósito de esta distinción, diríjase hacia el maravilloso [CSS Zen Garden](https://www.csszengarden.com/): cada diseño usa el mismo HTML _exact_ pero un CSS _diferente_ cada vez.

También facilita el **mantenimiento**: el mismo archivo CSS se puede utilizar para todo un sitio web. Proporciona **flexibilidad**: se centra en el contenido por un lado y el estilo por el otro. Fines de SEO, diferentes preocupaciones.
