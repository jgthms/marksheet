---
layout: post
title: "HTML <strong>Forms</strong>"
subtitle: "To make a page <strong>interactive</strong>"
section: html
---

While navigating the Web, a user's interaction is mostly only to click on **links** in order to navigate through webpages.

But the Web understands that a user is sometimes required to provide his own **input**. These types of interaction include:

* signing up and logging in to websites
* entering personal information (name, address, credit card details...)
* filtering content (by using dropdowns, checkboxes...)
* performing a search
* uploading files

To accomodate for these needs, HTML provides interactive **form controls**:

* text inputs (for one or multiple lines)
* radio buttons
* checkboxes
* dropdowns
* upload widgets
* submit buttons

These controls use different HTML **tags**, but most of them use the `<input>` tag. Because it is a self-closing element, the _type_ of input is defined by its `type` attribute:

{% highlight html %}
<!-- A text input -->
<input type="text">
<!-- A checkbox -->
<input type="checkbox">
<!-- A radio button -->
<input type="radio">
{% endhighlight %}

<div class="result">
  <input type="text">
  <br>
  <input type="checkbox">
  <br>
  <input type="radio">
</div>

### The Form element

The `<form>` is a block-level element thats defines an **interactive** part of a webpage. As a result, all form controls (like `<input>`, `<textarea>` or `<button>`) must appear _within_ a `<form>` element.

Two HTML attributes are **required**:

* `action` contains an address that defines _where_ the form information will be sent
* `method` can be either GET or POST and defines _how_ the form information will be sent

Usually, the form information is sent to a **server**. _How_ this data will then be processed goes beyond the scope of this tutorial.

Think of a form as a collection of input controls that work together to perform a **single** operation. If you wrote a login form, you could have **3** controls:

* a email input `<input type="email">`
* a password input `<input type="password">`
* a submit button `<input type="submit">`

These 3 HTML elements would be enclosed within a single `<form action="/login" method="POST">`.

You could similarly add a signup form within the same HTML page, in a separate `<form>` element.

### Text inputs

Almost all forms require **textual** input from users, in order for them to enter their name, email, password, address... Text form controls come in different variations:

<div class="table">
  <table>
    <tr>
      <th>Text</th>
      <td><code>&lt;input type="text"&gt;</code></td>
      <td><input type="text"></td>
      <td>Allows any type of character</td>
    </tr>
    <tr>
      <th>Email</th>
      <td><code>&lt;input type="email"&gt;</code></td>
      <td><input type="email"></td>
      <td>Might display a warning if an invalid email is entered</td>
    </tr>
    <tr>
      <th>Password</th>
      <td><code>&lt;input type="password"&gt;</code></td>
      <td><input type="password"></td>
      <td>Shows dots as characters</td>
    </tr>
    <tr>
      <th>Number</th>
      <td><code>&lt;input type="number"&gt;</code></td>
      <td><input type="number"></td>
      <td>Up/Down keyboard keys can be used</td>
    </tr>
    <tr>
      <th>Telephone</th>
      <td><code>&lt;input type="tel"&gt;</code></td>
      <td><input type="text"></td>
      <td>Can trigger an autofill</td>
    </tr>
    <tr>
      <th>Multiple line text</th>
      <td><code>&lt;textarea&gt;&lt;/textarea&gt;</code></td>
      <td><textarea></textarea></td>
      <td>Can be resized</td>
    </tr>
  </table>
</div>

Although these inputs look very similar and allow users to enter _any_ kind of text (even wrong input), their _type_ provides specific **semantics** to the input, by defining what kind of information it is **supposed** to contain.

Browsers can subsequently slightly alter a control's interface to increase its _interactivity_ or hint at what kind of content is _expected_.

For example, password inputs show dots instead of characters.

<div class="result">
  <input type="password" value="hunter2">
</div>

And number inputs allow their value to be increased/decreased using up and down keys.

<div class="result">
  <input type="number" value="12">
</div>

### Placeholders

Text inputs can display a **placeholder** text, that will disappear as soon as some text is entered.

{% highlight html %}
<input type="text" placeholder="Enter your name">
{% endhighlight %}

