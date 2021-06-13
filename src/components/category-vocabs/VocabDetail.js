import React from "react";
import { ListGroup, ListGroupItem, Col, Row } from "shards-react";
import ReactPlayer from 'react-player';

import { Store } from "../../flux";
import VocabWordPerkataan from "./VocabWordPerkataan";

const VocabDetail = ({vocab}) => {
    const vocabImgSrc = Store.getSignImgSrc(vocab.perkataan);

    return (
        <ListGroup flush className="py-2">    
            <ListGroupItem className="p-0">
                <Row className="selected-vocab-title">
                    <Col>
                        <VocabWordPerkataan word={vocab.word} perkataan={vocab.perkataan} />
                    </Col>
                </Row>
                <Row>        
                    <Col lg="12" md="12" sm="12">
                        <div className="selected-vocab-image-wrapper">
                            <img src={vocabImgSrc} alt={vocab.word} className="selected-vocab-image" />
                        </div>
                    </Col>                                
                    <Col lg="12" md="12" sm="12" >
                        <div>
                            {vocab.video === undefined ? 
                                // if there is no video url
                                <div className="selected-vocab-image-wrapper">     
                                    <img src={require(`../../images/general/video-coming-soon.jpg`)} alt={vocab.word}className="selected-vocab-image" />
                                </div> :
                                <div className="selected-vocab-video-wrapper">
                                    <ReactPlayer url={vocab.video} playing={true} controls={true} loop={true} width="100%"/>
                                </div>
                            }
                        </div>
                    </Col>                    
                </Row>
            </ListGroupItem>
        </ListGroup>
    );
}

export default VocabDetail;
