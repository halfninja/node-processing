I thought it'd be cool to see if processing.js, the Javascript version of the graphics library Processing, could work in Node.js, the serverside Javascript engine. Thanks to the existing `canvas` module, it didn't take too long to get something working. Obviously it doesn't do animation but you can render a frame then save the canvas output to a file.

I had to make a few changes to the processing source, as it tries to register all sorts of touch events on elements and though I was able to implement a number of dummy interfaces to handle them (see index.js in the processing module) I couldn't do them all. Also, I've never made a module before so it's probably not packaged up properly.

Anyway, if you do `node app.js` then that will read the contents of `sketch.pde` and output the final PNG.
