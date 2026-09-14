import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ItemList} />
        <Route path="/items/:id" component={ItemDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

