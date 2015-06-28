---
layout: chapter
title: "CSS <strong>Box Model</strong>"
subtitle: "How <strong>rectangles</strong> are made"
section: css
---

By default, every HTML element is rendered in the browser as a **rectangle**. The dimensions of that rectangle are **dynamic**: they vary according to the _content_ of that element. You can consider these rectangles as **fluid**, altering their shape to fit the content.

That is because a webpage is a **living** element: just resize your browser window to see how most elements will adapt automatically to fit within the available space.

This is the default behavior of a webpage. But because the design of a webpage often requires to **fix** elements in place, with specific dimensions, CSS allows us to alter or even cancel this fluid behavior.

A block-level element, like a paragraph, will **horizontally** take up all the space it can, which by default is the width of your browser. Vertically, the paragraph will adapt its height to the length of its content.

Many parameters are taken into account: the length of the content, the font used, its size, its spacing, the element's padding, the borders, if it's floating, its positioning...
