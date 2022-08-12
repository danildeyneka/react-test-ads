import styled from 'styled-components'

export const CardItem = styled.div<{ seen?: boolean }>`
  width: 224px;
  height: 368px;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));
  border-radius: 8px;
  margin-right: 24px;
  margin-bottom: 24px;
  background-color: ${props => props.seen ? '#FFF6A5' : '#FFFFFF'};
  position: relative;

  img {
    width: 224px;
    height: 260px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`

export const HeaderWrapper = styled.div`
  svg {
    position: absolute;
    top: 202px;
    right: 12px;

    :hover path {
      fill: #00A0AB;
    }

    :nth-child(2) {
      top: 166px;
    }
  }

  div {
    position: absolute;
    top: 12px;
    left: 65px;
    width: 94px;
    height: 24px;
    padding-top: 5px;
    text-align: center;
    color: #FFFFFF;
    background-color: rgba(44, 44, 44, 0.74);
    border-radius: 8px;
    font-size: 12px;
  }
`

export const Inner = styled.div`
  width: 200px;
  margin: 0 12px;
  position: relative;
  color: #2C2C2C;

  p {
    margin: 0;
  }

  svg {
    position: absolute;
    top: -2px;
    right: 33px;

    :hover path {
      fill: #00A0AB;
    }

    :nth-child(2) {
      right: 0;
    }
  }
`

export const OldPrice = styled.p`
  color: #5A5A5A;
  font-weight: 400;
  font-size: 14px;
  text-decoration: line-through;
`

export const Price = styled.p`
  font-weight: 700;
  font-size: 22px;
`

export const Title = styled.p`
  font-weight: 500;
  font-size: 14px;
  margin-top: 8px !important;
`

export const Footer = styled.div`
  color: #8F8F8F;
  font-weight: 400;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`


