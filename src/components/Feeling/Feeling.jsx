import React, { Component } from 'react';
import { Hashrouter as Router, Route, Link } from 'react-router';
import './Feeling.css'
import { connect } from 'react-redux';


class Feeling extends Component {

    state = {
        Feeling: 0
    }
    // This method puts the Feeling rating into state. 
    // I do think because I need it to display the proper text later on.
    setFeeling = (event) => {
        console.log('You are feeling', Number(event.target.value))
        this.setState({
            Feeling: Number(event.target.value)
        });
        // console.log(this.state)
        // this.props.dispatch({
        //     type: 'SET_FEELING',
        //     payload: Number(event.target.value)
        // })
    }
    // This method sends the feeling level to the Redux Store.
    addFeeling = ()=> {
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: this.state.Feeling
        });
        this.props.history.push('/understanding')
    }

    render() {
        let displayText = ''
        // This switch statement changes the text on the screen based on which number the user clicks.
        switch (this.state.Feeling) {
            case 1:
            displayText =  (<p>Cheeseburger rubber cheese fromage frais. Jarlsberg emmental babybel boursin edam stinking bishop swiss cheese slices. Cheddar red leicester boursin fromage frais gouda red leicester fromage frais cheesecake. Fromage stinking bishop bavarian bergkase.</p>);
            break;
            case 2:
            displayText =  (<p>Rubber cheese manchego hard cheese. Stilton rubber cheese cheesy feet cow camembert de normandie danish fontina cheese slices port-salut. Melted cheese pepper jack camembert de normandie croque monsieur emmental cut the cheese chalk and cheese cheese triangles. Ricotta cheese triangles bocconcini cottage cheese.</p>);
            break;
            case 3:
            displayText =  (<p>Cottage cheese chalk and cheese mascarpone. Cow edam fondue boursin cauliflower cheese boursin squirty cheese the big cheese. Macaroni cheese cream cheese mozzarella fromage frais stilton mascarpone say cheese jarlsberg. Dolcelatte taleggio jarlsberg fromage frais.</p>);
            break;
            case 4:
            displayText =  (<p>Cow cheese triangles melted cheese. Cheesecake bavarian bergkase cauliflower cheese bavarian bergkase pecorino red leicester fromage swiss. Mascarpone cheesy feet fromage frais jarlsberg danish fontina manchego halloumi ricotta. Fromage everyone loves camembert de normandie st. agur blue cheese st. agur blue cheese.</p>);
            break;
            case 5:
            displayText =  (<p>Monterey jack squirty cheese fondue. Jarlsberg st. agur blue cheese airedale cream cheese monterey jack gouda everyone loves cheese slices. Pepper jack cheesy feet who moved my cheese monterey jack cheeseburger edam cut the cheese parmesan. Fromage port-salut stilton the big cheese parmesan bocconcini cream cheese cheesecake. Pepper jack.</p>);
            break;
            default:
                displayText = (<p>Please choose a number</p>)



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
                <div className="response">
                {displayText}
                </div>
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