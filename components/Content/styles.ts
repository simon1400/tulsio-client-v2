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
      }
    }
  }
  ul {
    padding-left: 0;
    li {
      list-style-type: none;
      padding-left: 30px;
      position: relative;
      p {
        margin-top: 0;
        margin-bottom: 0;
      }
      &:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 15px;
        width: 14px;
        height: 1.5px;
        background-color: ${theme.palette.primary.main};
      }
    }
  }
`)