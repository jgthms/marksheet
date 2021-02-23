---
layout: post
title: "CSS <strong>position</strong>"
subtitle: "Yendo manual"
section: css
---

La propiedad CSS `position` es versátil y poderosa. Permite _configurar_ o _alterar_ la posición de un elemento. Tiene 4 ** valores ** posibles:

* `static` (default value)
* `relative`
* `absolute`
* `fixed`


A menudo se usa junto con las propiedades de 4 ** coordenadas **:

* `left`
* `right`
* `top`
* `bottom`

### estática

Este es el ** valor predeterminado ** de `posición`: los elementos estáticos simplemente siguen el [flujo natural] (css-the-flow.html). No se ven afectados por ningún valor de "izquierda", "derecha", "superior" o "inferior".

### relativo

Cuando la `posición` se establece en ** relativa **, un elemento se puede mover de acuerdo con su ** posición actual **.

{% highlight html %}
<p>Bueno, Ja debería saber sus propios asuntos, pensé, así que agarré la lanza y trepé hacia el hombre rojo tan rápido como pude, estando tan lejos de mis ancestros simiescos como yo.</p>
<p>Me imagino que el sithico torpe, como lo llamaba Ja, de repente se dio cuenta de nuestras intenciones y de que era muy probable que perdiera toda su comida en lugar de duplicarla como esperaba.</p>
<p>Cuando me vio trepar por esa lanza, dejó escapar un silbido que sacudió el suelo y vino corriendo detrás de mí a un ritmo tremendo.</p>
{% endhighlight %}

{% highlight css %}
p{ border: 1px solid blue;}
{% endhighlight %}

<div class="result">
  <p style="border: 1px solid blue;">Well, Ja debería saber sus propios asuntos, pensé, así que agarré la lanza y trepé hacia el hombre rojo tan rápido como pude, estando tan alejado de mis ancestros simiescos como yo.</p>
  <p style="border: 1px solid blue;">Me imagino que el sithico torpe, como lo llamaba Ja, de repente se dio cuenta de nuestras intenciones y de que era muy probable que perdiera toda su comida en lugar de duplicarla como esperaba.</p>
  <p style="border: 1px solid blue;">Cuando me vio trepar por esa lanza, dejó escapar un silbido que sacudió el suelo y se lanzó tras de mí a una velocidad tremenda.</p>
</div>

Muevamos el ** segundo ** párrafo:

{% highlight html %}
<p>Bueno, Ja debería saber sus propios asuntos, pensé, así que agarré la lanza y trepé hacia el hombre rojo tan rápido como pude, estando tan lejos de mis ancestros simiescos como yo.</p>
<p class="second">Me imagino que el sithico torpe, como lo llamaba Ja, de repente se dio cuenta de nuestras intenciones y de que era muy probable que perdiera toda su comida en lugar de duplicarla como había esperado </p>
<p> Cuando me vio trepar por la lanza, dejó escapar un silbido que hizo temblar el suelo y se lanzó tras de mí a una velocidad tremenda </p>
{% endhighlight %}

{% highlight css %}
.second{ position: relative; border-color: red; left: 20px; top: 10px;}
{% endhighlight %}

<div class="result">
  <p style="border: 1px solid blue;">Bueno, Ja debería saber sus propios asuntos, pensé, así que agarré la lanza y trepé hacia el hombre rojo tan rápido como pude, estando tan alejado de mis ancestros simiescos como yo. </p>
  <p style="border: 1px solid red; position: relative; left: 20px; top: 10px;">Me imagino que el sithico torpe, como lo llamaba Ja, de repente se dio cuenta de nuestras intenciones y de que era muy probable que perdiera toda su comida en lugar de duplicarla como había esperado </p>
  <p style="border: 1px solid blue;">Cuando me vio trepar por esa lanza, dejó escapar un silbido que sacudió el suelo y se lanzó tras de mí a una velocidad tremenda.</p>
</div>

El párrafo rojo se ha movido 20px ** desde la izquierda ** y 10px ** desde la parte superior **, en relación con su posición _natural_, donde se _supuesta_ debe estar.

Observe cómo los párrafos azules no se han movido en absoluto. Al usar el posicionamiento relativo, el párrafo rojo puede moverse libremente sin interrumpir el diseño. Lo único fuera de lugar es _el mismo_. Todos los demás elementos ** no saben que el elemento se ha movido **.

### absoluto

Cuando la `posición` se establece en ** absoluta **, un elemento puede moverse de acuerdo con el ** primer ancestro posicionado **.

#### "¿Posicionado ?? ¿Qué es un elemento _posicionado_?"

Un elemento ** posicionado ** es aquel cuyo valor de "posición" es "relativo", "absoluto" o "fijo". Entonces, a menos que la posición no esté establecida _o_ estática, un elemento está ** posicionado **.

La característica de un elemento _positioned_ es que puede actuar como ** punto de referencia para sus elementos secundarios **.

Imaginemos una ** jerarquía ** simple:


{% highlight html %}
<section>
 Estoy en posición relativa.
  <p>
    ¡Estoy en posición absoluta!
  </p>
</section>
{% endhighlight %}

{% highlight css %}
section {
  background: gold;
  height: 200px;
  padding: 10px;
  position: relative; /* Esto convierte la <section> en un punto de referencia para el<p> */
}

p {
  background: limegreen;
  color: white;
  padding: 10px;
  position: absolute; /* This makes the <p> freely movable */
  bottom: 10px; /* 10px from the bottom */
  left: 20px; /* 20px from the left */
}
{% endhighlight %}

<div class="result">
  <section style="background: gold; height: 200px; margin: 1em 0; padding: 10px; position: relative;">
    
Estoy en posición relativa.
    <p style="background: limegreen; bottom: 10px; color: white; left: 20px; margin: 0; padding: 10px; position: absolute;">
      
¡Estoy en posición absoluta!
    </p>
  </section>
</div>

La sección amarilla tiene una altura de "200px" y su posición se establece en "relativa", lo que la convierte en un ** punto de referencia para todos mis elementos secundarios **.

Como la posición del párrafo verde se establece en "absoluta", puede moverse libremente _ de acuerdo con_ la sección amarilla. Al establecer los valores `bottom` e` left`, se moverá _desde_ la esquina inferior izquierda.

#### ¿Qué sucede si configuramos tanto a la izquierda como a la derecha?

Si no se establece el `ancho`, aplicar` left: 0` y `right: 0` ** estirará el elemento en todo el ancho **. Es el equivalente a establecer `left: 0` y` width: 100% `.

Si se establece el "ancho", se descarta el valor "derecho".

### reparado

Cuando la `posición` se establece en ** fija **, actúa como ** absoluta **: puede establecer las coordenadas izquierda / derecha y superior / inferior.

La única diferencia es que el ** punto de referencia es la ventana gráfica **. Significa que un elemento fijo _no se desplazará_ con la página; está _fijada_ en la pantalla.
