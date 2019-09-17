import React from 'react';
import './App.css';

import InputGroup from "react-bootstrap/InputGroup";
import {Container, Row, Col, Form, Card, Button, FormControl} from "react-bootstrap";
import {
    CButton, CDropdown, CInputGroup,
    CToggle, CCheckbox, CBreadcrumb, CTabs, CSelect, CCol
} from "@cogent/ui-components";
import {HashRouter} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import ModalTestComponent from "./ModalTestComponent";
import ScrollerComponentTest from "./ScrollerComponentTest";

const dataForBreadCrumb = [
    {
        id: '1',
        name: 'Home',
        icon: "",
        path: '/home',
        isLink: true
    },
    {
        id: '2',
        name: 'General Setup',
        icon: "",
        path: '/generalSetup',
        isLink: false
    },
    {
        id: "3",
        name: "AdminSetup",
        icon: "",
        path: "/generalSetup/adminSetup",
        isLink: true
    },
    {
        id: "4",
        name: "Add",
        icon: "",
        path: "/generalSetup/adminSetup/add",
        isLink: true
    },
    {
        id: "5",
        name: "Form",
        icon: "",
        path: "/generalSetup/adminSetup/add/form",
        isLink: true
    },
];

const tabData = [
    {
        id: "1",
        name: "Add",
        icon: "fa fa-plus-circle",
        component: "",
        eventKey: "/generalSetup/adminSetup/add"
    },
    {
        id: "2",
        name: "Manage",
        icon: "fa fa-clipboard",
        component: "",
        eventKey: "/generalSetup/adminSetup/manage"
    },
    {
        id: "3",
        name: "Contact",
        icon: "fa fa-phone",
        component: '',
        eventKey: "/generalSetup/adminSetup/contact"
    }];

