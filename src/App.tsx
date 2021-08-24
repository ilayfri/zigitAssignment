import Login from "./components/Login/Login"
import Info from "./components/Info/Info"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Switch>
            {sessionStorage.getItem('token') ?
              <Route path="/">
                <Info />
              </Route> : ""}
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
