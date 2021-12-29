import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import Footer from './Footer'
import Header from './Header'

type TemplateProps = {
  children: ReactNode
}

const PageWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`

const Template: FunctionComponent<TemplateProps> = function ({ children }) {
  return (
    <PageWrapper>
      <Header />
        {children}
      <Footer />
    </PageWrapper>
  )
}

export default Template