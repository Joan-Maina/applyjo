import "./App.css";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Blog from "./pages/Blog";
import { login } from "./redux/actions/users";

function App() {
  const dispatch = useDispatch();

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Signup />
          </Route>

          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
