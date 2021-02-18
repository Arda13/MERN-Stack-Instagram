import { useEffect } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PageRenderer from './PageRender'
import Login from './pages/login'
import Home from './pages/home'
import Alert from './components/alert/Alert'
import { useSelector, useDispatch } from 'react-redux'
import { refreshToken } from './redux/actions/authAction'

function App() {
  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(refreshToken())
  },[dispatch])

  return (
    <Router>
      <Alert></Alert>
      <input type="checkbox" id="theme"/>
      <div className="App">
        <div className="main">
        <Route exact path="/" component={auth.token ? Home: Login}></Route>
        <Route exact path="/:page" component={PageRenderer}></Route>
        <Route exact path="/:page/:id" component={PageRenderer}></Route>
        </div>
    </div>
    </Router>
    
  );
}

export default App;
