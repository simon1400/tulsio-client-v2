import styled from "@emotion/styled";

export const ArticleTopS = styled.div<{background: string; color: string;}>(({theme, background, color}) => `
  position: relative;
  border-radius: ${theme.borderRadius['base']};
  overflow: hidden;
  padding: 240px 200px;
  background: ${background};
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
  img {
    position: absolute;
    object-fit: cover;
    object-position: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    z-index: 1;
    opacity: 0.4;
    mix-blend-mode: luminosity;
  }
  h1{
    position: relative;
    font-size: 60px;
    line-height: 1.15;
    z-index: 2;
    margin-bottom: 30px;
    color: ${color};
    ${theme.breakpoints.down('xxl')} {
      font-size: 50px;
      line-height: 1.14;
    }
    ${theme.breakpoints.down('xl')} {
      font-size: 45px;
      line-height: 1.13;
    }
    ${theme.breakpoints.down('lg')} {
      font-size: 36px;
      line-height: 1.14;
    }
    ${theme.breakpoints.down('md')} {
      font-size: 32px;
      line-height: 1.13;
    }
    ${theme.breakpoints.down('sm')} {
      font-size: 28px;
      line-height: 1.18;
    }
  }
  label{
    position: relative;
    z-index: 2;
  }
`)