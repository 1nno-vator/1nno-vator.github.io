import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.div`
    margin-top: auto;
    padding: 50px 0;
    font-size: 15px;
    text-align: center;
    line-height: 1.5;
`

const Footer:FunctionComponent = function() {
    return (
        // <FooterContainer>
            <div className="footer-container">
                <img src="/static/footer-background.png"/>
            </div>
        // </FooterContainer>
    )
}

export default Footer;