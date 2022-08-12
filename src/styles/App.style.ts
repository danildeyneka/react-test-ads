import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: #2C2C2C;
  margin-left: 32px;
  margin-top: 25px;
  margin-bottom: 8px;
`

export const Wrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    width: 1000px;
  }
`

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`