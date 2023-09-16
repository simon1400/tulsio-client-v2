import styled from "@emotion/styled";

export const BlockValueS = styled.div(({theme}) => `
  display: inline-block;
  border-radius: 11px;
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
  padding: 14px 12px;
  height: 50px;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  max-width: 150px;
  background-color: rgba(255, 255, 255, 0.08);
  input{
    border: none;
    padding: 0;
    font-size: 20px;
    font-weight: 600;
    color: white;
    width: 100%;
    background: transparent;
    outline: none;
  }
`)