<div class="result">
  <input type="text" placeholder="Enter your name">
</div>

If you start typing something, you'll see the text _"Enter your name"_ disappear.

### Labels

Because form elements on their own are not very descriptive, they are usually preceded by a text **label**.

{% highlight html %}
<label>Email</label>
<input type="email">
{% endhighlight %}

<div class="result">
  <label>Email</label>
  <input type="email">
</div>

While placeholders already provide some hint at what content is expected, labels have the advantage of remaining visible at all times, and can be used alongside other types of form controls, like checkboxes or radio buttons.

Although you could use short paragraphs to describe form elements, using `<label>` is semantically more valid because they only exist within forms, and can be paired with a specific form control by using the `for` attribute and matching its value with the input's `id`.

{% highlight html %}
<label for="first_name">First name</label>
<input id="first_name" type="text">
{% endhighlight %}

<div class="result">
  <label for="first_name">First name</label>
  <input id="first_name" type="text">
</div>

Clicking on the label will focus the text input and place the text cursor inside. While this pairing seems useless, it will come in handy with checkboxes and radio buttons.

### Checkboxes

**Checkboxes** are form controls that only have 2 states: checked or unchecked. They basically allow the user to say "Yes" or "No" to something.

{% highlight html %}
<input type="checkbox"> Remember me
{% endhighlight %}

<div class="result">
  <input type="checkbox"> Remember me
</div>

Because it can be hard to click on a small checkbox, it is recommended to wrap a `<label>` around the checkbox **and** its description.

{% highlight html %}
<label>
  <input type="checkbox"> I agree to the terms
</label>
{% endhighlight %}

<div class="result">
  <label>
    <input type="checkbox"> I agree to the terms
  </label>
</div>

You can click on _"I agree to the terms"_ to toggle the checkbox.

By default, a checkbox input is unchecked. You can mark it as checked by using the simply called `checked` attribute.

{% highlight html %}
<label>
  <input type="checkbox" checked> Use as my billing address
</label>
{% endhighlight %}

<div class="result">
  <label>
    <input type="checkbox" checked> Use as my billing address
  </label>
</div>

### Radio buttons

You can present the user a **list of options** to choose from by using radio buttons.

For this form control to work, your HTML code needs to **group** a list of radio buttons together. This is achieved by using the _same_ value for the `name` attribute:

{% highlight html %}
<label>Marital status</label>
<label>
  <input type="radio" name="status">
  Single
</label>
<label>
  <input type="radio" name="status">
  Married
</label>
<label>
  <input type="radio" name="status">
  Divorced
</label>
<label>
  <input type="radio" name="status">
  Widowed
</label>
{% endhighlight %}

<div class="result">
  <label>Marital status</label>
  <br>
  <label>
    <input type="radio" name="status">
    Single
  </label>
  <br>
  <label>
    <input type="radio" name="status">
    Married
  </label>
  <br>
  <label>
    <input type="radio" name="status">
    Divorced
  </label>
  <br>
  <label>
    <input type="radio" name="status">
    Widowed
  </label>
</div>

Because all radio buttons use the same _value_ for their `name` attribute (in this case the value `"status"`), selecting one option will unselect all other ones. Radio buttons are said to be **mutually exclusive**.

#### Difference between radio buttons and checkboxes

While a checkbox exists **on its own**, radio buttons can only appear as a **list** (which means having at least _2_ options).

Also, clicking a checkbox is **optional** while choosing one of the radio buttons is **mandatory**. That's why it is impossible to uncheck a radio button unless choosing a sibling option. But in the end, one of the radio buttons is always selected.

### Dropdown menus

If the number of options to choose from takes up too much space, you can use `<select>` dropdown menus.

They work like radio buttons. Only their layout is different.

{% highlight html %}
<select>
  <option>January</option>
  <option>February</option>
  <option>March</option>
  <option>April</option>
  <option>May</option>
  <option>June</option>
  <option>July</option>
  <option>August</option>
  <option>September</option>
  <option>October</option>
  <option>November</option>
  <option>December</option>
