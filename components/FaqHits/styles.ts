import styled from "@emotion/styled";

export const FaqHitsS = styled.div(({theme}) => `
  background: #2b2b2b;
  overflow: hidden;
  border-radius: ${theme.borderRadius['base']};
  padding: 20px 40px;
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
`)