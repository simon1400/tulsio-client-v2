import styled from "@emotion/styled";
import Link from "next/link";

export const BannerS = styled(Link)(({theme}) => `
  display: block!important;
  height: auto;
  width: 100%;
  color: white;
  text-decoration: none;
  .img-wrap{
    height: auto;
    width: 100%;
    border-radius: ${theme.borderRadius['base']};
    overflow: hidden;
    display: block;
    position: relative;
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
      position: relative!important;
      width: 100%;
      height: 100%;
      display: block;
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