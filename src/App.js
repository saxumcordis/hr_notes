import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from "react-router-dom"
import {Feedback} from "./Components/Feedback";
import Style from "./Style/Style.css"
import {Header} from "./Components/Header";
import {BossPage} from "./Components/BossPage";
import {Friends} from "./Components/Friends";
import {MyPage} from "./Components/MyPage";
import {BossTasks} from "./Components/BossTasks";
import {Company} from "./Components/Company";
import {Present} from "./Components/Present";

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
              <Route path="/control">
                  <BossPage/>
              </Route>
              <Route path="/present">
                  <Present/>
              </Route>
            <Route exact path="/">
              <Company/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
  );
};

export default App;
