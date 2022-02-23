### WHAT'S DOM AND MANIPULATION

DOM stands for Document Object Model, and it is,a structured representation of HTML documents.

The DOM allows us to use JavaScript to access HTML elements and styles in order to manipulate them.

We will be able to change text, to change HTML attributes and also to change CSS styles from our JavaScript.

DOM is basically a connection point between HTML documents and JavaScript code.

DOM is automatically created by the browser as soon as the HTML page loads. And it's stored in a tree structure.

In this tree, each HTML element is one object.

Each element in the HTML, there is one element node and the DOM tree, and we can access and interact with each of these nodes using JavaScript.

DOM always starts with the document object, right at the very top.

And document is a special object that we have access to in JavaScript.

And this object serves as an entry point into the DOM. that means that the query selector method is available on the document object. that's why we say that document is the entry point to the DOM,

The first child element of document is usually the HTML element, because that's usually
the root element in all HTML documents.

Next, HTML usually has two child elements, head and body.

In the HTML, they are adjacent elements, and so they are siblings in our DOM as well.

The rule is that whatever is in the HTML document also has to be in the DOM.

the DOM really is a complete representation of the HTML document,

Many people believe that the DOM and all the methods and properties that we can use to manipulate the DOM, such as documented or the query selector and lots of other stuff are actually part of JavaScript. However, this is not the case.

Remember that JavaScript is actually just a dialect of the ECMAScript specification, and all this DOM related stuff is simply not in there.

"If the DOM is not a part of the JavaScript language, then how does this all work?"

Well, the DOM and DOM methods are actually part of something called the web APIs. So the web API APIs are like libraries that browsers implement and that we can access from our JavaScript code.

Web APIs are, basically, libraries that are also written in JavaScript and that are automatically available for us to use.

So all this happens behind the scenes, we don't have to import or do anything

---

---

### MODAL WINDOW

Limitation of query selector method , whenever we use query selector with a selector, which matches with multiple elements, only the first one will get selected
So we need to use querySelectorALL.

Keypress events

Keyboard events are so-called global events because they don't happen on one specific element.

For global events like Keyboard events we list them on the whole document.

There are 3 types of events for the keyboards

Keydown

keypress

keyup - Only happens when we lift our fingers off the key

---

### DICE GAME
