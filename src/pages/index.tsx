import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Container from 'components/layout/Container';
import { graphql } from 'gatsby';
import PostList from 'components/main/PostList';

import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import 'destyle.css';
import '../css/main.css';
import { PostListItemType } from 'types/PostItem.types';
import Template from 'components/layout/Template';

type IndexPageProps = {
    data: {
      allMarkdownRemark: {
        edges: PostListItemType[]
      }
    }
  }

const PageWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`

const IndexPage: FunctionComponent<IndexPageProps> = function({
    data: {
        allMarkdownRemark: { edges }
    }
}) {
    return (
        <Template>
            <Container posts={edges} />
        </Template>
    )
}

export default IndexPage;

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
              slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
  }
`