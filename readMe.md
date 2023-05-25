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
- Inline-Block => element inline yang dijadikan block

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

[Link](https://www.w3schools.com/html/default.asp)
