---
layout: post
title: "CSS <strong>animations</strong>"
subtitle: "Una secuencia determinada de reglas CSS"
section: css
---

Acabamos de ver cómo las ** transiciones ** de CSS son solo una forma de ** animar ** las propiedades de CSS entre un estado _starting_ y un estado _end_.

Entonces, las transiciones CSS son animaciones de tipo _específico_, donde:

* solo hay 2 estados: inicio y final
* la animación no se repite
* los estados intermedios solo están controlados por la función de temporización

Bueno, ¿y si quieres?

* tener control sobre los ** estados intermedios **?
* para hacer una animación ** bucle **?
* diferentes animaciones en el _mismo_ elemento?
* ¿animar una propiedad específica solo ** a la mitad ** de la animación?
* para simular ** diferentes funciones de temporización ** para diferentes propiedades?

Las animaciones CSS permiten todo esto y más.

** Las animaciones CSS son como mini películas en las que tú eres el director dando instrucciones (reglas CSS) a tus actores (elementos HTML) para diferentes escenas (fotogramas clave). **

### Propiedades de animación

Al igual que la propiedad `transición`,` animación` es una propiedad ** abreviada ** para varias otras:

* ** nombre **: el nombre de la animación
* ** duración **: cuánto dura la transición
* ** función de temporización **: cómo se calculan los estados intermedios
* ** retraso **: para iniciar la animación después de un cierto período de tiempo
* ** iteration-count **: cuántas veces se debe realizar la animación
* ** dirección **: si la animación debe invertirse o no
* ** modo de relleno **: qué estilos se aplican antes de que comience la animación y después de que finalice

### Ejemplo rápido

Para animar un botón de carga, puede escribir una animación ** rebotando **:

{% highlight css %}
@keyframes bouncing{
  0%  { bottom: 0; box-shadow: 0 0 5px rgba(0,0,0,0.5);}
  100%{ bottom: 50px; box-shadow: 0 50px 50px rgba(0,0,0,0.1);}
}

.loading-button{ animation: bouncing 0.5s cubic-bezier(0.1,0.25,0.1,1) 0s infinite alternate both;}
{% endhighlight %}

<div class="result" id="result-1">
  <a>Loading</a>
</div>

