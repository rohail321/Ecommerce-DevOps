import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import {useEffect} from 'react'
import store from './store'
import setAuthToken from './util/setAuthToken'

import './App.css';


import Navbar from './components/general/Navbar';
import Landing from './components/landing/index'
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { setCurrentUser } from './actions/authActions'
import Dashboard from './components/dashboard'
import Home from './components/dashboard/components/Home'
import AddProduct from './components/dashboard/components/AddProduct'
import Products from './components/dashboard/components/Products'

import ProtectedRoute from './components/general/ProtectedRoute'


if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App(props) {
  useEffect(() => {
    store.dispatch(setCurrentUser())
  
  }, [])
  
  return (
    <Provider store={store} >
    <Router>
    <div className="App">
         <Route exact path="/" component={Landing} />
         <Switch>  
         <ProtectedRoute
              exact
              path="/dashboard"
              component={() => <Dashboard {...props} nestedRoute={Home} />}
            />
           <ProtectedRoute
              exact
              path="/dashboard/addProduct"
              component={() => (
                <Dashboard {...props} nestedRoute={AddProduct} />
              )}
            />
            <ProtectedRoute
              exact
              path="/dashboard/products"
              component={() => <Dashboard {...props} nestedRoute={Products} />}
            />
          <Route  path="/login" component={Login} />
          <Route  path="/register" component={Register} />
        </Switch>
    </div>
    
    </Router>
    </Provider>
  );
}

export default App;
