import { Jumbotron, Button } from 'react-bootstrap';
import React from 'react';

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <Jumbotron>
                <p>&nbsp;&nbsp;Sometimes you see a very good article, some good english words/sentences, or you are newbie to a new industry and want to learn more than just see.
                    But you want someone to help you. This app can be your friend! We can fetch website for you and notify you until you can remember it according to memory line!</p>
                <p><Button bsStyle="primary" href="/feedlist">Try!</Button></p>
            </Jumbotron>
        );
    };
}