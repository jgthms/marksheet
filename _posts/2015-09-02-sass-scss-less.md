---
layout: post
title: "<strong>Sass</strong> frente a <strong>SCSS</strong> frente a <strong>Less</strong>"
subtitle: "El camino de Sass"
section: sass
---

Hay 2 preprocesadores CSS para elegir:

* **Less** [https://lesscss.org/](https://lesscss.org)
* **Sass** [https://sass-lang.com/](https://sass-lang.com)

Ambos han existido durante varios años. Usaremos **Sass**.

### Sass vs SCSS

Sass tiene 2 **sintaxis** disponibles:

* **Sass** en sí mismo (Hojas de estilo sintácticamente impresionantes) en archivos `.sass`.
* **SCSS** (Sassy CSS) en archivos `.scss`, que es algo a medio camino entre CSS normal y Sass.

La diferencia entre Sass y SCSS es [bastante sutil](https://sass-lang.com/documentation/file.SASS_REFERENCE.html#syntax).

Recuérdalo:

* Sass es el nombre del preprocesador
* SCSS es más fácil de aprender
* todos los recursos en Internet (como [The Sass Way](https://thesassway.com/)) mencionar Sass, no SCSS
* todas las funciones están disponibles para ambas sintaxis
* todo en SCSS está disponible en Sass

De hecho, vamos a escribir **SCSS** pero aún así lo llamaremos **Sass**.

### Por qué SCSS primero

Usaremos ** SCSS ** por algunas razones:

* **legibilidad**: la sintaxis es muy similar a CSS
* **curva de aprendizaje**: solo agrega algunas características adicionales además de CSS
* **compatibilidad**; un archivo CSS es un archivo SCSS válido
* **recursos**: muchos artículos en línea para leer y bibliotecas de código abierto para usar
* **expandibilidad**: es fácil pasar de SCSS a Sass

### Características

Lo que ofrece Sass [^ 1] es:

* ** variables **: en lugar de repetir `#fce473` en todo su archivo CSS, simplemente configure` $yellow: # fce473` una vez
* **anidamiento**: las reglas CSS se pueden anidar entre sí
* **mixins**: funciones personalizadas que pueden aceptar parámetros y evitarán repeticiones inútiles
* **extensiones**: una forma fácil de heredar las mismas propiedades de otro selector
* **operadores**: sumar / restar / multiplicar / dividir valores, como `960px / 4` o` $ espacio * 2`

### Código DRY

Todo en Sass es proporcionar herramientas para ** evitar que se repita ** en su código: es el [principio DRY](https://en.wikipedia.org/wiki/Don't_repeat_yourself), que significa _No te repitas_.

* **variables** evita la repetición de _valores_
* **anidamiento** evita la repetición de _selectores_
* **mixins** y **extensiones** evitan la repetición de _propiedades_

### Instalando Sass

Dirigirse hacia [https://sass-lang.com/install](https://sass-lang.com/install) para instalar Sass en su computadora.

[^1]: y cualquier preprocesador CSS para el caso, pero me referiré a Sass solo de ahora en adelante.


