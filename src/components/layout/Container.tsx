import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PostList from 'components/main/PostList';
import { PostListItemType } from 'types/PostItem.types';

type ContainerType = {
    posts: PostListItemType[]
}

const ContainerWrapper = styled.div`
    padding: 25px;
`
const Container:FunctionComponent<ContainerType> = function ({
    posts
}) {
    return (
        <ContainerWrapper>
            <PostList posts={posts} />
        </ContainerWrapper>
    )
}

export default Container;