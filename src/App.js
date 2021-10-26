import logo from './logo.svg';
import './App.css';

import Home from "./page/Hompage/Home";
import {Route} from "react-router-dom";
import Shop from "./page/Shop/Shop";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>

        <Header></Header>
           <Route exact path='/' component={Home}/>
           <Route exact path='/shop' component={Shop}/>

    </div>
  );
}

export default App;
