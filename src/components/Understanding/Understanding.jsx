import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understanding extends Component {

    state = {
        Understanding: 0,
        // Comments: ''
    }
    // This method puts the Understanding rating into state. 
    // I do think because I need it to display the proper text later on.
    setUnderstanding = (event) => {
        console.log('You are Understanding', Number(event.target.value))
        this.setState({
            ...this.state,
            Understanding: Number(event.target.value)
        });
    }
    // This method sends the Understanding level to the Redux Store.
    addUnderstanding = () => {
        if (this.state.Understanding === 0) {
            alert('Please answer the question before moving on!')
        } else {
            this.props.dispatch({
                type: 'SET_UNDERSTANDING',
                payload: this.state.Understanding
            });
            this.props.history.push('/support')
        }
    }

    // setComments = (event) => {
    //     this.setState({
    //         ...this.state,
    //         Comments: event.target.value
    //     })
    //     console.log(this.state.Comments)
    // }

    render() {
        let displayText = ''
        // This switch statement changes the text on the screen based on which number the user clicks.
        switch (this.state.Understanding) {
            case 1:
                displayText = `In the comments section later, please let us know what you're struggling with the most; be as specific as possible so that we can help!`
                break;
            case 2:
                displayText =  `Which specific topic(s) came up today that you could use more reinforcement on? Please leave your answer in the comments section later.`
                break;
            case 3:
                displayText = `Please take a moment to share your thoughts on which topics are most challenging and any ideas about actions that could boose your understanding.`
                break;
            case 4:
                displayText = `If you'd like to share, we'd love to hear more about what made your understanding succesfull today.`
                break;
            case 5:
                displayText = `Awesome! If you'd like to share, we'd love to hear your thoughts on what made your understanding greatly succesful today.`
                break;
            default:
                displayText = 'Please choose a number'
        }
        return (
            <div className="Understanding">
                <h1>How well do you understand today's material?</h1>
                {/* This is a radio input for numbers 1-5 */}
                <div onChange={this.setUnderstanding}>
                    <input type="radio" value='1' name="Understanding" />1 - What's a computer?<br></br>
                    <input type="radio" value='2' name="Understanding" />2 - I'm struggling to understand<br></br>
                    <input type="radio" value='3' name="Understanding" />3 - I grasp some of the material<br></br>
                    <input type="radio" value='4' name="Understanding" />4 - I think can do the assignment<br></br>
                    <input type="radio" value='5' name="Understanding" />5 - I could teach this<br></br>
                </div>
                <div className="response">{displayText}</div>
                <br></br>
                <button onClick={this.addUnderstanding}>NEXT PAGE</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}


export default connect(putReduxStateOnProps)(Understanding);