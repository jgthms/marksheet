---
layout: capítulo
title: "CSS <strong>Caja modelo</strong>"
subtitle: "Como <strong>rectangulos</strong> están hechos"
section: css
---

De forma predeterminada, cada elemento HTML se representa en el navegador como un ** rectángulo **. Las dimensiones de ese rectángulo son ** dinámicas **: varían según el _contenido_ de ese elemento. Puede considerar estos rectángulos como ** fluidos **, alterando su forma para adaptarse al contenido.

Esto se debe a que una página web es un elemento ** vivo **: simplemente cambie el tamaño de la ventana de su navegador para ver cómo la mayoría de los elementos se adaptarán automáticamente para encajar en el espacio disponible.

Este es el comportamiento predeterminado de una página web. Pero debido a que el diseño de una página web a menudo requiere ** fijar ** elementos en su lugar, con dimensiones específicas, CSS nos permite alterar o incluso cancelar este comportamiento fluido.

Un elemento a nivel de bloque, como un párrafo, ** horizontalmente ** ocupará todo el espacio que pueda, que por defecto es el ancho de su navegador. Verticalmente, el párrafo adaptará su altura a la longitud de su contenido.

Se tienen en cuenta muchos parámetros: la longitud del contenido, la fuente utilizada, su tamaño, su espaciado, el relleno del elemento, los bordes, si es flotante, su posicionamiento ...
