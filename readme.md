# FSD-C-WE-T-B23

## Full Stack Development

### Day - 1

#### Topics Covered

[x] What is Full Stack Development?  
[x] What is Frontend, Backend & Databases?  
[x] Introduction to web Browser JavaScript V8  
[x] Evolution of HTTP,HTTP Methods  
[x] How the Server looks at the URL  
[x] Request & Response cycle  
[x] Browser js vs Node js

##### What is Full Stack Development?

Full Stack Development is an end-to-end development of a web application.

- end-to-end means from the Frontend to the Backend and the Database [ Components of a web application ]

Type of applications:

- Web Application
- Mobile Application
- Desktop Application
- Hybrid Application
- Enterprise Application
- Embedded Application

##### What is Frontend, Backend & Databases?

- Frontend: The part of the web application that the user interacts with. It is the User Interface(UI) of the web application.

- Backend: This is where the processing of the web application happens.

  - It has the following components:
    - Server: Listens to the incoming requests and sends the response.
    - Application: The logic of the web application + API (Application Programming Interface).
    - Database: The storage of the web application.

- API

  - Application Programming Interface
  - It is a set of rules that allows one software application to talk to another software application.

- Restful API

  - Representational State Transfer
  - It is an architectural style that defines a set of constraints and properties based on HTTP.

- HTTP

  - HyperText Transfer Protocol
  - It is an application layer protocol that is used to transfer data over the web.

- HTTP Methods

  - GET: To get the data from the server.
  - POST: To create the data on the server.
  - PUT: To update the data on the server.
  - PATCH: To partially update the data on the server.
  - DELETE: To delete the data on the server.

- How the Server looks at the URL

  - The server looks at the URL in the following way:
    - Protocol: `http://`
    - Domain: `www.google.com`
    - Port: `:80`

- Request & Response cycle

  - Request: The client sends a request to the server.
  - Response: The server sends a response to the client.

- JavaScript

  - JavaScript is a programming language that is used to make the web pages interactive.
  - Language of the web.

- Browser js vs Node js

  - Browser js: JavaScript that runs in the browser.
  - Node js: JavaScript that runs on the server.

##### Evolution of HTTP

- HTTP/0.9

  - The first version of HTTP.
  - It was a simple protocol that allowed the client to request a file from the server.
  - It was a stateless protocol.

- HTTP/1.0

  - Introduced the concept of headers.
  - It was a stateless protocol.
  - Allowed response codes (eg., 200, 404, 500)

- HTTP/1.1

  - Introduced the concept of persistent connections.
  - It was a stateless protocol.

- HTTP/2

  - Introduced the concept of multiplexing.
  - It was a stateless protocol.

- HTTP/3
  - Introduced the concept of QUIC [ Quick UDP Internet Connections ]
  - It was a stateless protocol.

### Day - 2

#### Topics Covered

[ ] Alerts & Prompts
[x] Variables
[x] Data Types
[x] Operators

Browsers and Javascript Parser Engines:

- Google Chrome: V8
- Firefox: SpiderMonkey
- Safari: JavaScriptCore
- Edge: Chakra

### Day - 3

[x] Conditionals - if, else
[x] Loops - while, do...while, for
[x] Functions

### Day - 4

[x] Hoisting & scope
[x] Arrays & Array Methods
[x] Object and JSON iteration

HTML Tags

Reprsented using ankle brackets (< >)

<!DOCTYPE html>

This is for telling the browser that this is an HTML document and uses HTML5.

<html>

This is the root element of an HTML document. It contains all other elements.

Semantics:

There are special software for the visually impaired people.

<h1> to <h6>

These are the heading tags. <h1> is the largest and <h6> is the smallest.

<p>
This is the paragraph tag. It is used to define a paragraph of text.

<strong>
This is the strong tag. It is used to define important text. It is usually displayed in bold.

<em>
This is the em tag. It is used to define emphasized text. It is usually displayed in italics.

<ul>
This is the unordered list tag. It is used to define a list of items. The items are usually displayed with bullet points.

<ol>
This is the ordered list tag. It is used to define a list of items. The items are usually displayed with numbers.

[x] What is HTML & Why to use?
[x] Basic Tags
[x] div Vs span
[x] Semantic Tags
[x] forms
[x] Tables
![alt text](image.png)

### Semantic Tags

Semantic tags are the tags that have a meaning. They are used to define the structure of the document.

Background: There are special software for the visually impaired people. They read the document and tell the user what is in the document. They use semantic tags to understand the structure of the document.

- header
- footer
- nav
- article
- aside
- section
- main
- figure
- thead
- tbody
- tfoot

[x] What is css?
[x] Type of CSS - Inline, Internal, External
[x] css selectors ( class vs id vs tag )
[x] display property: inline, block
[x] Intro to pseudo-classes(link,visited,hover,active)

What is CSS?

- Cascading Style Sheets
- It is used to style the HTML document.
- It is used to define the layout of the HTML document.

### Intro to pseudo-classes

Pseudo-classes are used to define the special state of an element.

