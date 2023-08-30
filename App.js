/**
 * 
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag</h2>
 *      </div>
 * </div>
 * 
 * 
 * nested html
 */


const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },[
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag")]
    ),
    React.createElement("div", { id: "child2" },[
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag")]
    )]
)

// const heading = React.createElement("h1",
//     { id: "heading", xyz: "abc" }, //attribute
//     "Hello World from React!1"); // children which inject inside the h1 tag

// console.log(heading); // return JS object

const root = ReactDOM.createRoot(document.getElementById("root"));// assign a root inside the react
// root.render(heading); // ReactElement(Object) => HTML(browser understands)

root.render(parent);