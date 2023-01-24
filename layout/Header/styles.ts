import styled from "@emotion/styled"

export const HeaderWrap = styled.div(({theme}) => `
  padding: 100px 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
  ${[theme.breakpoints.down("md")]} {
    padding: 50px 0;
  }
`)

export const Logo = styled.div(({theme}) => `
  ${[theme.breakpoints.down("md")]} {
    img{
      width: 110px;
      height: 32px;
    }
  }
`)

export const NavWrap = styled.div(({theme}) => `
  display: flex;
  justify-content: flex-end;
  ${[theme.breakpoints.down("md")]} {
    > button{
      margin-right: 0;
      svg{
        font-size: 32px;
      }
    }
  }
`)

export const ControlWrap = styled.div(({theme}) => `
  display: block;
  ${[theme.breakpoints.down("md")]} {
    svg{
      margin-top: 2px!important;
      margin-right: 12px;
    }
  }
  svg{
    font-size: 29px;
    display: block;
    margin-top: -6px;
    fill: rgba(255, 255, 255, 0.75)!important;
    transition: all .2s ease;
    &:hover{
      fill: white;
    }
  }
`)