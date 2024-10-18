import React from "react";
import ReactDOM from "react-dom";
const App = () => {
    return React.createElement("h1", null, "Hello, React with Rspack!");
};
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
