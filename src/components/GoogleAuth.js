import React from "react";
import { connect } from "react-redux"
import { FaGoogle } from "react-icons/fa" 
import { Button } from "./Button";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId:"532026270586-rafck0hqqp56pb99v2hnuff51i8ht5r0.apps.googleusercontent.com",
                scope:"email"
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    };
    onAuthChange = (isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }
    onSignInBtn = () =>{
        this.auth.signIn();
    }
    onSignOutBtn = () =>{
        this.auth.signOut();
    }

    renderAuthBtn(){
        if(this.props.isSignedIn ===null){
            return null
        }else if(this.props.isSignedIn){
            return(
                <div>
                    <Button onClick ={this.onSignOutBtn}>
                        {<FaGoogle /> }
                        <span></span> Sign Out
                    </Button>
                </div>
            )
        }else{
            return (
                <div>
                    <Button onClick={this.onSignInBtn}>
                        <FaGoogle />  
                        <span></span> Sign In With Google
                    </Button>
                </div>
            )
        }
    }

    render(){
        return <div>{this.renderAuthBtn()}</div>
    }

}
const mapStateToProps = (state) =>{
    return{isSignedIn:state.auth.isSignedIn}
}
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);