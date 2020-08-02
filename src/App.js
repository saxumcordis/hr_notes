import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from "react-router-dom"
import {Feedback} from "./Components/Feedback";
import {Notes} from "./Components/NotesView";
import Style from "./Style/Style.css"
import {Header} from "./Components/Header";
import {BossPage} from "./Components/BossPage";
import {Friends} from "./Components/Friends";
import {MyPage} from "./Components/MyPage";
import {BossTasks} from "./Components/BossTasks";

const App = () => {
  return (
      <div>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path="/feedbacktree/:id">
              <Feedback/>
            </Route>
              <Route path="/bosstasks">
                  <BossTasks/>
              </Route>
              <Route path="/mypage">
                  <MyPage/>
              </Route>
              <Route path="/friends">
                  <Friends/>
              </Route>
              <Route path="/myhead">
                  <BossPage/>
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
