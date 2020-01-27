import React, { Component } from 'react';
import { connect } from 'react-redux';


class Support extends Component {

    state = {
        Support: 0,
        // Comments: ''
    }
    // This method puts the Support rating into state. 
    // I do think because I need it to display the proper text later on.
    setSupport = (event) => {
        console.log('You are Support', Number(event.target.value))
        this.setState({
            ...this.state,
            Support: Number(event.target.value)
        });
    }

    // setComments = (event) => {
    //     this.setState({
    //         ...this.state,
    //         Comments: (event.target.value)
    //     })
    //     console.log(this.state.Comments)
    // }
    // This method sends the Support level to the Redux Store.
    addSupport = ()=> {
        if (this.state.Support === 0) {
            alert('Please answer the question before moving on!')
        } else {
        this.props.dispatch({
            type: 'SET_SUPPORT',
            payload: this.state.Support
        });
        this.props.history.push('/comments')
    }
    }

    render() {
        let displayText = ''
        // This switch statement changes the text on the screen based on which number the user clicks.
        switch (this.state.Support) {
            case 1:
                displayText = `We're sorry that Prime staff had an unwelcome effect on your day. Please share more details in the comments section on the next page. We encourage you to connect with Prime staff by checking the box on the next page. We take your concerns seriously.`
                break;
            case 2:
                displayText = `We're sorry that Prime staff had an unwelcome effect on your day. Please share more details in the comments section on the next page. We encourage you to connect with Prime staff by checking the box on the next page. We take your concerns seriously.`
                break;
            case 3:
                displayText = `We'd love to hear any thoughts on how we may have better met your needs during the day!`
                break;
            case 4:
                displayText = `If you'd like to share, we'd like to hear any specific about things that helped you feel supported today.`
                break;
            case 5:
                displayText = `Awesome! If you'd like to share, we'd greatly appreciate any feedback on what helped you feel most supported today.`
                break;
            default:
                displayText = 'Please choose a number'
        }
        return (
            <div className="Support"><h1>How well do you feel supported by prime staff?</h1>
                {/* This is a radio input for numbers 1-5 */}
                <div onChange={this.setSupport}>
                    <input type="radio" value='1' name="Support" />1 - I feel like I can't talk to anyone<br></br>
                    <input type="radio" value='2' name="Support" />2 - I need more support<br></br>
                    <input type="radio" value='3' name="Support" />3 - I feel a little supported<br></br>
                    <input type="radio" value='4' name="Support" />4 - I feel well supported<br></br>
                    <input type="radio" value='5' name="Support" />5 - Prime Staff have gone above and beyond<br></br>
                </div>
                <div className="response"> {displayText}</div>
                <br></br>
                <button onClick={this.addSupport}>NEXT PAGE</button>
            </div>  
        )
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}


export default connect(putReduxStateOnProps)(Support);