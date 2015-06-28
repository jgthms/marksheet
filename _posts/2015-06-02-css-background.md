---
layout: post
title: "CSS <strong>background</strong>"
subtitle: "How your rectangle is <strong>filled</strong>"
section: css
---

The background of an HTML element is what appears _behind_ the text. Although CSS allows to apply a background on any type of HTML element, it's mostly used on block-level elements.

Backgrounds are only applied on the targeted element. But considering most HTML elements have a transparent background, applying a background on the `body` will _look_ like it's applied on all elements.

### background-color

Default value: `transparent`
Inherited by children elements: no.

As we've already covered the different ways to define a [color in CSS](/css-color-units.html), applying a background color is straightforward:

```css
body{ background: #f2eee9;}
```
{: .css}

The whole element will be filled with a **plain** background color. Bear in mind to always to choose an appropriate text color to keep your content easy to read.

### background-image

Because plain colors are usually not sufficient, CSS allows to apply **images** as backgrounds for elements.

Applying a background image only requires to specify its URL:

```css
body{ background-image: url(images/diagonal-pattern.png);}
```
{: .css}

The behavior of the image (how it repeats itself, where it is positioned, how it is sized) is defined by other background properties. The `background-image` only defines _which_ image to use.

Bear in mind that the HTML element doesn't take into consideration the dimensions of its background image. Even if the image is bigger than the element it's applied to, the element **won't resize** to fit the image, as the image is purely decorative and is here to support the element.

### The difference between HTML images `<img>` and CSS background images

The HTML `<img>` element is for images that are part of the **content**, while CSS background images are purely **decorative**. 

The logo of a company, the thumbnail of a gallery, the picture of a product... These are all considered **content** and should use the HTML `<img>` element.

A diagonal pattern, a beautiful landscape, a cart icon... These can be considered as **decorative**, as they _support_ the content but are not _part_ of it. If they were to disappear, the webpage would still make sense.

As for many dual choices, the frontier between content and styling is blurry. Some visual techniques are easier to achieve with CSS backgrounds. Just ask yourself if the image you're using is essential to the page. If so, use `<img>` element.

#### Gradients

CSS also allows to define **color gradients** as background images, in 2 different shapes:

* `linear-gradient` for gradients in a single direction, in a rectangular shape
* `radial-gradient` for gradients in all directions, in a circular shape

We cover that in a chapter 8.3: [CSS gradients](/css-gradients.html). The only thing to know for now is that background gradients are considered as **background images**:

```css
body{ background-image: linear-gradient(white, grey);}
```
{: .css}

### background-position

By default, a background image will repeat itself indefinitely. You can specify where its **original position**, by choosing a horizontal `x` value, and a vertical `y` one.

For each coordinate, you either use:

* pixel values `px`
* percentages, relative to the HTML element's dimensions
* keywords like `center`, `left`, `bottom`...

```css
body{ background-position: right bottom;}
```
{: .css}

You can mix different coordinate units:

```css
body{ background-position: center 20px;}
```
{: .css}

### background-repeat

By default, a background image will repeat itself indefinitely. You can choose to make it repeat only horizontally, only vertically, or not at all.

```css
body{ background-repeat: repeat-x;} /* Only horizontally */
body{ background-repeat: repeat-x;} /* Only vertically */
body{ background-repeat: no-repeat;} /* The background image will only appear once */
```
{: .css}
