---
layout: post
title: "HTML <strong>Forms</strong>"
subtitle: "To make a page <strong>interactive</strong>"
section: html
---
Mientras navega por la Web, la interacción de un usuario consiste principalmente en hacer clic en **enlaces** para navegar por las páginas web.

Pero la Web entiende que a veces se requiere que un usuario proporcione su propia **entrada**. Estos tipos de interacción incluyen:

* registrarse e iniciar sesión en sitios web
* ingresar información personal (nombre, dirección, detalles de la tarjeta de crédito ...)
* filtrado de contenido (mediante menús desplegables, casillas de verificación ...)
* realizar una búsqueda
* carga de archivos

Para adaptarse a estas necesidades, HTML proporciona **controles de formulario** interactivos:

* entradas de texto (para una o varias líneas)
* botones de radio
* casillas de verificación
* Listas deplegables
* cargar widgets
* enviar botones

Estos controles usan diferentes etiquetas ** HTML **, pero la mayoría de ellos usa la etiqueta `<input>`. Debido a que es un elemento de cierre automático, el _tipo_ de entrada se define por su atributo `type`:

{% highlight html%}
<! - Una entrada de texto ->
<input type = "texto">
<! - Una casilla de verificación ->
<input type = "casilla de verificación">
<! - Un botón de radio ->
<input type = "radio">
{% endhighlight%}

<div class = "resultado">
  <input type = "texto">
  <br>
  <input type = "casilla de verificación">
  <br>
  <input type = "radio">
</div>

### El elemento Form

El `<form>` es un elemento a nivel de bloque que define una parte **interactiva** de una página web. Como resultado, todos los controles de formulario (como `<input>`, `<textarea>` o `<button>`) deben aparecer _dentro de_ un elemento `<form>`.

**Se requieren dos atributos HTML**:

* `action` contiene una dirección que define _donde_ se enviará la información del formulario
* `método` puede ser GET o POST y define _cómo_ se enviará la información del formulario

Por lo general, la información del formulario se envía a un **servidor**. _Cómo_ se procesarán estos datos va más allá del alcance de este tutorial.

Piense en un formulario como una colección de controles de entrada que trabajan juntos para realizar una operación **única**. Si escribió un formulario de inicio de sesión, podría tener ** 3 ** controles:

* una entrada de correo electrónico `<input type =" email ">`
* una entrada de contraseña `<tipo de entrada =" contraseña ">`
* un botón de envío `<input type =" submit ">`

Estos 3 elementos HTML se incluirían dentro de un único `<form action =" / login "method =" POST ">`.

De manera similar, podría agregar un formulario de registro dentro de la misma página HTML, en un elemento `<form>` separado.

### Entradas de texto

Casi todos los formularios requieren entrada **textual** de los usuarios, para que ingresen su nombre, correo electrónico, contraseña, dirección ... Los controles de formulario de texto vienen en diferentes variaciones:

<div class = "tabla">
  <tabla>
    <tr>
      <th> Texto </th>
      <td> <code> & lt; input type = "text" & gt; </code> </td>
      <td> <input type = "text"> </td>
      <td> Permite cualquier tipo de carácter </td>
    </tr>
    <tr>
      <th> Correo electrónico </th>
      <td> <code> & lt; input type = "email" & gt; </code> </td>
      <td> <input type = "email"> </td>
      <td> Puede mostrar una advertencia si se ingresa un correo electrónico no válido </td>
    </tr>
    <tr>
      <th> Contraseña </th>
      <td> <code> & lt; input type = "contraseña" & gt; </code> </td>
      <td> <input type = "contraseña"> </td>
      <td> Muestra puntos como caracteres </td>
    </tr>
    <tr>
      <th> Número </th>
      <td> <code> & lt; input type = "number" & gt; </code> </td>
      <td> <input type = "number"> </td>
      <td> Se pueden usar las teclas arriba / abajo del teclado </td>
    </tr>
    <tr>
      <th> Teléfono </th>
      <td> <code> & lt; input type = "tel" & gt; </code> </td>
      <td> <input type = "text"> </td>
      <td> Puede activar un autocompletado </td>
    </tr>
    <tr>
      <th> Texto de varias líneas </th>
      <td><code><textarea></textarea></code> </td>
      <td><textarea></textarea> </td>
      <td> Se puede cambiar de tamaño </td>
    </tr>
  </table>
</div>

Aunque estas entradas se ven muy similares y permiten a los usuarios ingresar _cualquier_ tipo de texto (incluso una entrada incorrecta), su _tipo_ proporciona ** semántica **específica a la entrada, al definir qué tipo de información** se supone ** que contiene.

Posteriormente, los navegadores pueden alterar levemente la interfaz de un control para aumentar su _interactividad_ o indicar qué tipo de contenido se _espera_.

Por ejemplo, las entradas de contraseña muestran puntos en lugar de caracteres.

<div class = "resultado">
  <input type = "contraseña" value = "hunter2">
</div>

Y las entradas numéricas permiten aumentar / disminuir su valor usando las teclas arriba y abajo.

<div class = "resultado">
  <input type = "number" value = "12">
</div>

### Marcadores de posición

