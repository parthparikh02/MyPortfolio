import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Contactme from "./components/Contactme";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contactme" component={Contactme} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
