import styled from "@emotion/styled";

export const RelatedS = styled.div<{reverse: boolean}>(({theme, reverse}) => `
  display: flex;
  flex-direction: ${reverse ? "row-reverse" : "row"};
  background: #4545ff;
  overflow: hidden;
  margin-bottom: 20px;
  border-radius: ${theme.borderRadius['base']};
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
    flex-direction: column-reverse;
    .img-wrap{
      height: 280px;
      width: 100%;
    }
    > div {
      width: 100%;
    }
    .content-wrap{
      width: 100%;
    }
  }
  > div {
    width: 50%;
  }
  .content-wrap{
    padding: 40px;
    h3{
      margin-bottom: 20px;
    }
  }
  .img-wrap{
    position: relative;
    img{
      position: absolute;
      object-fit: cover;
      width: 100%;
      height: 100%;
      object-position: center;
      opacity: .7;
    }
  }
`)