import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "../Button";
import history from "../../history";
import Modal from "../Modal";
import { fetchStream, deleteStream } from "../../actions";

class TwitchDelete extends React.Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }

    renderAction(){
        return(
            <React.Fragment>
                <Button buttonColor="red" onClick={()=>this.props.deleteStream(this.props.match.params.id)}>Delete</Button>
                <Link to="/"><Button buttonColor="grey">Cancel</Button></Link>
            </React.Fragment>
        );
    }
    renderContent(){
        if(!this.props.stream){
            return "Are you sure you want to delete this stream?" 
        }
        return  `Are you sure you want to delete stream with title :  ${this.props.stream.title}`
    }

    render(){
        return (
            <Modal 
                 header = "Delete stream"
                 content = {this.renderContent()}
                 footer = {this.renderAction()}
                 onDismiss = {()=>history.push("/")}
            />
        );
    }
};
const mapStateToProps = (state, ownProps) =>{
    return{stream:state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps, {fetchStream, deleteStream})(TwitchDelete);