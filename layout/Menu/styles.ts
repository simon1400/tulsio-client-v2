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
  top: 30px;
  display: flex;
  align-items: center;
  >div:first-of-type{
    margin-top: 0;
    margin-right: 20px;
  }
  svg{
    fill: rgba(255, 255, 255);
  }
  a{
    margin-right: 20px;
  }
  button{
    margin-right: 10px;
  }
`

export const Logo = styled.div(({theme}) => `
  position: absolute;
  top: 25px;
  left: 10px;
  a{
    display: block;
  }
  img{
    width: 110px;
    height: 32px;
  }
`)