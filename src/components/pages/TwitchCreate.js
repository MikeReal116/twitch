import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import TwitchForm from "./TwitchForm";

class TwitchCreate extends React.Component{

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render(){
        return(
            <div>
               <TwitchForm onSubmit={this.onSubmit} heading="Create new stream"/>
            </div>
        )
    }
    
}


export default connect(null, { createStream })(TwitchCreate);
