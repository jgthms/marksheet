---
diseño: poste
título: "CSS <strong> relleno </strong>"
subtítulo: "Para dar <strong> espacio </strong> a tu contenido interior"
sección: css
---

El ** relleno ** es el espacio entre el _border_ de un elemento y su _contenido_.

La cantidad de espacio se puede definir usando cualquiera de las [unidades de tamaño] (css-size-units.html).

{% highlight css%}
blockquote {relleno: 20px;}
{% endhighlight%}

En cuanto a los bordes, el acolchado se puede configurar _individualmente_ para cualquiera de los 4 lados.

{% highlight css%}
blockquote {padding-bottom: 20px;}
{% endhighlight%}

Debido a que el relleno se encuentra ** entre ** el _border_ y el _content_, es más fácil visualizar el espacio interior con un borde aplicado:

{% highlight css%}
blockquote {fondo: amarillo; borde: 1 px azul sólido;}
{% endhighlight%}

<div class = "result">
  <blockquote style = "background: yellow; border: 1px solid blue;">
    ¡Buenas noches buenas noches! La despedida es una pena tan dulce, que diré buenas noches hasta que sea mañana.
  </blockquote>
</div>

Agregar un relleno proporcionará espacio entre el contenido textual y los bordes:

{% highlight css%}
blockquote {fondo: amarillo; borde: 1px azul sólido; relleno: 20px;}
{% endhighlight%}

<div class = "result">
  <blockquote style = "background: yellow; border: 1px solid blue; padding: 20px;">
    ¡Buenas noches buenas noches! La despedida es una pena tan dulce, que diré buenas noches hasta que sea mañana.
  </blockquote>
</div>

Observe cómo el fondo del elemento se extiende hasta sus bordes. La aplicación de relleno permite extender ese fondo.
