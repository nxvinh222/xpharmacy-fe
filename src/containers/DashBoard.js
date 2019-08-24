import React, { Component } from 'react';
import { Nav, Row, Tab, Col } from 'react-bootstrap';
import Add from '../components/Add';
import Delete from '../components/Delete'
import Update from '../components/Update';

class DashBoard extends Component {
    render() {
        return (
            <div className="container">
                <h1>Dashboard</h1>
                <div className="Dashboard">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                <Nav.Link eventKey="first">Add Product</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second">Delete Product</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Add/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Delete onSearchChanged={this.props.onSearchChanged} searchString={this.props.state.searchString} products={this.props.state.products}/>
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
        );
    }
}

export default DashBoard;