import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { PostFrontmatterType } from 'types/PostItem.types'

type PostType = PostFrontmatterType & { link: string }

const ThumbnailImage = styled(GatsbyImage)`
    width: 100%;
    border: none;
    border-radius: 15px;
`

const DEFAULT_IMAGE_SRC = "https://mblogthumb-phinf.pstatic.net/MjAxNzA3MjBfMTcx/MDAxNTAwNTIwOTI2NzA4.9rlGIW3QLZ3AEmW5B0mKhJlUIb8avRx8ORl_Jk1XgnEg.bVnt4MyRes6ID3qWcaX7jEvHCz8oxsVyzaFnCj2KrG0g.JPEG.wizpet1756/%EA%B7%80%EC%97%AC%EC%9A%B4%EC%83%883.jpg?type=w800";

const PostListItem:FunctionComponent<PostType> = function({
    title,
    date,
    categories,
    summary,
    thumbnail: {
        childImageSharp: { gatsbyImageData }
    },
    link
}) {
    
    return (
        <Link to={link} className="post-list-item">
            <div className="post-list-left">
                {/* <img src={DEFAULT_IMAGE_SRC} /> */}
                <ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />
            </div>
            <div className="post-list-right">
                <p className="post-list-title">{title}</p>
                <p className="post-list-date">{date}</p>
                <p className="post-list-summary">{summary}</p>
            </div>
        </Link>
    )
}

export default PostListItem;