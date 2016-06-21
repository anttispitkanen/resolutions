import React, {Component} from 'react';

export default class About extends Component {

  setVar() {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }

  render() {
    return(
      <div>
        <h1>About this page</h1>
        <p>Some text about this page over here! Some text about this page over here! Some text about this page over here! Some text about this page over here! Some text about this page over here! Some text about this page over here! Some text about this page over here!</p>
        <button onClick={this.setVar}>Sign up</button>
      </div>
    )
  }
}
