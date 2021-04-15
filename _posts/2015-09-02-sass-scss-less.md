---
layout: post
title: "<strong>Sass</strong> vs <strong>SCSS</strong> vs <strong>Less</strong>"
subtitle: "The Sass way"
section: sass
---

There are 2 CSS preprocessors to choose from:

* **Less** [https://lesscss.org/](https://lesscss.org)
* **Sass** [https://sass-lang.com/](https://sass-lang.com)

They both have been around for several years. We're going to use **Sass**.

### Sass vs SCSS

Sass has 2 **syntaxes** available:

* **Sass** itself (Syntactically Awesome StyleSheets) in `.sass` files
* **SCSS** (Sassy CSS) in `.scss` files, which is something halfway between regular CSS and Sass

The difference between Sass and SCSS is [quite subtle](https://sass-lang.com/documentation/file.SASS_REFERENCE.html#syntax).

Remember that:

* Sass is the name of the preprocessor
* SCSS is easier to learn
* all resources on the internet (like [The Sass Way](https://github.com/thesassway/thesassway.com)) mention Sass, not SCSS
* all features are available for both syntaxes
* everything in SCSS is available in Sass

We're actually going to write **SCSS** but still call it **Sass**.

### Why SCSS first

We're gonna use **SCSS** for a few reasons:

* **readibility**: the syntax is very similar to CSS
* **learning curve**: it only adds a few additional features on top of CSS
* **compatibility**; a CSS file is a valid SCSS file
* **resources**: lots of online articles to read and open source libraries to use
* **expandibility**: it's easy to go from SCSS to Sass

### Features

What Sass provides[^1] is:

* **variables**: instead of repeating `#fce473` throughout your CSS file, just set `$yellow: #fce473` once
* **nesting**: CSS rules can be nested within each other
* **mixins**: custom functions that can accept parameters and will prevent useless repetitions
* **extensions**: an easy way to inherit the same properties of another selector
* **operators**: adding/substracting/multiplying/dividing values, like `960px / 4` or `$space * 2`

### DRY code

Everything about Sass is to provide tools to **prevent repeating yourself** in your code: it's the [DRY principle](https://en.wikipedia.org/wiki/Don't_repeat_yourself), which stands for _Don't repeat yourself_.

* **variables** prevents repeating _values_
* **nesting** prevents repeating _selectors_
* **mixins** and **extensions** prevent repeating _properties_

### Installing Sass

Head towards [https://sass-lang.com/install](https://sass-lang.com/install) to install Sass on your computer.

[^1]: and any CSS preprocessor for that matter, but I'll refer to Sass only from now on.


