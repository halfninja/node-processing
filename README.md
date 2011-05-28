I thought it'd be cool to see if processing.js, the Javascript version of the graphics library Processing, could work in Node.js, the serverside Javascript engine. Thanks to the existing `canvas` module that I didn't write, it didn't take too long to get something working. Obviously it doesn't do animation but you can render a frame then save the canvas output to a file.

I had to make a few changes to the processing source, as it tries to register all sorts of touch events on elements and though I was able to implement a number of dummy interfaces to handle them (see index.js in the processing module) I couldn't do them all. Also, I've never made a module before so it's probably not packaged up properly.

Anyway, if you do `node app.js` then that will read the contents of `sketch.pde` and output the final PNG.

Various methods will fail, like trying to load an image, or pretty much anything other than drawing shapes. It would probably take a bit of a rewrite of Processing.js to make it work properly outside of a browser. You can probably do all the stuff you want accessing the `canvas` module natively, really.

The `canvas` module uses Cairo, so on Windows or Mac it probably won't work straight away unless you install that.