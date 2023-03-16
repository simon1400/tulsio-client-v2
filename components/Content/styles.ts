import styled from "@emotion/styled";

export const ContentS = styled.div<{removePadding: boolean; smallPadding: boolean}>(({theme, removePadding, smallPadding}) => `
  color: rgba(255, 255, 255, .85);
  padding: ${removePadding ? '0' : smallPadding ? '50px 0 100px' : '100px 0'};
  figure {
    display: block;
    margin: 0;
    overflow: hidden;
    border-radius: ${theme.borderRadius['base']};
    position: relative;
    margin-top: 40px;
    ${theme.breakpoints.down('xxl')} {
      border-radius: ${theme.borderRadius['xxl']};
    }
    ${theme.breakpoints.down('xl')} {
      border-radius: ${theme.borderRadius['xl']};
    }
    ${theme.breakpoints.down('lg')} {
      border-radius: ${theme.borderRadius['lg']};
    }
    ${theme.breakpoints.down('sm')} {
      border-radius: ${theme.borderRadius['sm']};
    }
    div{
      position: relative;
      img{
        object-fit: cover;
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  .MuiButtonBase-root {
    margin-top: 20px;
    display: inline-flex;
  }
  a{
    color: rgba(255, 255, 255, .85);
    display: inline;
    svg{
      vertical-align: middle;
      display: inline-block;
      margin-top: -5px;
    }
  }

  ol, ul {
    padding-left: 0;
    li{
      padding-left: 30px;
      position: relative;
      p {
        margin-top: 0;
        margin-bottom: 0;
      }
      &:before {
        position: absolute;
        
      }
    }
  }
  ol{
    list-style: none;
    counter-reset: my-awesome-counter;
    li{
      counter-increment: my-awesome-counter;
      &:before{
        left: 5px;
        content: counter(my-awesome-counter) ". ";
        color: ${theme.palette.primary.main};
      }
    }
  }
  ul {
    li {
      list-style-type: none;
      &:before {
        content: '';
        left: 0;
        display: block;
        top: 15px;
        width: 14px;
        height: 1.5px;
        background-color: ${theme.palette.primary.main};
      }
    }
  }

  h1 {
    font-size: 40px;
    ${theme.breakpoints.down('xxl')} {
      font-size: 30px;
      line-height: 1.25;
    }
    ${theme.breakpoints.down('xl')} {
      font-size: 27px;
      line-height: 1.25;
    }
    ${theme.breakpoints.down('lg')} {
      font-size: 25px;
      line-height: 1.25;
    }
    ${theme.breakpoints.down('md')} {
      font-size: 23px;
      line-height: 1.25;
    }
    ${theme.breakpoints.down('sm')} {
      font-size: 22px;
      line-height: 1.25;
    }
  }
  h2 {
    font-size: 30px;
    ${theme.breakpoints.down('xxl')} {
      font-size: 23px;
      line-height: 1.25;
    }
    ${theme.breakpoints.down('xl')} {
      font-size: 21px;
      line-height: 1.25;
    }
    ${theme.breakpoints.down('lg')} {
      font-size: 20px;
      line-height: 1.25;
    }
    ${theme.breakpoints.down('md')} {
      font-size: 18px;
      line-height: 1.25;
    }
    ${theme.breakpoints.down('sm')} {
      font-size: 17px;
      line-height: 1.25;
    }
  }
  h3 {
    font-size: 24px;
    ${theme.breakpoints.down('xxl')} {
      font-size: 19px;
      line-height: 1.25;
    }
    ${theme.breakpoints.down('xl')} {
      font-size: 18px;
      line-height: 1.25;
    }
    ${theme.breakpoints.down('lg')} {
      font-size: 18px;
      line-height: 1.25;
    }
    ${theme.breakpoints.down('md')} {
      font-size: 16px;
      line-height: 1.25;
    }
    ${theme.breakpoints.down('sm')} {
      font-size: 15px;
      line-height: 1.25;
    }
  }
  h4 {
    font-size: 19px;
    ${theme.breakpoints.down('xxl')} {
      font-size: 17px;
      line-height: 1.25;
    }
    ${theme.breakpoints.down('lg')} {
      font-size: 16px;
      line-height: 1.25;
    }
    ${theme.breakpoints.down('md')} {
      font-size: 14px;
      line-height: 1.25;
    }
    ${theme.breakpoints.down('sm')} {
      font-size: 13px;
      line-height: 1.25;
    }
  }
  
  h1, h2, h3, h4, h5 {
    margin-top: 40px;
    color: white;
    line-height: 1.25;
    font-family: ${theme.typography.fontFamily};
    font-weight: 700;
    &::selection {
      background-color: ${theme.palette.primary.main};
    }
  }
`)