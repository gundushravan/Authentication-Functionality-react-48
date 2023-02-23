import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import About from './components/About'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
