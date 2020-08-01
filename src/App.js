import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from "react-router-dom"
import {Feedback} from "./Components/Feedback";
import {Notes} from "./Components/NotesView";
import Style from "./Style/Style.css"
import {Header} from "./Components/Header";

const App = () => {
  return (
      <div>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path="/feedbacktree/:id">
              <Feedback/>
            </Route>
            <Route exact path="/">
              <Notes/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
  );
};

export default App;
