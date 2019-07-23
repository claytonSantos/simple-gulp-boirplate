# Simple Gulp Boirplate
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)]()

> A simple gulp boirplate [Gulp](http://gulpjs.com) e [Sass](http://sass-lang.com) to compile Sass to css and Js es6.

Write your sass and next generation js code in src folder and see compiled code in public folder.

## Table of contents

- [Highlights](#highlights)
- [Getting started](#getting-started)
- [Technologies](#technologies)
- [Structure](#structure)
- [Tasks](#gulp-tasks)
- [Tips](#tips)
- [License](#license)

### Highlights

- Simple
- Free
- Fast
- Easy for begginers

### Getting started
First of all, make sure you have installed the main dependencies:

- [Git](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/en/download/)

```bash
# Clone it into
$ git clone https://github.com/claytonSantos/simple-gulp-boirplate.git my-theme-folder

# Then, go to the project's folder:
$ cd my-theme-folder

# Install your dependencies running:
$ npm install
```


### Technologies

- NodeJS
- Gulp
- JS
- Sass
- HTML5

### Structure

If everything from the Getting Started section goes well, you should have this:

```
├── public
│	├── css
│	│   ├── index.css
│	│
│	├── fonts
│	│   └── {.eot, .svg, .ttf, .woff, .woff2}
│	│
│	├── js
│	│   ├── index.js
│	│
│	│
├── src
│	├── css
│	│   ├── index.css
│	│
│	├── fonts
│	│   └── {.eot, .svg, .ttf, .woff, .woff2}
│	│
│	├── js
│	│   ├── index.js

├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .sass-lint.yml
├── .gulpfile.babel.js
├── .index.html
├── .package-lock.json
├── .README.md
└── style.css
```

### Gulp Tasks

> If you're running [gulp globally](#tips), so you can use all the tasks below:

1. `gulp`:  run the following tasks

### Tips

Install `gulp` globally:

```bash
$ npm install --global gulp-cli
```

Run `gulp` locally:

Abra o navegador em http://localhost:3000

### License
[MIT License](LICENSE) © Simple Gulp Boirplate
