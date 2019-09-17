import React, {PureComponent} from 'react';
import {CScrollbar} from "@cogent/ui-components";
import {Button} from "react-bootstrap";

class ScrollerComponentTest extends PureComponent {

    scrollToTop = () => {
        this.scrollbarsRef.scrollToTop();
    };

    scrollToBottom = () => {
        this.scrollbarsRef.scrollToBottom();
    };

    render() {
        const scrollContent = (
            <>
                <Button onClick={this.scrollToBottom}>Scroll bottom</Button>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when<br/>
                    <Button onClick={this.scrollToTop}>Scroll top</Button>
                </p>
            </>);
        return (
            <CScrollbar
                _ref={element => {this.scrollbarsRef = element}}
                id="test"
                style={{height: 100}}
                className="abc"
            >
                {scrollContent}
            </CScrollbar>
        );
    }
}

export default ScrollerComponentTest;