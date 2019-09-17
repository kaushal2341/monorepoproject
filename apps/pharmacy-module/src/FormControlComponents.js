import React, {PureComponent} from 'react';
import {CButton, CCol, CFControl, CFeedback, CFLabel, CFormGroup, CFRow, CRow, CToggle} from "@cogent/ui-components";
import Col from "react-bootstrap/Col";


class FormControlComponents extends PureComponent {
    state = {
        email: ''
    };

    render() {
        const options = (
            <>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </>);
        return (
            <>
                <CRow id="email">
                    <CCol id="emailLabel" xl={6}>
                        <CFormGroup
                            id="email">
                            <CFLabel
                                id="name"
                                labelName="Email"
                            />
                            <CFControl
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                size="lg"
                                required={true}
                                onChange={(e) => console.log(e.target.value)}
                            />
                            <CFeedback id="email" message="Email looks good."/>
                            <CFeedback id="email" message="Email looks bad." type="invalid"/>
                        </CFormGroup>
                        <CFormGroup>
                        </CFormGroup>

                    </CCol>

                </CRow>

                <CRow id="number">
                    <CCol id="numberCol" xl={6}>
                        <CFormGroup
                            id="number">
                            <CFLabel
                                id="number"
                                labelName="Number"
                            />
                            <CFControl
                                id="number"
                                type="number"
                                name="number"
                                placeholder="Enter your number"
                                size="lg"
                                required={true}
                                min={1}
                                max={99}
                                onChange={(e) => console.log(e.target.value)}
                            />
                            <CFeedback id="email" message="Number looks good."/>
                            <CFeedback id="email" message="Number looks bad." type="invalid"/>
                        </CFormGroup>
                        <CFormGroup>
                        </CFormGroup>

                    </CCol>

                </CRow>


                <CFRow id="passwordRow">
                    <CCol id="passLabel" md={6}>
                        <CFormGroup id="password">
                            <CFLabel
                                id="password"
                                labelName="Password"
                            />
                            <CFControl
                                id="password"
                                type="password"
                                placeholder="Your password here."
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                size="lg"
                                autoComplete="off" />
                            <CFeedback id="password" message="Must contain at least one number and one
                            uppercase and lowercase letter, and at least 8 or more characters." type="invalid"/>
                        </CFormGroup>
                    </CCol>
                </CFRow>
                <CFormGroup id="select" as={Col}>
                    <CFLabel
                        id="dept"
                        labelName="Department"
                    />
                    <CFControl
                        id="department"
                        as="select"
                        children={options}
                    />
                </CFormGroup>
                <CRow id="textArea">
                    <CCol id="labelOfText" xs={4}>
                        <CFLabel
                            id="textarea"
                            labelName="Description"
                        />
                    </CCol>
                    <CCol id="textAreaCol" xs={8}>
                        <CFControl
                            id="text"
                            as="textarea"
                            rows="2"
                        />
                    </CCol>
                </CRow>

                <CRow id="plainText">
                    <CFormGroup id="plaintextGroup" as={Col}>
                        <CFLabel
                            id="plainText"
                            labelName="Plain Text"
                        />
                        <CFControl plaintext readOnly defaultValue="I am a plain text"/>
                    </CFormGroup>
                </CRow>

                <CRow id="name">
                    <CCol id="nameCol" xl={6}>
                        <CFormGroup
                            id="name">
                            <CFLabel
                                id="textInput"
                                labelName="Name"
                            />
                            <CFControl
                                id="name"
                                type="text"
                                placeholder="Name goes here"
                            />
                        </CFormGroup>
                    </CCol>
                </CRow>
                <CRow id="buttons">
                    <CCol id="Submit" md={4}>
                        <CButton id="c-button-2" type="submit" name="Submit"/>
                    </CCol>
                    <CCol id="Bijay" md={4}>
                        <CButton id="c-button-1" name="Bijay"/>
                    </CCol>
                    <CCol id="toggle" md={4}>
                        <CToggle id="c-toggle-1" onLabel="On" offLabel="Off"
                                 onChange={() => console.log('Hello World')}/>
                    </CCol>
                </CRow>
            </>
        );
    }
}

export default FormControlComponents;