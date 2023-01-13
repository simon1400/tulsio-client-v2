import styled from '@emotion/styled'
import Link from 'next/link'

export const ArticleWrap = styled(Link)<{background: string; color: string;}>(({background, color}) => `
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
    border-radius: 60px;
    overflow: hidden;
    display: block;
    position: absolute;
    z-index: -1;
    transform: scale(1);
    transition: all .4s ease-in-out;
    .img-art{
      background-size: cover;
      height: 110%;
      width: 110%;
      left: 50%;
      top: 50%;
      position: absolute;
      z-index: -2;
      mix-blend-mode: luminosity;
      opacity: .7;
      transform: translate(-50%, -50%);
      transition: all .7s ease;
    }
  }
  .content-wrap-art{
    height: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 2;
    @media(max-width: 960px) {
      padding: 15px;
      h1{
        line-height: 1.25;
        margin-bottom: 15px;
      }
    }
  }
  h1{
    font-size: clamp(1em,  2.5em, 3em);
    line-height: 1.25;
    margin-top: 0;
    margin-bottom: 40px;
  }
  h2{
    font-size: 1.875em;
    margin-top: 0;
    line-height: 1.27;
  }
  
  .article-short-content{
    font-size: 1.1875em;
    line-height: 1.84;
  }
  .label-wrap{
    margin-bottom: -8px;
    display: flex;
    flex-wrap: wrap;
  }
`)