# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX is a type of markup very similar to HTML which is used to render visible elements within Javascript. One difference between the two is that JSX uses the attribute "className" rather than "class", since class is a reserved word in javascript. Another difference is when using in-line CSS styling, a JS object with key:value pairs is used, and css tags such as border-style that are typically written in kabob-case change to camelCase, i.e. borderStyle.

Researched answer:

2. What is yarn? What file(s) are modified in a React application when you run the command yarn in your terminal?

Your answer: Yarn is a package manager that was developed by Facebook to help manage dependences. When you run yarn, it installs any necessary dependencies, including node modules, and a package.json file. Yarn also provides a variety of terminal commands.

Researched answer:

3. What is an anonymous function in JavaScript?

Your answer: An anonymous function refers to an unnamed function. We can see anonymous functions used when calling a function passed as props in a React component. Another example of an anonymous function is one that is used within higher order functions such as .map(). 

Researched answer:

4. What is the difference between state values and props in React?

Your answer: State values refers to data that is stored in the local memory of a React app. State can be updated via a method given to use by the React hook useState. When declaring a variable using state, the syntax is as follows: let [variableName, setVariableName] = useState ()
Within the parameters for useState, you can set the initial value for that variable. It can be upated by including setVariableName() and passing in a new value, into a function.
Props, on the other hand, are data that is passed to components from the parent component. Props can include a variable whose value has been set with state, but once it is sent to the child component, it is referred to as props.

Researched answer:

5. What is the DOM? 

Your answer: DOM stands for document object model. It refers to the visual output of the data, i.e. what the user sees in their browser. In React apps, there is also a virtual DOM which allows the app to listen for events signaling changes to individual components and render only those areas which have changed to the actual DOM.

Researched answer:

6. STRETCH: Which is the difference between a div and a span?

Your answer:

Researched answer:

## Looking Ahead: Terms for Next Week

1. Object-oriented programming:

2. Ruby:

3. Implicit return:

4. Ruby blocks:

5. Ruby hashes:
