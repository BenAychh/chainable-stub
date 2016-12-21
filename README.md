# chainable-stub

A simple spy/stub for when you need to stub chainable calls.

I wrote this because I was writing some tests for an angular class that had a declaration `this.d3 = d3.getService()` and I was trying to test around the d3 stuff.  This just allows you to stub something chainable so you can work with the rest of your code.

Use: See the index.spec.js. ChainableStub.__spies.whatever will return a Sinon spy (http://sinonjs.org)
