---
diseño: poste
título: "CSS <strong> borde </strong>"
subtítulo: "Los <strong> bordes </strong> del rectángulo"
sección: css
---

Debido a que un elemento HTML se representa como un rectángulo, puede tener hasta ** 4 bordes **: superior, inferior, izquierda y derecha. Puede establecer un borde en todos los lados a la vez o en cada lado individualmente.

### Tipos de borde y ubicación

Un borde CSS tiene 3 propiedades:
* `border-color` defined by using a [color unit](css-color-units.html)
* `border-style` can be solid, dashed, dotted...
* `border-width` defined by using a [size unit](css-size-units.html)

It also has 4 possible sides:

* `border-top`
* `border-bottom`
* `border-left`
* `border-right`

{% highlight css %}
blockquote{ border-color: yellow; border-style: solid; border-width: 1px;}
{% endhighlight %}

La propiedad abreviada `border` permite definir las 3 propiedades a la vez:

{% highlight css %}
blockquote{ border: 1px solid yellow;}
{% endhighlight %}

### Borde único

Si desea establecer un borde en solo uno de los cuatro lados, debe incluir la ** posición ** del borde en la propiedad CSS. Por ejemplo, para un borde inferior, puede escribir:

{% highlight css %}
blockquote{ border-bottom-color: yellow; border-bottom-style: solid; border-bottom-width: 1px;}
{% endhighlight %}


En cuanto a la propiedad `border`, _cada_ lado tiene su versión abreviada:

{% highlight css %}
blockquote{ border-bottom: 1px solid yellow;}
{% endhighlight %}

#### ¿Qué pasa si quiero 3 bordes? ¿Tengo que configurarlos individualmente?

Como habrás adivinado, la forma más rápida de tener 3 bordes es establecer los 4 y luego eliminar el que no quieres:

{% highlight css %}
blockquote{ border: 1px solid yellow; border-left: none;}
{% endhighlight %}

### Combinaciones de taquigrafía

Debido a que existen 3 _propiedades_ de borde_ y 4_ubicaciones_ de borde, hay ** 12 ** combinaciones posibles:

<div class="table">
  <table>
    <tr>
      <th>border</th>
      <th>border-color</th>
      <th>border-style</th>
      <th>border-width</th>
    </tr>
    <tr>
      <th>border-top</th>
      <td>border-top-color</td>
      <td>border-top-style</td>
      <td>border-top-width</td>
    </tr>
    <tr>
      <th>border-bottom</th>
      <td>border-bottom-color</td>
      <td>border-bottom-style</td>
      <td>border-bottom-width</td>
    </tr>
    <tr>
      <th>border-left</th>
      <td>border-left-color</td>
      <td>border-left-style</td>
      <td>border-left-width</td>
    </tr>
    <tr>
      <th>border-right</th>
      <td>border-right-color</td>
      <td>border-right-style</td>
      <td>border-right-width</td>
    </tr>
  </table>
</div>

Hay muchas propiedades CSS disponibles. Por lo general, terminará usando solo ** 5 versiones abreviadas **:

* `border`
* `border-top`
* `border-bottom`
* `border-left`
* `border-right`