- :link: It is used to define the state of a link that has not been visited.
- :visited: It is used to define the state of a link that has been visited.
- :hover: It is used to define the state of an element when the mouse is over it.
- :active: It is used to define the state of an element when it is being clicked.

[x] what is box model?
[x] Padding,margin
[x] Vizualize boxmodel in realtime using chrome tools.
[x] CSS Position Properties.
[x] Colors - solid & linear gradients

### What is Box Model?

The box model is a box that wraps around every HTML element. It consists of:

- Content: The actual content of the box, where text and images appear.
- Padding: Clears an area around the content. It is inside the border.
- Border: A border that goes around the padding and content.
- Margin: Clears an area outside the border. It is like the outermost layer of the box.
- The box model is used to calculate the width and height of an element.

### utf-8 in the meta tag

- It is used to define the character set of the HTML document.
- It is used to define the encoding of the HTML document.

### CSS Position Properties

- static: The default position. The element is positioned according to the normal flow of the document.
- relative: The element is positioned relative to its normal position. We can use top, bottom, left, and right to move the element.
- absolute: The element is positioned relative to its nearest positioned ancestor. We can use top, bottom, left, and right to move the element. It will be removed from the normal flow of the document.
- fixed: The element is positioned relative to the viewport. It will not move when the page is scrolled. It will be removed from the normal flow of the document.
- sticky: The element is positioned based on the user's scroll position. It will switch between relative and fixed, depending on the scroll position.

### CSS Selectors

- class
- id
- tag
- universal
- pseudo-class
- multiple selectors (eg., .class1, .class2)
- child selector (eg., parent > child)
- descendant selector (eg., parent child)
- adjacent sibling selector (eg., child + child)
- general sibling selector (eg., child ~ child)
- attribute selector (eg., [attribute=value])

### Responsive Web Design

- It is a design approach that makes web pages render well on a variety of devices and window or screen sizes.
- It uses fluid grids, flexible images, and media queries.

### Day - 11

[x] Tailwind CSS - Setup
[x] Colors
[x] Typography
[x] Spaces and Sizes
[x] Borders
[x] Images
[x] Customization

#### Library Vs Framework

- Library: A collection of functions and methods that can be used to perform specific tasks. It is a set of pre-written code that can be used to perform common tasks.

- Framework: A framework is a collection of libraries that are used to build a specific type of application. It is a set of rules and guidelines that are used to build an application.

#### Tailwind CSS

- It is a utility-first CSS framework for creating custom designs.
- It is a low-level CSS framework that provides utility classes to build custom designs.
- It is a mobile-first CSS framework that is designed to be responsive.
- It is a CSS framework that is designed to be customizable.

#### CDN

- Content Delivery Network
- It is a network of servers that are used to deliver content to users based on their geographic location.

### Day - 12

[x] flex & grid box
[x] layout & rwd

### Day - 13

[x] Create Landing Page using Html&Tailwindcss -Part 1

### Day - 14

[x] Create Landing Page using Html&Tailwindcss -Part 2

## Module 4 - Advanced JavaScript

### Day - 15

[x] What's the DOM and DOM Manipulation
[x] Selecting and Manipulating Elements
[x] get element by Class, tagname & ID
[x] document.queryselector & document.queryselectorAll
[x] Append & Appendchild
[x] innerHTML, innerText

#### What is the DOM?

- Document Object Model
  - Document: The HTML document
  - Object: The objects in the HTML document or the elements in the HTML document.
  - Model: The HTML document is represented as a tree structure.
- The DOM is a programming interface for web documents.
- It represents the document as a tree of nodes.
- It allows JavaScript to manipulate the document structure, style, and content.

### Day - 16

[x] DOM Events
[x] Mouse Events
[ ] Keyboard events

### Day - 17

[x] Build a mini project using Html,Css and JS. Suggestions : Dice Game , Quiz Game etc.

### Day - 18

[x] Event Loop
[x] Callback & Callback Hell
[x] Promise & Promise Chaining
[ ] Async await

#### Event Loop

- The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations (asynchronous operations).
- It is a single-threaded model that uses an event queue to handle asynchronous operations.
- The event loop continuously checks the event queue for new events and processes them one by one.

#### Callback

- A callback is a function that is passed as an argument to another function and is executed after the completion of that function.
- It is used to handle asynchronous operations in JavaScript.
- It works in a phenomenon called "Give me a callback when you are done".
- Examples: Array methods like `forEach`, `map`, `filter`, etc. use callbacks.

#### Callback Hell

- Callback hell is a situation where multiple nested callbacks make the code difficult to read and maintain.
- It occurs when multiple asynchronous operations are dependent on each other and require nested callbacks.

#### Promise

- A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

### Day - 19

[x] Error Handling in Js
[x] Http methods using Fetch
[x] .then and .catch
[x] try catch
[x] Async await

#### XHR

- XML HTTP Request
- It is a JavaScript API that allows you to make HTTP requests to a server.
- It is used to send and receive data from a server asynchronously.
- It is a traditional way of making HTTP requests in JavaScript.

#### Fetch API

- The Fetch API is a modern way to make HTTP requests in JavaScript.
- It is a promise-based API that provides a more powerful and flexible feature set than the XHR API.
