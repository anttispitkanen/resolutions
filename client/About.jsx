import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class About extends Component {

  setVar() {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }

  render() {
    return(
      <ReactCSSTransitionGroup
            component="div"
            transitionName="route"
            transitionEnterTimeout={600}
            transitionAppearTimeout={600}
            transitionLeaveTimeout={400}
            transitionAppear={true}>
        <h1>About this page</h1>
        <p>Some text about this page over here! Some text about this page over here! Some text about this page over here! Some text about this page over here! Some text about this page over here! Some text about this page over here! Some text about this page over here!</p>
        <button onClick={this.setVar}>Sign up</button>
      </ReactCSSTransitionGroup>
    )
  }
}
