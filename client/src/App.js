import {BrowserRouter as Router, Route} from 'react-router-dom'
import PageRenderer from './PageRender'

function App() {
  return (
    <Router>
      <input type="checkbox" id="theme"/>
      <div className="App">
        <div className="main">
        <Route exact path="/:page" component={PageRenderer}></Route>
        <Route exact path="/:page/:id" component={PageRenderer}></Route>

        </div>
    </div>
    </Router>
    
  );
}

export default App;
