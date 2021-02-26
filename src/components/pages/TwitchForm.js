import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "../Button";
import "./TwitchForm.css";


class TwitchForm extends React.Component{
    renderError({error, touched}){
        if(touched&&error){
            return(
                <div >
                    <p className="form__error">{error}</p>
                </div>
            )
        }
    }

    renderInput = ({input, label, meta}) =>{
        return(
            <div className="form__content">
                <div>
                    <label className="form__label">{label}</label>
                </div>
                <input {...input} className="form__input" autoComplete="Off" />
                {this.renderError(meta)}
            </div>
        )
    }
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render(){
        return(
            <div className ="create__container">
                <h2 className="create__header">{this.props.heading}</h2>
                <form onSubmit ={this.props.handleSubmit(this.onSubmit)} className="form">
                    <Field name="title" component={this.renderInput} label="Enter title"/>
                    <Field name="description" component={this.renderInput} label ="Enter description" />
                    <Button buttonColor="blue">Submit</Button>
                </form>
            </div>
        )
    }
    
}
const validate = formValues =>{
    const errors ={};
    if(!formValues.title){
        errors.title = "You must enter a title";
    }
    if(!formValues.description){
        errors.description = "You must enter a description";
    }
    return errors;
}
export default reduxForm({form:"streamCreate", validate})(TwitchForm);


