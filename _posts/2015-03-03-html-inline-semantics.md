---
composición: capítulo
Título: "Semántica <strong>en línea</strong>"
subtítulo: "Las partes pequeñas <em>dentro de</em> un bloque de texto"
sección: html
---

Si bien los párrafos y las listas están destinados a identificar **bloques** completos de texto, a veces queremos dar significado a una palabra (o algunas palabras) _dentro de_ un texto.
### Fuerte

Para palabrfas importantes, usar el tag `<strong>`:

{% highlight html %}
<p>
  Esto es <strong>importante</strong>, pero esto no.
</p>
{% endhighlight %}

<div class="result">
  <p>
    Esto es <strong>importante</strong> pero esto no.
  </p>
</div>

By default, `<strong>` elements are displayed in **bold**, but keep in mind that it is only the browser's default behavior. Don't use `<strong>` _only_ to put some text in bold, but rather to give it more **importance**.

De forma predeterminada, los elementos ` <strong> ` se muestran en **negrita**, pero tenga en cuenta que es solo el comportamiento predeterminado del navegador. No use `<strong>` _sólo_ para poner un texto en negrita, sino para darle más **importancia**.

### Enfasis

Para _enfatizar_ palabras, usa el `<em>` tag:

{% highlight html %}
<p>
  Esto está <em>enfatizado</em> pero esto no.
</p>
{% endhighlight %}

<div class="result">
  <p>
    Esto está <em>enfatizado</em> pero esto no.
  </p>
</div>

By default, `<em>` elements are displayed in _italic_, but keep in mind that it is only the browser's default behavior. Don't use `<em>` _only_ to put some text in italic, but rather to give it _stress emphasis_.

De forma predeterminada, los elementos `<em>` se muestran en _italic_, pero tenga en cuenta que es solo el comportamiento predeterminado del navegador. No use `<em>` _sólo_ para poner algún texto en cursiva, sino para darle _énfasis en el énfasis_.

### Abreviaturas

Las abreviaturas como W3C o CD pueden usar el elemento `<abbr>`:

{% highlight html %}
<p>
  Me he comprado un <abbr>CD</abbr>.
</p>
{% endhighlight %}

Puede agregar un **atributo** `título` para especificar la descripción de la abreviatura, que aparecerá al colocar el cursor sobre el elemento:

{% highlight html %}
<p>
  Me he comprado un <abbr title="Disco Compacto">CD</abbr>.
</p>
{% endhighlight %}

<div class="result">
  <p>
    Me he comprado un <abbr title="Disco Compacto">CD</abbr>.
  </p>
</div>

### Citas en línea

El elemento `<blockquote>` es un elemento de **nivel de bloque**. Tiene una versión **en línea**: `<q>`:

{% highlight html %}
<p>
  Él dijo <q>“Hola Mundo”</q> y se fue
</p>
{% endhighlight %}

<div class="result">
  <p>
    Él dijo <q>“Hola Mundo”</q> y se fue
  </p>
</div>

### Otros elementos en línea

Hay muchos otros [elementos semánticos en línea](https://developer.mozilla.org/en/docs/Web/HTML/Element#Inline_text_semantics) para elegir, pero hemos cubierto los más comunes.

*[CD]: Disco compacto
*[W3C]: Consortio del world wide web
