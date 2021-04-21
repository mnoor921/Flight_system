import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'



function Footer() {
    return (
        <div>

            <Container className="mt-5">
                <Row>
                    
                    <Col>
                        <div className="header-label mt-3 mb-0 pb-0">

                            <div className="all-buttons-footer">

                                <div className="" style={{justifyContent:'space-between'}}>
                                    <a href="" className="btn btn-1 pb-0 float-left">Send</a>
                                    <ul className="d-flex left-button float-right">
                                        <li>
                                            <a href="" className="btn btn-1">Reset</a>
                                        </li>
                                        <li>
                                            <a href="" className="btn btn-1">Return</a>
                                        </li>
                                        <li>
                                            <a href="" className="btn btn-1">Exit</a>
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>

                        </div>
                    
                        
                    
                    
                    </Col>
                    
                </Row>
            </Container>

        </div>
    );
}

export default Footer;

