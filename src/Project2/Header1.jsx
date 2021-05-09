import React from 'react'
import {  Link } from "react-router-dom";

import { Container, Row, Col } from 'react-bootstrap'



function Header() {
    return (
        <div>

            <Container>
                <Row>
                    {/* <Col className="m-0 p-0">
                        <div className="header-label mt-3 mb-0 pb-0">

                            {/* <div className="project2_button">
                                <ul className="">
                                    <li>
                                        <Link to="/init" className="btn btn-1" >Init ref</Link>
                                    </li>
                                    <li>
                                        <Link to="/Rte1" className="btn btn-1" >rte</Link>
                                    </li>
                                    <li>
                                        <Link to="/CLb" className="btn btn-1">clb</Link>
                                    </li>
                                    <li>
                                        <Link to="/Crz" className="btn btn-1">crz</Link>
                                    </li>
                                    <li>
                                        <Link to="/path" className="btn btn-1">des</Link>
                                    </li>
                                    <li>
                                        <Link to="/ProjectMenu" className="btn btn-1">menu</Link>
                                    </li>
                                    <li>
                                        <Link to="/legs" className="btn btn-1">Legs</Link>
                                    </li>
                                    <li>
                                        <Link to="/DepArr" className="btn btn-1">Dep arr</Link>
                                    </li>
                                    <li>
                                        <Link to="/Hold" className="btn btn-1">hold</Link>
                                    </li>
                                    <li>
                                        <Link to="/Progress" className="btn btn-1">proc</Link>
                                    </li>
                                    <li>
                                        <Link to="/Limits" className="btn btn-1">n1 limit</Link>
                                    </li>
                                    <li>
                                        <Link to="/FixInfo" className="btn btn-1">fix</Link>
                                    </li>
                                    <li>
                                        <Link className="btn btn-1">exec</Link>
                                    </li>
                                </ul>
                            </div> */}

                        {/* </div> */}
                    
                        
                    
                    
                    
                    {/* </Col> */}
               
                </Row>
            </Container>

        </div>
    );
}

export default Header;

