### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
call back
promise 
async/await 


- What is a Promise?
A promise is an object that may produce a single value some time in the future : either a resolved value, or a reason that it's not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending.


- What are the differences between an async function and a regular function?
Javascript will make sure that the asnycFn will return with a Promise (either resolved or rejected) even if an error occured in it.


- What is the difference between Node.js and Express.js?
Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. (NodeJS is not a framework and it’s not a programming language) We often use Node.js for building back-end services like APIs like Web App or Mobile App. It’s used in production by large companies such as Paypal, Uber, Netflix, Wallmart and so on.

Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects.

Difference between Node.js and Express.js:

Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript.
Express.js is a framework based on Node.js for which is used for building web-application using approaches and principles of Node.js.event-driven.



- What is the error-first callback pattern?
The error-first pattern consists of executing a function when the asynchronous operation ends (such as an incoming AJAX response) which takes as first argument an error, if one occurred, and the result of the request as extra arguments.


- What is middleware?
It is code that runs in the middle of the request / response cycle!
In Express, middleware are functions that get access to the req and res objects and can also call the next function.
express.json() is an example of middleware
Our 404 and global error handler are example of middleware


- What does the `next` function do?
The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware. If we do not include it, we will not make it to the next route!


- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
1) the $.getJSON need to be be cleaned up a bit, instead of an object with the big chunk of data. 
2) the run time is too long, need to be simplified by add all 3 calls to an array, and then pass that array as an argument to Promise.all(). Promise.all() will wait for all the provided async calls to be resolved before it carries on(see Conclusion for caveat).

async function getUsers() {
	const [elie, matt, joel] = await Promise.all([
		$.getJSON('https://api.github.com/users/elie'),
    $.getJSON('https://api.github.com/users/joelburton'),
    $.getJSON('https://api.github.com/users/mmmaaatttttt')
	]);

  return [elie, matt, joel];
}

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
