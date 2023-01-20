import styled from "@emotion/styled";

export const AlphabetWrap = styled.div(({theme}) => `
  margin-bottom: ${theme.globalGap['xxl']};
  ${theme.breakpoints.down('xl')} {
    margin-bottom: ${theme.globalGap['xl']};
  }
  ${theme.breakpoints.down('lg')} {
    margin-bottom: ${theme.globalGap['lg']};
  }
  ${theme.breakpoints.down('sm')} {
    margin-bottom: ${theme.globalGap['sm']};
  }
  h2{
    margin-bottom: 30px;
  }
  img{
    margin-bottom: 20px;
  }
`)

export const DictionaryHitsS = styled.section(({theme}) => `
  padding-left: ${theme.globalGap['xxl']};
  padding-right: ${theme.globalGap['xxl']};
  ${theme.breakpoints.down('xl')} {
    padding-left: ${theme.globalGap['xl']};
    padding-right: ${theme.globalGap['xl']};
  }
  ${theme.breakpoints.down('lg')} {
    padding-left: ${theme.globalGap['lg']};
    padding-right: ${theme.globalGap['lg']};
  }
  ${theme.breakpoints.down('sm')} {
    padding-left: ${theme.globalGap['sm']};
    padding-right: ${theme.globalGap['sm']};
  }
`)

export const Box = styled.div(({theme}) => `
  border-radius: ${theme.borderRadius['base']};
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.05);
  border: solid 1px rgba(0, 0, 0, 0.1);
  background-color: rgba(255,255,255, .07);
  padding: 40px;
  color: #eee;
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
    padding: 15px;
  }
`)