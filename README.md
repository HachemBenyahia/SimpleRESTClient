# SimpleRESTClient
## _A lightweight Client for API testing_

<br/>

[Postman](https://postman.com) (desktop app) in comparison takes **600 Mo** in my RAM, whereas this Client takes **25 Mo** in a Google Chrome tab (could potentially be less, it is known that Chrome tabs are heavy). It seems that Postman Chrome extensions are no longer available (I tried adding them and couldn't? They recommend the desktop app now, which makes my computer lag due to its weight on RAM). I wanted something light and didn't find it, so I thought I could create it, also as an exercise of code.

<br/>

## Stack

- **XHTML5** (obviously)
- **CSS4** (native CSS being **unbearable**, I will shortly probably switch to Sass)
- **Native/Vanilla JavaScript ECMAScript 2023**. Contrary to popular belief, libraries such as jQuery, let alone frameworks such as Angular, are not _light_ in any way, in fact they are pretty heavy, both in dependencies (naturally) but also on the RAM itself (as well as network, and disk access). According to [this article](https://javascript.plainenglish.io/why-developers-prefer-vanilla-javascript-over-jquery-e707b249d421):

> Vanilla JS was found to be (way) faster than jQuery, depending on the operation you’re comparing it can be up to 10x to 25x faster.

<br/>

## Interface

![Main](screenshots/main.png =400x)

<br/>

## Steps

1) Select a Method (`GET`, `POST`, `PATCH`, `DELETE`). Only `GET` and `POST` are accessible for the moment.
2) Write your endpoint, typically in local development `http://127.0.0.1:[PORT]` where `PORT` is the port of your web server.
3) Write a JSON body by toggling the `Form data` button.
4) Click the `Send` button to send your request.
5) Visualize the result in the section below! Simple. You can see the status in the bar below the main one, and get the status code on the left of the `Send` button.

<br/>

## Installation

All you have to do is download this repository and open `index.html`.

<br/>

## License & conclusion

This software is under [MIT license](https://memgraph.com/blog/what-is-mit-license).

<br/>

This `README.md` was written with the help of the Markdown parser [DILLINGER](https://dillinger.io/).

<br/>

_In conclusion_, if you are limited in RAM and want a light alternative to Postman, you can try this project. Thank you for visiting my repository, and may my project be useful to you!
