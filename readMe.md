# HTML dan CSS

## Tools Fundamental

- Text Editor (VS Code/Sublime)
- Runtime Environment Javascript (Node JS)
- Rest Client (Postman/Insomnia)
- VCS (Git)
- Deploying (Heroku)

## HTML (Hyper Text Markup Language)

- Elemen (Tag pembuka dan penutup) => `<h1>...</h1>`
- `<head>` => title, style, link, meta, script, base, noscript
- `<body>` => header (`<h1>-<h6>`), paragraph (`<p>`)
- `<!-- Ini adalah komentar -->` => komentar (remembering for the code)
- Attribute => `<html lang="en"></html>` => `lang="en"` => key dan value

## Types Display Element HTML

- Inline => element yang tidak memenuhi satu baris => `<a>, <img>, <span>`
- Block => element yang memenuhi satu baris => `<h1>, <p>, <div>, <ol>, <ul>, <li>`
- Inline-Block => element inline yang dijadikan block (atau sebaliknya)

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .test {
        border: 1px solid black;
      }
    </style>
  </head>
  <body id="content">
    <h1 class="test">Block Element</h1>
    <a href="/" class="test">Inline Element</a>
  </body>
</html>
```

### Images

```
<!-- File foto sejajar dengan file index.html -->
<img src="profile.jpg" alt="Gita" width="250" height="200" />

<!-- File foto diluar dari file index.html -->
<img src="../assets/profile.jpg" alt="Gita" width="250" height="200" />
```

### Important Text

- `<strong>...</strong>`
- `<em>...</em>`atau `<i>...</i>`
- `<s>...</s>`
- `<u>...</u>`
- `<mark>...</mark>`
- `<br>`

### Media

- Video => `<video>...</video>`
- Audio => `<audio>...</audio>`
- Youtube => `<iframe>...</iframe>`

## Class and Id

- `<h1 class="text" id="heading">Hello</h1>`

### Summary

[Link](https://www.w3schools.com/html/default.asp)

## CSS (Cascading Style Sheets)

memberikan design, membuat bentuk, serta mengubah tampilan halaman sebuah website.

[Learning](https://web.dev/learn/css/)

## Syntax Basic CSS

```
selector {
  property : value;
}
```

## Types using CSS

- Inline
- Internal
- Eksternals

### Inline

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 style="color: red">Hello World</h1>
  </body>
</html>
```

### Internal

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      h1 {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

### Eksternal

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./assets/index.css">
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>

// file index.css
h1 {
  color: red;
}
```

## CSS Framework

kumpulan kode CSS yang sudah siap pakai

- Bootstrap CSS
- Foundation
- Tailwind CSS
- Materialize

## CSS Box Model

semua yang ditampilkan css berbentuk sebuah kotak (box)

- Area (Margin => Border => Padding => Content)
- Debugging => Browser Dev Tools => Inspect Element

## Selector

### Simple Selector

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./assets/index.css">
  </head>
  <body>
    <h1 class="test" id="test">Hello World</h1>
  </body>
</html>
```

- Universal (Reset Default)

  ```
  * {
    color: red;
  }
  ```

- Type (Element)

  ```
  h1 {
    color: red;
  }
  ```

- Class (`.<name-class>`)

  ```
  .test {
    color: red;
  }
  ```

- Id (`#<name-id>`)

  ```
  #test {
    color: red;
  }
  ```

- Attribute

  ```
  [data-type] {
    background-color: gray;
  }

  [data-type = "primary"] {
    color: red;
  }
  ```

## Cascade

Terkadang dua atau lebih aturan css yang bersaing dapat diterapkan ke sebuah element.

Urutan browser memilih style (overriding)

- Position and order of appearance => urutan (last applied)
- Specificity (bobot)
- Origin (UserAgent => Local => Authored => Authored with Important => Local with Important => UserAgent with Important)

- Importance (Rules) => (Normal => Animation => !important => Transition)

## CSS Spacing

- HTML Spacing (`<br/>` or `<hr/>`)
- Margin => (all), (top-bottom, left-right), (top, left-right, bottom), (top, right, bottom, left)
- Padding => Same as margin

## Positioning

- Relative => mempertahankan tempatnya di flow dokumen
- Absolute => mendasarkan posisinya dari parent yang relative
- Fixed => mendasarkan posisinya terhadap viewport
- Sticky => hanya akan menerapkan nilai arah saat berada dalam status dock/stay

ketika memakai positioning ini akan membuka property (top, left, right, bottom)

## Keyword

- Inherit (Default)
- Initial
- Unset

## Color

[Link 1](https://palettes.shecodes.io/)
[Link 2](https://www.imgonline.com.ua/eng/color-palette.php)
[Link 3](https://hypercolor.dev/)

- Hexadecimal (HEX) => (#155263)
- Red Green Blue => (rgb(255, 111, 60))
- Hue Saturation Lightness => (hsl(29, 100%, 62%))
- Name => (gold)

## Pseudo Elements (::)

menambahkan atau menargetkan element tambahan tanpa harus menambahkan lebih banyak tag HTML

### (::first-letter)

hanya digunakan di block

- Color
- Background
- Border
- Float
- Font Properties (font-size, font-weight)
- Text Properties (text-decoration, word-spacing)

### (::first-line)

like as `::first-letter

### (::before and ::after)

```
selector::before {
  content: "";
}

selector::after {
  content: "";
}
```

### (::marker)

- Color
- Content
- White-Space
- Font Properties
- Animation dan Transition Properties

### (::selection)

- Color
- Background Color
- Text

### (::placeholder)

- Color
- Background
- Font
- Text

## Pseudo Classes (:)

memungkinkan kita menerapkan css berdasarkan perubahan status

### Interactive States

- Hover => saat cursor berada diatas element
- Active => saat diklik dan sebelum dilepaskan
- Focus => output ketika diklik (mouse)
- Focus Visible => like as focus (keyboard)
- Target => like as focus but more generally

### Historic States

- Link (`<a>`) => warna link sebelum dikunjungi
- Visited (`<a>`) => warna setelah dikunjungi

```
color, background-color, border-color, outline-color, fill dan stroke dari SVG

// notes
=> Link, Visited, Hover, Active (LVHA)
```

### Form States

- disabled
- enabled
- checked
- valid
- invalid
- required
- optional

### Element Index and Order

- First Child
- Last Child
- Only Child
- First of Type
- Only of Type
- Nth Child (number/even/odd)

### Empty States (:empty)

## Sizing Unit

- Percen (%) => width from parent element
- Em => relative to the font-size of parent element
- Viewport Height (vh) => 1% from of view height
- Pixel (px) => absolute length in pixel
- rem => relative to the font-size of root element
- Viewport Width (vw) => 1% from of view width

```
// calculated
100% (1)
```

## Layouts

- Display Property (Inline dan Block)
- Flexbox dan Grid
- Flow Layout
