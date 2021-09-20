import Navbar from "./components/nav-bar";
import Checkout1 from "./pages/checkout1";
import Checkout2 from "./pages/checkout2";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path = '/payment' component={Checkout2}></Route>
        <Route path = '/' component={Checkout1}></Route>
      </Switch>
    </Router>
  );
}

export default App;
