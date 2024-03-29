import styled from "@emotion/styled";

export const BlockValueS = styled.div<{center?: boolean; focus: boolean;}>(({theme, center, focus}) => `
  display: inline-block;
  ${center ? `margin-left: auto; margin-right: auto;` : ""}
  border-radius: 11px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  padding: 14px 12px;
  height: 40px;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  max-width: 100px;
  background-color: rgba(255, 255, 255, 0.08);
  transition: all .2s ease;
  outline: 2px solid ${focus ? theme.palette.primary.main : "rgba(255, 255, 255, 0.08)"};
  &:hover{
    outline: 2px solid ${focus ? theme.palette.primary.main : "rgba(255, 255, 255, 0.2)"};
  }
  input{
    border: none;
    padding: 0;
    font-size: 16px;
    font-weight: 600;
    color: white;
    width: 100%;
    background: transparent;
    outline: none;
    font-family: 'Manrope';
    font-weight: bold;
  }
  span{
    opacity: .6;
    font-size: 14px;
    padding-top: 0px;
  }
  ${theme.breakpoints.down('md')} {
    height: 33px;
    padding: 6px 9px;
    max-width: 90px;
    border-radius: 6px;
    input{
      font-size: 14px;
    }
  }
`)