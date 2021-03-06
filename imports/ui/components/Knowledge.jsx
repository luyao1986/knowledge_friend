import React from 'react';
import { Col, Thumbnail, Button, ProgressBar } from 'react-bootstrap';
import { setKnowledgeReviewed } from '../../api/knowledgelist/methods.js';
import { Radium } from 'radium';

export class Knowledge extends React.Component {
    constructor(props) {
        super(props);
    };
    setReviewed(knowledge) {
        setKnowledgeReviewed.call(knowledge);
    };
    render() {
        let stage2color = ["#ff0000", "#ff9b00", "#ffff00", "#00ff00", "#0000ff", "#00ffff", "#ff00ff", "#ffffff"];
        let stage2progress = [0, 0, 15, 30, 45, 60, 75, 90, 100];
        const isReminder = this.props.content.reminder;
        const color = isReminder ? stage2color[this.props.content.stage] : "#808080";
        return (
            <Col xs={12} md={6}>
                <Thumbnail responsive>
                    <h3 style={{color: color}}>{this.props.content.title}</h3>
                    <p>{this.props.content.description}</p>
                    <ProgressBar bsStyle="success" now={stage2progress[this.props.content.stage]}></ProgressBar>
                    <p><Button bsStyle="primary" disabled={!isReminder} onClick={this.setReviewed.bind(this, this.props.content)}>Review</Button></p>
                </Thumbnail>
            </Col>
        );
    };
}
