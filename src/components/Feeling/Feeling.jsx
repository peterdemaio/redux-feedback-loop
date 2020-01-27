import React, { Component } from 'react'
import { connect } from 'react-redux'


class Feeling extends Component {

    state = {
        Feeling: 0,
    }
    // This method puts the Feeling rating into state. 
    setFeeling = (event) => {
        console.log('You are feeling', (event.target.value))
        this.setState({
            ...this.state,
            Feeling: Number(event.target.value)
        });
    }

    // This method sends the feeling level to the Redux Store.
    addFeeling = () => {
        console.log(this.state)
        if (this.state.Feeling === 0) {
            alert('Please answer the question before moving on!')
        } else {
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: this.state.Feeling
        });
        this.props.history.push('/understanding')
    }
    }

    render() {
        let displayText = ''
        // This switch statement changes the text on the screen based on which number the user clicks.
        switch (this.state.Feeling) {
            case 1:
                displayText = `We take your wellbeing seriously and want to help. Later on in the comments section be sure to share a bit about what's affecting you. We encourage you to connect with Prime staff by checking the box at the review page of this feedback.`
                break;
            case 2:
                displayText = `Would you like to share any thoughts about why your day didn't feel good? We're happy to listen and take suggestions about way to help. Please leave yout comments in the comments section later in this feeback.`
                break;
            case 3:
                displayText = `Is there anything that you'd like us to know about how you're doing? We're happy to help in any way.`
                break;
            case 4:
                displayText = `If you'd like to share, we'd love to hear more about what made your day feel good!`
                break;
            case 5:
                displayText = `Awesome! If you'd like to share, we'd love to hear more about what made your day feel great!`
                break;
            default:
                displayText = 'Please choose a number'
        }
        return (
            <div className="feeling">
                <h1>How are you feeling today?</h1>
                {/* This is a radio input for numbers 1-5 */}
                <div onChange={this.setFeeling}>
                    <input type="radio" value='1' name="feeling" />1 - I feel terrible<br></br>
                    <input type="radio" value='2' name="feeling" />2 - I don't feel well<br></br>
                    <input type="radio" value='3' name="feeling" />3 - I feel just OK<br></br>
                    <input type="radio" value='4' name="feeling" />4 - I feel pretty good<br></br>
                    <input type="radio" value='5' name="feeling" />5 - I feel great!<br></br>
                </div>
                <div className="response">{displayText}</div>
                <br></br>
                <button onClick={this.addFeeling}>NEXT PAGE</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}


export default connect(putReduxStateOnProps)(Feeling);