import React from 'react';
import {mount} from 'react-mounter';
import App from '../App.jsx';
import {MainLayout} from './layouts/MainLayout.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<App />)
    })
  }
});
