---
layout: post
title: "A <strong>valid</strong> HTML document"
subtitle: "Some boilerplate"
section: html
---

Hasta ahora, hemos visto en fragmentos aislados de codigo HTML. Pero un **documento HTML** (o pagina web, que es lo mismo) requiere una estructura específica para ser **valido**.

¿Por qué nos preocupamos por _validar_ un documento HTML?

* **correct**: el navegador _ muestra correctamente_ un documento válido
* **debugging**: El código HTML no válido puede generar errores difíciles de identificar.
* **maintenance**: un documento válido es más fácil de _actualizar_ más tarde, incluso por otra persona

### Doctype

La primera información que debe proporcionar es el _tipo_ de documento HTML que estamos escribiendo: el ** Doctype **.

Piense en el doctype como la versión de un automóvil a lo largo de los años: un Ford Fiesta comprado en 1986 era un Fiesta 2. Si compra uno hoy, es un Fiesta 7.

Solía ​​haber varias versiones de HTML coexistiendo (XHTML y HTML 4.01 han sido estándares en competencia). Hoy en día, ** HTML 5 ** es la norma.

Para decirle al navegador que el documento HTML es un HTML 5, simplemente comience su documento con la siguiente línea:

{% highlight html %}
<!DOCTYPE html>
{% endhighlight %}

Eso es. Solo configúralo y olvídalo.

Quizás se pregunte por qué este tipo de documento HTML 5 no menciona el número "5". El W3C pensó que las definiciones de tipos de documentos anteriores eran demasiado confusas y aprovechó la oportunidad para simplificarlas eliminando cualquier mención a la versión HTML.
{: .info}

### El <html> elemento

Aparte de la línea doctype, ** todo ** su documento HTML debe estar envuelto dentro de un elemento `<html>`:

{% highlight html %}
<!DOCTYPE html>
<html>
  <!-- El resto de su código HTML está aquí. -->
</html>
{% endhighlight %}

El `<html>` es técnicamente el ** ancestro ** de todos los elementos HTML.

### <head>

De la misma manera que los atributos llevan información adicional para un elemento HTML, el elemento `<head>` lleva información adicional para la página web _completa_.

Por ejemplo, el ** título ** de la página (que se muestra en la pestaña) se encuentra en el `<head>`:

{% highlight html %}
<head>
  <title>Mi fabuloso blog</title>
</head>
{% endhighlight %}

Otros elementos HTML pueden aparecer en el `<head>`, y _solo_ en el `<head>`:

* `<link>`
* `<meta>`
* `<style>`

### <body>

Mientras que el `<head>` solo contiene metadatos que no están destinados a ser mostrados en ningún lugar (aparte del `<title>`), el elemento `<body>` es donde escribimos todo nuestro contenido. Todo _dentro_ del `<body>` se ** mostrará ** en la ventana del navegador.

### A complete valid HTML document

Combinando todos estos requisitos, podemos escribir un documento HTML simple y válido:

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>MarkSheet</title>
    <meta name="description" content="A simple HTML and CSS tutorial">
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>
{% endhighlight %}

Si ve este ejemplo en su navegador, verá que:

* _ "MarkSheet" _ está escrito en la pestaña del navegador
* _ "¡Hola mundo!" _ Es el único texto que se muestra en la ventana, porque es el único contenido _dentro_ del `<body>`

<p> El <abbr title = "World Wide Web Consortium"> W3C </abbr> proporciona un <a href="https://validator.w3.org/#validate_by_input"> Servicio de validación de marcado </a> para verificar cualquier documento HTML para detectar errores y advertencias. </p>
