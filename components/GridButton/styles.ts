import styled from "@emotion/styled";
import Link from "next/link";

export const GridButtonS = styled(Link)(({theme}) => `
  display: flex;
  height: 100%;
  /* min-height: 300px; */
  position: relative;
  text-decoration: none;
  &:hover{
    .img-wrap {
      transform: scale(.98);
    }
  }
  .img-wrap{
    background: #2b2b2b;
    height: 100%;
    width: 100%;
    border-radius: ${theme.borderRadius['base']};
    overflow: hidden;
    display: block;
    position: absolute;
    z-index: -1;
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
    padding: 40px;
    display: flex;
    position: relative;
    overflow: hidden;
    z-index: 2;
    text-align: center;
    ${theme.breakpoints.down('sm')} {
      padding: 15px;
    }
    h2{
      font-size: 50px;
      word-break: break-word;
      display: block;
      margin: auto;
      line-height: 1.2;
    }
  }
`)