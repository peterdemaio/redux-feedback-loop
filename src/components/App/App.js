import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom'
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Review from '../Review/Review'

class App extends Component {
    render() {
        return (<div className="App" >
            <header className="App-header" >
                <h1 className="App-title" > Feedback! </h1>
                <h4><i> Don't forget it!</i></h4>
                <h5>Prime Digital Academy Weekend Challenge by Peter DeMaio</h5>
            </header>
            <br />
            <Router>
                <Route exact path="/" component={Feeling} />
                <Route path="/understanding" component={Understanding} />
                <Route path="/support" component={Support} />
                <Route path="/comments" component={Comments} />
                <Route path="/Review" component={Review} />
            </Router>
        </div>
        );
    }
}

export default connect()(App);