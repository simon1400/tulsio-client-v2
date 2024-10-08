import styled from '@emotion/styled'

export const ContentS = styled.div<{ removePadding: boolean; smallPadding: boolean }>(
  ({ theme, removePadding, smallPadding }) => `
  color: rgba(255, 255, 255, .85);
  padding: ${removePadding ? '0' : smallPadding ? '50px 0 100px' : '100px 0'};
  figure {
    display: block;
    margin: 0;
    overflow: hidden;
    border-radius: ${theme.borderRadius.base};
    position: relative;
    margin-top: 40px;
    ${theme.breakpoints.down('xxl')} {
      border-radius: ${theme.borderRadius.xxl};
    }
    ${theme.breakpoints.down('xl')} {
      border-radius: ${theme.borderRadius.xl};
    }
    ${theme.breakpoints.down('lg')} {
      border-radius: ${theme.borderRadius.lg};
    }
    ${theme.breakpoints.down('sm')} {
      border-radius: ${theme.borderRadius.sm};
    }
    div{
      position: relative;
      img, iframe{
        object-fit: cover;
        width: 100%;
        height: 100%;
        display: block;
        position: relative!important;
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
        top: 17px;
        width: 14px;
        height: 3.2px;
        border-radius: 10px;
        background-color: ${theme.palette.primary.main};
        ${theme.breakpoints.down('md')} {
          top: 14px;
        }
      }
    }
  }

  h1 {
    font-size: 32px;
    ${theme.breakpoints.down('xxl')} {
      font-size: 28px;
    }
    ${theme.breakpoints.down('lg')} {
      font-size: 27px;
    }
    ${theme.breakpoints.down('md')} {
      font-size: 23px;
    }
  }
  h2 {
    font-size: 28px;
    ${theme.breakpoints.down('xxl')} {
      font-size: 25px;
    }
    ${theme.breakpoints.down('lg')} {
      font-size: 24px;
    }
    ${theme.breakpoints.down('md')} {
      font-size: 21px;
    }
  }
  h3 {
    font-size: 24px;
    ${theme.breakpoints.down('xxl')} {
      font-size: 22px;
    }
    ${theme.breakpoints.down('lg')} {
      font-size: 21px;
    }
    ${theme.breakpoints.down('md')} {
      font-size: 19px;
    }
  }
  h4 {
    font-size: 20px;
    ${theme.breakpoints.down('xxl')} {
      font-size: 19px;
    }
    ${theme.breakpoints.down('lg')} {
      font-size: 18px;
    }
    ${theme.breakpoints.down('md')} {
      font-size: 17px;
    }
  }
  
  h1, h2, h3, h4, h5 {
    margin-top: 40px;
    color: ${theme.palette.text.secondary};
    line-height: 1.25;
    font-family: ${theme.typography.fontFamily};
    font-weight: 700;
    &::selection {
      background-color: ${theme.palette.primary.main};
    }
  }

  blockquote{
    margin: 0;
    padding-top: 13px;
    padding-bottom: 13px;
    padding-left: 31px;
    position: relative;
    &:before{
      content: '';
      display: block;
      background-color: ${theme.palette.primary.main};
      width: 5px;
      height: 100%;
      left: 0;
      top: 0;
      position: absolute;
      border-radius: 10px;
    }
    ${theme.breakpoints.down('md')} {
      padding-top: 3px;
      padding-bottom: 3px;
    }
  }

  figure.media{
    iframe{
      width: 100%;
      aspect-ratio: 16 / 9;
    }
  }
`,
)
