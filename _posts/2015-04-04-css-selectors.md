---
diseño: poste
title: "CSS <strong> Selectores </strong>"
subtítulo: "Cómo <strong> orientar </strong> elementos HTML"
sección: css
---

Debido a que no queremos diseñar todos nuestros elementos HTML a la vez, necesitamos poder ** apuntar ** a un subconjunto de estos elementos HTML.

Los selectores CSS definen a qué elementos queremos que se aplique nuestro estilo.

### Selectores de etiquetas genéricos

Apuntar a etiquetas HTML genéricas es fácil: solo use el nombre de la etiqueta.

{% highlight css%}
a {/ * Enlaces * /}
p {/ * Párrafos * /}
ul {/ * Listas desordenadas * /}
li {/ * Elementos de lista * /}
{% endhighlight%}

Existe una conexión directa entre el _nombre_ de la etiqueta HTML y el _selector_ de CSS utilizado.

### Clases
Teniendo en cuenta que probablemente no queremos diseñar todos los párrafos o todos los títulos de manera idéntica, necesitamos _diferenciarlos_.

De todos los atributos HTML, el atributo `class` es el más importante para CSS. Nos permite definir un ** grupo ** de elementos HTML que podemos _destinar específicamente_. Simplemente coloque un punto `.` delante del nombre de la clase que desea usar:

{% highlight css%}
.fecha {
  color rojo;
}
{% endhighlight%}

Por un lado, está el atributo HTML `class` con el valor` date`. Debe coincidir con el nombre de la clase CSS.

Puede usar cualquier nombre para su clase CSS, siempre que no comience con un número.
{: .info}

El selector de clases `.date` apuntará a todos los elementos HTML que tengan el atributo` class = "date" `. Por lo tanto, los siguientes elementos HTML tendrán ** todos ** estilos:
<div class = "tabla">
  <tabla>
    <thead>
      <tr>
        <th> HTML </th>
        <th> Posibles selectores de CSS </th>
        <th> Qué significa </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><pre><code>&lt;p&gt;&lt;/p&gt;</code></pre> </td>
        <td><code>p</code> </td>
        <td> <code> Cada & lt; p & gt; </code> </td>
      </tr>
      <tr>
        <td><pre> <code> & lt; div class = "global" & gt; & lt; / div & gt; </code> </pre> </td>
        <td>
          <code> div </code> <br>
          <code> .global </code> <br>
          <code>div.global</code> </td>
          <td> Cada <code> & lt; div & gt; </code> <br>
          Todos los elementos con <code> class = ”global” </code> <br>
          Cada <code> & lt; div & gt; </code> con <code> class = ”global” </code>
        </td>
      </tr>
      <tr>
        <td><pre> <code> & lt; ul id = "menú" & gt; </code> </pre> </td>
        <td>
          <code> #menu </code> <br>
          <code> ul # menú </code>
        </td>
        <td>
          El único elemento con <code> id = ”menu” </code> <br>
          El único <code> & lt; ul & gt; </code> con <code> id = ”menú” </code>
        </td>
      </tr>
      <tr>
        <td>
          <pre> <código> & lt; ol class = "dico" & gt;
  & lt; li & gt; Un cobaye & lt; / li & gt;
  & lt; li & gt; Des cobaux & lt; / li & gt;
& lt; / ol & gt; </code> </pre>
        </td>
        <td>
          <code> li </code> <br>
          <code> ol li </code> <br>
          <code> .dico li </code>
        </td>
        <td>
          Cada <code> & lt; li & gt; </code> <br>
          Cada <code> & lt; li & gt; </code> con un <code> & lt; ol & gt; </code> como ancestro <br>
          Cada <code> & lt; li & gt; </code> con un elemento <code> class = "dico" </code> como ancestro
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Combinando selectores

Reutilicemos nuestro ejemplo anterior donde queremos que nuestras fechas sean rojas:

{% highlight css%}
.fecha {
  color rojo;
}
{% endhighlight%}

{% highlight html%}
<p class = "fecha">
  Sábado 21 de febrero
</p>
<p>
  El evento será el <em class = "date"> sábado </em>.
</p>
{% endhighlight%}

<div class = "resultado">
  <p style = "color: red;"> Sábado 21 de febrero </p>
  <p> El evento será el <em style = "color: red;"> sábado </em>. </p>
</div>

¿Qué pasa si queremos que nuestras fechas que están en los elementos `em` estén azules? Podemos ** agregar ** la siguiente regla CSS:

{% highlight css%}
em.date {
  color azul;
}
{% endhighlight%}

El `em.date` combina:

* un selector de etiquetas `em`
* un selector de clase `.date`

Solo se aplicará a los elementos HTML `<em class =" date "> </em>`. ** No ** afectará a otros `.date` o` em`.

### Selectores de jerarquía

Un ** espacio ** en un selector define una relación ancestro / descendiente. Digamos que queremos que los enlaces de nuestro encabezado estén en rojo:

{% highlight css%}
encabezado a {
  color rojo;
}
{% endhighlight%}

Esto se puede leer de derecha a izquierda como: _ "Seleccionar todos los elementos` a` que están dentro de un elemento `header`" _. Esto evitará que todos los demás enlaces (que no están en el encabezado) se vean afectados.

### Selectores de pseudoclase

Los elementos HTML pueden tener diferentes ** estados **. El caso más común es cuando pasa el cursor sobre un enlace. Es posible en CSS aplicar un estilo diferente cuando ocurre tal evento.

Los selectores de pseudoclase se adjuntan a los selectores habituales y comienzan con ** dos puntos ** `:`:

{% highlight css%}
a {
  color azul;
}

a: hover {
  color rojo;
}
{% endhighlight%}
