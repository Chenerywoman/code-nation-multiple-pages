import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {

  const [basket, setBasket] = useState(0)

  const addToBasket = () => {
    setBasket(basket + 1);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav basket={basket}/>

        <Switch>
          <Route exact path="/" render={()=> <Home addBasket={addToBasket}/>}/>
          <Route path="/about" component={About}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
