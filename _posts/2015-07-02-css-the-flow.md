---
layout: post
title: "The <strong>Flow</strong>"
subtitle: "The <strong>default</strong> behavior of a webpage"
section: css
---

Un documento HTML es un documento **living** 

Incluso sin ningun CSS aplicado, un documento HTML ya tiene sus propias reglas:

* **fluidity**: como el contenido se adapta en las dimensiones del navegador
* **ordering**: en que orden aparecen los elementos
* **stacking**: como los elementos apareces encima de otros

Este comportamiento natural es **logical**.

### Fluidity

En HTML, el **content** es Rey.

Todos los elementos `block` son **fluid**. Ellos naturalmente adaptaran su composición para acomodar su contenido interno:

* **width: 100%**  
Un bloque ocupará todo el ancho disponible
* **word wrap**  
Si un contenido bloque esta en linea no cabe en una sola linea, estará en una nueva linea
* **height: auto**  
La altura de una bloque varia automaticamente para coincidir con el tamaño de su contenido

<div class="result" id="result-fluidity">
  <div>
    Un elemento en bloque llenará toda <strong>la altura</strong> posible, mientras sea <strong>height</strong> variará automaticamente de acuerdo con el tamaño del contenido.
  </div>
  <div>
    Este elemento será empujado hacia abajo dependiendo de la altura de su predecesor.
  </div>
</div>

<style type="text/css">
#result-fluidity{ height: 450px; max-width: 800px;}
#result-fluidity div{ background: coral; padding: 20px;}
#result-fluidity div:first-child{ background: mediumaquamarine; animation: expand 3s alternate infinite both;}

@keyframes expand{
  0%  { width: 100%;}
  100%{ min-width: 100px; width: 50%;}
}
</style>

* Un `block` es por defecto en **full width**
* El **height** es la altura del contenido

### Ordering

El elemento HTML es presentado en el **order** en el que van escritos **in the code**.
Primero en el código -> primero en el navegador.

Cada <code>block</code> aparece en el orden en el que aparece en el código HTML, de <strong>arriba</strong> hacia <strong>abajo</strong>.

{% highlight html %}
<p>Primero</p>
<p>Segundo</p>
<p>Tercero</p>
<p>Cuarto</p>
<p>Quinto</p>
{% endhighlight %}

<div class="result">
  <p>Primero</p>
  <p>Segundo</p>
  <p>Tercero</p>
  <p>Cuarto</p>
  <p>Quinto</p>
</div>

### Stacking

Un navegador tiene **3 dimensions**.

Casa elemento HTML pertenece a una imaginaria **layer**.

El **stack order** depende de como el elemento es **nested**: elemento child aparece **on top** de sus respectivos padres.

* Casa **nested** elemento aparece _on top_ of its parent.
* The **deeper** in the hierarchy, the _higher_ in the stack.

{% highlight html %}
<div>
  This parent is behind
  <p>
    This nested child appears <strong>on top</strong> of its parent
  </p>
</div>
{% endhighlight %}

<div class="result">
  <div style="background: midnightblue; color: white; padding: 20px;">
    This parent is behind
    <p style="background: mediumseagreen; padding: 20px;">
      This nested child appears <span style="background: crimson; color: white; padding: 2px 5px;">on top</span> of its parent
    </p>
  </div>
</div>

### Breaking the flow

While the browser's default behavior is _efficient_, it may not be _sufficient_ for your design needs.

Several CSS properties allow to **disrupt** the Flow:

* `height` and `width` can alter an element's **fluidity**
* `float` **disrupts** an element's behavior as well as its surroundings
* `position` `absolute` and `fixed` **remove** an element from the Flow
* `z-index` can alter the order in which elements are **stacked**
