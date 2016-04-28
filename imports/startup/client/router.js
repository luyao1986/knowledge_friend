import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';
import ApplicationLayout from '../../ui/layouts/ApplicationLayout.jsx';
import { SubscribesPage } from '../../ui/pages/SubscribesPage.jsx';
import { HomePage } from '../../ui/components/HomePage.jsx';
import { KnowledgeList } from '../../ui/components/KnowledgeList.jsx';

FlowRouter.route('/', {
  name: "home.page",
  triggersEnter: [function(context, redirect) {
    console.log("enter /");
  }],
  action: function(params, queryParams) {
    mount(ApplicationLayout, {
      content: (loading, knowledgelist)=>(<HomePage />)
    });
  },
  triggersExit: [function(context, redirect) {
    console.log("leave /");
  }],
});

FlowRouter.route('/feedlist', {
  name: "feedlist.show",
  action: function(params, queryParams) {
    mount(ApplicationLayout, {
      content: (loading, knowledgelist)=>(<SubscribesPage />)
    });
  }
});

FlowRouter.route('/knowledge', {
  name: "knowledge.show",
  action: function(params, queryParams) {
    mount(ApplicationLayout, {
      content: (loading, knowledgelist)=>(<KnowledgeList loading={loading} knowledgelist={knowledgelist} />)
    });
  }
});
