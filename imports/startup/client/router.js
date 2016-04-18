import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ApplicationLayout } from '../../ui/layouts/ApplicationLayout.jsx';
import { FeedListLayout } from '../../ui/layouts/FeedListLayout.jsx';
import KnowledgeList from '../../ui/containers/KnowledgeListContainer.jsx';

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
    mount(ApplicationLayout, {
      content: ()=>(<FeedListLayout />)
    });
  }
});

FlowRouter.route('/knowledge', {
  name: "knowledge.show",
  action: function(params, queryParams) {
    mount(ApplicationLayout, {
      content: ()=>(<KnowledgeList />)
    });
  }
});
