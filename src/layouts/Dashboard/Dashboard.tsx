import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

export const Dashboard: React.FC = () => {
  return (
    <Wrapper>
      <h1>Hello, Guest</h1>
    </Wrapper>
  )
}
