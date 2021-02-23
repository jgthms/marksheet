---
Capa: post
Título: "HTML <strong>Enlaces</strong>"
Subtítulo: "El <strong>centro</strong> de la web"
Sección: html
---

**Los enlaces** son esenciales en HTML, ya que la Web se diseñó inicialmente para ser una red de información de documentos **enlazados** entre sí.

La parte _"Hipertexto"_ de HTML define qué tipo de enlaces usamos: enlaces _hipertexto_, también conocidos como ** hipervínculos **.

En HTML, los enlaces son **elementos en línea** escritos con la etiqueta `<a>`.

El atributo `href` (referencia de hipertexto) se utiliza para definir el **destino** del enlace (hacia donde navega cuando hace clic).

{% Destacar html %}
<p>
  Para buscar algo, visita <a href="https://www.google.com">Google</a>.
</p>
{% resaltar %}

<div class="result">
  <p>
    Para buscar algo, visita <a href="https://www.google.com">Google</a>.
  </p>
</div>

Los enlaces son la interacción **principal** de una página web: navega de un documento a otro haciendo clic en los enlaces.

Hay **3** tipos de objetivos que puede definir.

* **objetivos de anclaje**, para navegar dentro de la _misma página_
* **URL relativas**, normalmente para navegar dentro del _mismo sitio web_
* **URL absolutas**, generalmente para navegar a _ otro_ sitio web

### Anchor targets

**Ancla** destino para navegar _dentro_ de la **misma** página. Al anteponer su href con `#`, puede apuntar a un elemento HTML con un atributo `id` específico.

Por ejemplo, `<a href="#footer">` navegará hasta `<div id ="footer">` dentro del mismo documento HTML. Este tipo de href se utiliza a menudo para volver a la parte superior de la página.

### URL relativas

Si desea definir un enlace a otra página del _mismo_ sitio web, puede utilizar URL **relativas**.

¿Pero relativo a qué? Bueno, en relación con la **página actual**.

Usemos un ejemplo simple donde la carpeta `my-first-website` contiene 2 archivos HTML:

<ul class="ficheros">
  <li>
    <i class="fa fa-folder-o"></i>
    mi-primer-sitio-web
    <ul>
      <li>
        <i class="fa fa-file-code-o"></i>
        home.html
      </li>
      <li>
        <i class="fa fa-file-code-o"></i>
        contact.html
      </li>
    </ul>
  </li>
</ul>

En `home.html`, desea definir un enlace a` contact.html`.

Como los dos archivos están **en la misma carpeta**, simplemente puede escribir en `home.html`:

{% Destacar html %}
<p>
  Ve a <a href="contacto.html">Página de contacto</a>.
</p>
{% Resaltar %}

<div class="result">
  <p>
    Ve a <a href="contact.html">Página de contacto</a>.
  </p>
</div>

En un sitio web real, el proceso es similar.

Supongamos que tiene un sitio web llamado `https://ireallylovecats.com` en el que tiene 2 páginas web:` index.html` y `galeria.html`:

<ul class="ficheros">
  <li>
    <i class="fa fa-folder-o"></i>
    ireallylovecats.com
    <ul>
      <li>
        <i class="fa fa-file-code-o"></i>
        index.html
      </li>
      <li>
        <i class="fa fa-file-code-o"></i>
        galeria.html
      </li>
    </ul>
  </li>
</ul>

En `index.html` puedes escribir el siguiente enlace:

{% Destacar html %}
<p>
  Ve a <a href="galeria.html">Galería</a>!
</p>
{% Resaltar %}

Recuerde: los sitios web están alojados en **computadoras** como la que está usando actualmente. Simplemente se les llama **"servidores"** porque su único propósito es alojar sitios web. Pero todavía tienen **archivos** y **carpetas** como computadoras "normales".
{: .info}

### URLs absolutas

Si quisieras compartir tu galería de gatos con un amigo, no podrías enviar simplemente `gallery.html`, ya que esta URL **relativa** solo funciona para documentos HTML que están en la misma **computadora** o el mismo **dominio**.

Necesita la URL _completa_ de su documento HTML: `https://ireallylovecats.com/gallery.html`.

Esta URL se puede segmentar en 3 partes:

* **protocolo** `https://`
* **dominio** `ireallylovecats.com`
* **ruta de archivo** `gallery.html`

Esta **URL absoluta** es **autosuficiente**: no importa dónde utilice el formulario de enlace, contiene _toda_ la información necesaria para encontrar el archivo correcto, en el dominio correcto, con el protocolo correcto.

Por lo general, utiliza URL absolutas que definen un enlace desde _su_ sitio web a _otro_ sitio web.

En su archivo `https://ireallylovecats.com/galeria.html`, podría escribir:

{% Destacar html %}
<p>
  ¡Encuentra más imágenes de mis gatos en mi <a href="https://twitter.com/ireallylovecats"> cuenta de Twitter </a>!
</p>
{% Resaltar %}

### Enlaces relativos o absolutos?

Digamos que desea vincular del primero al segundo. El enfoque más directo es utilizar la URL absoluta. Así que agrega `<a href="https://ireallylovecats.com/gallery.html"> Vaya a la segunda página </a>` en su archivo `index.html`.

Debido a que los dos archivos están en el mismo directorio, puede usar la URL ** relativa ** usando `<a href="first-blog-post.html">`. Esto es útil si decide mover su directorio: sus enlaces no se romperán porque los destinos de los enlaces son relativos entre sí, siempre que mueva ambos archivos simultáneamente y los mantenga en el mismo directorio. Este enfoque relativo es particularmente útil al cambiar de dominio.
