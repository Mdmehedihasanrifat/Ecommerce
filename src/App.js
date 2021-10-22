import logo from './logo.svg';
import './App.css';

import Home from "./page/Hompage/Home";
import {Route} from "react-router-dom";

function App() {
  return (
    <div>

           <Route exact path='/' component={Home}/>


    </div>
  );
}

export default App;
