---
diseño: poste
título: "Sass <strong> variables </strong>"
subtítulo: "Cambiar una vez, actualizar en todas partes"
sección: sass
---

Una de las primeras razones por las que la gente recurre a Sass es la existencia de ** variables CSS **.

¿Alguna vez ha tenido que buscar y reemplazar muchas apariciones del mismo _valor_ CSS? Si es así, las variables te ayudarán.

### Sintaxis

Debe anteponer una variable con un signo de dólar `$`:

{% highlight scss%}
$ amarillo: # fce473;
{% endhighlight%}

Esta línea no hace nada más que ** definir ** una variable, en nuestro caso un tono de amarillo:

<div style = "background: # fce473; display: inline-block; padding: 10px; vertical-align: top;"> # fce473 </div>

Luego, podemos usarlo en todo nuestro CSS, siempre que se requiera una [unidad de color] (/ css-color-units.html):

{% highlight scss%}
.quote {borde izquierdo: 5px sólido $ amarillo;}
{% endhighlight%}

Este archivo `.scss` será ** compilado ** en un archivo` .css`, donde todas las variables serán _ reemplazadas_ por su _valor_ real:

{% highlight css%}
.quote {borde izquierdo: 5px sólido # fce473;}
{% endhighlight%}
_¿Por qué se llama variable? _ {:. question}
Bueno, aquí, el ** valor ** `# fce473` es variable. Lo que significa que el nombre `$ amarillo` permanece _fijo_ pero el valor puede _cambiar_.
{: .responder}

### Establece tu variable solo una vez

Para ilustrar el propósito de usar variables, debe usarlo más de una vez, como este tono ** rosa **:

<div style = "background: # ff1493; color: white; display: inline-block; padding: 10px; vertical-align: top;"> # ff1493 </div>

{% highlight scss%}
$ rosa: # ff1493;
.quote {borde izquierdo: 5px sólido $ rosa;}
.button {fondo: $ rosa;}
.sidebar a: hover {border-bottom-color: $ pink;}
.footer a {color: $ pink;}
{% endhighlight%}

Esto se compilará en:

{% highlight css%}
.quote {borde izquierdo: 5px sólido # ff1493;}
.button {background: # ff1493;}
.sidebar a: hover {border-bottom-color: # ff1493;}
.footer a {color: # ff1493;}
{% endhighlight%}

Si decidiste optar por un tono _diferente_ de rosa:

<div style = "background: # ff1493; color: white; display: inline-block; padding: 10px; vertical-align: top;"> Rosa antiguo </div>
<div style = "background: # c71585; color: white; display: inline-block; padding: 10px; vertical-align: top;"> Nuevo rosa </div>

Solo tendrías que cambiar el valor del color ** una vez **:

{% highlight scss%}
$ rosa: # c71585;
{% endhighlight%}

Y el CSS resultante se actualizaría ** automáticamente **:

{% highlight css%}
.quote {borde izquierdo: 5px sólido # c71585;}
.button {background: # c71585;}
.sidebar a: hover {border-bottom-color: # c71585;}
.footer a {color: # c71585;}
{% endhighlight%}

### Aún más abstracción

Ahora, digamos que en realidad no quieres usar el rosa como color ** primario **, ¡sino ** verde **!

<div style = "background: # 32cd32; color: white; display: inline-block; padding: 10px; vertical-align: top;"> # 32cd32 </div>

Tendría que definir una variable `$ green: # 32cd32;` ** y ** reemplazar todas las instancias de `$ pink` con` $ green` en su SCSS.

Hay una mejor manera:

{% highlight scss%}
// Definición de valores de color
$ amarillo: # fce473;
$ rosa: # c71585;
$ verde: # 32cd32;
$ azul: # 1d90ff;

// Definición de tipos de color
$ color primario: $ verde;

.quote {borde izquierdo: 5px sólido $ color primario;}
.button {background: $ color-primario;}
.sidebar a: hover {border-bottom-color: $ primary-color;}
.footer a {color: $ color-primario;}
{% endhighlight%}

En lugar de _directly_ hacer referencia a la variable `$ green`, define una variable de ** color primario ** que es _set_ to` $ green`.

When you think about it, you don't _really_ want to use `$green` throughout your CSS. What you _actually_ want is use your **primary color**, which happens to be green.

If you decided to use `$blue` as your primary color, you'd only have to modify a **single line**.

### For any type of value

We've used variables to define colors, but you can set **any type of content**:

{% highlight scss %}
// Colors
$yellow:              #fce473;
$pink:                #c71585;
$green:               #32cd32;
$blue:                #1d90ff;

$primary-color:       $blue;
$secondary-color:     $yellow;

// Fonts
$serif:               "Lora", "Playfair Display", Georgia, serif;
$sans-serif:          "Roboto", "Source Sans Pro", "Open Sans", Arial, sans-serif;
$monospace:           "Inconsolata", monospace;

$primary-font:        $sans-serif;
$secondary-font:      $serif;

// Spacing
$mobile-space:        10px;
$desktop-space:       35px;
{% endhighlight %}