Primero debe escribir la animación de rebote real usando ** fotogramas clave ** y nombrarla `rebote '. _Entonces_ puedes usar esa animación aplicándola a `.loading-button`.

Usé la propiedad ** shorthand ** `animation` e incluí todas las opciones:

* ** nombre **: rebotando _ (coincide con el nombre de los fotogramas clave) _
* ** duración **: 0.5s _ (medio segundo) _
* ** función de sincronización **: [cubic-bezier (0.1,0.25,0.1,1)] (https://cubic-bezier.com/#.1,.25,.1,1)
* ** retraso **: 0 s _ (sin retraso) _
* ** iteration-count **: infinito _ (se reproduce indefinidamente) _
* ** dirección **: alterno _ (va hacia adelante y hacia atrás) _
* ** modo de relleno **: ambos

### @keyframes

Antes de aplicar animaciones a elementos HTML, es necesario ** escribir animaciones utilizando fotogramas clave **. Básicamente, los fotogramas clave son cada ** paso intermedio ** en una animación. Se definen mediante ** porcentajes **:

* `0%` is the first step of the animation
* `50%` is the step halfway through the animation
* `100%` is the last step

También puede utilizar las palabras clave "from" y "to" en lugar de "0%" y "100%" respectivamente.
{: .info}

Puede definir _ tantos fotogramas clave como desee_, como "33%", "4%" o incluso "29,86%". En la práctica, solo escribirás unos pocos.

Cada fotograma clave es ** regla CSS **, lo que significa que puede escribir propiedades CSS como de costumbre.

Para definir una animación, simplemente escriba la palabra clave `@ keyframes` seguida de su ** nombre **:

{% highlight css %}
@keyframes around {
  0%  { left: 0; top: 0;}
  25% { left: 240px; top: 0;}
  50% { left: 240px; top: 140px;}
  75% { left: 0; top: 140px;}
  100%{ left: 0; top: 0;}
}
p{ animation: around 4s linear infinite;}
{% endhighlight %}

<div class="result" id="result-2">
  <p>Hello</p>
</div>

Observe cómo el inicio "0%" y el final "100%" tienen las ** mismas reglas CSS **. Esto asegura que la animación se repita perfectamente. Debido a que el recuento de iteraciones se establece en "infinito", la animación pasará de "0%" a "100%", y luego _volverá a_ "0%" de forma instantánea e indefinida.

### nombre-animación

El ** nombre ** de la animación se usa al menos ** dos veces **:

* al ** escribir ** la animación usando `@ keyframes`
* cuando ** se usa ** la animación usando la propiedad `animation-name` (o con la abreviatura` animation`)

{% highlight css %}
@keyframes whatever{
  /* ... */
}

.selector{ animation-name: whatever;}
{% endhighlight %}

Al igual que los nombres de las clases CSS, los nombres de las animaciones solo pueden incluir:

* letras (a-z)
* números (0-9)
* guiones bajos (_)
* guiones (-)

No puede comenzar con un número o dos guiones.

### duración de la animación

Al igual que las [duraciones de transición] (/ css-transitions.html # transición-duración), las duraciones de la animación se pueden establecer en ** segundos ** `1 s` o ** milisegundos **` 200 ms`.
{% highlight css %}
.selector{ animation-duration: 0.5s;}
{% endhighlight %}

El valor predeterminado es "0", lo que significa que no hay animación en absoluto.

### función de temporización de animación

Al igual que las [funciones de tiempo de transición] (/ css-transitions.html # función de tiempo de transición), las funciones de tiempo de animación pueden usar ** palabras clave ** como `linear`,` easy-out`, o definirse usando custom ** funciones bezier ** cúbicas.

{% highlight css %}
.selector{ animation-timing-function: ease-in-out;}
{% endhighlight %}

Su valor predeterminado es "facilidad".

Debido a que las animaciones CSS utilizan fotogramas clave, puede establecer una función de tiempo ** lineal ** y ** simular ** una curva Bézier cúbica específica definiendo un _ lote_ de _ fotogramas clave _muy específicos_. Consulte [Bounce.js] (https://bouncejs.com/) para generar animaciones avanzadas.
{: .info}

### retardo de animación

Al igual que las [demoras de transición] (/ css-transitions.html # transición-demora), las demoras de la animación se pueden configurar en ** segundos ** `1s` o ** milisegundos **` 200ms`.

El valor predeterminado es "0", lo que significa que no hay ningún retraso.

Es útil para activar múltiples animaciones ** en secuencia **.

{% highlight css %}
.a,.b,.c{ animation: bouncing 1s;}
.b{ animation-delay: 0.25s;}
.c{ animation-delay: 0.5s;}
{% endhighlight %}

### recuento de iteraciones de animación

De forma predeterminada, las animaciones solo se reproducen ** una vez ** (valor de `1`). Puede establecer 3 tipos de valores:

* ** enteros ** como `2` o` 3`
* ** no enteros ** como `0.5` que reproducirá solo la mitad de la animación
* la ** palabra clave ** `infinito` que repetirá la animación indefinidamente

{% highlight css %}
.selector{ animation-iteration-count: infinite;}
{% endhighlight %}

### dirección de animación

La ** dirección ** de la animación define _en qué orden_ se leen los fotogramas clave.

* ** normal **: comienza en "0%", termina en "100%", comienza en "0%" nuevamente
* ** reverso **: comienza en `100%`, termina en `0%`, comienza en `100%` nuevamente
* ** alternativo **: comienza en `0%`, pasa a `100%`, pasa a `0%`
* ** alternativo-inverso **: comienza en `100%`, pasa a `0%`, pasa a `100%`

Es más fácil de visualizar si el recuento de iteraciones de la animación se establece en "infinito".

<div class="result" id="result-3">
  <p><strong>Normal</strong>: 0% --> 100%</p>
  <div class="normal"><div></div></div>
  <p><strong>Reverse</strong>: 100% --> 0%</p>
  <div class="reverse"><div></div></div>
  <p><strong>Alternate</strong>: 0% <--> 100%</p>
  <div class="alternate"><div></div></div>
  <p><strong>Alternate reverse</strong>: 100% <--> 0%</p>
  <div class="alternate-reverse"><div></div></div>
</div>

### modo de relleno de animación

El ** modo de relleno ** de una animación define lo que sucede _antes_ que comience la animación y _después_ de que finalice.

Cuando define ** fotogramas clave **, define ** reglas CSS ** que se aplicarán en los diferentes pasos de la animación. Ahora, estas reglas CSS pueden _ chocar_ con las que ya se han aplicado en los elementos que se están animando.

El modo de relleno permite decirle al navegador si los _estilos de animación_ deben ** también ** aplicarse ** fuera de la animación **.

Imaginemos un ** botón ** que es:

* ** rojo ** por defecto
* se vuelve ** azul ** al comienzo de la animación
* termina ** verde ** cuando termina la animación
<div class="table">
  <table>
    <tr>
      <th><code>animation-fill-mode</code></th>
      <th>Before the animation</th>
      <th>Start of the animation</th>
      <th>End of the animation</th>
      <th>After the animation</th>
    </tr>
    <tr>
      <td><code>none</code></td>
      <td><a class="fill-mode fill-mode-red">Default</a></td>
      <td><a class="fill-mode fill-mode-blue">Start</a></td>
      <td><a class="fill-mode fill-mode-green">End</a></td>
      <td><a class="fill-mode fill-mode-red">Default</a></td>
    </tr>
    <tr>
      <td><code>forwards</code></td>
      <td><a class="fill-mode fill-mode-red">Default</a></td>
      <td><a class="fill-mode fill-mode-blue">Start</a></td>
      <td><a class="fill-mode fill-mode-green">End</a></td>
      <td><a class="fill-mode fill-mode-green">End</a></td>
    </tr>
    <tr>
      <td><code>backwards</code></td>
      <td><a class="fill-mode fill-mode-blue">Start</a></td>
      <td><a class="fill-mode fill-mode-blue">Start</a></td>
      <td><a class="fill-mode fill-mode-green">End</a></td>
      <td><a class="fill-mode fill-mode-red">Default</a></td>
    </tr>
    <tr>
      <td><code>both</code></td>
      <td><a class="fill-mode fill-mode-blue">Start</a></td>
      <td><a class="fill-mode fill-mode-blue">Start</a></td>
      <td><a class="fill-mode fill-mode-green">End</a></td>
      <td><a class="fill-mode fill-mode-green">End</a></td>
    </tr>
  </table>
</div>

<div class="result" id="result-4">
  <p>
    <span><strong>1.</strong> Before the animation</span>
    <span><strong>2.</strong> During the animation</span>
    <span><strong>3.</strong> After the animation</span>
  </p>
  <p><strong>None</strong>: los estilos de animación no afectan el estilo predeterminado</p>
  <p>
    <span>Default red</span>
    <span>From blue to green</span>
    <span>Back to red again</span>
  </p>
  <div class="none"><div></div></div>
  <p><strong>Forwards</strong>: los últimos estilos aplicados al final de la animación se conservan posteriormente</p>
  <p>
    <span>Rojo predeterminado</span>
    <span>De azul a verde</span>
    <span>Permanece verde</span>
  </p>
  <div class="forwards"><div></div></div>
  <p><strong>Hacia atrás</strong>: Los estilos de la animación ya se aplicarán antes de que comience la animación.</p>
  <p>
    <span>Ya azul</span>
    <span>De azul a verde</span>
    <span>De vuelta al rojo otra vez</span>
  </p>
  <div class="hacia atrás"><div></div></div>
  <p><strong>Both</strong>:los estilos se aplican antes y después de que se reproduzca la animación</p>
  <p>
    <span>Already blue</span>
    <span>From blue to green</span>
    <span>Remains green</span>
  </p>
  <div class="both"><div></div></div>
</div>

<style type="text/css">
#result-1{ padding: 1rem;}
#result-1 a{ animation: bouncing 0.5s cubic-bezier(.1,.25,.1,1) 0s infinite alternate both; background: lightslategrey; border-radius: 2px; display: inline-block; color: white; cursor: pointer; font-size: 0.75rem; font-weight: 300; letter-spacing: 0.2em; padding: 1em 2em 1.1em; position: relative; text-decoration: none; text-transform: uppercase; vertical-align: top;}

@keyframes bouncing{
  0%  { bottom: 0; box-shadow: 0 0 5px rgba(0,0,0,0.5);}
  100%{ bottom: 50px; box-shadow: 0 50px 50px rgba(0,0,0,0.1);}
}

#result-2{ height: 300px; padding: 0; width: 300px;}
#result-2 p{ animation: around 4s linear 0s infinite; background: turquoise; color: white; height: 60px; line-height: 60px; margin: 0; position: absolute; text-align: center; width: 60px;}

@keyframes around {
  0%  { left: 0; top: 0;}
  25% { left: 240px; top: 0;}
  50% { left: 240px; top: 240px;}
  75% { left: 0; top: 240px;}
  100%{ left: 0; top: 0;}
}

#result-3{ padding-bottom: 1rem;}
#result-3 p{ color: grey;}
#result-3 p strong{ font-weight: bold;}
#result-3 div{ background: hsl(217,4%,96%); height: 20px; width: 220px;}
#result-3 div div{ animation: swipe 2s linear infinite; background: crimson; height: 20px; left: 0; margin-top: -1rem; position: relative; transition: 1s; width: 20px;}
#result-3 .normal div{ animation-direction: normal;}
#result-3 .reverse div{ animation-direction: reverse;}
#result-3 .alternate div{ animation-direction: alternate;}
#result-3 .alternate-reverse div{ animation-direction: alternate-reverse;}
#result-3 p:nth-child(1) strong{ color: crimson;}
#result-3 div:nth-child(2) div{ background: crimson;}
#result-3 p:nth-child(3) strong{ color: midnightblue;}
#result-3 div:nth-child(4) div{ background: midnightblue;}
#result-3 p:nth-child(5) strong{ color: mediumseagreen;}
#result-3 div:nth-child(6) div{ background: mediumseagreen;}
#result-3 p:nth-child(7) strong{ color: goldenrod;}
#result-3 div:nth-child(8) div{ background: goldenrod;}

@keyframes swipe {
  0%  { left: 0;}
  100%{ left: 200px;}
}

#result-4{ padding: 1rem 1rem 0;}
#result-4 p{ color: grey; margin: 0; position: relative;}
#result-4 p:first-child{ margin-bottom: 1rem;}
#result-4 p span{ animation: toggle 6s infinite both; left: 0; position: absolute;}
#result-4 p:first-child span{ animation-name: tabs; margin-right: 1rem; position: static;}
#result-4 p span:nth-child(1){ animation-delay: 0; position: static;}
#result-4 p span:nth-child(2){ animation-delay: 2s;}
#result-4 p span:nth-child(3){ animation-delay: 4s;}
#result-4 div{ background: hsl(217,4%,96%); height: 20px; margin-bottom: 1rem; width: 220px;}
#result-4 div div{ animation: race-none 6s linear infinite; background: crimson; height: 20px; margin-bottom: 0; position: relative; width: 20px;}
#result-4 div:nth-child(7) div{ animation-name: race-forwards;}
#result-4 div:nth-child(10) div{ animation-name: race-backwards;}
#result-4 div:nth-child(13) div{ animation-name: race-both;}

a.fill-mode,
a.fill-mode:hover{ background: crimson; border-radius: 2px; display: inline-block; color: white !important; cursor: pointer; font-size: 0.75rem; font-weight: 300; letter-spacing: 0.2em; padding: 1em 2em 1.1em; position: relative; text-decoration: none !important; text-transform: uppercase; vertical-align: top;}
a.fill-mode-blue,
a.fill-mode-blue:hover{ background: midnightblue;}
a.fill-mode-green,
a.fill-mode-green:hover{ background: mediumseagreen;}

@keyframes tabs {
  0%  { opacity: 0.2;}
  1%  { opacity: 1;}
  33% { opacity: 1;}
  34% { opacity: 0.2;}
  100%{ opacity: 0.2;}
}

@keyframes toggle {
  0%  { opacity: 0;}
  1%  { opacity: 1;}
  33% { opacity: 1;}
  34% { opacity: 0;}
  100%{ opacity: 0;}
}

@keyframes race-none {
  0%  { background: crimson; left: 0;}
  33%  { background: crimson; left: 0;}
  34%  { background: midnightblue; left: 100px;}
  66%  { background: mediumseagreen; left: 200px}
  67%  { background: crimson; left: 0;}
  100%{ background: crimson; left: 0;}
}

@keyframes race-forwards {
  0%  { background: crimson; left: 0;}
  33%  { background: crimson; left: 0;}
  34%  { background: midnightblue; left: 100px;}
  66%  { background: mediumseagreen; left: 200px}
  67%  { background: mediumseagreen; left: 200px;}
  100%{ background: mediumseagreen; left: 200px;}
}

@keyframes race-backwards {
  0%  { background: midnightblue; left: 100px;}
  33%  { background: midnightblue; left: 100px;}
  34%  { background: midnightblue; left: 100px;}
  66%  { background: mediumseagreen; left: 200px}
  67%  { background: crimson; left: 0;}
  100%{ background: crimson; left: 0;}
}

@keyframes race-both {
  0%  { background: midnightblue; left: 100px;}
  33%  { background: midnightblue; left: 100px;}
  34%  { background: midnightblue; left: 100px;}
  66%  { background: mediumseagreen; left: 200px}
  67%  { background: mediumseagreen; left: 200px;}
  100%{ background: mediumseagreen; left: 200px;}
}
</style>

