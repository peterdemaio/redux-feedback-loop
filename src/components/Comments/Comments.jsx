import React, { Component } from 'react';
import { connect } from 'react-redux';


class Comments extends Component {

    state = {
        Comments: '',
    }
    // This method puts the comments into state. 
    setComments = (event, keyName) => {
        console.log('You are Comments', (event.target.value))
        this.setState({
            [keyName]: event.target.value
        });
    }
    // This method sends the Comments to the Redux Store.
    // Comments are optional so there is no alert here.
    addComments = () => {
        this.props.dispatch({
            type: 'SET_COMMENTS',
            payload: this.state.Comments
        });
        this.props.history.push('/review')
    }

    render() {
        return (
            <div>
                <h1> If you have any additional comments please share them below.</h1>
                <view>
                    <textarea className="response"  value={this.state.Comments} onChange={(event) => this.setComments(event, 'Comments')}></textarea>
                </view>
               <br></br>
               <button onClick={this.addComments}>NEXT PAGE</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(putReduxStateOnProps)(Comments);