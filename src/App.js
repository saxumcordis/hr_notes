import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from "react-router-dom"
import {Feedback} from "./Components/Feedback";
import {Notes} from "./Components/NotesView";
import Style from "./Style/Style.css"

const App = () => {
  return (
      <div>
        <BrowserRouter>
          <Switch>
            <Notes/>
            <Route exact path="/feedback/:id">
              <Feedback/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
  );
};

export default App;
