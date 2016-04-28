import React from 'react';
import { Knowledge } from './Knowledge.jsx';
import { Grid, Row } from 'react-bootstrap';
import { AddKnowledgeModal } from './AddKnowledgeModal.jsx';

export const KnowledgeList = ({loading, knowledgelist}) => {
    if(loading) {
        return <div>loading...</div>
    }
    let knowledges = knowledgelist.map( function(knowledge) {
      return <Knowledge key={knowledge._id} content={knowledge}/>
    });
    return (
        <div>
            <AddKnowledgeModal />
            <Grid>
                <Row>
                    {knowledges}
                </Row>
            </Grid>
        </div>
    );
}