const optionsArr = [
    {value: 1, label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'},
];

function App() {
    return (
        <div className="App">
            <header className="mb-4 text-center">.
                <img src="cog-logo.png" className="logo " alt="logo"/>
                <h1>
                    React Components Library
                </h1>
                <div className="search-box">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search Components"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="primary "><i className="fa fa-search"></i>&nbsp;Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>

            </header>
            <hr></hr>

            <Container fluid="true">

                <Row className="mb-4 ">
                    <Col sm={12} md={6} lg={4} className="mb-4">

                        <Card className="card-component">
                            <Card.Title><h5 className="pull-left">Bread Crumb</h5>
                                <a href="#" className="pull-right"><i className="fa fa-file-code-o"></i>&nbsp;View
                                    Source
                                    code</a>
                            </Card.Title>

                            <Card.Body>
                                <HashRouter>
                                    <CBreadcrumb breadcrumbData={dataForBreadCrumb}/>
                                </HashRouter>

                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={6} lg={4} className="mb-4">
                        <Card className="card-component">
                            <Card.Title><h5 className="pull-left">Tabs</h5>
                                <a href="#" className="pull-right"><i className="fa fa-file-code-o"></i>&nbsp;View
                                    Source
                                    code</a>
                            </Card.Title>
                            <Card.Body>
                                <HashRouter>
                                    <CTabs data={tabData}/>
                                </HashRouter>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                </p>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={6} lg={4} className="mb-4">
                        <Card className="card-component">
                            <Card.Title><h5 className="pull-left">Button</h5>
                                <a href="#" className="pull-right"><i className="fa fa-file-code-o"></i>&nbsp;View
                                    Source
                                    code</a>
                            </Card.Title>
                            <Card.Body>
                                <CButton id="save" name="Kaushal"/>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                </p>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={6} lg={4} className="mb-4">
                        <Card className="card-component">
                            <Card.Title><h5 className="pull-left">Drop Down</h5>
                                <a href="#" className="pull-right"><i className="fa fa-file-code-o"></i>&nbsp;View
                                    Source
                                    code</a>
                            </Card.Title>
                            <Card.Body>
                                <CDropdown/>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                </p>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={6} lg={4} className="mb-4">
                        <Card className="card-component">
                            <Card.Title><h5 className="pull-left">Input gp</h5>
                                <a href="#" className="pull-right"><i className="fa fa-file-code-o"></i>&nbsp;View
                                    Source
                                    code</a>
                            </Card.Title>
                            <Card.Body>
                                <CInputGroup
                                    prepend={
                                        [<InputGroup.Text key="basic-addOn1" id="basic-addOn1">
                                            Mr.
                                        </InputGroup.Text>]
                                    }
                                    append={
                                        [<InputGroup.Text key="basic-addOn2" id="basic-addOn2">
                                            @example.com
                                        </InputGroup.Text>]
                                    }
                                />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                </p>

                            </Card.Body>
                        </Card>
                    </Col>


                    <Col sm={12} md={6} lg={4} className="mb-4">
                        <Card className="card-component">
                            <Card.Title><h5 className="pull-left">Toogle Button</h5>
                                <a href="#" className="pull-right"><i className="fa fa-file-code-o"></i>&nbsp;View
                                    Source
                                    code</a>
                            </Card.Title>
                            <Card.Body>
                                <CToggle onLabel="On"
                                         offLabel="Off"
                                         onChange={() => {
                                             console.log('Clicked')
                                         }}/>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                </p>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={6} lg={4} className="mb-4">
                        <Card className="card-component">
                            <Card.Title><h5 className="pull-left">Checkbox</h5>
                                <a href="#" className="pull-right"><i className="fa fa-file-code-o"></i>&nbsp;View
                                    Source
                                    code</a>
                            </Card.Title>
                            <Card.Body>
                                <CCheckbox
                                    id="checkbox"
                                    label="Sabu"
                                    type="checkbox"
                                    onChange={(e) => console.log(e)}
                                    title="Shakya"
                                    inline={true}
                                    custom={true}
                                    feedback="This is feedback"
                                    // isInvalid={true}
                                    // isValid={true}
                                    bsPrefix="form-check"
                                />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                </p>

                            </Card.Body>
                        </Card>
                    </Col>

                    <CCol id="radioCol" sm={12} md={6} lg={4} className="mb-4">
                        <Card className="card-component">
                            <Card.Title><h5 className="pull-left">Radio Button</h5>
                                <a href="#" className="pull-right"><i className="fa fa-file-code-o"></i>&nbsp;View
                                    Source
                                    code</a>
                            </Card.Title>
                            <Card.Body>
                                <CCheckbox id="radio1"
                                           label="Radio1"
                                           type="radio"
                                           onChange={(e) => console.log(e)}
                                           title="radio1"
                                           inline={true}
                                           custom={true}
                                    // feedback="This is feedback"
                                    // isInvalid={true}
                                           isValid={true}
                                           bsPrefix="form-check"
                                />
                                <CCheckbox id="radio2"
                                           label="Radio2"
                                           type="radio"
                                           onChange={(e) => console.log(e)}
                                           title="radio2"
                                           inline={true}
                                           custom={true}
                                    // feedback="This is feedback"
                                           isInvalid={true}
                                    // isValid={true}
                                           bsPrefix="form-check"
                                />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                </p>

                            </Card.Body>
                        </Card>
                    </CCol>

                    <Col sm={12} md={6} lg={4} className="mb-4">
                        <Card className="card-component">
                            <Card.Title><h5 className="pull-left">DropDown with user input</h5>
                                <a href="#" className="pull-right"><i className="fa fa-file-code-o"></i>&nbsp;View
                                    Source
                                    code</a>
                            </Card.Title>
                            <Card.Body>
                                <CSelect
                                    options={optionsArr}
                                    onChange={(e) => console.log(e)}
                                    className="select-input"
                                    classNamePrefix="select-input-pre"
                                />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                </p>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={6} lg={4} className="mb-4">
                        <Card className="card-component">
                            <Card.Title><h5 className="pull-left">Modal</h5>
                                <a href="#" className="pull-right"><i className="fa fa-file-code-o"></i>&nbsp;View
                                    Source
                                    code</a>
                            </Card.Title>
                            <Card.Body>
                                <ModalTestComponent/>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                </p>

                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={12} md={6} lg={4} className="mb-4">
                        <Card className="card-component">
                            <Card.Title><h5 className="pull-left">Scrollbar</h5>
                                <a href="#" className="pull-right"><i className="fa fa-file-code-o"/>&nbsp;View
                                    Source
                                    code</a>
                            </Card.Title>
                            <Card.Body>
                                <ScrollerComponentTest/>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </Container>

        </div>
    );
}

export default App;