Las entradas de texto pueden mostrar un **marcador de posición** texto, que desaparecerá tan pronto como se introduzca algo de texto.

{% highlight html%}
<input type = "text" placeholder = "Ingrese su nombre">
{% endhighlight%}

<div class = "resultado">
  <input type = "text" placeholder = "Ingrese su nombre">
</div>

Si comienza a escribir algo, verá que el texto _"Ingrese su nombre"_ desaparecerá.

### Etiquetas

Debido a que los elementos de formulario por sí solos no son muy descriptivos, suelen ir precedidos de una **etiqueta** de texto.

{% highlight html%}
<label> Correo electrónico </label>
<input type = "email">
{% endhighlight%}

<div class = "resultado">
  <label> Correo electrónico </label>
  <input type = "email">
</div>

Si bien los marcadores de posición ya brindan alguna pista sobre el contenido que se espera, las etiquetas tienen la ventaja de permanecer visibles en todo momento y se pueden usar junto con otros tipos de controles de formulario, como casillas de verificación o botones de opción.

Aunque podría usar párrafos cortos para describir elementos de formulario, usar `<etiqueta>` es semánticamente más válido porque solo existen dentro de los formularios, y pueden emparejarse con un control de formulario específico usando el atributo `for` y haciendo coincidir su valor con el "id" de la entrada.

{% highlight html%}
<label for = "first_name"> Nombre </label>
<input id = "first_name" type = "text">
{% endhighlight%}

<div class = "resultado">
  <label for = "first_name"> Nombre </label>
  <input id = "first_name" type = "text">
</div>

Al hacer clic en la etiqueta, se enfocará la entrada de texto y colocará el cursor de texto dentro. Si bien este emparejamiento parece inútil, será útil con casillas de verificación y botones de opción.

### Casillas de verificación

**Las casillas de verificación** son controles de formulario que solo tienen 2 estados: marcado o no marcado. Básicamente, permiten al usuario decir "Sí" o "No" a algo.

{% highlight html%}
<input type = "checkbox"> Recordarme
{% endhighlight%}

<div class = "resultado">
  <input type = "checkbox"> Recordarme
</div>

Debido a que puede ser difícil hacer clic en una casilla de verificación pequeña, se recomienda colocar una `<etiqueta>` alrededor de la casilla de verificación **y** su descripción.

{% highlight html%}
<etiqueta>
  <input type = "checkbox"> Acepto los términos
</label>
{% endhighlight%}

<div class = "resultado">
  <etiqueta>
    <input type = "checkbox"> Acepto los términos
  </label>
</div>

Puede hacer clic en _"Acepto los términos"_ para alternar la casilla de verificación.

De forma predeterminada, la entrada de una casilla de verificación no está marcada. Puede marcarlo como comprobado utilizando el atributo simplemente llamado "comprobado".

{% highlight html%}
<etiqueta>
  <input type = "checkbox" check> Usar como mi dirección de facturación
</label>
{% endhighlight%}

<div class = "resultado">
  <etiqueta>
    <input type = "checkbox" check> Usar como mi dirección de facturación
  </label>
</div>

### Botones de radio

Puede presentar al usuario una **lista de opciones** para elegir mediante el uso de botones de opción.

Para que este control de formulario funcione, su código HTML necesita **agrupar** una lista de botones de opción. Esto se logra usando el mismo valor para el atributo `name`:

{% highlight html%}
<label> Estado civil </label>
<etiqueta>
  <input type = "radio" name = "status">
  Único
</label>
<etiqueta>
  <input type = "radio" name = "status">
  Casado
</label>
<etiqueta>
  <input type = "radio" name = "status">
  Divorciado
</label>
<etiqueta>
  <input type = "radio" name = "status">
  Viudo
</label>
{% endhighlight%}

<div class = "resultado">
  <label> Estado civil </label>
  <br>
  <etiqueta>
    <input type = "radio" name = "status">
    Único
  </label>
  <br>
  <etiqueta>
    <input type = "radio" name = "status">
    Casado
  </label>
  <br>
  <etiqueta>
    <input type = "radio" name = "status">
    Divorciado
  </label>
  <br>
  <etiqueta>
    <input type = "radio" name = "status">
    Viudo
  </label>
</div>

Debido a que todos los botones de opción usan el mismo _valor_ para su atributo `nombre` (en este caso, el valor` "estado" `), al seleccionar una opción se deseleccionarán todas las demás. Se dice que los botones de radio son **mutuamente excluyentes**.

#### Diferencia entre botones de radio y casillas de verificación

Si bien existe una casilla de verificación **por sí sola**, los botones de opción solo pueden aparecer como una **lista** (lo que significa tener al menos _2_ opciones).

Además, hacer clic en una casilla de verificación es ** opcional **, mientras que elegir uno de los botones de opción es ** obligatorio **. Por eso es imposible desmarcar un botón de opción a menos que elija una opción de hermano. Pero al final, uno de los botones de opción siempre está seleccionado.

### Menús desplegables

Si el número de opciones para elegir ocupa demasiado espacio, puede usar los menús desplegables `<seleccionar>`.

Funcionan como botones de radio. Solo su diseño es diferente.

