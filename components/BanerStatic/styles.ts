import styled from "@emotion/styled";
import Link from "next/link";

export const BannerS = styled(Link)(({theme}) => `
  display: block!important;
  height: auto;
  width: 100%;
  color: white;
  position: relative;
  text-decoration: none;
  &:hover{
    .img-wrap {
      transform: scale(.98);
    }
  }
  .img-wrap{
    height: auto;
    width: 100%;
    background: transparent;
    border-radius: ${theme.borderRadius['base']};
    overflow: hidden;
    display: block;
    position: static;
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
    img{
      position: static!important;
      display: block;
      object-fit: cover;
      object-position: center;
    }
  }
  .content-wrap-art{
    height: 100%;
    padding: ${theme.globalPadding['xl']};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    ${theme.breakpoints.down('md')} {
      padding: ${theme.globalPadding['lg']};
    }
    ${theme.breakpoints.down('sm')} {
      padding: ${theme.globalPadding['md']};
    }
    h2{
      margin-top: 0;
      margin-bottom: 20px;
      color: black;
    }
    .label-wrap{
      margin-bottom: -8px;
      display: flex;
      flex-wrap: wrap;
    }
  }
`)