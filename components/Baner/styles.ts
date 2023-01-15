import styled from "@emotion/styled";
import Link from "next/link";

export const BannerS = styled(Link)(({theme}) => `
  display: block;
  height: 100%;
  min-height: 300px;
  position: relative;
  &:hover{
    .img-wrap {
      transform: scale(.98);
      .img-art{
        height: 101%;
        width: 101%;
      }
    }
  }
  .img-wrap{
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
    .img-art{
      background-size: cover;
      height: 110%;
      width: 110%;
      left: 50%;
      top: 50%;
      position: absolute;
      z-index: -2;
      transform: translate(-50%, -50%);
      transition: all .7s ease;
    }
  }
`)