{% highlight html%}
<seleccionar>
  <option> enero </option>
  <option> febrero </option>
  <option> marzo </option>
  <option> abril </option>
  <option> mayo </option>
  <option> junio </option>
  <option> julio </option>
  <option> agosto </option>
  <option> septiembre </option>
  <option> Octubre </option>
  <option> noviembre </option>
  <option> diciembre </option>
</select>
{% endhighlight%}

<div class = "resultado">
  <seleccionar>
    <option> enero </option>
    <option> febrero </option>
    <option> marzo </option>
    <option> abril </option>
    <option> mayo </option>
    <option> junio </option>
    <option> julio </option>
    <option> agosto </option>
    <option> septiembre </option>
    <option> Octubre </option>
    <option> noviembre </option>
    <option> diciembre </option>
  </select>
</div>

#### Menús desplegables de opción múltiple

Si agrega el atributo `multiple`, puede brindar la posibilidad de seleccionar múltiples opciones.

{% highlight html%}
<label> ¿Qué navegadores tienes? </label>
<seleccionar varios>
  <option> Google Chrome </option>
  <option> Internet Explorer </option>
  <option> Mozilla Firefox </option>
  <option> Opera </option>
  <option> Safari </option>
</select>
{% endhighlight%}

<div class = "resultado">
  <label> ¿Qué navegadores tienes? </label>
  <br>
  <seleccionar varios>
    <option> Google Chrome </option>
    <option> Internet Explorer </option>
    <option> Mozilla Firefox </option>
    <option> Opera </option>
    <option> Safari </option>
  </select>
</div>

Seleccione varias opciones manteniendo Ctrl (o ⌘) y haciendo clic. Esta puede ser una buena alternativa al uso de varias casillas de verificación seguidas.

### Ejemplo: un formulario de registro completo

{% highlight html%}
<form action = "/ signup" method = "POST">
  <p>
    <label> Título </label>
    <etiqueta>
      <input type = "radio" name = "title" value = "mr">
      señor
    </label>
    <etiqueta>
      <input type = "radio" name = "title" value = "mrs">
      Sra
    </label>
    <etiqueta>
      <input type = "radio" name = "title" value = "miss">
      Pierda
    </label>
  </p>
  <p>
    <label> Nombre </label>
    <input type = "text" value = "first_name">
  </p>
  <p>
    <label> Apellido </label>
    <input type = "text" value = "last_name">
  </p>
  <p>
    <label> Correo electrónico </label>
    <input type = "email" value = "email">
  </p>
  <p>
    <label> Número de teléfono </label>
    <input type = "tel" value = "phone">
  </p>
  <p>
    <label> Contraseña </label>
    <input type = "contraseña" valor = "contraseña">
  </p>
  <p>
    <label> Confirme su contraseña </label>
    <input type = "password" value = "password_confirm">
  </p>
  <p>
    <label> País </label>
    <seleccionar>
      <option> Canadá </option>
      <option> Francia </option>
      <option> Alemania </option>
      <option> Italia </option>
      <option> Japón </option>
      <option> Rusia </option>
      <option> Reino Unido </option>
      <option> Estados Unidos </option>
    </select>
  </p>
  <p>
    <etiqueta>
      <input type = "checkbox" value = "terms">
      Acepto los <a href="/terms"> términos y condiciones </a>
    </label>
  </p>
  <p>
    <botón>
      Inscribirse
    </button>
  </p>
</form>
{% endhighlight%}

<div class = "resultado">
  <form action = "/ signup" method = "POST">
    <p>
      <label> Título </label>
      <etiqueta>
        <input type = "radio" name = "title" value = "mr">
        señor
      </label>
      <etiqueta>
        <input type = "radio" name = "title" value = "mrs">
        Sra
      </label>
      <etiqueta>
        <input type = "radio" name = "title" value = "miss">
        Pierda
      </label>
    </p>
    <p>
      <label> Nombre </label>
      <input type = "texto">
    </p>
    <p>
      <label> Apellido </label>
      <input type = "texto">
    </p>
    <p>
      <label> Correo electrónico </label>
      <input type = "email">
    </p>
    <p>
      <label> Número de teléfono </label>
      <input type = "tel">
    </p>
    <p>
      <label> Contraseña </label>
      <input type = "contraseña">
    </p>
    <p>
      <label> Confirme su contraseña </label>
      <input type = "contraseña">
    </p>
    <p>
      <label> País </label>
      <seleccionar>
        <option> Canadá </option>
        <option> Francia </option>
        <option> Alemania </option>
        <option> Italia </option>
        <option> Japón </option>
        <option> Rusia </option>
        <option> Reino Unido </option>
        <option> Estados Unidos </option>
      </select>
    </p>
    <p>
      <etiqueta>
        <input type = "casilla de verificación">
        Acepto los <a href="/terms"> términos y condiciones </a>
      </label>
    </p>
    <p>
      <botón>
        Inscribirse
      </button>
    </p>
  </form>
</div>

Hay otros controles de formulario disponibles, pero hemos cubierto los que usarán principalmente.

Es hora de comenzar a **diseñar** nuestra página.