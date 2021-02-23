---
diseño: poste
título: "CSS <strong> familia de fuentes </strong>"
subtítulo: "Elegir una <strong> fuente </strong>"
sección: css
---

CSS proporciona varias propiedades de ** fuente ** que afectan directamente la representación del texto. La propiedad `font-family` define _qué_ fuente usar.

### Familias de fuentes genéricas

Las fuentes se agrupan en 5 familias ** genéricas **:

* Las fuentes `serif` tienen pequeñas líneas adjuntas al final de cada carácter
* `sans-serif`
* `monoespacio`
* `cursiva`
* `fantasía`

`cursive` y` fantasy` nunca se utilizan.
{: .info}

Debido a que la propiedad `font-family` es heredada por todos los elementos secundarios HTML, puede aplicar una fuente para todo el documento HTML aplicándola en el antepasado de todos los elementos HTML: el elemento` <body> `.

{% highlight css%}
cuerpo {familia de fuentes: sans-serif;}
{% endhighlight%}

Con esta regla CSS, la página web utilizará la fuente ** sans-serif ** definida por el usuario en sus preferencias.

### Fuentes compatibles con la Web

El problema con el uso de nombres de fuentes genéricos es que el diseño de su página web dependerá de la fuente establecida por el usuario en su configuración.

Como probablemente desee que su página web tenga el mismo aspecto en la computadora de cualquier persona, querrá definir una fuente ** específica ** para usar. Para hacerlo, simplemente use el ** nombre ** de la fuente.

{% highlight css%}
body {font-family: Arial;}
{% endhighlight%}

Su página web utilizará Arial ** siempre que esté instalada en la computadora del usuario **. Si la fuente Arial no está disponible en la computadora del usuario, utilizará la fuente serif predeterminada del navegador (que suele ser Times).

Sin embargo, Arial es una opción segura porque está instalado en todas las computadoras Windows y Mac, y en la mayoría de los sistemas Linux. Es por eso que Arial se considera una fuente ** segura para la web **: puede usarla de manera segura en su CSS y estar casi seguro de que la computadora del usuario la tendrá instalada.

Hay ** 9 ** fuentes seguras para la web:

* Arial
* Arial Negro
* Comic Sans MS
* Courier Nuevo
* Georgia
* Impacto
* Times New Roman
* Trebuchet MS
* Verdana

### Aplicar una lista de fuentes

Aunque usar _cualquier_ de estos valores para la propiedad `font-family` es una apuesta segura, puede definir valores ** alternativos ** escribiendo una ** lista de familias de fuentes **:

{% highlight css%}
cuerpo {familia de fuentes: Arial, Verdana, sans-serif;}
{% endhighlight%}

Al definir ** valores múltiples ** para `font-family`, el navegador buscará el primer valor` Arial` y lo usará. Si no está disponible, usará el siguiente `Verdana`. Finalmente, si ese tampoco está disponible, usará la fuente sans-serif predeterminada del navegador.

Es una buena práctica utilizar una ** familia genérica ** como último valor. Si no puede definir la fuente específica a usar, al menos puede definir el _tipo_ de fuente que desea.

Debido a que los diseñadores quieren usar fuentes más originales pero aún quieren que su página web se vea exactamente igual en la computadora de cualquier persona, es posible ** incluir una fuente ** en una página web. De esa manera, se aseguran de que la fuente esté disponible incluso si no está presente en la computadora del usuario, simplemente porque el sitio web proporciona la fuente.

Analizaremos este método llamado `@ font-face` y veremos cómo los servicios como Google Fonts o Typekit pueden ayudarlo.