</select>
{% endhighlight %}

<div class="result">
  <select>
    <option>January</option>
    <option>February</option>
    <option>March</option>
    <option>April</option>
    <option>May</option>
    <option>June</option>
    <option>July</option>
    <option>August</option>
    <option>September</option>
    <option>October</option>
    <option>November</option>
    <option>December</option>
  </select>
</div>

#### Multiple choice dropdown menus

If you add the `multiple` attribute, you can provide the ability to select multiple choices.

{% highlight html %}
<label>Which browsers do you have?</label>
<select multiple>
  <option>Google Chrome</option>
  <option>Internet Explorer</option>
  <option>Mozilla Firefox</option>
  <option>Opera</option>
  <option>Safari</option>
</select>
{% endhighlight %}

<div class="result">
  <label>Which browsers do you have?</label>
  <br>
  <select multiple>
    <option>Google Chrome</option>
    <option>Internet Explorer</option>
    <option>Mozilla Firefox</option>
    <option>Opera</option>
    <option>Safari</option>
  </select>
</div>

Select multiple options by maintaining Ctrl (or ⌘) and clicking. This can be a good alternative to using multiple checkboxes in a row.

### Example: a complete signup form

{% highlight html %}
<form action="/signup" method="POST">
  <p>
    <label>Title</label>
    <label>
      <input type="radio" name="title" value="mr">
      Mr
    </label>
    <label>
      <input type="radio" name="title" value="mrs">
      Mrs
    </label>
    <label>
      <input type="radio" name="title" value="miss">
      Miss
    </label>
  </p>
  <p>
    <label>First name</label>
    <input type="text" value="first_name">
  </p>
  <p>
    <label>Last name</label>
    <input type="text" value="last_name">
  </p>
  <p>
    <label>Email</label>
    <input type="email" value="email">
  </p>
  <p>
    <label>Phone number</label>
    <input type="tel" value="phone">
  </p>
  <p>
    <label>Password</label>
    <input type="password" value="password">
  </p>
  <p>
    <label>Confirm your password</label>
    <input type="password" value="password_confirm">
  </p>
  <p>
    <label>Country</label>
    <select>
      <option>Canada</option>
      <option>France</option>
      <option>Germany</option>
      <option>Italy</option>
      <option>Japan</option>
      <option>Russia</option>
      <option>United Kingdom</option>
      <option>United States</option>
    </select>
  </p>
  <p>
    <label>
      <input type="checkbox" value="terms">
      I agree to the <a href="/terms">terms and conditions</a>
    </label>
  </p>
  <p>
    <button>
      Sign up
    </button>
  </p>
</form>
{% endhighlight %}

<div class="result">
  <form action="/signup" method="POST">
    <p>
      <label>Title</label>
      <label>
        <input type="radio" name="title" value="mr">
        Mr
      </label>
      <label>
        <input type="radio" name="title" value="mrs">
        Mrs
      </label>
      <label>
        <input type="radio" name="title" value="miss">
        Miss
      </label>
    </p>
    <p>
      <label>First name</label>
      <input type="text" value="first_name">
    </p>
    <p>
      <label>Last name</label>
      <input type="text" value="last_name">
    </p>
    <p>
      <label>Email</label>
      <input type="email" value="email">
    </p>
    <p>
      <label>Phone number</label>
      <input type="tel" value="phone">
    </p>
    <p>
      <label>Password</label>
      <input type="password" value="password">
    </p>
    <p>
      <label>Confirm your password</label>
      <input type="password" value="password_confirm">
    </p>
    <p>
      <label>Country</label>
      <select>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
        <option>Italy</option>
        <option>Japan</option>
        <option>Russia</option>
        <option>United Kingdom</option>
        <option>United States</option>
      </select>
    </p>
    <p>
      <label>
        <input type="checkbox" value="terms">
        I agree to the <a href="/terms">terms and conditions</a>
      </label>
    </p>
    <p>
      <button>
        Sign up
      </button>
    </p>
  </form>
</div>

There are other form controls available, but we've covered the ones who'll mostly use.

It's time to start **styling** our page.
