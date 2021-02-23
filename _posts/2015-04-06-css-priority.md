---
diseño: poste
title: "CSS <strong> Prioridad </strong>"
subtítulo: "Cuando varias reglas <strong> chocan </strong>"
sección: css
---

Un elemento HTML puede ser dirigido por ** múltiples reglas CSS **. Usemos un párrafo simple por ejemplo:

{% highlight html%}
<p class = "message" id = "introducción">
  MarkSheet es un tutorial gratuito de HTML y CSS.
</p>
{% endhighlight%}

Podemos modificar este párrafo simplemente usando su ** nombre de etiqueta **:

{% highlight css%}
p {color: azul;}
{% endhighlight%}

O podemos usar su ** nombre de clase **:

{% highlight css%}
.message {color: verde;}
{% endhighlight%}

O podemos usar su ** id **:

{% highlight css%}
# introducción {color: rojo;}
{% endhighlight%}

Debido a que el navegador solo puede elegir ** un color ** para aplicar en este párrafo, tendrá que decidir qué regla CSS tiene ** prioridad ** sobre otras. De esto se trata la prioridad CSS (o CSS _specificity_).

En nuestro ejemplo, el párrafo será ** rojo ** porque un selector `# id` es más _específico_ y por lo tanto más ** importante ** que otros selectores.

### Orden de las reglas CSS

Si hay selectores similares en su CSS, el último definido tendrá prioridad.

{% highlight css%}
p {color: verde;}
p {color: rojo;}
/ * Los párrafos serán rojos * /
{% endhighlight%}

### La medida 100

Una forma rápida de averiguar qué tan "poderosa" es una regla CSS es midiendo la especificidad de los ** selectores **:

* Los selectores `# id` valen 100
* Los selectores `.class` valen 10
* Los selectores de `etiqueta` valen 1

El selector con la "puntuación" más alta prevalecerá, _in importar el orden en que aparezcan las reglas CSS_.

{% highlight css%}
# introducción {color: rojo;}
.message {color: verde;}
p {color: azul;}
{% endhighlight%}

{% highlight html%}
<p class = "message" id = "introducción">
  MarkSheet es un tutorial gratuito de HTML y CSS.
</p>
{% endhighlight%}

<div class = "resultado">
  <p style = "color: red;">
    MarkSheet es un tutorial gratuito de HTML y CSS.
  </p>
</div>

La regla `#introduction {color: red;}` es más _específica_ que las demás porque los identificadores deben ser ** únicos ** en una página web y, por lo tanto, solo pueden apuntar a ** un ** elemento.

`.message {color: green;}` puede apuntar a _cualquier_ elemento HTML con un atributo `class =" message "` y, en consecuencia, es menos específico. Lo mismo ocurre con `p {color: blue;}` que puede apuntar a _cualquier_ párrafo HTML.

### Cómo evitar conflictos

Mientras escribe su CSS, es fácil escribir ** reglas conflictivas **, donde la misma _propiedad_ se aplica varias veces.

Para evitar eso:

* solo use ** clases **: use `.introduction` en lugar de` # Introduction`, incluso si ese elemento solo aparece una vez en su página web
* evite aplicar ** múltiples clases ** en un solo elemento HTML: no escriba `<p class =" big red important ">` sino más bien `<p class =" title ">` que es más semánticamente descriptivo
* no use ** estilos en línea ** como `<div style =" background: blue; ">`
