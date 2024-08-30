import styled from "@emotion/styled";
import Link from "next/link";

export const PodcastLinkS = styled.link(({theme}) => `
  ul{
    margin: 0;
    padding-left: 0;
    display: block;
    li{
      display: inline-block;
      list-style-type: none;
      &:not(:first-of-type) {
        margin-left: 5px;
      }
      &:not(:last-of-type) {
        margin-right: 5px;
      }
    }
  }
`)

export const LinkS = styled(Link)`
  transition: all .2s ease;
  img{
    margin: auto;
  }
  &:hover::before {
    content: "";
    position: absolute;
    top: -10px; 
    left: -10px; 
    width: 54px;
    height: 54px;
    background-image: url('/img/links-bg.svg');
    background-size: cover;
    background-color: rgb(37, 37, 37); 
    border-radius: 50%;
    z-index: -1; 
  }

`