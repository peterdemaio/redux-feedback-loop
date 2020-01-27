import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';


class review extends Component {

    state = {
        boolean: true,
        flagged: false
    }
    // This is the axios route to send it to the server.
    submit = () => {
        console.log('trying to post artist with', this.props.reduxState)
        Axios.post('/feedback', this.props.reduxState)
            .then((response) => {
                this.setState({
                    boolean: false
                })

            })
    }
    // This function resets all the reducers and sends the user to the homescreen.
    newFeedback = () => {
        this.props.dispatch({
            type: 'RESET_FEELING'
        });
        this.props.dispatch({
            type: 'RESET_UNDERSTANDING',
        });
        this.props.dispatch({
            type: 'RESET_SUPPORT',
        });
        this.props.dispatch({
            type: 'RESET_COMMENTS',
        });
        this.props.dispatch({
            type: 'RESET_FLAGGED'
        })
        this.props.history.push('/')
    }

    // This function changes the flagged reducer upon checking and unchecking.
    handleCheckboxChange = (event) => {
            this.props.dispatch({
                type: 'FLAGGED',
            })
    }

    render() {
        let displayText
        // This page lets the user review their answers before submission, 
        // then gives confirmation and a button to return to the homescreen.
        if (this.state.boolean === true) {
            displayText = (
                <div>
                    <h1>Here are your reponses: </h1>
                    <h3>Feeling: {this.props.reduxState.feeling}</h3>
                    <h3>Understanding: {this.props.reduxState.understanding}</h3>
                    <h3>Support: {this.props.reduxState.support}</h3>
                    <h3>Comments: {this.props.reduxState.comments}</h3>
                    <input type="checkbox" onChange={this.handleCheckboxChange} /> <div>I'd like someone from Prime support staff to talk with me.</div>
                    <br></br>
                    <button onClick={this.submit}>SUBMIT</button>
                </div>
            )
        } else {
            displayText = (
                <div>
                    <h1>Thank you for your feedback!</h1>
                    <button onClick={this.newFeedback}>Leave New Feedback</button>
                </div>
            )
        }
        return (
            <div>{displayText}</div>
        );
    }
}


const getRedux = (reduxState) => {
    return {
        reduxState
    }
}


export default connect(getRedux)(review);