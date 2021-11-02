import React from 'react';
import './signIn.scss'
import FromInput from "../FormInput/fromInput";
import CustomButton from "../CustomButton/CustomButton";
import {GoogleSignIn, GoogleSignin} from "../../Firebase/Firebase.utils";

class Signin extends React.Component{
   constructor(props) {
       super(props);

       this.state={
           email:'',
           password:''
       }


   }
   handleSubmit=(e)=>{
       e.preventDefault()

       this.setState({email:'',password:''})
   }
   handleChange=(e)=>{
       const{name,value}=e.target;
       this.setState({[name]:value})
   }

   render() {


       return(
           <div className="SignIn">
             <h2>I already Have account</h2>
               <span>Sign in with Email</span>


               <form onSubmit={this.handleSubmit}>
                   <FromInput name="email" type="email" handleChange={this.handleChange}  placeholder="Enter Email" value={this.state.email}/>


                   <FromInput name="password" handleChange={this.handleChange} type="password" placeholder="Enter password" value={this.state.password}/>

                   <CustomButton type="submit">Sign In</CustomButton>
                   <CustomButton type="submit" isGoogleSignIn onClick={GoogleSignin}>Google Sign In</CustomButton>
               </form>
           </div>
       )
   }


}
export default Signin;