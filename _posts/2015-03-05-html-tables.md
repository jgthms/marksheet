---
layout: post
title: "HTML <strong>Tables</strong>"
subtitle: "For <strong>multi-dimensional</strong> data"
section: html
---

HTML **tables** are meant for **tabular data** only, which is any type of content that can be semantically arranged in **rows** and **columns**.

It's like having a **spreadsheet** in Excel.

### Syntax

Building a table in HTML requires a **specific structure**:

* open a `<table>`
* add rows with `<tr>`
* add _regular_ cells with `<td>` or _heading_ cells with `<th>`

This **hierarchy** is required, and all 3 elements are necessary to build a table.

When writing the code, you need to define your table cells from left to right, and _then_ from top to bottom.

{% highlight html %}
<table>
  <tr>
    <td>John Lennon</td>
    <td>Rhythm Guitar</td>
  </tr>
  <tr>
    <td>Paul McCartney</td>
    <td>Bass</td>
  </tr>
  <tr>
    <td>George Harrison</td>
    <td>Lead Guitar</td>
  </tr>
  <tr>
    <td>Ringo Starr</td>
    <td>Drums</td>
  </tr>
</table>
{% endhighlight %}

<div class="result">
  <table>
    <tr>
      <td>John Lennon</td>
      <td>Rhythm Guitar</td>
    </tr>
    <tr>
      <td>Paul McCartney</td>
      <td>Bass</td>
    </tr>
    <tr>
      <td>George Harrison</td>
      <td>Lead Guitar</td>
    </tr>
    <tr>
      <td>Ringo Starr</td>
      <td>Drums</td>
    </tr>
  </table>
</div>

As you can see, a table in HTML is relatively **verbose**: there are a lot of tags for just a few rows of data.

### thead, tfoot and tbody

Just like a webpage can have a header and a footer, a **table** can have a head, a body, and a foot. As anything in HTML, this is purely for **semantic** reasons: providing more structure to your table.

`<thead>`, `<tfoot>` and `<tbody>` are collections of **rows**. As such, they are _direct_ children of `<table>` and _direct_ parents of one or more `<tr>`. In short, they add **one level of hierarchy**.

`<thead>` and `<tfoot>` are used as a **summary** of the columns.

Let's enhance the previous table with a head and a body:

{% highlight html %}
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Lennon</td>
      <td>Rhythm Guitar</td>
    </tr>
    <tr>
      <td>Paul McCartney</td>
      <td>Bass</td>
    </tr>
    <tr>
      <td>George Harrison</td>
      <td>Lead Guitar</td>
    </tr>
    <tr>
      <td>Ringo Starr</td>
      <td>Drums</td>
    </tr>
  </tbody>
</table>
{% endhighlight %}

<div class="result">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Instrument</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Lennon</td>
        <td>Rhythm Guitar</td>
      </tr>
      <tr>
        <td>Paul McCartney</td>
        <td>Bass</td>
      </tr>
      <tr>
        <td>George Harrison</td>
        <td>Lead Guitar</td>
      </tr>
      <tr>
        <td>Ringo Starr</td>
        <td>Drums</td>
      </tr>
    </tbody>
  </table>
</div>

### tfoot particularity

Let's also add a foot to the table:

{% highlight html %}
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th>Name</th>
      <th>Instrument</th>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>John Lennon</td>
      <td>Rhythm Guitar</td>
    </tr>
    <tr>
      <td>Paul McCartney</td>
      <td>Bass</td>
    </tr>
    <tr>
      <td>George Harrison</td>
      <td>Lead Guitar</td>
    </tr>
    <tr>
      <td>Ringo Starr</td>
      <td>Drums</td>
    </tr>
  </tbody>
</table>
{% endhighlight %}

<div class="result">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Instrument</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <th>Name</th>
        <th>Instrument</th>
      </tr>
    </tfoot>
    <tbody>
      <tr>
        <td>John Lennon</td>
        <td>Rhythm Guitar</td>
      </tr>
      <tr>
        <td>Paul McCartney</td>
        <td>Bass</td>
      </tr>
      <tr>
        <td>George Harrison</td>
        <td>Lead Guitar</td>
      </tr>
      <tr>
        <td>Ringo Starr</td>
        <td>Drums</td>
      </tr>
    </tbody>
  </table>
</div>

Although we've added a `<tfoot>` **before** the `<tbody>`, it still appears **at the end**.

It comes from the fact that the `<tbody>` can contain a _lot_ of rows. But the browser wants to render the foot before receiving all of the (potentially numerous) rows of data. That's why the `<tfoot>` is first in the code.

### colspan and rowspan

You can **merge** columns or rows by using the `rowspan` and `colspan` respectively.

Keep in mind that in order to merge _columns_ you need to use the `rowspan` attribute, as it allows to _span_ a **column** across several _rows_.

{% highlight html %}
<table>
  <tr>
    <th colspan="2">Michael Jackson Singles</th>
  </tr>
  <tr>
    <th rowspan="3">1979</th>
    <td>Don't Stop 'Til You Get Enough</td>
  </tr>
  <tr>
    <td>Rock with You</td>
  </tr>
  <tr>
    <td>Off the Wall</td>
  </tr>
</table>
{% endhighlight %}

<div class="result">
  <table>
    <tr>
      <th colspan="2">Michael Jackson Singles</th>
    </tr>
    <tr>
      <th rowspan="3">1979</th>
      <td>Don't Stop 'Til You Get Enough</td>
    </tr>
    <tr>
      <td>Rock with You</td>
    </tr>
    <tr>
      <td>Off the Wall</td>
    </tr>
  </table>
</div>

The "Michael Jackson Singles" cell spans across 2 columns, so the following row includes **two** cells.

Because the cell "1979" spans across 3 rows, the 2 following rows only include a **one** cell, to allow space for the "1979" column.

It can be hard to keep track of how many cells are either missing or superfluous. One easy way to build a complete 2 by 4 table first, and then _remove_ cells while adding `colspan` and `rowspan` attributes.  
In our case, we are supposed to have **8** cells. We only write **5** cells, but the `colspan="2"` and `rowspan="3"` add **3 additional cells**.
{: .info}

