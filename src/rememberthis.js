import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

let counter = 0;

let Page = props => {
  let [value, setValue] = useState(props.location.pathname.slice(1))
  
  let title = props.match.path.slice(1)
  return (
    <>
      <h1>{title ? title : 'Home'} page</h1>
      <hr />
      <input 
        value={value} 
        onChange={event => {
          setValue(event.target.value)
          props.history.push('/' + event.target.value)
        }}
      />
    </>
  )
}

let pages = ['', 'bar', 'zap']

let App = () => {
  return (
    <BrowserRouter>
      <nav>
        {/* {pages.map(p => 
          <Link key={p} to={'/' + p}>{p ? p : 'Home'} Page</Link>
        )} */}
      </nav>
      <hr />
      {/* {pages.map(p => 
        <Route key={p} exact path={'/' + p} component={Page} />
      )} */}
      <Route path="/" component={Page} />
      <hr />
      <button
        onClick={() => {
          console.log("the counter is: ", counter++);
        }}
      >
        check counter
      </button>
      <hr />
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));