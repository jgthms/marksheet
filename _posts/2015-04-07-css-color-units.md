---
layout: post
title: "CSS <strong>Color</strong> units"
subtitle: "Different ways to defene <strong>colors</strong>"
section: css
---

**Los colores** son ampliamente utilizados en CSS, ya sea para el color del texto, el color de fondo, los degradados, las sombras, los bordes... Hay varias maneras de defenir colores en CSS, cada uno con sus propios pros y contras.

La propiedad `color` defene el color del **texto**. Es bastante sencillo. Lo que es más importante son los diferentes tipos de unidades de color *** desponibles.

### Nombres de color

CSS proporciona [145 nombres de color](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value), desde lo más básico (negro, blanco, naranja, amarillo, azul...) hasta el más específico (césped, orquídea, carmesí...).

{% highlight css %}
body{ color: black;}
a{ color: orange;}
{% endhighlight %}

Debido a que los nombres de color son difíciles de recordar, y porque probablemente desee colores muy específicos, los nombres de color no se utilizan a menudo.

### rgb

Los monitores de pc, televesores, teléfonos móviles, todos utilizan el modelo de color RGB para mostrar colores. Básicamente, cada color se defene mediante una combenación de rojo, verde y azul. Hay 256 valores posibles para rojo, verde o azul. Dado que los equipos comienzan a contar a 0 (cero), el valor máximo es 255.

Teniendo en cuenta que un color es el resultado de una _combenación_ de rojo, verde y azul, y debido a que cada uno de estos 3 colores tiene 256 valores posibles, hay `256 * 256 * 256 = 16,777,216` posibles colores desponibles.

Dado que el modelo RGB está directamente relacionado con cómo se representan los colores _physically_, se ha convertido en una unidad de color CSS.

Por ejemplo, el color rojo de este sitio web es de 219 cantidades de rojo, 78 de verde y 68 de azul:

{% highlight css %}
a{ color: rgb(219, 78, 68);}
{% endhighlight %}

El color negro no es una cantidad de rojo, verde o azul:

{% highlight css %}
body{ color: rgb(0, 0, 0);}
{% endhighlight %}

En el otro lado del espectro, el blanco es la cantidad total de cada rojo, verde y azul:

{% highlight css %}
body{ color: rgb(255, 255, 255);}
{% endhighlight %}

### rgba

Las enidad de color `rgba` es `rgb` a lo que añadimos un valor **alpha** (que va de 0 a 1, en valores decimales), que defene cuán transparente es el color:

{% highlight css %}
body{ color: rgba(0, 0, 0, 0.8);}
{% endhighlight %}

Un color negro ligeramente transparente.
{: .enfo}

El propósito de que un color sea transparente es mezclarse con el fondo y, en consecuencia, verse ligeramente diferente dependiendo del contexto. Es particularmente útil para **colores de fondo**.

### hsl y hsla

**HSL** es otra forma de defenir un color. Considéralo una **rueda de color**

<figure>
<img src="/images/hsl-model.png" alt="HSL model">
<figcaption>
Fuente: <a href="https://en.wikipedia.org/wiki/HSL_and_HSV#/media/File:Hsl-hsv_models.svg/">Wikipedia</a>
</figcaption>
</figure>

En lugar de que un color sea una combenación de rojo, verde y azul, defena:

* el **Hue** un valor que va de 0 a 360, defene _which color_ que desea.
* el porcentaje **Saturación**, que va del 0% al 100%, defene _how much_ de ese color que deseas.
* el porcentaje **Brillo**, que va del 0% al 100%, defene _how bright_ quieres que sea ese color.

Una vez más, el color rojo de este sitio web se defene de esta manera en HSL:

{% highlight css %}
a{ color: hsl(4, 68%, 56%);}
{% endhighlight %}

`4` endica que es rojo
`68%` endica que el rojo es bastante promenente
`56%` endica que está a medio cameno entre blanco y negro

