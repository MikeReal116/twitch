import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = props =>{
    return ReactDOM.createPortal(
        <div className="modal" onClick={props.onDismiss}>
            <div className="modal-content" onClick = {e=>e.stopPropagation()}>
                <div className="modal-header">
                    <div>{props.header}</div>
                </div>
                <div className="modal-body">
                    <p>{props.content}</p>
                </div>
                <div className="modal-footer">
                    <h3>{props.footer}</h3>
                </div>
            </div>
        </div>, document.getElementById("modal")
    );
};

export default Modal;