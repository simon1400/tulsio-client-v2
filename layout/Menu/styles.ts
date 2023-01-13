import styled from "@emotion/styled";

export const MenuS = styled.div`
  nav{
    padding-top: 0;
    padding-bottom: 0;
    a{
      div{
        margin-top: 10px;
        margin-bottom: 10px;
        span{
          font-size: 1.25em;
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
  top: 60px;
  svg{
    fill: white;
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