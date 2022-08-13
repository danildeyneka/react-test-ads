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
  width: calc((224 + 24) * 6px);
  margin: 0 auto;
  @media (max-width: 1500px) {
    width: calc((224 + 24) * 5px);
  }
  @media (max-width: 1290px) {
    width: calc((224 + 24) * 4px);
  }
  @media (max-width: 1060px) {
    width: calc((224 + 24) * 3px);
  }
  @media (max-width: 800px) {
    width: calc((224 + 24) * 2px);
  }
  @media (max-width: 540px) {
    width: calc((224 + 24) * 1px);
  }
`

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Footer = styled.div`
  color: #00A0AB;
  font-size: 14px;
  font-weight: 500;
  text-align: right;
  margin-right: 24px;
  margin-top: -13px;
  margin-bottom: 150px;
  svg {
    margin-bottom: -6px;
  }
`