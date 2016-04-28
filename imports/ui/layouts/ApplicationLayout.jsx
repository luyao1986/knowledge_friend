import React from 'react';
import { Nav, NavItem, Navbar, Badge } from 'react-bootstrap';
import { KnowledgeList } from '../../api/knowledgelist/knowledgelist.js';
import { createContainer } from 'meteor/react-meteor-data';

const ApplicationLayout = ({content, loading, knowledgelist}) =>
    <div>
        <Navbar inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Home</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="/feedlist">Your Subscribes</NavItem>
                    <NavItem eventKey={2} href="/knowledge">Your Knowldege<Badge>{KnowledgeList.find({reminder:true}).count()}</Badge></NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div>
            {content(loading, knowledgelist)}
        </div>
    </div>

export default createContainer(() => {
    const knowledgelistHandle = Meteor.subscribe('knowledgelist.all');
    const loading = !knowledgelistHandle.ready();

    return {
        loading,
        knowledgelist: KnowledgeList.find().fetch() || [],
    };
}, ApplicationLayout);