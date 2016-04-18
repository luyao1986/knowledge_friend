import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

FlowRouter.route('/', {
  name: "home.page",
  triggersEnter: [function(context, redirect) {
    console.log("redirect to /feedlist");
    redirect('/feedlist');
  }],
  action: function(params, queryParams) {
    throw new Error("this should not get called");
  },
  triggersExit: [function(context, redirect) {
    console.log("leave /");
  }],
});

FlowRouter.route('/feedlist', {
  name: "feedlist.show",
  action: function(params, queryParams) {
    console.log("in feedlist page");
  }
});
