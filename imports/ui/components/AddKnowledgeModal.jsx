import React from 'react';
import { Button, Modal, FormGroup, Label } from 'react-bootstrap';
import { insertKnowledge } from '../../api/knowledgelist/methods.js';

export class AddKnowledgeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // define this.state in constructor
            showModal: false
        }
    };
    addKnowledge(e) {
        e.preventDefault();
        let title = this.refs.title.value;
        let description = this.refs.description.value;
        let knowledge = {title, description, url:"http://test.com"};
        console.log("insert new knowledge: ", knowledge);
        insertKnowledge.call(knowledge);
        this.refs.title.value = "";
        this.refs.description.value = "";
    };
    render() {
        return (
            <div>
                <Button bsStyle="primary" onClick={()=>this.setState({ showModal: true })}> Add Knowledge </Button>
                <Modal show={this.state.showModal} onHide={()=>this.setState({ showModal: false })} bsSize="large">
                    <Modal.Header closeButton>
                        <Modal.Title>Add Knowledge</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.addKnowledge.bind(this)}>
                            <FormGroup>
                                <Label>Title</Label>
                                <input type="text" placeholder="Enter title" ref="title"/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Description</Label>
                                <input type="text" placeholder="Enter description" ref="description"/>
                            </FormGroup>
                            <Button type="submit">Add</Button>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>this.setState({ showModal: false })}>Cancel</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    };
}
