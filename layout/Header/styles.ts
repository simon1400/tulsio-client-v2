import styled from "@emotion/styled"

export const HeaderWrap = styled.div(({theme}) => `
  padding: 100px 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
  ${[theme.breakpoints.down("xxl")]} {
    padding: 50px 0;
  }
  ${[theme.breakpoints.down("xl")]} {
    padding: 40px 0;
  }
  ${[theme.breakpoints.down("lg")]} {
    padding: 30px 0;
  }
  ${[theme.breakpoints.down("md")]} {
    padding: 20px 0;
  }
  /* ${[theme.breakpoints.down("sm")]} {
    padding: 10px 0;
  } */
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
  margin-top: 10px;
  ${[theme.breakpoints.down("md")]} {
    margin-top: 0px;
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
      margin-right: 20px;
    }
  }
  svg{
    display: block;
    margin-top: -6px;
    fill: rgba(255, 255, 255)!important;
    transition: all .2s ease;
    &:hover{
      fill: white;
    }
  }
`)