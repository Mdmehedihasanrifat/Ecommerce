import React from "react";
import './App.css';
import Home from "./page/Hompage/Home";
import {Route} from "react-router-dom";
import Shop from "./page/Shop/Shop";
import Header from "./Components/Header/Header";
import SignInAndSignup from "./page/Signi&Signup/SignInAndSignup";
import{auth} from '../src/Firebase/Firebase.utils'

class App extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            currentUser:null
        }
    }
    unsubscribe=null;
    componentDidMount() {
    this.unsubscribe=auth.onAuthStateChanged(user=>{
            this.setState({currentUser:user})
            console.log(user)
        })
    }
    componentWillUnmount() {
        this.unsubscribe=null;
    }


    render() {


    return (
    <div>


        <Header currenUser={this.state.currentUser}></Header>
           <Route exact path='/' component={Home}/>
           <Route exact path='/shop' component={Shop}/>
        <Route path="/SignAndSignup" component={SignInAndSignup}></Route>

    </div>
  );
 }

}

export default App;
