import React from 'react';
import {mount} from 'react-mounter';
import ResolutionsWrapper from './resolutions/ResolutionsWrapper.jsx';
import {MainLayout} from './layouts/MainLayout.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<ResolutionsWrapper />)
    })
  }
});
