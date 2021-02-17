import {BrowserRouter as Router, Route} from 'react-router-dom'
import PageRenderer from './PageRender'
import Login from './pages/login'
import Home from './pages/home'
import Notify from './components/notify/Notify'


function App() {
  return (
    <Router>
      <Notify></Notify>
      <input type="checkbox" id="theme"/>
      <div className="App">
        <div className="main">
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/:page" component={PageRenderer}></Route>
        <Route exact path="/:page/:id" component={PageRenderer}></Route>
        </div>
    </div>
    </Router>
    
  );
}

export default App;
