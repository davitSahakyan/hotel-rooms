import React from 'react';
import './App.css';
// Components
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Error from './pages/Error'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
// Router
import { Switch , Route } from 'react-router-dom'

function App() {
  return (
    <>
     <Navbar />
     <Switch>
       <Route path='/' component={Home} exact />
       <Route path='/rooms/' component={Rooms} exact />
       <Route path='/rooms/:slug' component={SingleRoom} exact />
       <Route  component={Error}  />
     </Switch>
    </>
  );
}

export default App;
