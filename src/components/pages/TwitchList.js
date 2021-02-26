import React from "react";
import { connect }from "react-redux";
import { IconContext } from "react-icons";
import { FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";
import { Button } from "../Button"; 
import "./TwitchList.css";

class TwitchList extends React.Component{

    componentDidMount(){
        this.props.fetchStreams();
    }

    renderCreate(){
        if(this.props.isSignedIn){
            return(
                <div>
                    <Link to ="/twitch/new"><Button buttonColor="blue">Create Stream</Button></Link>
                </div>
            );
        }
    }

    renderEditBtn(stream){
        if(stream.userId === this.props.currentUserId){
            return(
                <div>
                    <Link to={`/twitch/edit/${stream.id}`}><Button buttonColor ="blue">Edit</Button></Link>
                    <Link to={`/twitch/delete/${stream.id}`}><Button buttonColor="red">Delete</Button></Link>
                </div>
            );
        }
    }

    renderList(){
        return this.props.streams.map(stream =>{
            return(
                <div key={stream.id} className="list__content">
                    <IconContext.Provider value={{ className: 'react-icons' }}>
                        <div className="list__content-icon"><FiCamera /></div>
                    </IconContext.Provider>
                    <div className="list__content__detail">
                        <div>
                            <h3 className="list__content__detail-heading">{stream.title}</h3>
                            <p className="list__content__detail-description">{stream.description}</p>
                        </div>
                        <div>
                            {this.renderEditBtn(stream)}
                        </div>
                    </div>
                </div>
            )
        });
    }

    render(){
        return (
                <div className="list__container">
                    <h2 className="list__header">Streams</h2>
                    {this.renderList()}
                    <div className="create__stream">{this.renderCreate()}</div>
                </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{streams: Object.values(state.streams), currentUserId: state.auth.userId, isSignedIn: state.auth.isSignedIn};
}

export default connect(mapStateToProps, { fetchStreams })(TwitchList);