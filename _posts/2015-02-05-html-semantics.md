---
layout: post
title: "HTML <strong>Semanticas</strong>"
subtitle: "HTML da <strong>significado</strong>"
section: html
---

El propósito de las etiquetas HTML es dar significado a un documento. No te preocupes por cómo se ve tu página web. Concéntrate en la importancia de cada etiqueta que usarás.

Dependiendo del contenido que esté escribiendo, puede elegir el elemento adecuado que coincida con el significado del texto.

Este **rango** de elementos es lo suficientemente amplio como para adaptarse tanto a la materia de propósito **general** (como párrafos o listas), como a contenido más **específico** como '<output>' (para mostrar el resultado de un cálculo) o '<progress>' (para mostrar el progreso de una tarea).

### Elementos de estructura: organizar tu página

Los elementos de estructura le permiten organizar las partes **principales** de la página. Normalmente contienen otros elementos HTML.

Esto es lo que una página web típica podría incluir:

- `<header>` como el **primer** elemento de la página, que puede incluir el logotipo y el eslogan.
- `<nav>` como una lista de **links** que van a las diferentes páginas del sitio web.
- `<h1>` como el título de la página.
- `<article>` como el contenido principal de la página, como una entrada de blog.
- `<footer>` como el **último** elemento de la página, situado en la parte inferior.

### Elementos de texto: definir tu contenido

Dentro de estos elementos de estructura, normalmente se encuentran elementos **text** destinados a definir el **propósito** de su contenido.

Usted utilizará principalmente:

- `<p>` para párrafos
- `<ul>` para listas (desordenadas)
- `<ol>` para listas (ordenadas)
- `<li>` para elementos de lista
- `<blockquote>` para citas

### Elementos en línea: distinguir el texto

Dado que los elementos de texto pueden ser largos pero con contenido variado, los elementos **inline** permiten **distinguir** partes del texto.

Hay una gran cantidad de elementos en línea disponibles, pero por lo general se encontrará con lo siguiente:

<ul>
  <li><code>&lt;strong&gt;</code> para <strong>palabras</strong> importantes</li>
  <li><code>&lt;em&gt;</code> para <em>palabras</em> enfatizadas</li>
  <li><code>&lt;a&gt;</code> para <a href="#">links</a></li>
  <li><code>&lt;small&gt;</code> para <small>palabras poco importantes</small></li>
  <li><code>&lt;abbr&gt;</code> para abreviaturas como W3SC</li>
</ul>

<aside class="comments">
  Con solo leer este código HTML, puede comprender fácilmente lo que significa cada elemento <strong>HTML</strong>.
</aside>

{% highlight html %}

<article>
  <h1>Titulo de la página</h1>
  <h2>Subtítulo</h2>
  <p>
    Algunas cosas con <em>énfasis</em> y algunas palabras  <strong>importantes </strong>
  </p>
  <p>
    Otro párrafo.
  </p>
  <ul>
    <li>Uno</li>
    <li>Dos</li>
    <li>Tres</li>
  </ul>
  <blockquote>
    Alguien dijo.
  </blockquote>
</article>
<aside>
  <h3>Mis últimos posts</h3>
  <ul>
    <li><a href="#">Uno</a></li>
    <li><a href="#">Uno</a></li>
    <li><a href="#">Uno</a></li>
  </ul>
</aside>
{% findelacita %}

### Elementos genéricos

Cuando aparentemente ningún elemento _semantico_ parece adecuado para su contenido, pero todavía desea insertar un elemento HTML (ya sea para propósitos de agrupación o estilo), puede conformarse con uno de los dos elementos **genéricos**:

- `<div>` para elementos de bloque
- `<span>` para elementos en línea

Aunque estos elementos HTML en realidad no _mean_ nada, serán útiles cuando empecemos a usar CSS.

### No pienses demasiado en semántica

Hay aproximadamente [100 semantic HTML elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) Puede ser abrumador pasar por esa lista y elegir el elemento _appropriate_ para su contenido.

Pero no pases mucho tiempo preocupándote por eso. Si te atenemos a la siguiente lista por ahora, estarás lo suficientemente bien:

<div class="table">
  <table>
    <tr>
      <th>Estructura</th>
      <th>Texto</th>
      <th>En línea</th>
    </tr>
    <tr>
      <td>
        <code>header</code><br>
        <code>h1</code><br>
        <code>h2</code><br>
        <code>h3</code><br>
        <code>nav</code><br>
        <code>footer</code><br>
        <code>article</code><br>
        <code>section</code>
      </td>
      <td>
        <code>p</code><br>
        <code>ul</code><br>
        <code>ol</code><br>
        <code>li</code><br>
        <code>blockquote</code>
      </td>
      <td>
        <code>a</code><br>
        <code>strong</code><br>
        <code>em</code><br>
        <code>q</code><br>
        <code>abbr</code><br>
        <code>small</code>
      </td>
    </tr>
  </table>
</div>

\*[W3C]: World Wide Web Consortium
