# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is a type of markup very similar to HTML which is used to render visible elements within Javascript. One difference between the two is that JSX uses the attribute "className" rather than "class", since class is a reserved word in javascript. Another difference is when using in-line CSS styling, a JS object with key:value pairs is used, and css tags such as border-style that are typically written in kabob-case change to camelCase, i.e. borderStyle.

Researched answer: JSX stands for Javascript syntax extension. It was originally develped as "syntactic sugar" which helps people code in a way that is more readable, visually appealing, or easy. It allows for developers to code visual elements durectly into their javascript. Another example of a syntax difference between JSX and HTML is that JSX can only return a single element. This mean that all other elements must be nested inside a single parent, which can be as simple as a JSX fragment. One more is that all tags can be self closing, and all tags need to be closed. For example, in HTML, a line break can be formed with <br>, but in JSX, you need to self-close it with <br/>

2. What is yarn? What file(s) are modified in a React application when you run the command yarn in your terminal?

Your answer: Yarn is a package manager that was developed by Facebook to help manage dependences. When you run yarn, it installs any necessary dependencies, including node modules, and a package.json file. Yarn also provides a variety of terminal commands.

Researched answer: React is a javascript library; it is a pacakage that can be installed in your project using yarn. Jest is another example of a package that can be installed using yarn. Many such packages exist, they contain a variety of different dependencies specific to the job they do within your project. Yarn installs and manages the dependencies for any packages needed in an app.

3. What is an anonymous function in JavaScript?

Your answer: An anonymous function refers to an unnamed function. We can see anonymous functions used when calling a function passed as props in a React component. Another example of an anonymous function is one that is used within higher order functions such as .map(). 

Researched answer: Because anonymous functions are unnamed, they cannot be called after they are created. This is typically not an issue when they are used as arguments within other functons. However, anonymous functions can also be assigned to a variable, allowing them to be called later. The syntax for an annonymous function is (function () {};)
When assigning it to a vairable you would write let functionName = function(){code here}

4. What is the difference between state values and props in React?

Your answer: State values refers to data that is stored in the local memory of a React app. State can be updated via a method given to use by the React hook useState. When declaring a variable using state, the syntax is as follows: let [variableName, setVariableName] = useState ()
Within the parameters for useState, you can set the initial value for that variable. It can be upated by including setVariableName() and passing in a new value, into a function.
Props, on the other hand, are data that is passed to components from the parent component. Props can include a variable whose value has been set with state, but once it is sent to the child component, it is referred to as props.

Researched answer: One important difference to point out between state and props, is tat props are immutable and state can be updated (infact the whole point is that it can be updated!) State can only be passed to other components via props, otherwise it just exists within the scope of the local component.

5. What is the DOM? 

Your answer: DOM stands for document object model. It refers to the visual output of the data, i.e. what the user sees in their browser. In React apps, there is also a virtual DOM which allows the app to listen for events signaling changes to individual components and render only those areas which have changed to the actual DOM.

Researched answer: The Dom is an interface to access the display of an html document. It is modifed via scripting language such as Javascript. It is made up of all the elements of a page including the head, body, text, images, footer, and anything else that exists on the page. It is not a part of Javascript, it is independent of languages, and can be used and manipulated with a vairety of different languages.

6. STRETCH: Which is the difference between a div and a span?

Your answer:

Researched answer:

## Looking Ahead: Terms for Next Week

1. Object-oriented programming:

2. Ruby:

3. Implicit return:

4. Ruby blocks:

5. Ruby hashes:
