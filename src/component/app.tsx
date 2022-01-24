import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Config } from "../common/app-config";
import { Home } from "./home/home";
import { UserHome } from "./user/user_home";

interface AppProps {
  config: Config;
}

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about"></Route>
        <Route path="/dashboard"></Route>
        <Route path="/user">
          <UserHome />
        </Route>
      </Switch>
    </Router>
  );
};
