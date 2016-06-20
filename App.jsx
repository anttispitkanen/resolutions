import React from 'react';
import {render} from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';

Resolutions = new Mongo.Collection("resolutions");

export default class App extends TrackerReact(React.Component) {


  resolutions() {
    return Resolutions.find().fetch();
  }

  render() {
    let res = this.resolutions();
    if(res.length < 1) {
      return(<div>Loading...</div>)
    }
    console.log(res);
    return(
      <div>
        <h1>My resolutions</h1>
        <ResolutionsForm />
        <ul>
          <ResolutionSingle resolution={res[0]} />
        </ul>
      </div>
    )
  }
}
