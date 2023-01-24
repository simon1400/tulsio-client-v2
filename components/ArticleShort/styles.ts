import styled from '@emotion/styled'
import Link from 'next/link'

export const ArticleWrap = styled(Link)<{background: string; color: string;}>(({background, color, theme}) => `
  display: block;
  height: 100%;
  color: ${color};
  text-decoration: none;
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
    background: ${background};
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
      background-position: center;
      height: 110%;
      width: 110%;
      left: 50%;
      top: 50%;
      position: absolute;
      z-index: -2;
      mix-blend-mode: luminosity;
      opacity: .4;
      transform: translate(-50%, -50%);
      transition: all .7s ease;
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
  }
  h1{
    margin-top: 0;
    margin-bottom: 40px;
    color: ${color};
  }
  h2{
    margin-top: 0;
    margin-bottom: 20px;
    color: ${color};
  }
  p{
    color: ${color+'d9'};
  }
  .label-wrap{
    margin-bottom: -8px;
    display: flex;
    flex-wrap: wrap;
  }
`)