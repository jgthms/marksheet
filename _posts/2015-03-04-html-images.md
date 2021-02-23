---
diseño: poste
título: "HTML <strong> Imágenes </strong>"
subtítulo: "Los <strong> principales medios </strong> de la Web"
sección: html
---

**Las imágenes** son el primer contenido no textual que apareció en la Web. La mayoría de los formatos de imagen que puede encontrar en su computadora también se pueden mostrar en su navegador: `.jpg`,` .gif` (animado o no), `.png` (transparente o no),` .bmp` ...

### Sintaxis

**Imágenes** usan el elemento `<img>`, que es un elemento **de cierre automático** (solo tiene una etiqueta de apertura).

El atributo `src` define la ** ubicación ** de la imagen. Al igual que con los enlaces, puede utilizar URL _relativas_ o _absolutas_.

<ul class = "archivos">
  <li>
    <i class = "fa fa-folder-o"> </i>
    mi-primer-sitio-web
    <ul>
      <li>
        <i class = "fa fa-file-code-o"> </i>
        home.html
      </li>
      <li>
        <i class = "fa fa-image"> </i>
        soyuz-spacecraft.jpg
      </li>
    </ul>
  </li>
</ul>

{% highlight html%}
<p>
  ¡Mira el aterrizaje de esta nave espacial!
  <br>
  <img src = "soyuz-spacecraft.jpg">
</p>
{% endhighlight%}

<div class = "resultado">
  <p>
    ¡Mira el aterrizaje de esta nave espacial!
    <br>
    <img src = "/ images / soyuz-spacecraft.jpg">
  </p>
</div>

### Dimensiones

Cada imagen tiene **2 dimensiones**: un **ancho** y una **altura**. La imagen de la nave espacial mostrada anteriormente tiene 394 píxeles de ancho y 284 de alto.

Al insertar una imagen en HTML, **no es necesario que especifique sus dimensiones**: el navegador la mostrará automáticamente en **tamaño completo**.

Si desea alterar las dimensiones de una imagen, aunque es posible en HTML, se recomienda utilizar CSS, como veremos en capítulos posteriores.
{: .info}

### ¿Bloquear o en línea?

Aunque una imagen tiene un ancho y una altura, y visualmente es un gran rectángulo, una imagen **no es un elemento de bloque HTML** sino en realidad un **elemento en línea**.

Esto se debe a que el elemento `<img>` es un elemento **de cierre automático**: técnicamente no puede contener ningún otro elemento HTML y, por lo tanto, se considera un elemento en línea, como `<a>`, `<fuerte> `o` <em> `.

Este comportamiento en línea puede tener resultados inesperados:

{% highlight html%}
<p>
  Hay una rana
  <img src = "rana.jpg">
  en medio del párrafo!
</p>
{% endhighlight%}

<div class = "resultado">
  <p>
    Hay una rana
    <img src = "/ images / frog.jpg">
    en medio del párrafo!
  </p>
</div>

Debido a que en HTML el **contenido es el rey**, las imágenes se mostrarán independientemente del diseño peculiar que pueda inducir, y cuidadosamente.
