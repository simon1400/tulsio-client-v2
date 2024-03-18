import styled from "@emotion/styled";

export const CategoryDescriptionS = styled.div<{staticBlock?: boolean; removeHover?: boolean}>(({theme, staticBlock = false, removeHover = false}) => `
  height: 100%;
  position: relative;
  overflow: hidden;
  &:hover{
    .img-wrap {
      transform: scale(${removeHover ? '1' : '.98'});
    }
  }
  .img-wrap{
    
    ${staticBlock ? "background-image: linear-gradient(138deg, #a50d5a, #4545ff 100%);" : "background: rgba(255, 255, 255, 0.1);"}
    height: 100%;
    width: 100%;
    border-radius: ${theme.borderRadius['base']};
    overflow: hidden;
    display: block;
    position: absolute;
    transform: scale(1);
    transition: all .4s ease-in-out;
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
  }
  .content-wrap-art{
    height: 100%;
    width: 100%;
    position: relative;
    padding: 40px;
  }
`)