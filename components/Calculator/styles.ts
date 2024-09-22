import styled from "@emotion/styled";
import { Tabs } from "@mui/material";

export const CalculatorS = styled.div<{embed?: string}>(({theme, embed = ''}) => `
  background-color: ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  .wrap-tabs{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 35px;
    gap: 10px;
  }
  .calcul-input-head{
    font-size: 16px;
    margin-bottom: 11px;
  }
  ${!embed.length && `
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
  `}
  
  ${theme.breakpoints.down('md')} {
    padding: 20px;
    .calcul-input-head{
      font-size: 12px!important;
      margin-bottom: 11px;
    }
  }
  ${theme.breakpoints.down('sm')} {
    border-radius: ${theme.borderRadius['sm']};
  }
  
`)

export const TabsS = styled(Tabs)(({theme}) => `

  > div{
    height: 40px;
    border-radius: 31px;
    background-color: rgba(255, 255, 255, 0.08);
    padding: 4px;
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
    height: 33px;
    padding: 0 20px;
    z-index: 1;
    bottom: 4px;
  }
  button{
    font-size: 16px;
    padding: 8px 18px;
    height: 30px;
    min-height: 30px;
    min-width: 0;
    display: block;
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
  ${theme.breakpoints.down('sm')} {
    margin-bottom: 10px;
    button{
      height: 25px;
      min-height: 25px;
    }
    .MuiTabs-indicator{
      height: 30px;
      bottom: 6px;
    }
  }
`)


export const ResultCalculate = styled.div<{delay: number; animation: boolean;}>(({theme, delay, animation}) => `
  padding-top: 35px;
  
  svg{
    margin-bottom: 0px;
    animation: bounce 1.5s ease infinite;
    animation-play-state: ${animation ? "running" : "paused"};
    animation-delay: ${delay}s;
  }
  span{
    font-size: 19px;
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
  ${theme.breakpoints.down('sm')} {
    margin-bottom: 0px;
    span{
      font-size: 14px;
    }
  }
`)

export const BottomButtons = styled.div(({theme}) => `
    display: flex;
    flex-wrap: wrap;
    margin-top: 65px;
    justify-content: center;
    align-items: center;
    gap: 25px;
    >* {
      display: flex;
      align-items: center;
      font-size: 13px;
      color: rgba(255, 255, 255, 0.55);
      text-decoration: none;
      cursor: pointer;
      svg{
        margin-right: 5px;
      }
    }
`)
export const InputsBlockWrap = styled.div(({theme}) => `
    display: flex;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 40px;
    align-items: center;
    justify-content: space-around;
    gap: 25px;
    > div > div {
      max-width: 100%;
    }
`)

export const EmbedHeader = styled.div(({theme}) => `
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 50px;
    .embed-logo{
      img{
        width: 150px!important;
      }
    }
`)