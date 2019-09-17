import React, {PureComponent} from 'react';
import {CButton, CModal} from "@cogent/ui-components";

class ModalTestComponent extends PureComponent {

    state = {
        showModal: false
    };

    setShowModal = () => {
        this.setState({showModal: !this.state.showModal});
    };

    render() {
        let footerChildren = <CButton id="test-button" name="Footer Test button"/>;
        let body =
            <>
                <h1>This is Modal body</h1><CButton id="body-button" name="Body button"/>
            </>;
        return (
            <>
                <CButton id="modal" name="Open Modal" onClickHandler={this.setShowModal}/>
                <CModal show={this.state.showModal}
                        modalHeading="Test Modal Header"
                        size="md"
                        bodyChildren={body}
                        footerChildren={footerChildren}
                        onHide={this.setShowModal}
                />
            </>
        );
    }
}

export default ModalTestComponent;