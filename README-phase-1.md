# Catsagram Phase 1: Fetch a new cat image on page load

Today, you will be building out the HTML structure of the page using
JavaScript and using the Cats API to display a new cat whenever the page is
loaded.

## Set up

Clone the practice from the [starter].

Run `node app.js` from the base directory to start the server which will serve
the static assets in the practice. Navigate to [http://localhost:5000] in your
browser to see the __public/index.html__ file rendered.

## Instructions

Take some time to browse through each file. __public/index.html__ is where your
page will exist and where your scripts will inject DOM elements into.

You'll be primarily working in the __public/index.js__ file today, and at the
current moment, it's empty. Your job will be to write an `window.onload`
callback. This callback should inject the page with all the necessary elements
to match __wireframes/phase-1.png__. The image will have to be fetched from the
Cats API. Make sure you look through the [API documentation].

Don't forget to connect __index.html__ with __index.js__.

If you wish, you may also add your own flair to the styling. You can choose to
create a CSS file, use inline-styles with JavaScript, or a mix of both.

[starter]: https://github.com/appacademy/practice-for-week-09-catsagram-long-practice-day-1
[API documentation]: https://docs.thecatapi.com/api-reference/images/images-search
[http://localhost:5000]: http://localhost:5000





# Catsagram Phase 2: Add interactivity to the page
Today, you will be adding some interactivity and complexity to your Catsagram app using event listeners.

## Set up
You can either build off your Catsagram project from the previous day or clone the practice for this day from the starter.

Run node app.js from the base directory to start the server which will serve the static assets in the practice. Navigate to http://localhost:5000 in your browser to see the public/index.html file rendered.

## Instructions
First, add a button that requests and displays a new cat image, replacing the original image.

Second, for the active image, allow the user to upvote/downvote the image and display the score (upvotes - downvotes).

Third, allow the user to add comments to the image. You want to access the value of the comment input field and append a new element representing the comment.

Whenever a new image is requested, the upvotes and comments should be reset.

The final product should at the very least match wireframes/phase-2.png. If you finish early, try to implement a delete comment feature!

By this point, your code could be getting a little bit messy within index.js. Try DRYing up your code and keep in mind the Single Responsibility Principle.