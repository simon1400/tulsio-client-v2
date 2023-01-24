import styled from "@emotion/styled";

export const MenuS = styled.div`
  nav{
    padding-top: 0;
    padding-bottom: 30px;
    a{
      text-align: right;
      padding: 0 30px;
      div{
        margin-top: 10px;
        margin-bottom: 10px;
        span{
          font-size: 20px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.25;
        }
      }
    }
  }
`

export const CloseMenuS = styled.div`
  position: absolute;
  right: 10px;
  top: 65px;
  svg{
    fill: rgba(255, 255, 255, 0.75);;
    &:first-of-type {
      margin-right: 20px;
    }
  }
`

export const Logo = styled.div`
  position: absolute;
  top: 60px;
  left: 10px;
  a{
    display: block;
  }
  img{
    width: 110px;
    height: 32px;
  }
`