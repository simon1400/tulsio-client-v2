import styled from "@emotion/styled";
import { Tabs } from "@mui/material";

export const CalculatorS = styled.div(({theme}) => `
  background-color: rgba(255, 255, 255, 0.1);
  padding: 75px;
  border-radius: ${theme.borderRadius['base']};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  ${theme.breakpoints.down('xxl')} {
    border-radius: ${theme.borderRadius['xxl']};
  }
  ${theme.breakpoints.down('xl')} {
    border-radius: ${theme.borderRadius['xl']};
  }
  ${theme.breakpoints.down('lg')} {
    border-radius: ${theme.borderRadius['lg']};
  }
  ${theme.breakpoints.down('md')} {
    padding: 20px;
    .calcul-input-head{
      font-size: 12px;
      margin-bottom: 11px;
    }
  }
  ${theme.breakpoints.down('sm')} {
    border-radius: ${theme.borderRadius['sm']};
  }
  
`)

export const TabsS = styled(Tabs)(({theme}) => `
  margin-bottom: 75px;
  > div{
    height: 62px;
    border-radius: 31px;
    background-color: rgba(255, 255, 255, 0.08);
    padding: 6px;
  }
  
  button{
    color: white;
    position: relative;
    z-index: 2;
    font-weight: 600;
    text-transform: none;
    font-size: 20px;
    opacity: .6;
    line-height: 1;
    font-family: ${theme.typography.fontFamily};
    transition: all .2s ease;
    &:hover{
      opacity: 1;
    }
    &.Mui-selected{
      color: white;
      opacity: 1;
    }
  }
  .MuiTabs-indicator{
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #4545ff;
    border-radius: 25px;
    height: 50px;
    padding: 0 20px;
    z-index: 1;
    bottom: 6px;
  }
  ${theme.breakpoints.down('md')} {
    margin-bottom: 40px;
    > div{
      height: 40px;
      padding: 6px;
    }
    .MuiTabs-indicator{
      height: 30px;
    }
    button{
      font-size: 14px;
      padding: 6px 18px;
      height: 30px;
      display: block;
    }
  }
`)


export const ResultCalculate = styled.div<{delay: number; animation: boolean;}>(({theme, delay, animation}) => `
  padding-top: 35px;
  
  svg{
    margin-bottom: 10px;
    ${animation ? "animation: bounce 1.5s ease finite;" : ""}
    animation-delay: ${delay}s;
  }
  span{
    font-size: 24px;
    font-weight: 700;
  }
  @keyframes bounce {
    70% { transform:translateY(0%); }
    80% { transform:translateY(-20%); }
    90% { transform:translateY(0%); }
    95% { transform:translateY(-10%); }
    97% { transform:translateY(0%); }
    99% { transform:translateY(-6%); }
    100% { transform:translateY(0); }
  }
  ${theme.breakpoints.down('md')} {
    margin-bottom: 50px;
    padding-top: 25px;
    span{
      font-size: 17px;
    }
  }
`)