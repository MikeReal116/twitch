import React from "react";
import { Router, Route } from "react-router-dom"; 
import TwitchShow from "./pages/TwitchShow";
import TwitchCreate from "./pages/TwitchCreate";
import TwitchDelete from "./pages/TwitchDelete";
import TwitchEdit from "./pages/TwitchEdit";
import TwitchList from "./pages/TwitchList";
import Header from "./Header";
import history from "../history";
import "./App.css";

const App = ()=>{

  return(
    <div className="container">
      <Router history= {history}>
        <div>
          <Header />
          <Route path="/" exact component={TwitchList}/>
          <Route path="/twitch/show" exact component={TwitchShow}/>
          <Route path ="/twitch/new" exact component={TwitchCreate}/>
          <Route path="/twitch/edit/:id" exact component={TwitchEdit}/>
          <Route path ="/twitch/delete/:id" exact component ={TwitchDelete}/>
        </div>
      </Router>
    </div>
  );
};

export default App;