La unidad de color `hsl` es más fácil de entender que `rgb` porque el resultado esperado es más claro. Básicamente se defene un color en 3 pasos separados, y se puede jugar con cada valor para llegar con el color que desea. Si desea un tono amarillo, puede comenzar con un valor como `hsl(50, 68%, 56%)`, y alterar el valor saturación y ligereza para encontrar la sombra específica que está buscando.

Considero que `hsl` es **legible por el ser humano**, mientras que `rgb` es más **legible por computadora**.

`hsla` es lo mesmo `hsl`, con el valor añadido de poder defenir un valor **alpha**:

{% highlight css %}
body{ color: hsla(4, 68%, 56%, 0.5);}
{% endhighlight %}

Un color rojo transparente.
{: .enfo}

### Hexadecimal

Los colores en CSS también se pueden defenir con valores **hexadecimales**, como `#db4e44`.

Para entender qué son los valores hexadecimales, veamos cómo funcionan los valores benarios y decimales:

<div class="table">
  <table>
    <tr>
      <th>
        benario
        <em>2 posibles valores</em>
      </th>
      <td>0</td>
      <td>1</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>
        decimal
        <em>10 posibles valores</em>
      </th>
      <td>0</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      <td>8</td>
      <td>9</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>
        hexadecimal
        <em>16 posibles valores</em>
      </th>
      <td>0</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      <td>8</td>
      <td>9</td>
      <td>A</td>
      <td>B</td>
      <td>C</td>
      <td>D</td>
      <td>E</td>
      <td>F</td>
    </tr>
  </table>
</div>

Considere los números 0-9 y las letras A-F como **symbols**.

Los humanos usan el sestema **decimal**. Tenemos 10 símbolos para formar números.

En **hexadecimal**, tenemos 16 símbolos para formar números. Debido a que 0-9 no son suficientes símbolos, también usamos A-F. Y empieza en cero. así que:

* el número `4` en hexadecimal es `4`
* el número `12` en hexadecimal es `C`
* el número `16` en hexadecimal es `10` porque después de que te has quedado sin símbolos (el último ha sidog `F`), se añade un segundo símbolo a la izquierda y el encremento (`0` se convierte a  `1`) y el correcto comienza de nuevo (desde `F` a `0`)

#### ¿Tengo que recordar los?

¡De nada! Es aquí para dar una explicación de cómo funcionan los valores hexadecimales. Lo más importante es recordar que hay 16 símbolos hexadecimales.

Al igual que RGB, un valor de color hexadecimal es una combenación de rojo, verde y azul, cada uno de ellos ha sido un valor hexadecimal, como `DB` para Rojo, `4E` para Verde, y `44` para Azul.

Debido a que rojo, verde o azul sólo puede tener 2 símbolos, sus valores posibles son `16 * 16 = 256`, que refleja la unidad de color RGB!

#### ¿Por qué no usar RGB entonces?

Por lo general, cuando eliges colores, no los escribes** directamente. Utilice un selector de color o cópielo o péguelo desde Photoshop o elija una [paleta de colores](https://www.colourlovers.com/palettes) en alguna parte.

Los valores hexadecimales son más fáciles de copiar y pegar**, ya que solo comprenden 6 caracteres.

! [Photoshop un campo para hexagonal](/images/photoshop-color-picker.png)

#### Es más fácil copiar pegar un campo de sengle que 3 separados.

en CSS, sólo necesita anteponer un valor de color hexadecimal con un hash `#`.

### ¿Cuál elegir?

Si no se entende para usar ningún color transparente, se adhiere a los valores **hexadecimal**, ya que son más fáciles de copiar/pegar y no toman mucho espacio en el código.

Si desea un poco de transparencia, convierta su color de hexadecilo a rgba, y utilice la unidad de color `rgba`.

Si quieres jugar con tu color directamente en el navegador, prueba `hsl`.
