import styled from "@emotion/styled";
import Link from "next/link";

export const GridButtonS = styled(Link)(({theme}) => `
  display: flex;
  height: 100%;
  position: relative;
  overflow: hidden;
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
    position: relative;
    overflow: hidden;
    z-index: 2;
    display: flex;
    padding: 0;
    text-align: center;
    .marquee {
      position: absolute;
      display: flex;
      overflow: hidden;
      height: 100%;
    }

    .marquee__content {
      display: flex;
      height: 100%;
      margin: 0;
      padding-left: 0;
      align-items: center;
      animation: scroll 10s linear infinite;
      li{
        font-size: 50px;
        white-space: nowrap;
        list-style-type: none;
        line-height: 1.2;
        color: white;
        font-weight: 600;
      }
    }

    @keyframes scroll {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-100%);
      }
    }
  }
`)