import styled from "@emotion/styled";

interface ArticleTopProps {
  background: string; 
  color: string;
  height?: number;
}

export const ArticleTopS = styled.div<ArticleTopProps>(({theme, background, color}) => `
  position: relative;
  overflow: hidden;
  min-height: 70vh;
  display: flex;
  width: 100%;
  align-items: center;
  transition: none;
  background: ${background};
  img, video {
    position: absolute;
    object-fit: cover;
    object-position: center;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    opacity: 0.4;
    mix-blend-mode: luminosity;
  }
  video{
    mix-blend-mode: normal;
  }
  .MuiButtonBase-root{
    z-index: 2;
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    svg{
      fill: white;
    }
    ${theme.breakpoints.down('sm')} {
      display: none;
    }
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


export const AnimationWrapArticle = styled.div(({theme}) => `
  min-height: 70vh;
  display: flex;
  margin-bottom: -50px;
  width: calc(100% - ${theme.globalGap['xxl']} - ${theme.globalGap['xxl']});
  border-radius: ${theme.borderRadius['base']};
  margin-left: ${theme.globalGap['xxl']};
  margin-right: ${theme.globalGap['xxl']};
  overflow: hidden;
  ${theme.breakpoints.down('xl')} {
    border-radius: ${theme.borderRadius['xl']};
    margin-left: ${theme.globalGap['xl']};
    margin-right: ${theme.globalGap['xl']};
    width: calc(100% - ${theme.globalGap['xl']} - ${theme.globalGap['xl']});
  }
  ${theme.breakpoints.down('lg')} {
    border-radius: ${theme.borderRadius['lg']};
    margin-left: ${theme.globalGap['lg']};
    margin-right: ${theme.globalGap['lg']};
    width: calc(100% - ${theme.globalGap['lg']} - ${theme.globalGap['lg']});
  }
  ${theme.breakpoints.down('md')} {
    margin-left: ${theme.globalGap['md']};
    margin-right: ${theme.globalGap['md']};
    width: calc(100% - ${theme.globalGap['md']} - ${theme.globalGap['md']});
  }
  ${theme.breakpoints.down('sm')} {
    border-radius: ${theme.borderRadius['sm']};
    margin-left: ${theme.globalGap['sm']};
    margin-right: ${theme.globalGap['sm']};
    width: calc(100% - ${theme.globalGap['sm']} - ${theme.globalGap['sm']});
  }
`)