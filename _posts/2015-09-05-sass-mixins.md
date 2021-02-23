---
layout: post
title: "Sass <strong>mixins</strong>"
subtitle: "CSS programming"
section: sass
---

Cuando te encuentras escribiendo el mismo código una y otra vez, parece que los mixin de Sass podrían ayudarte.

Los mixins de Sass son ** funciones CSS ** que puedes ** incluir ** cuando quieras.

### Syntax

¿Recuerdas cómo escribimos `@ keyframes` al crear ** [animaciones CSS] (/ css-animations.html) **? La sintaxis de Sass mixin es bastante similar:

{% highlight scss %}
@mixin overlay() {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
{% endhighlight %}

El ** nombre ** de este mixin es "overlay". Puede hacer referencia a este mixin en cualquier regla CSS usando `@ include`:

{% highlight scss %}
.modal-background{
  @include overlay();
  background: black;
  opacity: 0.9;
}
{% endhighlight %}

Como de costumbre, este `.scss` se compilará en` .css`:

{% highlight css %}
.modal-background{
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background: black;
  opacity: 0.9;
}
{% endhighlight %}

### Reutilización

El propósito principal de un mixin es hacer que un ** conjunto de propiedades sea reutilizable **.

Al igual que las variables de Sass (donde usted define sus ** valores ** en una sola ubicación), los mixins de Sass le permiten definir ** propiedades ** en una sola ubicación.

El mixin anterior se puede reutilizar en otras reglas:

{% highlight scss %}
.modal-background{
  @include overlay();
}

.product-link{
  @include overlay();
}

.image-pattern{
  @include overlay();
}
{% endhighlight %}

{% highlight css %}
.modal-background{
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.product-link{
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.image-pattern{
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
{% endhighlight %}

### Parametros

Debido a que los mixins son ** funciones ** y porque es posible que desee ** alterar ** la _salida_, los mixins pueden aceptar ** parámetros **.

Por ejemplo, este [border-radius mixin] (https://sass-lang.com/guide#topic-6-SCSS) evita la reescritura de ** prefijos de proveedor ** y toma el valor de _radius_ real como parámetro:

{% highlight scss %}
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box{
  @include border-radius(3px);
}
{% endhighlight %}

{% highlight css %}
.box{
  -webkit-border-radius: 3px;
     -moz-border-radius: 3px;
      -ms-border-radius: 3px;
          border-radius: 3px;
}
{% endhighlight %}

El mixin evita la molestia de tener que escribir todos los prefijos de proveedor y utiliza el `$ radius` para permitir definir el mismo valor de radio para cada propiedad del proveedor.

### Parametros opcionales

Si desea que un parámetro tenga un valor ** predeterminado ** y, al mismo tiempo, brinde la posibilidad de _ establecer_ uno ocasionalmente, puede crear ** parámetros opcionales **:

{% highlight scss %}
@mixin label($text: "Code", $background: $yellow, $color: rgba(black, 0.5)) {
  position: relative;
  &:before{
    background: $background;
    color: $color;
    content: $text;
    display: inline-block;
    font-size: 0.6rem;
    font-weight: 700;
    height: 1rem;
    left: 0;
    letter-spacing: 0.1em;
    line-height: 1rem;
    padding: 0 0.5em;
    position: absolute;
    text-transform: uppercase;
    top: 0;
  }
}
{% endhighlight %}

Este mixin es el que utiliza este sitio web para agregar ** etiquetas ** en la esquina superior izquierda de los fragmentos de código. Tiene 3 parámetros opcionales, cada uno de ellos con su propio valor predeterminado establecido con dos puntos `:`.

Este mixin se usa varias veces a lo largo del código:

{% highlight scss %}
div.highlighter-rouge{
  @include label();
  &.css{
    @include label("CSS", $blue, white);
  }
  &.scss{
    @include label("SCSS", #c69, white);
  }
}
{% endhighlight %}

El `div.highlighter-rouge` usará los valores predeterminados del mixin:

* text `"Code"`
* background: `$yellow`
* color: `rgba(black, 0.5)`

Las versiones `.css` y` .scss`, debido a que sus parámetros son _set_, usarán etiquetas y colores diferentes.

### Bibliotecas de Mixin 

Si no quiere perder tiempo escribiendo sus propios mixins de Sass, puede usar cualquiera de las siguientes ** bibliotecas de mixin **:

* **Bourbon**: [bourbon.io](https://bourbon.io/)
* **Compass**: [compass-style.org](https://compass-style.org/)
* **Susy**: [susy.oddbird.net](https://susy.oddbird.net/)
