import styled from '@emotion/styled'
import Link from 'next/link'

export const ArticleWrap = styled(Link)<{background?: string;}>(({background}) => `
  padding: 40px;
  display: block;
  height: 100%;
  background: ${background};
  border-radius: 60px;
  color: white;
  overflow: hidden;
  text-decoration: none;
  position: relative;
  .content-wrap-art{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    z-index: 2;
  }
  h2{
    font-size: 40px;
    line-height: 1.25;
    margin-top: 0;
    margin-bottom: 40px;
  }
  h3{
    font-size: 30px;
    margin-top: 0;
    line-height: 1.27;
  }
  .img-wrap-back{
    position: absolute;
    background-size: cover;
    height: 100%;
    width: 100%;
    z-index: 1;
    left: 0;
    top: 0;
    mix-blend-mode: screen;
  }
  .article-short-content{
    font-size: 19px;
    line-height: 1.84;
  }
  .label-wrap{
    margin-bottom: -8px;
    display: flex;
    flex-wrap: wrap;
  }
  .label{
    border-radius: 16px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, .2);
    color: rgba(32, 32, 32, 0.7);
    font-size: 15px;
    padding: 3px 15px;
    font-weight: 600;
    white-space: nowrap;
    margin-bottom: 8px;
    &:not(:last-child) {
      margin-right: 8px;
    }
  }
`)