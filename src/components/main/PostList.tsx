import React, { FunctionComponent } from 'react';
import PostListItem from './PostListItem';
import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { PostListItemType } from 'types/PostItem.types'


const PostListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5px;
`

// 기존에 정의했던 PostListItemType 삭제

type PostListType = {
  posts: PostListItemType[]
}

const PostList:FunctionComponent<PostListType> = function({
  posts  
}) {
    console.log(posts);
    return (
        <PostListWrapper>
            {
                posts.map((v,i) => {
                    return <PostListItem 
                            title={v.node.frontmatter.title} 
                            date={v.node.frontmatter.date} 
                            categories={[]} 
                            summary={v.node.frontmatter.summary} 
                            thumbnail={
                                {
                                    childImageSharp: {
                                        gatsbyImageData: v.node.frontmatter.thumbnail.childImageSharp.gatsbyImageData
                                    }
                                }
                            } 
                            key={v.node.id} 
                            link={v.node.fields.slug} />
                })
            }
        </PostListWrapper>
    )
}

export default PostList;