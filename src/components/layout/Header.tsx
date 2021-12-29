import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.div`
    width: 100vw;
`
const HeaderContents = styled.div`
    width: 80%;
    heigh: 100%;
    margin: 0 auto;
    padding: 25px;
`


const Header:FunctionComponent = function() {
    return (
        <HeaderContainer>
            <HeaderContents>
                <p className="header-blog-title">헤더입니다.</p>
                <p className="header-blog-subtitle">어쩔</p>
            </HeaderContents>
        </HeaderContainer>
    )
}

export default Header