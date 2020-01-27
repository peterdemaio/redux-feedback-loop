import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';


class review extends Component {

    state = {
        boolean: true,
        flagged: false
    }

    submit = () => {
        console.log('trying to post artist with', this.props.reduxState)
        Axios.post('/feedback', this.props.reduxState)
            .then((response) => {
                this.setState({
                    boolean: false
                })

            })
    }
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


    handleCheckboxChange = (event) => {
            this.props.dispatch({
                type: 'FLAGGED',
            })
    }

    render() {
        let displayText

        if (this.state.boolean === true) {
            displayText = (
                <div>
                    <h1>Here are your reponses: </h1>
                    <h3>Feeling: {this.props.reduxState.feeling}</h3>
                    {/* <h5>Comments: {this.props.reduxState.feeling.Comments}</h5> */}
                    <h3>Understanding: {this.props.reduxState.understanding}</h3>
                    {/* <h5>Comments: {this.props.reduxState.understanding.Comments}</h5> */}
                    <h3>Support: {this.props.reduxState.support}</h3>
                    {/* <h5>Comments: {this.props.reduxState.understanding.Comments}</h5> */}
                    <h3>Comments: {this.props.reduxState.comments}</h3>
                    {/* <h3>Additional Comments: {this.props.reduxState.comments.Else}</h3> */}
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